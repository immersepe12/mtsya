// Resolves an asset path against the configured basePath so the same
// import works in dev, on a Vercel deploy, and on a GitHub Pages
// project page (where assets are served from /<repo-name>/).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${clean}`;
}
