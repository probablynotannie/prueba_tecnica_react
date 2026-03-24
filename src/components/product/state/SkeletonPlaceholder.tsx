function ProductDetailSkeleton() {
  return (
    <section
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="p-6 max-w-6xl mx-auto animate-pulse"
    >
      <span className="sr-only">Loading product details...</span>

      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl border border-gray-100">
        <div>
          <div className="bg-gray-200 rounded-xl h-80 w-full" />

          <div className="flex gap-2 mt-4 justify-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-14 w-14 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />

          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 w-4 bg-gray-200 rounded" />
            ))}
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>

          <div className="h-6 bg-gray-200 rounded w-1/3" />

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
          </div>

          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 rounded-full" />
            ))}
          </div>

          <div className="h-10 bg-gray-200 rounded-xl w-full" />
        </div>
      </div>

      <div className="mt-12 space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="p-4 border border-slate-200 bg-white rounded-xl space-y-2"
          >
            <div className="h-4 bg-gray-200 rounded w-1/3" />

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="h-4 w-4 bg-gray-200 rounded" />
              ))}
            </div>

            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-4/5" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductDetailSkeleton;
