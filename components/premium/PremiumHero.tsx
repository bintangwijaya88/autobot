'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/sections/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ReactNode } from 'react';

interface PremiumHeroProps {
  badge: { icon: ReactNode; text: string };
  title: string;
  titleHighlight: string;
  description: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  locale: string;
}

export function PremiumHero({
  badge,
  title,
  titleHighlight,
  description,
  primaryCTA,
  secondaryCTA,
  locale
}: PremiumHeroProps) {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #116366 1px, transparent 1px), linear-gradient(to bottom, #116366 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#116366]/20 to-[#14b8a6]/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tl from-[#14b8a6]/20 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* Floating Shapes */}
      <div className="absolute top-40 left-10 w-20 h-20 border-2 border-[#116366]/10 rounded-lg rotate-12 animate-float" />
      <div
        className="absolute bottom-32 right-16 w-16 h-16 border-2 border-[#14b8a6]/10 rounded-full animate-float"
        style={{ animationDelay: '1s' }}
      />

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-5 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-[#116366]/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#14b8a6] animate-ping" />
            </div>
            {badge.icon}
            <span className="text-[#116366] font-semibold">{badge.text}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {title}{' '}
            <span className="inline-block animate-gradient bg-gradient-to-r from-[#116366] via-[#14b8a6] to-[#116366] bg-clip-text text-transparent bg-[length:200%_auto]">
              {titleHighlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-[#116366] hover:bg-[#0d4d50]"
            >
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white"
            >
              <Link href={secondaryCTA.href}>
                {secondaryCTA.text}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
