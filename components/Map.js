'use client'

export default function Map() {
  const address = "27 Bd Abdellah Ben Yacine, Casablanca 20250, Morocco"
  const encodedAddress = encodeURIComponent(address)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'
  
  // Si pas de clé API, utiliser un lien direct vers Google Maps
  const mapUrl = apiKey === 'YOUR_API_KEY' 
    ? `https://www.google.com/maps?q=${encodedAddress}&output=embed`
    : `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        title="Localisation Ritam Yoga Wellness"
      />
    </div>
  )
}

