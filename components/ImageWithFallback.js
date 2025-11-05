'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ImageWithFallback({ src, alt, fill, className, sizes, priority }) {
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
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  )
}

