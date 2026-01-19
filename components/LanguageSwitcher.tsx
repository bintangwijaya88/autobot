'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales, localeLabels, type Locale } from '@/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedPath = (newLocale: Locale) => {
    // Remove current locale from pathname
    const segments = pathname.split('/').filter(Boolean);

    // If first segment is a locale, remove it
    if (locales.includes(segments[0] as Locale)) {
      segments.shift();
    }

    // Add new locale
    return `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{localeLabels[locale as Locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => (
          <DropdownMenuItem key={loc} asChild>
            <Link
              href={getLocalizedPath(loc)}
              className={`w-full ${locale === loc ? 'bg-gray-100' : ''}`}
            >
              {localeLabels[loc]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
