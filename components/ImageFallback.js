'use client'

import { useState, useEffect } from 'react'

export default function ImageFallback({ src, alt, className }) {
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
        <p>Image à ajouter</p>
      </div>
    )
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
    />
  )
}

