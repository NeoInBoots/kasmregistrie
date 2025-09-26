/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://github.com/NeoInBoots/kasmregistrie/img/logo.svg',
    listUrl: 'https://github.com/NeoInBoots/kasmregistrie',
    contactUrl: 'https://github.com/NeoInBoots/kasmregistrie/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
