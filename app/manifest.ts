import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Crecer con Cristo Redentor',
    short_name: 'CCR',
    description: 'Movimiento juvenil. ¡Sumate a vivir en comunidad!',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfbf7',
    theme_color: '#ef4444',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/og-small.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/og-small.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'any',
      }
    ],
  }
}
