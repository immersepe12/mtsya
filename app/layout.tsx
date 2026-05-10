import type { Metadata } from 'next';
import { ebGaramond, inter, muktaMahee } from './fonts';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mtsya.vercel.app';
const ogImage = `${basePath}/assets/logos/mtsya-fish.png`;

const title = 'mtsya — the wardrobe that endures the deluge';
const description =
  'Five plain shirts and five plain T-shirts in Egyptian Giza cotton woven with TENCEL Lyocell. ₹3,000 each. Made in India. Named for Matsya — the fish that guided the boat through the deluge.';
const shortShare =
  'mtsya — the wardrobe that endures the deluge. Five plain shirts and five plain tees. ₹3,000 each.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s · mtsya',
  },
  description,
  applicationName: 'mtsya',
  authors: [{ name: 'kushal at mtsya' }],
  creator: 'mtsya',
  publisher: 'mtsya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Auto-detected from app/icon.png and app/apple-icon.png — no
  // manual icon config needed.
  openGraph: {
    type: 'website',
    siteName: 'mtsya',
    title,
    description: shortShare,
    url: siteUrl,
    locale: 'en_IN',
    images: [
      {
        url: ogImage,
        width: 4000,
        height: 4000,
        alt: 'mtsya — the keeper, the guide',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description: shortShare,
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable} ${muktaMahee.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
