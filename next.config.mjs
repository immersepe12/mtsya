/**
 * MTSYA — Next.js config
 *
 * Static export for GitHub Pages. Set NEXT_PUBLIC_BASE_PATH to your
 * repository name (e.g. "/mtsya") when deploying to a project page.
 * Leave it empty for a custom domain or a user/org page.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
