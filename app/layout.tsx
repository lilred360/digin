import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'DigIn Sports | Youth Sports Enrichment Programs',
  description:
    'DigIn Sports offers structured multi-sport enrichment programs for children ages 2-8, designed for families, schools, daycares, and preschools.',
  keywords: [
    'youth sports programs',
    'kids sports classes',
    'multi-sport classes',
    'daycare enrichment',
    'preschool sports',
  ],
  openGraph: {
    title: 'DigIn Sports | Youth Sports Enrichment Programs',
    description:
      'Structured multi-sport experiences for children ages 2-8, built for families and partner programs.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigIn Sports | Youth Sports Enrichment Programs',
    description:
      'Structured multi-sport experiences for children ages 2-8, built for families and partner programs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
