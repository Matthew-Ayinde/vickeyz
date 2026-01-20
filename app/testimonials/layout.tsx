import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials - Client Reviews & Social Proof | VickeyZ',
  description: 'Read reviews from distinguished clients including ambassadors, CEOs, and luxury event planners who have experienced VickeyZ performances.',
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
