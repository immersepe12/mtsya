import type { Metadata } from 'next';
import { ebGaramond, inter, muktaMahee } from './fonts';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'mtsya — the wardrobe that endures the deluge',
  description:
    'Five plain shirts and five plain T-shirts in Egyptian Giza cotton woven with TENCEL Lyocell. ₹3,000 each. Made in India.',
  icons: {
    icon: `${basePath}/assets/logos/mtsya-fish.png`,
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
