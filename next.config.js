/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Moved out of the experimental block
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // Required to make pdfjs work
    return config;
  },
};

module.exports = nextConfig; 

