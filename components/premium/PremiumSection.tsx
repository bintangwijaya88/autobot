'use client';

import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { ReactNode } from 'react';

interface PremiumSectionProps {
  variant?: 'white' | 'gray' | 'gradient';
  pattern?: 'dots' | 'circuit' | 'grid' | 'lines';
  patternOpacity?: number;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function PremiumSection({
  variant = 'white',
  pattern = 'dots',
  patternOpacity = 0.03,
  children,
  className = '',
  id
}: PremiumSectionProps) {
  const variantClasses = {
    white: 'bg-gradient-to-br from-white via-gray-50/50 to-white',
    gray: 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50',
    gradient: 'bg-gradient-to-br from-[#116366] via-[#0d4d50] to-[#116366] text-white'
  };

  const patternStyles = {
    dots: {
      backgroundImage: 'radial-gradient(circle, #116366 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    },
    grid: {
      backgroundImage: `linear-gradient(to right, #116366 1px, transparent 1px), linear-gradient(to bottom, #116366 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    },
    lines: {
      backgroundImage: 'linear-gradient(to right, #116366 1px, transparent 1px)',
      backgroundSize: '30px 100%'
    },
    circuit: {
      backgroundImage: `linear-gradient(to right, #116366 1px, transparent 1px), linear-gradient(to bottom, #116366 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }
  };

  return (
    <Section className={`relative ${variantClasses[variant]} overflow-hidden ${className}`} id={id}>
      {/* Pattern Background */}
      <div className="absolute inset-0" style={{ opacity: patternOpacity }}>
        <div className="absolute inset-0" style={patternStyles[pattern]} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#116366]/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#14b8a6]/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      <Container className="relative z-10">
        {children}
      </Container>
    </Section>
  );
}
