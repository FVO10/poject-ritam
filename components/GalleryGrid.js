'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

function GalleryImage({ src, alt, index }) {
  const [hasError, setHasError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
    
    // Vérifier si l'image existe
    const img = new window.Image()
    img.onload = () => setHasError(false)
    img.onerror = () => setHasError(true)
    img.src = src
  }, [src])

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
        <p className="text-sm">Image à ajouter</p>
      </div>
    )
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover image-hover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )
}

export default function GalleryGrid() {
  const images = [
    { src: '/images/gallery-1.jpg', alt: 'Salle de yoga zen avec vue sur Casablanca' },
    { src: '/images/gallery-2.jpg', alt: 'Cours de yoga collectif en cours' },
    { src: '/images/gallery-3.jpg', alt: 'Posture de méditation dans le studio' },
    { src: '/images/gallery-4.jpg', alt: 'Espace de détente après la pratique' },
    { src: '/images/gallery-5.jpg', alt: 'Atelier de yoga en petit groupe' },
    { src: '/images/gallery-6.jpg', alt: 'Retraite de yoga dans un cadre apaisant' },
    { src: '/images/gallery-7.jpg', alt: 'Cours privé de yoga personnalisé' },
    { src: '/images/gallery-8.jpg', alt: 'Studio Ritam Yoga Wellness - espace principal' },
    { src: '/images/gallery-9.jpg', alt: 'Pratique de yoga en extérieur' },
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

