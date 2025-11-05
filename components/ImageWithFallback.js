import Image from 'next/image'

export default function ImageWithFallback({ src, alt, fill, className, sizes, priority }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  )
}

