import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcast | Frozen Air',
  description: 'Listen to Frozen Air podcast episodes. Electronic music mixes exploring ambient, experimental, and crystalline soundscapes.',
  openGraph: {
    title: 'Podcast | Frozen Air',
    description: 'Listen to Frozen Air podcast episodes. Electronic music mixes exploring ambient, experimental, and crystalline soundscapes.',
    images: ['/og-image.jpg'],
  },
}

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
