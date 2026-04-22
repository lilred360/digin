import type { Metadata } from 'next';
import { Fredoka, Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'DigIn Sports | Fun Youth Sports Adventures',
  description:
    'DigIn Sports brings colorful, active, child-friendly multi-sport experiences to children ages 2-8 while keeping information clear for parents and partners.',
  keywords: [
    'youth sports programs',
    'kids sports classes',
    'multi-sport classes',
    'daycare enrichment',
    'preschool sports',
    'fun kids activities',
  ],
  openGraph: {
    title: 'DigIn Sports | Fun Youth Sports Adventures',
    description:
      'A colorful multi-page sports site for children ages 2-8, designed to delight kids and inform parents.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigIn Sports | Fun Youth Sports Adventures',
    description:
      'A colorful multi-page sports site for children ages 2-8, designed to delight kids and inform parents.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${fredoka.variable}`}>{children}</body>
    </html>
  );
}
