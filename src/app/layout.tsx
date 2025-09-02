import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nixonlopez.dev'),
  title: 'Nixon López - Desarrollo Web con IA | ChatBots & Automatizaciones',
  description: 'Especialista en desarrollo web con IA, integración de ChatBots y sistemas de automatización para negocios. 5 años de experiencia como desarrollador web e IT Teacher.',
  keywords: 'desarrollo web, inteligencia artificial, chatbots, automatización, Nixon López, nixoncodes.ai, IT Teacher',
  authors: [{ name: 'Nixon López' }],
  creator: 'Nixon López',
  openGraph: {
    title: 'Nixon López - Desarrollo Web con IA',
    description: 'Especialista en desarrollo web con IA, ChatBots y automatizaciones para negocios',
    url: 'https://nixonlopez.dev',
    siteName: 'Nixon López Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nixon López - Desarrollo Web con IA',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nixon López - Desarrollo Web con IA',
    description: 'Especialista en desarrollo web con IA, ChatBots y automatizaciones',
    creator: '@nixoncodes.ai',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}
