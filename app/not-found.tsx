import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="id">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center mb-6">
                <svg
                  className="w-32 h-32 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Sorry, we couldn't find the page you're looking for. The page might have been moved or deleted.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/id"
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Back to Homepage
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Quick Links:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/id/services"
                    className="text-primary hover:text-primary/80 font-medium text-sm underline"
                  >
                    Services
                  </Link>
                  <Link
                    href="/id/solutions"
                    className="text-primary hover:text-primary/80 font-medium text-sm underline"
                  >
                    Solutions
                  </Link>
                  <Link
                    href="/id/products"
                    className="text-primary hover:text-primary/80 font-medium text-sm underline"
                  >
                    Products
                  </Link>
                  <Link
                    href="/id/contact"
                    className="text-primary hover:text-primary/80 font-medium text-sm underline"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
