export default function Logo({ className = '', size = 'md', textColor = '#5B3256' }) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  const circleSize = size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-1.5 h-1.5' : 'w-2 h-2'
  const textSize = size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-xs' : 'text-sm'

  return (
    <div className={`flex items-center relative ${className}`}>
      {/* RITAM text container */}
      <div className="flex items-center relative">
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
        <span className={`font-bold uppercase relative ${sizeClasses[size]}`} style={{ color: textColor }}>
          A
        </span>
        <span className={`font-bold uppercase relative ${sizeClasses[size]}`} style={{ color: textColor }}>
          M
        </span>
        
        {/* Yellow line starting from bottom-left of A, through M, extending to right */}
        <span 
          className="absolute h-0.5 bg-ritam-yellow z-10"
          style={{ 
            bottom: '0.1rem',
            left: 'calc(100% / 5 * 3)', // Start from A (4th letter = 3/5 = 60%)
            width: size === 'sm' ? 'calc((100% / 5 * 2) + 60px)' : size === 'md' ? 'calc((100% / 5 * 2) + 80px)' : 'calc((100% / 5 * 2) + 100px)'
          }}
        ></span>
      </div>
      
      {/* Yoga & Wellness text positioned relative to yellow line */}
      <div className="relative flex flex-col items-start justify-center" style={{ marginLeft: size === 'sm' ? '0.5rem' : size === 'md' ? '0.75rem' : '1rem', height: '1.5em' }}>
        {/* Yoga text above yellow line */}
        <span 
          className={`${textSize} font-semibold leading-none absolute`} 
          style={{ 
            color: textColor,
            top: '0',
            transform: 'translateY(-100%)',
            marginBottom: '0.125rem'
          }}
        >
          Yoga
        </span>
        {/* & Wellness text below yellow line */}
        <span 
          className={`${textSize} font-semibold leading-none absolute`} 
          style={{ 
            color: textColor,
            bottom: '0',
            transform: 'translateY(100%)',
            marginTop: '0.125rem'
          }}
        >
          & Wellness
        </span>
      </div>
    </div>
  )
}

