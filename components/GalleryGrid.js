import Image from 'next/image'

function GalleryImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover image-hover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )
}

export default function GalleryGrid() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', alt: 'Salle de yoga zen avec vue sur Casablanca' },
    { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80', alt: 'Cours de yoga collectif en cours' },
    { src: 'https://images.unsplash.com/photo-1510894347713-2eb2020a9d2a?w=800&q=80', alt: 'Posture de méditation dans le studio' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Espace de détente après la pratique' },
    { src: 'https://images.unsplash.com/photo-1545389336-cf9066942eb1?w=800&q=80', alt: 'Atelier de yoga en petit groupe' },
    { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', alt: 'Retraite de yoga dans un cadre apaisant' },
    { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80', alt: 'Cours privé de yoga personnalisé' },
    { src: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?w=800&q=80', alt: 'Studio Ritam Yoga Wellness - espace principal' },
    { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80', alt: 'Pratique de yoga en extérieur' },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-japanese-violet mb-4">
            Galerie
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre espace de bien-être et l'ambiance zen de notre studio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-200"
            >
              <GalleryImage src={image.src} alt={image.alt} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

