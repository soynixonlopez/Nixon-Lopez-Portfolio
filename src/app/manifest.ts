import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nixon López - Desarrollo Web con IA',
    short_name: 'Nixon López',
    description: 'Especialista en desarrollo web con IA, ChatBots y automatizaciones para negocios',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#00D4FF',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
