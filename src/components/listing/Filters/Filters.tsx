import { CategoryFilter } from "./sections/CategoryFilter";
import { SearchBar } from "./sections/SearchBar";
import Rating from "./sections/Rating";

export const Filters = () => {
  return (
    <section
      aria-labelledby="filters-heading"
      className="grid md:grid-cols-6 lg:grid-cols-7 gap-4 mb-6"
    >
      <h2 id="filters-heading" className="sr-only">
        Filters
      </h2>

      <div className="col-span-2 lg:col-span-3">
        <SearchBar />
      </div>
      <div className="col-span-2 lg:col-span-3">
        <CategoryFilter />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <Rating />
      </div>
    </section>
  );
};
