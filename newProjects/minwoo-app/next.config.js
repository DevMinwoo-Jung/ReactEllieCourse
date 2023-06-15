/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}
if (typeof nextRuntime === "undefined") {
  config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
     };  
}
module.exports = nextConfig
