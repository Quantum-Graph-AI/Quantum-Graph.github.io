/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    images: {
      unoptimized: true,
    },
    // Configuração para GitHub Pages - basePath necessário para site de projeto
    // URL: https://quantum-graph-ai.github.io/Quantum-Graph.github.io/
    basePath: '/Quantum-Graph.github.io',
    assetPrefix: '/Quantum-Graph.github.io',
    outputFileTracingRoot: process.cwd(),

    // Additional configurations for better static export compatibility
    transpilePackages: ['framer-motion'],

    // Disable ESLint during build to focus on functionality
    eslint: {
      ignoreDuringBuilds: true,
    },

    // Disable TypeScript checks during build
    typescript: {
      ignoreBuildErrors: true,
    },

    // Webpack configuration to handle module resolution issues
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          net: false,
          tls: false,
        };
      }

      return config;
    },
  };

  module.exports = nextConfig;
  