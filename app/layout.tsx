import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DigIn Sports | Youth Sports Programs',
  description: 'Fun, structured youth sports programs for children ages 2–8.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
