// User Types
export interface User {
  id: string;
  email: string;
  username: string;
  name?: string;
  bio?: string;
  location?: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfileWithCounts extends Omit<User, 'email' | 'updatedAt'> {
  _count: {
    cars: number;
    posts: number;
    followers: number;
    following: number;
  };
}

// Car Types
export interface Car {
  id: string;
  userId: string;
  make: string;
  model: string;
  year: number;
  trim?: string;
  color?: string;
  horsepower?: number;
  torque?: number;
  topSpeed?: number;
  mpg?: number;
  description?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CarWithCounts extends Car {
  _count: {
    mods: number;
    posts: number;
  };
}

// Mod Types
export interface Mod {
  id: string;
  carId: string;
  title: string;
  type: string;
  description?: string;
  vendor?: string;
  price?: number;
  installDate?: Date;
  installNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ModImage {
  id: string;
  modId: string;
  url: string;
  caption?: string;
  createdAt: Date;
}

export interface ModWithImages extends Mod {
  images: ModImage[];
}

// Post Types
export interface Post {
  id: string;
  userId: string;
  carId?: string;
  modId?: string;
  content?: string;
  imageUrl?: string;
  videoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  userId: string;
  postId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: Pick<User, 'id' | 'username' | 'name' | 'avatarUrl'>;
}

export interface Like {
  id: string;
  userId: string;
  postId: string;
  createdAt: Date;
}

export interface PostWithDetails extends Post {
  user: Pick<User, 'id' | 'username' | 'name' | 'avatarUrl'>;
  car?: Pick<Car, 'id' | 'make' | 'model' | 'year'>;
  mod?: Pick<Mod, 'id' | 'title' | 'type'>;
  tags: Tag[];
  comments?: Comment[];
  likes?: Like[];
  _count: {
    comments: number;
    likes: number;
  };
}

// Auth Types
export interface AuthResponse {
  message: string;
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  username: string;
  name?: string;
} 