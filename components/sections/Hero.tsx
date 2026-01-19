'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  image?: ReactNode;
  gradient?: boolean;
}

export const Hero = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  gradient = true,
}: HeroProps) => {
  return (
    <section className={`relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden ${gradient ? 'gradient-radial' : ''}`}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#116366]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            {subtitle && (
              <div className="inline-block mb-4 px-4 py-2 bg-[#116366]/10 rounded-full">
                <span className="text-[#116366] font-semibold text-sm">
                  {subtitle}
                </span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}

              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button size="lg" variant="outline" className="border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Image/Illustration */}
          {image && (
            <div className="hidden lg:block fade-in-up">
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
