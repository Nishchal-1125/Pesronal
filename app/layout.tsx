import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nishchal Baluni -  Software Engineer | Full-Stack Developer',
  description: 'Professional portfolio of Nishchal Baluni,  Software Engineer at Dvertex Info with 2+ years experience building enterprise solutions. Expertise in React.js, Node.js, TypeScript, and scalable web applications serving 10,000+ users.',
  keywords: [
    'Nishchal Baluni',
    ' Software Engineer',
    'Full Stack Developer',
    'React.js',
    'Node.js',
    'TypeScript',
    'Enterprise Solutions',
    'Dvertex Info',
    'Siemens Energy',
    'Software Engineering Portfolio',
    'Web Development',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'SaaS Platform',
    'Microservices',
    'MongoDB',
    'MySQL',
    'Redis',
    'AWS',
    'System Architecture'
  ].join(', '),
  authors: [{ name: 'Nishchal Baluni', url: 'https://linkedin.com/in/nishchal-baluni-0a7438207/' }],
  openGraph: {
    title: 'Nishchal Baluni -  Software Engineer | Full-Stack Developer',
    description: ' Software Engineer with 2+ years experience building enterprise solutions that serve 10,000+ users. Expert in React.js, Node.js, and modern web technologies.',
    url: 'https://nishchal-baluni.vercel.app',
    siteName: 'Nishchal Baluni Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishchal Baluni -  Software Engineer',
    description: ' Software Engineer with expertise in React.js, Node.js, and enterprise solutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
