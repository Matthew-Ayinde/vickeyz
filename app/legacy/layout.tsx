import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Legacy - Performance History & Press | VickeyZ',
  description: 'Explore VickeyZ\'s prestigious performance history including performances for dignitaries, royal families, and at world heritage venues.',
}

export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
