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
    'DigIn Sports brings playful youth sports programs to children ages 2-8 with a colorful, kid-friendly website that still works clearly for parents and schools.',
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
      'A bright, cloud-filled sports site for children ages 2-8, designed to delight kids and inform parents.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigIn Sports | Fun Youth Sports Adventures',
    description:
      'A bright, cloud-filled sports site for children ages 2-8, designed to delight kids and inform parents.',
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
