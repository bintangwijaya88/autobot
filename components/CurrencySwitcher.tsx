'use client';

import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

type Currency = 'USD' | 'IDR';

const currencyLabels: Record<Currency, string> = {
  USD: 'USD ($)',
  IDR: 'IDR (Rp)',
};

const currencySymbols: Record<Currency, string> = {
  USD: '$',
  IDR: 'Rp',
};

export default function CurrencySwitcher() {
  const [currency, setCurrency] = useState<Currency>('IDR');

  // Load currency from localStorage on mount
  useEffect(() => {
    const savedCurrency = localStorage.getItem('currency') as Currency;
    if (savedCurrency && (savedCurrency === 'USD' || savedCurrency === 'IDR')) {
      setCurrency(savedCurrency);
    }
  }, []);

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);

    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('currencyChange', { detail: newCurrency }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <DollarSign className="w-4 h-4" />
          <span className="hidden sm:inline">{currency}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(currencyLabels) as Currency[]).map((cur) => (
          <DropdownMenuItem
            key={cur}
            onClick={() => handleCurrencyChange(cur)}
            className={`cursor-pointer ${currency === cur ? 'bg-gray-100 font-semibold' : ''}`}
          >
            <div className="flex items-center gap-2 w-full">
              <span className="text-lg">{currencySymbols[cur]}</span>
              <span>{currencyLabels[cur]}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Helper hook to use currency in other components
export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>('IDR');

  useEffect(() => {
    // Load initial currency
    const savedCurrency = localStorage.getItem('currency') as Currency;
    if (savedCurrency && (savedCurrency === 'USD' || savedCurrency === 'IDR')) {
      setCurrency(savedCurrency);
    }

    // Listen for currency changes
    const handleCurrencyChange = (event: CustomEvent<Currency>) => {
      setCurrency(event.detail);
    };

    window.addEventListener('currencyChange', handleCurrencyChange as EventListener);

    return () => {
      window.removeEventListener('currencyChange', handleCurrencyChange as EventListener);
    };
  }, []);

  return currency;
}

// Helper function to format currency
export function formatCurrency(amount: number, currency: Currency = 'IDR'): string {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  } else {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }
}
