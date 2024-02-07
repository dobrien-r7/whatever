/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/whatever",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
