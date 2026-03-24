export const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black text-white rounded-3xl p-8 md:p-10 mb-8 flex flex-col md:flex-row items-center justify-between shadow-xl"
    >
      <div className="max-w-md z-10">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
          Special offers
        </p>

        <h1
          id="hero-heading"
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Up to <span className="text-yellow-400 drop-shadow">50% off</span>
        </h1>

        <p className="text-gray-300 mb-6 text-sm md:text-base">
          Discover products with great discounts for a limited time.
        </p>

        <p className="text-xs text-gray-500">
          *Discounts are applied automatically
        </p>
      </div>

      <div className="relative mt-6 md:mt-0">
        <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full" />

        <img
          src="https://cdn-icons-png.flaticon.com/512/726/726476.png"
          alt=""
          aria-hidden="true"
          className="relative h-44 md:h-72 object-contain"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent)]" />
    </section>
  );
};
