import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'emblem-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const MedClinicsLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showSubtitle = true,
}) => {
  // Dimensions
  const dimensions = {
    sm: { width: 140, height: 42, iconSize: 34 },
    md: { width: 190, height: 56, iconSize: 46 },
    lg: { width: 240, height: 70, iconSize: 58 },
    xl: { width: 300, height: 88, iconSize: 72 },
  }[size];

  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Med Clinics Iconic Cross SVG based exactly on the reference image */}
      <svg
        width={dimensions.iconSize}
        height={dimensions.iconSize * 1.15}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 drop-shadow-sm flex-shrink-0"
        aria-label="Símbolo Med Clinics"
      >
        <defs>
          <linearGradient id="medGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B8745" />
            <stop offset="100%" stopColor="#055B2E" />
          </linearGradient>
          <linearGradient id="medGreenLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#12A857" />
            <stop offset="100%" stopColor="#0B8745" />
          </linearGradient>
        </defs>

        {/* Outer offset echo lines at bottom-left contour (characteristic of the reference logo) */}
        {/* Echo Line 3 (outermost) */}
        <path
          d="M 12 40 L 12 70 L 32 70 L 32 108 L 48 108"
          stroke={isDark ? 'rgba(255,255,255,0.35)' : '#08733A'}
          strokeWidth="2.5"
          strokeLinecap="square"
          fill="none"
        />
        {/* Echo Line 2 */}
        <path
          d="M 16 43 L 16 67 L 36 67 L 36 104 L 51 104"
          stroke={isDark ? 'rgba(255,255,255,0.55)' : '#0A8242'}
          strokeWidth="2.5"
          strokeLinecap="square"
          fill="none"
        />
        {/* Echo Line 1 */}
        <path
          d="M 20 46 L 20 64 L 40 64 L 40 100 L 54 100"
          stroke={isDark ? 'rgba(255,255,255,0.75)' : '#0C944B'}
          strokeWidth="2.5"
          strokeLinecap="square"
          fill="none"
        />

        {/* Main Solid Medical Cross */}
        {/* Cross Path: Center (24, 28) to (76, 28) etc */}
        <path
          d="
            M 38 4 
            L 62 4 
            L 62 28 
            L 86 28 
            L 86 62 
            L 62 62 
            L 62 96 
            L 38 96 
            L 38 62 
            L 14 62 
            L 14 28 
            L 38 28 
            Z
          "
          fill={isDark ? '#FFFFFF' : 'url(#medGreenGrad)'}
        />

        {/* 5 White Stars in an arc across the horizontal bar */}
        {/* Star coordinates across x: 26, 38, 50, 62, 74 */}
        {[
          { x: 25, y: 35, s: 0.7 },
          { x: 37, y: 34, s: 0.8 },
          { x: 50, y: 33, s: 0.95 },
          { x: 63, y: 34, s: 0.8 },
          { x: 75, y: 35, s: 0.7 },
        ].map((star, idx) => (
          <g
            key={idx}
            transform={`translate(${star.x}, ${star.y}) scale(${star.s}) translate(-7, -7)`}
          >
            <polygon
              points="7,0 9.16,4.38 14,5.09 10.5,8.5 11.33,13.31 7,11.03 2.67,13.31 3.5,8.5 0,5.09 4.84,4.38"
              fill={isDark ? '#044B25' : '#FFFFFF'}
            />
          </g>
        ))}

        {/* Inner Text "Med Clinics" on the horizontal cross bar */}
        <text
          x="50"
          y="52"
          textAnchor="middle"
          fill={isDark ? '#044B25' : '#FFFFFF'}
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="bold"
          fontSize="11.5"
          letterSpacing="0.2px"
        >
          Med Clinics
        </text>
      </svg>

      {/* Brand Wordmark & Descriptor (if not emblem-only) */}
      {variant !== 'emblem-only' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-serif tracking-tight font-bold ${
                size === 'sm'
                  ? 'text-lg'
                  : size === 'md'
                  ? 'text-xl'
                  : size === 'lg'
                  ? 'text-2xl'
                  : 'text-3xl'
              } ${isDark ? 'text-white' : 'text-[#065A2E]'}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              MED CLINICS
            </span>
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-emerald-400' : 'bg-[#0B8745]'
              }`}
            />
          </div>

          {showSubtitle && (
            <span
              className={`tracking-wider uppercase font-semibold text-[9px] sm:text-[10px] mt-0.5 ${
                isDark ? 'text-emerald-200/90' : 'text-[#0B8745]'
              }`}
            >
              Clínica Médica Multiespecialidades
            </span>
          )}
        </div>
      )}
    </div>
  );
};
