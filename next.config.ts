import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Static export (no server). Output will be generated in /out after `next build`.
  output: 'export',
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Required for static export.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
