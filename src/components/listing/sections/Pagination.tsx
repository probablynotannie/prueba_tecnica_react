import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const getVisiblePages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        pages.push(i);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav aria-label="Pagination" className="flex justify-center mt-10">
      <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 transition focus:outline-none focus:ring-2 focus:ring-black"
        >
          <FiChevronLeft aria-hidden="true" />
        </button>

        {visiblePages.map((page, index) => {
          const prevPage = visiblePages[index - 1];
          const showDots = prevPage && page - prevPage > 1;

          return (
            <div key={page} className="flex items-center">
              {showDots && (
                <span aria-hidden="true" className="px-2 text-gray-400 text-sm">
                  ...
                </span>
              )}

              <button
                type="button"
                aria-current={currentPage === page ? "page" : undefined}
                aria-label={`Page ${page}`}
                onClick={() => onPageChange(page)}
                className={`
                  min-w-9 h-9
                  flex items-center justify-center
                  text-sm font-medium
                  rounded-lg transition
                  focus:outline-none focus:ring-2 focus:ring-black
                  ${
                    currentPage === page
                      ? "bg-black text-white shadow"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {page}
              </button>
            </div>
          );
        })}

        <button
          type="button"
          aria-label="Next page"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 transition focus:outline-none focus:ring-2 focus:ring-black"
        >
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};
