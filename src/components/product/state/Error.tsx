import { useNavigate } from "react-router-dom";
import { FiAlertCircle, FiArrowLeft } from "react-icons/fi";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <section
      role="alert"
      aria-labelledby="error-title"
      className="flex flex-col bg-white rounded-xl items-center justify-center text-center py-20 px-6"
    >
      <div
        aria-hidden="true"
        className="bg-red-100 text-red-500 p-4 rounded-full mb-4"
      >
        <FiAlertCircle size={32} />
      </div>

      <h1 id="error-title" className="text-2xl font-bold mb-2">
        Product not found
      </h1>

      <p className="text-gray-500 mb-6 max-w-md">
        The product you are looking for does not exist or may have been removed.
      </p>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-black"
      >
        <FiArrowLeft aria-hidden="true" />
        <span>Back to home</span>
      </button>
    </section>
  );
};

export default Error;
