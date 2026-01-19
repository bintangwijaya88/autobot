import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = false,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {subtitle && (
        <div className="inline-block mb-2">
          <span className="text-[#116366] font-semibold text-sm uppercase tracking-wider">
            {subtitle}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn('text-lg text-gray-600 max-w-3xl', centered && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
};
