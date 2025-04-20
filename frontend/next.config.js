/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'randomuser.me',
      'www.motortrend.com',
      'cdn.carbuzz.com',
      'cdn.bmwblog.com',
      'www.rawmotorsport.com',
      'i.ytimg.com',
      'www.supraforums.com',
      'www.m3post.com',
      'res.cloudinary.com'
    ],
    unoptimized: true
  },
  output: 'standalone'
}

module.exports = nextConfig 