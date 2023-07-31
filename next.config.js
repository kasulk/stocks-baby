/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.twelvedata.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "logo.twelvedata.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "icon-library.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
