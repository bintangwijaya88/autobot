export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-br from-primary/5 to-teal-500/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-8 bg-gray-200 rounded-lg w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-full max-w-2xl mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-full max-w-xl mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Contact Form and Info Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Skeleton */}
          <div className="space-y-6">
            <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4 animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                </div>
              </div>
            ))}

            {/* Map Skeleton */}
            <div className="h-64 bg-gray-200 rounded-xl mt-8 animate-pulse"></div>
          </div>

          {/* Form Skeleton */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
                </div>
              ))}
              <div className="h-12 bg-gray-200 rounded-lg w-full mt-6 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
