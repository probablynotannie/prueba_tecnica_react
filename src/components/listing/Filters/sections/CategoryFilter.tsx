import { useCategories } from "../../../../hooks/useCategories";
import { useStore } from "../../../../store/useStore";
import { FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export const CategoryFilter = () => {
  const { data: categories = [], isLoading, isError } = useCategories();
  const { category, setCategory } = useStore();

  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const selected = isLoading
    ? "Loading..."
    : isError
      ? "Error loading categories"
      : category === "all"
        ? "All"
        : categories.find((c) => c.slug === category)?.name;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        listRef.current &&
        !listRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative w-full">
      <span id="category-label" className="sr-only">
        Filter by category
      </span>

      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="category-label"
        disabled={isLoading || isError}
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 h-10 rounded-xl border border-slate-200 bg-white text-sm transition shadow focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{selected}</span>
        <FiChevronDown
          aria-hidden="true"
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && !isLoading && !isError && (
        <div
          ref={listRef}
          role="listbox"
          aria-labelledby="category-label"
          className="absolute mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <button
            role="option"
            aria-selected={category === "all"}
            onClick={() => {
              setCategory("all");
              setOpen(false);
              buttonRef.current?.focus();
            }}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm focus:bg-gray-100 focus:outline-none"
          >
            All categories
          </button>

          {categories.map((cat) => (
            <button
              key={cat.slug}
              role="option"
              aria-selected={category === cat.slug}
              onClick={() => {
                setCategory(cat.slug);
                setOpen(false);
                buttonRef.current?.focus();
              }}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm focus:bg-gray-100 focus:outline-none"
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
