/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    images: {
      unoptimized: true,
    },
    // Configuração para GitHub Pages - sem basePath para repositório de projeto
    // Conforme documentação: usar gh-pages branch com biblioteca gh-pages
    outputFileTracingRoot: process.cwd(),
  };

  module.exports = nextConfig;
  