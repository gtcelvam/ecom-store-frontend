/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows images from any domain
      },
      {
        protocol: "http",
        hostname: "**", // This also allows images from any HTTP domain
      },
    ],
  },
};

export default nextConfig;
