'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // In a real app, this would call your API
      console.log('Signing up with:', formData);
      
      // Simulate API call
      setTimeout(() => {
        // Success! Redirect to login
        router.push('/login');
      }, 1500);
    } catch (err) {
      setError('An error occurred during sign up. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side (form) */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-secondary-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-secondary-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-8">
            {error && (
              <div className="rounded-md bg-red-50 p-4 mb-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-secondary-700">
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="input"
                      placeholder="Choose a username"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                    Name (optional)
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-secondary-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="input"
                      placeholder="Create a password"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary w-full flex justify-center py-3"
                  >
                    {isLoading ? 'Creating Account...' : 'Sign Up'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right side (image) */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900">
          <div className="absolute inset-0 opacity-60">
            <Image
              src="https://cdn.bmwblog.com/wp-content/uploads/2015/05/Alpine-White-BMW-M3-Image-1.jpg"
              alt="Car community"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-12 bg-black bg-opacity-40">
            <div className="max-w-md text-center">
              <h2 className="text-white text-3xl font-bold mb-6">Join the Specd Community</h2>
              <p className="text-white text-lg mb-8">
                Connect with car enthusiasts, showcase your builds, and discover new modifications for your next project.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-white text-xl font-bold">10k+</div>
                  <div className="text-white text-sm">Car Builds</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-white text-xl font-bold">50k+</div>
                  <div className="text-white text-sm">Modifications</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-white text-xl font-bold">25k+</div>
                  <div className="text-white text-sm">Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 