import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Now - Secure Your Event Date | VickeyZ',
  description: 'Submit a booking inquiry for your luxury event. Get a personalized quote within 24 hours for world-class keyboard entertainment.',
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
