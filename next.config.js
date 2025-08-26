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
  };

  module.exports = nextConfig;
  