import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Frozen Air',
  description: 'Get in touch with Frozen Air. Connect for bookings, collaborations, or inquiries about electronic music projects.',
  openGraph: {
    title: 'Contact | Frozen Air',
    description: 'Get in touch with Frozen Air. Connect for bookings, collaborations, or inquiries about electronic music projects.',
    images: ['/og-image.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
