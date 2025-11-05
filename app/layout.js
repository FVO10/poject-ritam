import './globals.css'
import Layout from '@/components/Layout'

export const metadata = {
  metadataBase: new URL('https://ritam-yoga-wellness.vercel.app'),
  title: {
    default: 'Ritam Yoga Wellness - Studio de Yoga à Casablanca',
    template: '%s | Ritam Yoga Wellness'
  },
  description: 'Studio de yoga zen et minimaliste à Casablanca. Cours collectifs, cours privés, ateliers et retraites. Bienvenue dans votre espace de bien-être.',
  keywords: 'yoga, casablanca, bien-être, méditation, cours de yoga, studio yoga, maroc',
  authors: [{ name: 'Ritam Yoga Wellness' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ritam-yoga-wellness.vercel.app',
    siteName: 'Ritam Yoga Wellness',
    title: 'Ritam Yoga Wellness - Studio de Yoga à Casablanca',
    description: 'Studio de yoga zen et minimaliste à Casablanca. Cours collectifs, cours privés, ateliers et retraites.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritam Yoga Wellness - Studio de Yoga à Casablanca',
    description: 'Studio de yoga zen et minimaliste à Casablanca.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ritam Yoga Wellness",
              "image": "https://ritam-yoga-wellness.vercel.app/images/logo.png",
              "@id": "https://ritam-yoga-wellness.vercel.app",
              "url": "https://ritam-yoga-wellness.vercel.app",
              "telephone": "+212660240201",
              "priceRange": "120-900 MAD",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "27 Bd Abdellah Ben Yacine",
                "addressLocality": "Casablanca",
                "postalCode": "20250",
                "addressCountry": "MA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.5731,
                "longitude": -7.5898
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "00:00",
                  "closes": "00:00",
                  "closed": true
                }
              ],
              "sameAs": []
            })
          }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

