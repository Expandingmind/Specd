import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-primary-600">Specd</span>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="/login"
              className="btn btn-secondary"
            >
              Log in
            </Link>
            <Link 
              href="/signup"
              className="btn btn-primary"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with Car Enthusiasts & Showcase Your Builds</h1>
              <p className="text-xl mb-8">Share your custom cars, discover new mods, and connect with a community that shares your passion.</p>
              <Link 
                href="/signup"
                className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 text-lg font-medium"
              >
                Get Started <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://www.motortrend.com/uploads/sites/21/2020/10/Nissan-240SX-Lead.jpg"
                  alt="Custom car showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900">Why Specd is Perfect for Car Enthusiasts</h2>
            <p className="mt-4 text-xl text-secondary-600 max-w-3xl mx-auto">
              Everything you need to share your car build journey and connect with like-minded enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-secondary-50 p-6 rounded-lg">
              <div className="bg-primary-100 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Build Your Garage</h3>
              <p className="text-secondary-600">
                Add your vehicles to your virtual garage with detailed specifications and modifications. Track your build's progress over time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-secondary-50 p-6 rounded-lg">
              <div className="bg-primary-100 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Mods</h3>
              <p className="text-secondary-600">
                Document every modification with images, vendor information, and installation notes to help others replicate your build.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-secondary-50 p-6 rounded-lg">
              <div className="bg-primary-100 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Discover & Explore</h3>
              <p className="text-secondary-600">
                Find builds similar to yours, filter by car make/model, or discover builds with specific modifications to inform your next project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Showcase */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900">Featured Builds</h2>
            <p className="mt-4 text-xl text-secondary-600 max-w-3xl mx-auto">
              Check out some amazing custom cars from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car 1 */}
            <div className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://cdn.carbuzz.com/gallery-images/1600/580000/500/580547.jpg"
                  alt="Toyota Supra"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">1994 Toyota Supra Turbo</h3>
                <div className="flex justify-between mt-2 text-sm text-secondary-500">
                  <span>550 HP</span>
                  <span>Single Turbo</span>
                  <span>@jane_smith</span>
                </div>
              </div>
            </div>

            {/* Car 2 */}
            <div className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://www.motortrend.com/uploads/sites/21/2020/10/Nissan-240SX-Lead.jpg"
                  alt="Nissan 240SX"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">1995 Nissan 240SX</h3>
                <div className="flex justify-between mt-2 text-sm text-secondary-500">
                  <span>380 HP</span>
                  <span>SR20DET Swap</span>
                  <span>@john_doe</span>
                </div>
              </div>
            </div>

            {/* Car 3 */}
            <div className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://cdn.bmwblog.com/wp-content/uploads/2015/05/Alpine-White-BMW-M3-Image-1.jpg"
                  alt="BMW M3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">2015 BMW M3 Competition</h3>
                <div className="flex justify-between mt-2 text-sm text-secondary-500">
                  <span>425 HP</span>
                  <span>KW Coilovers</span>
                  <span>@mike_wilson</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/signup"
              className="btn btn-primary px-8 py-3 text-lg"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to share your car build?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join Specd today and connect with car enthusiasts who share your passion for customization and performance.
          </p>
          <Link 
            href="/signup"
            className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 text-lg font-medium"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Specd</h3>
              <p className="text-secondary-300">
                The social platform for car enthusiasts to share builds, find mods, and connect with the community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-secondary-300 hover:text-white">About Us</Link></li>
                <li><Link href="/features" className="text-secondary-300 hover:text-white">Features</Link></li>
                <li><Link href="/privacy" className="text-secondary-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-secondary-300 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-secondary-300 mb-2">
                Have questions? Reach out to us.
              </p>
              <a href="mailto:support@specd.com" className="text-primary-400 hover:text-primary-300">
                support@specd.com
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-800 text-center text-secondary-400">
            <p>© {new Date().getFullYear()} Specd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 