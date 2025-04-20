import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';

const router = express.Router();
const prisma = new PrismaClient();

// Register a new user
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req: Request, res: Response) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, username, password, name } = req.body;

      // Check if user already exists
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            { email },
            { username },
          ],
        },
      });

      if (existingUser) {
        return res.status(400).json({
          message: 'User with this email or username already exists',
        });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const newUser = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
          name: name || null,
        },
      });

      // Generate JWT
      const token = jwt.sign(
        { id: newUser.id },
        process.env.JWT_SECRET || 'your-super-secret-jwt-token',
        { expiresIn: process.env.JWT_EXPIRATION || '24h' }
      );

      // Return user data without password
      const { password: _, ...userData } = newUser;
      return res.status(201).json({
        message: 'User registered successfully',
        user: userData,
        token,
      });
    } catch (error) {
      console.error('Registration error:', error);
      return res.status(500).json({
        message: 'Server error during registration',
      });
    }
  }
);

// Login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').exists().withMessage('Password is required'),
  ],
  async (req: Request, res: Response) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user || !user.password) {
        return res.status(401).json({
          message: 'Invalid credentials',
        });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          message: 'Invalid credentials',
        });
      }

      // Generate JWT
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET || 'your-super-secret-jwt-token',
        { expiresIn: process.env.JWT_EXPIRATION || '24h' }
      );

      // Return user data without password
      const { password: _, ...userData } = user;
      return res.status(200).json({
        message: 'Login successful',
        user: userData,
        token,
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({
        message: 'Server error during login',
      });
    }
  }
);

export default router; 