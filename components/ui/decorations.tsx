'use client';

import { useEffect, useState } from 'react';

export const FloatingShapes = () => {
  const [mounted, setMounted] = useState(false);
  const [floatingElements] = useState(() =>
    [...Array(15)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 5,
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large geometric shapes */}
      <div className="absolute top-20 -left-20 w-40 h-40 border-4 border-[#116366]/10 rounded-full animate-pulse-slow" />
      <div className="absolute top-40 -right-20 w-60 h-60 border-4 border-[#14b8a6]/10 rotate-45 animate-pulse-slow animation-delay-2000" />
      <div className="absolute bottom-20 left-1/4 w-32 h-32 border-4 border-[#5eead4]/10 rounded-lg rotate-12 animate-pulse-slow animation-delay-4000" />

      {/* Small floating elements - only render after mount to avoid hydration mismatch */}
      {mounted && floatingElements.map((element, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#116366]/20 rounded-full"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}

      {/* Gradient lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#116366]/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#14b8a6]/10 to-transparent" />
    </div>
  );
};

export const GlowOrb = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]',
  };

  return (
    <div className={`absolute ${sizes[size]} rounded-full bg-gradient-to-r from-[#116366]/20 to-[#14b8a6]/20 blur-3xl animate-pulse-slow ${className}`} />
  );
};

export const GridOverlay = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, #116366 1px, transparent 1px),
          linear-gradient(to bottom, #116366 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.03,
      }} />
    </div>
  );
};

export const DotPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, #116366 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        opacity: 0.04,
      }} />
    </div>
  );
};

export const CircuitLines = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#116366" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Horizontal lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#circuit-gradient)" strokeWidth="1" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#circuit-gradient)" strokeWidth="1" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#circuit-gradient)" strokeWidth="1" />

        {/* Vertical lines */}
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#circuit-gradient)" strokeWidth="1" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#circuit-gradient)" strokeWidth="1" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="url(#circuit-gradient)" strokeWidth="1" />

        {/* Connection points */}
        <circle cx="20%" cy="20%" r="3" fill="#116366" opacity="0.2" />
        <circle cx="50%" cy="50%" r="3" fill="#14b8a6" opacity="0.2" />
        <circle cx="80%" cy="80%" r="3" fill="#5eead4" opacity="0.2" />
      </svg>
    </div>
  );
};

export const AnimatedGradientBorder = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-[#116366] via-[#14b8a6] to-[#5eead4] rounded-lg opacity-75 blur animate-gradient-shift" />
      <div className="relative bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export const PulsingDot = ({ className = '' }: { className?: string }) => {
  return (
    <span className={`relative inline-flex h-3 w-3 ${className}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#116366] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#14b8a6]"></span>
    </span>
  );
};

export const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`bg-gradient-to-r from-[#116366] via-[#14b8a6] to-[#5eead4] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export const ShinyButton = ({ children, className = '', ...props }: any) => {
  return (
    <button
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      {children}
    </button>
  );
};

export const ParallaxSection = ({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="transform transition-transform duration-300"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const CornerDecoration = ({ position = 'top-left' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  };

  return (
    <div className={`absolute ${positions[position]} w-20 h-20 pointer-events-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M 0 0 L 100 0 L 100 20 L 20 20 L 20 100 L 0 100 Z"
          fill="url(#corner-gradient)"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="corner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#116366" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const SectionDivider = () => {
  return (
    <div className="relative h-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#116366]/10 to-transparent" />
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#116366]" />
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] animate-pulse" />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#116366]" />
      </div>
    </div>
  );
};
