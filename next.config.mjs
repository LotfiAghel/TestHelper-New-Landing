/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
      typescript:{
    "ignoreBuildErrors": true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  output:'standalone',
  images: {
      domains: ['strapi-admin.testhelper.com','testhelper.com','fr.testhelper.com','localhost'],
  },
  trailingSlash:true,
  skipTrailingSlashRedirect:true,
};

export default nextConfig;
