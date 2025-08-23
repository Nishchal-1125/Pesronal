import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nishchal Baluni - Software Engineer Portfolio',
  description: 'Professional portfolio of Nishchal Baluni, Software Engineer at Dvertex Info Private Limited with expertise in React.js, Node.js, and modern web technologies.',
  keywords: 'Nishchal Baluni, Software Engineer, React.js, Node.js, Full Stack Developer, Portfolio',
  authors: [{ name: 'Nishchal Baluni' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
