/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "royal-swiss-strapi.stixor.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
