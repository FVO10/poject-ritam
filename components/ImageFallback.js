export default function ImageFallback({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  )
}

