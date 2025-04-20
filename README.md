# Specd - Social Platform for Car Enthusiasts

Specd is a social platform designed for car enthusiasts to share their custom builds, modifications, and help others make informed decisions about their vehicles.

## Overview

This platform allows users to:
- Create profiles and showcase their vehicles in a personal garage
- Document modifications with details, images, and installation notes
- Share posts about their builds similar to Instagram
- Explore other builds filtered by make, model, and modifications
- Connect with fellow car enthusiasts

## Tech Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Supabase Auth
- **Storage**: Cloudinary for media uploads

## Project Structure

```
/specd-app
├── frontend/       (Next.js application)
├── backend/        (Express API server)
├── prisma/         (Database schema and migrations)
├── .env.example    (Environment variables template)
└── README.md       (This file)
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/specd-app.git
   cd specd-app
   ```

2. Install dependencies:
   ```
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   ```
   # Copy the example env files
   cp .env.example frontend/.env.local
   cp .env.example backend/.env
   ```
   
4. Update the environment variables with your own credentials

5. Set up the database:
   ```
   cd ../
   npx prisma migrate dev
   npx prisma db seed
   ```

6. Start the development servers:
   ```
   # In one terminal
   cd frontend
   npm run dev
   
   # In another terminal
   cd backend
   npm run dev
   ```

## Features

### MVP Features
- Authentication (sign up, login)
- User profiles with avatar, bio, location
- Garage for managing vehicles and modifications
- Post system with images/videos and comments
- Explore page to discover other builds

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 