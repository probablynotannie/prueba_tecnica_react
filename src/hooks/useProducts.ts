import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";
import type { Product } from "../types/product";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};