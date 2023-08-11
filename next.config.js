/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',    
    publicRuntimeConfig: {
      staticFolder: '/static', // Публічна тека для статичних файлів
      imageFolder: '/images', // Публічна тека для зображень
    },
  }

  
  module.exports = nextConfig