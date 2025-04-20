/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  },
}

module.exports = nextConfig 