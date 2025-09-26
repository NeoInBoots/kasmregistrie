/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://neoinboots.github.io/kasmregistrie/img/logo.svg',
    listUrl: 'https://neoinboots.github.io/kasmregistrie',
    contactUrl: 'https://neoinboots.github.io/kasmregistrie/kasmregistrie/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
