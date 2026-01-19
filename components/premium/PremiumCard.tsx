'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ReactNode } from 'react';

interface PremiumCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function PremiumCard({ icon, title, description, index }: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#116366]/30 overflow-hidden h-full bg-white/80 backdrop-blur-sm">
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/0 via-[#14b8a6]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#14b8a6]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="relative p-8">
          <motion.div
            className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#116366]/20 transition-all duration-500"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl" />
            {icon}
          </motion.div>
          <CardTitle className="text-2xl mb-3 text-gray-900 group-hover:text-[#116366] transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-base text-gray-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
