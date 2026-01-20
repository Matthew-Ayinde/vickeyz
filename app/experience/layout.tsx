import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Luxury Events & Corporate Entertainment | VickeyZ',
  description: 'Premium entertainment for weddings, corporate galas, private celebrations, and state ceremonies. Bespoke musical experiences for prestigious events.',
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
