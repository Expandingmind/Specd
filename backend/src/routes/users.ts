import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

// Get the current user's profile
router.get('/me', authenticate, async (req: Request, res: Response) => {
  try {
    // User is already loaded by authentication middleware
    res.status(200).json({ user: req.user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a user by username
router.get('/:username', async (req: Request, res: Response) => {
  try {
    const username = req.params.username;

    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        name: true,
        bio: true,
        location: true,
        avatarUrl: true,
        createdAt: true,
        _count: {
          select: {
            cars: true,
            posts: true,
            followers: true,
            following: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update current user's profile
router.put('/me', authenticate, async (req: Request, res: Response) => {
  try {
    const { name, bio, location } = req.body;
    const userId = req.user.id;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: name || undefined,
        bio: bio || undefined,
        location: location || undefined,
      },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        bio: true,
        location: true,
        avatarUrl: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's cars
router.get('/:username/cars', async (req: Request, res: Response) => {
  try {
    const username = req.params.username;

    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cars = await prisma.car.findMany({
      where: { userId: user.id },
      include: {
        _count: {
          select: {
            mods: true,
            posts: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ cars });
  } catch (error) {
    console.error('Error fetching user cars:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's posts
router.get('/:username/posts', async (req: Request, res: Response) => {
  try {
    const username = req.params.username;

    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const posts = await prisma.post.findMany({
      where: { userId: user.id },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            name: true,
            avatarUrl: true,
          },
        },
        car: {
          select: {
            id: true,
            make: true,
            model: true,
            year: true,
          },
        },
        mod: {
          select: {
            id: true,
            title: true,
            type: true,
          },
        },
        tags: true,
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Follow a user
router.post('/follow/:username', authenticate, async (req: Request, res: Response) => {
  try {
    const followerId = req.user.id;
    const username = req.params.username;

    // Find the user to follow
    const userToFollow = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });

    if (!userToFollow) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if already following
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId,
        followingId: userToFollow.id,
      },
    });

    if (existingFollow) {
      return res.status(400).json({ message: 'Already following this user' });
    }

    // Create follow relationship
    await prisma.follow.create({
      data: {
        followerId,
        followingId: userToFollow.id,
      },
    });

    res.status(201).json({ message: 'User followed successfully' });
  } catch (error) {
    console.error('Error following user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Unfollow a user
router.delete('/unfollow/:username', authenticate, async (req: Request, res: Response) => {
  try {
    const followerId = req.user.id;
    const username = req.params.username;

    // Find the user to unfollow
    const userToUnfollow = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });

    if (!userToUnfollow) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete follow relationship
    await prisma.follow.deleteMany({
      where: {
        followerId,
        followingId: userToUnfollow.id,
      },
    });

    res.status(200).json({ message: 'User unfollowed successfully' });
  } catch (error) {
    console.error('Error unfollowing user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 