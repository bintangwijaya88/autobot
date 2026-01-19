'use client';

import { useEffect, useRef, useState } from 'react';
import { FolderCheck, Users, Building2, Award, Globe } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

interface StatsProps {
  stats: Stat[];
}

export const Stats = ({ stats }: StatsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Icon mapping for each stat
  const getIcon = (index: number) => {
    const icons = [
      <FolderCheck className="w-8 h-8" />,
      <Users className="w-8 h-8" />,
      <Building2 className="w-8 h-8" />,
      <Award className="w-8 h-8" />,
    ];
    return icons[index] || icons[0];
  };

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`group relative text-center p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-[#116366]/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
            isVisible ? 'fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Animated globe pattern background */}
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #116366 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>

          {/* Decorative globe in background */}
          <div className="absolute -right-8 -top-8 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity group-hover:rotate-12 duration-500">
            <Globe className="w-full h-full text-[#116366]" />
          </div>

          {/* Gradient orb */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#116366]/10 to-[#14b8a6]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Icon with stacked silhouette effect */}
          <div className="relative mb-6">
            {/* Silhouette layers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-20 h-20 rounded-2xl bg-[#116366]/10 blur-md transform translate-x-1 translate-y-1"></div>
              <div className="absolute w-20 h-20 rounded-2xl bg-[#14b8a6]/15 blur-sm"></div>
            </div>

            {/* Main icon container */}
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#116366] to-[#14b8a6] text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              {getIcon(index)}

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </div>
          </div>

          {/* Number with enhanced styling */}
          <div className="relative mb-3">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#116366] via-[#14b8a6] to-[#116366] bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
              {stat.number}{stat.suffix}
            </div>
            {/* Subtle underline */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#116366] to-[#14b8a6] mx-auto mt-3 rounded-full opacity-50"></div>
          </div>

          {/* Label */}
          <div className="relative text-gray-700 font-semibold text-sm md:text-base leading-tight px-2">
            {stat.label}
          </div>

          {/* World map dots decoration */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 opacity-30 group-hover:opacity-60 transition-opacity">
            <div className="w-1.5 h-1.5 rounded-full bg-[#116366] animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#116366] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* Bottom accent gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </div>
  );
};
