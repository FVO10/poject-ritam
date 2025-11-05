'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImageWithFallback({ src, alt, fill, className, sizes, priority }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
        <p className="text-sm">Image à ajouter</p>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setHasError(true)}
    />
  )
}

