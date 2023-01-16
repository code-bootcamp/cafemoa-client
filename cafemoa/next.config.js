/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "cafemoa_deploy",
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  exportPathMap: () => ({
    "/": { page: "/" },
    "/cafe": { page: "/cafe" },
    "/login": { page: "/login" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
