'use client';

interface BackgroundPatternProps {
  variant?: 'grid' | 'dots' | 'lines' | 'circuit' | 'tailwind-grid';
  opacity?: number;
  className?: string;
}

export const BackgroundPattern = ({
  variant = 'grid',
  opacity = 0.03,
  className = ''
}: BackgroundPatternProps) => {
  const patterns = {
    grid: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    ),
    dots: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    ),
    lines: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lines" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 0 60 L 60 0" stroke="currentColor" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
    ),
    circuit: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 50 0 L 50 50 M 50 50 L 100 50 L 100 100" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="50" cy="50" r="3" fill="currentColor"/>
            <circle cx="0" cy="0" r="2" fill="currentColor"/>
            <circle cx="100" cy="100" r="2" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    ),
    'tailwind-grid': (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tailwind-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.8"/>
          </pattern>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#116366', stopOpacity: 0.25 }} />
            <stop offset="50%" style={{ stopColor: '#14b8a6', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: '#5eead4', stopOpacity: 0.25 }} />
          </linearGradient>
          <mask id="fade-mask">
            <rect width="100%" height="100%" fill="url(#grid-gradient)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#tailwind-grid)" mask="url(#fade-mask)" />
      </svg>
    ),
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <div className="absolute inset-0 text-[#116366]">
        {patterns[variant]}
      </div>
    </div>
  );
};

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-[#116366] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-[#14b8a6] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#5eead4] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Grid Pattern */}
      <BackgroundPattern variant="grid" opacity={0.05} />
    </div>
  );
};

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-[#116366] to-[#14b8a6] rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-[#14b8a6] to-[#5eead4] rounded-full opacity-20 blur-3xl animate-pulse-slow animation-delay-2000"></div>

      {/* Circuit pattern */}
      <BackgroundPattern variant="circuit" opacity={0.04} />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#116366] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

interface TailwindBackgroundProps {
  variant?: 'purple' | 'blue' | 'orange' | 'green' | 'pink';
}

export const TailwindBackground = ({ variant = 'purple' }: TailwindBackgroundProps = {}) => {
  const variants = {
    purple: {
      baseGradient: 'bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50',
      overlayGradient: 'bg-gradient-to-tl from-fuchsia-50/60 via-transparent to-purple-50/60',
      orbs: [
        'bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-transparent',
        'bg-gradient-to-bl from-fuchsia-400/20 via-violet-400/15 to-transparent',
        'bg-gradient-to-tr from-pink-400/20 via-purple-400/15 to-transparent',
        'bg-gradient-to-tl from-violet-400/15 via-purple-400/10 to-transparent',
      ],
      centerOrb: 'bg-gradient-to-br from-fuchsia-300/10 via-transparent to-purple-300/10',
    },
    blue: {
      baseGradient: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50',
      overlayGradient: 'bg-gradient-to-tl from-indigo-50/60 via-transparent to-cyan-50/60',
      orbs: [
        'bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-transparent',
        'bg-gradient-to-bl from-sky-400/20 via-blue-400/15 to-transparent',
        'bg-gradient-to-tr from-cyan-400/20 via-indigo-400/15 to-transparent',
        'bg-gradient-to-tl from-indigo-400/15 via-blue-400/10 to-transparent',
      ],
      centerOrb: 'bg-gradient-to-br from-cyan-300/10 via-transparent to-blue-300/10',
    },
    orange: {
      baseGradient: 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50',
      overlayGradient: 'bg-gradient-to-tl from-red-50/60 via-transparent to-yellow-50/60',
      orbs: [
        'bg-gradient-to-br from-orange-400/20 via-amber-400/15 to-transparent',
        'bg-gradient-to-bl from-yellow-400/20 via-orange-400/15 to-transparent',
        'bg-gradient-to-tr from-amber-400/20 via-red-400/15 to-transparent',
        'bg-gradient-to-tl from-red-400/15 via-orange-400/10 to-transparent',
      ],
      centerOrb: 'bg-gradient-to-br from-yellow-300/10 via-transparent to-orange-300/10',
    },
    green: {
      baseGradient: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
      overlayGradient: 'bg-gradient-to-tl from-lime-50/60 via-transparent to-teal-50/60',
      orbs: [
        'bg-gradient-to-br from-green-400/20 via-emerald-400/15 to-transparent',
        'bg-gradient-to-bl from-teal-400/20 via-green-400/15 to-transparent',
        'bg-gradient-to-tr from-emerald-400/20 via-lime-400/15 to-transparent',
        'bg-gradient-to-tl from-lime-400/15 via-green-400/10 to-transparent',
      ],
      centerOrb: 'bg-gradient-to-br from-teal-300/10 via-transparent to-green-300/10',
    },
    pink: {
      baseGradient: 'bg-gradient-to-br from-pink-50 via-rose-50 to-red-50',
      overlayGradient: 'bg-gradient-to-tl from-fuchsia-50/60 via-transparent to-rose-50/60',
      orbs: [
        'bg-gradient-to-br from-pink-400/20 via-rose-400/15 to-transparent',
        'bg-gradient-to-bl from-red-400/20 via-pink-400/15 to-transparent',
        'bg-gradient-to-tr from-rose-400/20 via-fuchsia-400/15 to-transparent',
        'bg-gradient-to-tl from-fuchsia-400/15 via-pink-400/10 to-transparent',
      ],
      centerOrb: 'bg-gradient-to-br from-rose-300/10 via-transparent to-pink-300/10',
    },
  };

  const colors = variants[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vibrant colorful gradient wash */}
      <div className={`absolute inset-0 ${colors.baseGradient}`}></div>

      {/* Additional gradient layers for depth */}
      <div className={`absolute inset-0 ${colors.overlayGradient}`}></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0">
        <BackgroundPattern variant="tailwind-grid" opacity={1} />
      </div>

      {/* Colorful floating gradient orbs */}
      <div className={`absolute -top-40 -left-40 w-[600px] h-[600px] ${colors.orbs[0]} rounded-full blur-3xl animate-pulse-slow`}></div>
      <div className={`absolute top-1/4 -right-40 w-[500px] h-[500px] ${colors.orbs[1]} rounded-full blur-3xl animate-pulse-slow animation-delay-2000`}></div>
      <div className={`absolute -bottom-40 left-1/4 w-[550px] h-[550px] ${colors.orbs[2]} rounded-full blur-3xl animate-pulse-slow animation-delay-4000`}></div>
      <div className={`absolute bottom-1/4 -right-20 w-[450px] h-[450px] ${colors.orbs[3]} rounded-full blur-3xl animate-pulse-slow`}></div>

      {/* Center depth layers for dimension */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${colors.centerOrb} rounded-full blur-3xl`}></div>
    </div>
  );
};
