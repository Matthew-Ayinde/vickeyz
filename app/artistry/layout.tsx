import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Artistry - Solo & Band Performances | VickeyZ',
  description: 'Choose between intimate solo keyboard performances or full band productions. World-class entertainment tailored to your event size and atmosphere.',
}

export default function ArtistryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
