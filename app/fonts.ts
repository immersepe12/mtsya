import localFont from 'next/font/local';
import { Inter, Mukta } from 'next/font/google';

// EB Garamond — self-hosted, Caslon stand-in for display + body.
export const ebGaramond = localFont({
  src: [
    { path: '../design-system/fonts/EBGaramond-Regular.ttf',         weight: '400', style: 'normal' },
    { path: '../design-system/fonts/EBGaramond-Italic.ttf',          weight: '400', style: 'italic' },
    { path: '../design-system/fonts/EBGaramond-Medium.ttf',          weight: '500', style: 'normal' },
    { path: '../design-system/fonts/EBGaramond-MediumItalic.ttf',    weight: '500', style: 'italic' },
    { path: '../design-system/fonts/EBGaramond-SemiBold.ttf',        weight: '600', style: 'normal' },
    { path: '../design-system/fonts/EBGaramond-SemiBoldItalic.ttf',  weight: '600', style: 'italic' },
    { path: '../design-system/fonts/EBGaramond-Bold.ttf',            weight: '700', style: 'normal' },
    { path: '../design-system/fonts/EBGaramond-BoldItalic.ttf',      weight: '700', style: 'italic' },
    { path: '../design-system/fonts/EBGaramond-ExtraBold.ttf',       weight: '800', style: 'normal' },
    { path: '../design-system/fonts/EBGaramond-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },
  ],
  variable: '--font-eb-garamond',
  display: 'swap',
});

// Inter — Optima stand-in for UI (buttons, captions, eyebrows).
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

// Mukta — the Devanagari sibling of the Mukta family (Ek Type Mumbai).
// The design system asked for "Mukta Mahee" but that is the Gurmukhi
// cut; for मत्स्य we want the Devanagari subset, which lives in Mukta.
export const muktaMahee = Mukta({
  subsets: ['devanagari', 'latin'],
  weight: ['300', '400', '600'],
  variable: '--font-mukta-mahee',
  display: 'swap',
});
