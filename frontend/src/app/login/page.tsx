'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      console.log('Logging in with:', formData);
      
      // Simulate API call
      setTimeout(() => {
        // Success! Redirect to dashboard
        router.push('/dashboard');
      }, 1500);
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side (image) */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900">
          <div className="absolute inset-0 opacity-60">
            <Image
              src="https://www.motortrend.com/uploads/sites/21/2020/10/Nissan-240SX-Lead.jpg"
              alt="Car enthusiast community"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-12 bg-black bg-opacity-40">
            <div className="max-w-md text-center">
              <h2 className="text-white text-3xl font-bold mb-6">Welcome Back to Specd</h2>
              <p className="text-white text-lg mb-8">
                Log in to continue sharing your builds and connecting with the car enthusiast community.
              </p>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image 
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="User profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-white text-sm opacity-80">Latest member</div>
                    <div className="text-white font-medium">John's 240SX Build</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side (form) */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-secondary-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-secondary-600">
              Don't have an account?{' '}
              <Link href="/signup" className="font-medium text-primary-600 hover:text-primary-500">
                Sign up here
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
                  <label htmlFor="password" className="block text-sm font-medium text-secondary-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="input"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="text-right mt-2">
                    <Link href="/forgot-password" className="text-sm text-primary-600 hover:text-primary-500">
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary w-full flex justify-center py-3"
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 