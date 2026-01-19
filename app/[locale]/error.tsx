'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');

  useEffect(() => {
    // Log error to error reporting service
    console.error('Locale error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('title', { default: 'Oops! Something went wrong' })}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            {t('description', {
              default: 'We apologize for the inconvenience. An unexpected error has occurred.',
            })}
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {t('tryAgain', { default: 'Try Again' })}
          </button>
          <div className="text-sm text-gray-500">
            {t('or', { default: 'or' })}{' '}
            <a
              href="/"
              className="text-primary hover:text-primary/80 font-semibold underline"
            >
              {t('returnHome', { default: 'return to homepage' })}
            </a>
          </div>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm font-semibold text-gray-700 hover:text-gray-900">
              Error Details (Development Only)
            </summary>
            <pre className="mt-3 p-4 bg-gray-100 rounded-lg text-xs overflow-x-auto">
              <code className="text-red-600">{error.message}</code>
              {error.stack && (
                <code className="block mt-2 text-gray-700">{error.stack}</code>
              )}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
