import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Statizer - Coming Soon',
  description: 'All Your Artist Stats in One Place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
