export default function Logo({ className = '', size = 'md', textColor = '#283060' }) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  const circleSize = size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-1.5 h-1.5' : 'w-2 h-2'
  const lineWidth = size === 'sm' ? 'w-16' : size === 'md' ? 'w-20' : 'w-24'
  const textSize = size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-xs' : 'text-sm'

  return (
    <div className={`flex items-center relative ${className}`}>
      {/* RITAM text */}
      <div className="flex items-center">
        <span className={`font-bold uppercase ${sizeClasses[size]}`} style={{ color: textColor }}>
          R
        </span>
        <span className={`font-bold uppercase relative ${sizeClasses[size]}`} style={{ color: textColor }}>
          I
          {/* Three stacked yellow circles replacing the dot */}
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
            <span className={`${circleSize} rounded-full bg-ritam-yellow block`}></span>
            <span className={`${circleSize} rounded-full bg-ritam-yellow block`}></span>
            <span className={`${circleSize} rounded-full bg-ritam-yellow block`}></span>
          </span>
        </span>
        <span className={`font-bold uppercase ${sizeClasses[size]}`} style={{ color: textColor }}>
          T
        </span>
        <span className={`font-bold uppercase ${sizeClasses[size]}`} style={{ color: textColor }}>
          A
        </span>
        <span className={`font-bold uppercase ${sizeClasses[size]}`} style={{ color: textColor }}>
          M
        </span>
      </div>
      
      {/* Yellow line starting from A, through M, extending to right */}
      <span 
        className="absolute h-0.5 bg-ritam-yellow"
        style={{ 
          bottom: '0.25rem',
          left: 'calc(100% / 5 * 3)',
          width: size === 'sm' ? 'calc(100% / 5 * 2 + 60px)' : size === 'md' ? 'calc(100% / 5 * 2 + 80px)' : 'calc(100% / 5 * 2 + 100px)'
        }}
      ></span>
      
      {/* Yoga & Wellness text */}
      <div className="flex flex-col items-start ml-2" style={{ marginLeft: size === 'sm' ? '0.5rem' : size === 'md' ? '1rem' : '1.5rem' }}>
        {/* Yoga text above line */}
        <span className={`${textSize} font-semibold mb-0.5 leading-none`} style={{ color: textColor }}>
          Yoga
        </span>
        {/* & Wellness text below line */}
        <span className={`${textSize} font-semibold mt-0.5 leading-none`} style={{ color: textColor }}>
          & Wellness
        </span>
      </div>
    </div>
  )
}

