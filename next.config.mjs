/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'lh3.googleusercontent.com', // Google profile images
        'avatars.githubusercontent.com', // GitHub avatars
        'res.cloudinary.com' // Add other domains you use
      ],
    },
  };
  
  export default nextConfig;