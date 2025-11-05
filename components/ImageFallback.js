'use client'

import { useState } from 'react'

export default function ImageFallback({ src, alt, className }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
        <p>Image à ajouter</p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}

