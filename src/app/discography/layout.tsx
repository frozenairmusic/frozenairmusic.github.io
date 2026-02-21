import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discography | Frozen Air',
  description: 'Explore Frozen Air discography. Electronic music releases exploring the tension between organic decay and crystalline digital structures.',
  openGraph: {
    title: 'Discography | Frozen Air',
    description: 'Explore Frozen Air discography. Electronic music releases exploring the tension between organic decay and crystalline digital structures.',
    images: ['/og-image.jpg'],
  },
}

export default function DiscographyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
