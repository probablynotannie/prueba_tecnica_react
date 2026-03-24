import { useStore } from "../store/useStore";

export const useFilteredProducts = (products: any[]) => {
  const { search, category, minRating } = useStore();

  return products.filter(Boolean).filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    const matchesRating = product.rating >= minRating;
    return matchesSearch && matchesCategory && matchesRating;
  });
};
