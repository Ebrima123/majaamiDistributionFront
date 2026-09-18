import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Majaami Distribution | Moving a Better Tomorrow',
  description:
    'Modern distribution and logistics solutions connecting businesses, products, and communities across The Gambia and beyond.',
  keywords: [
    'distribution',
    'logistics',
    'supply chain',
    'wholesale',
    'The Gambia',
    'business partnerships',
  ],
  authors: [{ name: 'Majaami Distribution' }],
  creator: 'Majaami Distribution',
  openGraph: {
    title: 'Majaami Distribution | Moving a Better Tomorrow',
    description:
      'Modern distribution and logistics solutions connecting businesses, products, and communities.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-brand-dark antialiased">
        {children}
      </body>
    </html>
  )
}
