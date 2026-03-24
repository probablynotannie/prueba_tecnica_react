import { useProducts } from "../hooks/useProducts";
import { useStore } from "../store/useStore";
import { useState, useEffect } from "react";
import { Hero } from "../components/listing/sections/Hero";
import { Filters } from "../components/listing/Filters/Filters";
import { ProductsGrid } from "../components/listing/ProductsGrid";
import { Pagination } from "../components/listing/sections/Pagination";
import Error from "../components/listing/state/Error";
import SkeletonPlaceholder from "../components/listing/state/SkeletonPlaceholder";

export const Home = () => {
  const { data: products = [], isLoading, isError } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const { search, category, minRating } = useStore();
  const filteredProducts = products
    .filter((product): product is NonNullable<typeof product> =>
      Boolean(product),
    )
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      const matchesRating = product.rating >= minRating;

      return matchesSearch && matchesCategory && matchesRating;
    });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, minRating]);

  if (isLoading) {
    return <SkeletonPlaceholder />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Hero />
      <div className="p-6 bg-white/70 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <Filters />
        <ProductsGrid products={paginatedProducts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        {paginatedProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No products with this filter :(
          </p>
        )}
      </div>
    </>
  );
};
