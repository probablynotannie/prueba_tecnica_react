import { CiWarning } from "react-icons/ci";

function Error() {
  return (
    <section
      role="alert"
      aria-labelledby="error-title"
      className="p-6 flex flex-col items-center justify-center text-center"
    >
      <div
        aria-hidden="true"
        className="bg-red-100 text-red-600 p-4 rounded-full mb-4 text-2xl"
      >
        <CiWarning />
      </div>

      <h2 id="error-title" className="text-xl font-semibold mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-500 mb-4">
        We couldn't load the products. Please try again.
      </p>

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="bg-black text-white px-4 py-2 rounded hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black"
      >
        Retry
      </button>
    </section>
  );
}

export default Error;
