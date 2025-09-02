import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextAgency Studio',
  description: 'Content Studio for NextAgency',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
