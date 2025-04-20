import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Specd - Connect with Car Enthusiasts',
  description: 'Share your car builds, find mods, and connect with fellow car enthusiasts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-secondary-50">
          {children}
        </div>
      </body>
    </html>
  );
} 