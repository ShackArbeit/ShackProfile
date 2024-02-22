/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.himankash.com',
            port: '',
            pathname: '/_next/static/media/gmail.c1db09a0.webp',
                     
          },
          {
            protocol: 'https',
            hostname: 'www.himankash.com',
            port: '',
            pathname: '/_next/static/media/github.2da849b9.webp'
          },
          {
            protocol: 'https',
            hostname: 'www.himankash.com',
            port: '',
            pathname: '/_next/static/media/linkedin.a0ed62e4.webp'
          },
          {
            protocol: 'https',
            hostname: 'www.himankash.com',
            port: '',
            pathname: '/_next/static/media/instagram.01642d29.webp'
          },
        ],
      },
};

export default nextConfig;
