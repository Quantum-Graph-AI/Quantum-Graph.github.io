/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    images: {
      unoptimized: true,
    },
    // Corrigir configuração conforme warning do Next.js 15
    outputFileTracingRoot: process.cwd(),
  };

  module.exports = nextConfig;
  