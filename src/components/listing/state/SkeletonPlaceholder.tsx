import { FaStar } from "react-icons/fa";

function SkeletonPlaceholder() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="p-6 animate-pulse flex flex-col gap-4"
    >
      <span className="sr-only">Loading products...</span>

      <div className="border-slate-100 bg-slate-300 rounded-lg p-4 space-y-3 h-40 flex flex-col justify-around">
        <div className="bg-slate-200 h-3 w-24 rounded" />
        <div className="bg-slate-200 h-3 w-72 rounded" />
        <div className="bg-slate-200 h-3 w-40 rounded" />
        <div className="bg-slate-200 h-3 w-12 rounded" />
      </div>

      <h1 className="text-2xl font-bold text-slate-300">Products</h1>

      <div className="grid grid-cols-7 gap-4 mb-6">
        <div className="col-span-3">
          <div className="bg-slate-200 h-7 rounded" />
        </div>
        <div className="col-span-3">
          <div className="bg-slate-200 h-7 rounded" />
        </div>
        <div className="flex bg-slate-200 items-center justify-around">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} aria-hidden="true" className="text-orange-300" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="border bg-white border-slate-300 rounded-lg p-4 space-y-3"
          >
            <div className="bg-slate-200 h-32 rounded" />
            <div className="bg-slate-200 h-4 w-3/4 rounded" />
            <div className="bg-slate-200 h-4 w-1/2 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonPlaceholder;
