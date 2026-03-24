import { FiStar } from "react-icons/fi";
import { useStore } from "../../../../store/useStore";
import { useRef } from "react";

function Rating() {
  const { minRating, setMinRating } = useStore();
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = (index + 1) % 5;
      buttonsRef.current[next]?.focus();
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      const prev = (index - 1 + 5) % 5;
      buttonsRef.current[prev]?.focus();
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const value = index + 1;
      setMinRating(minRating === value ? 0 : value);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Minimum rating"
      className="flex items-center justify-around gap-3 bg-white h-10 border border-gray-200 rounded-xl px-3 py-2 shadow-sm"
    >
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <button
            key={star}
            ref={(el) => {
              buttonsRef.current[index] = el;
            }}
            role="radio"
            aria-checked={minRating === star}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            tabIndex={
              minRating === star || (minRating === 0 && index === 0) ? 0 : -1
            }
            onClick={() => setMinRating(minRating === star ? 0 : star)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="transition hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
          >
            <FiStar
              size={18}
              aria-hidden="true"
              className={`transition ${
                star <= minRating
                  ? "text-orange-400 fill-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Rating;
