import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/product";

let firstLoad = true;

const fetchProduct = async (id: string): Promise<Product> => {
  if (firstLoad) {
    await new Promise((r) => setTimeout(r, 800));
    firstLoad = false;
  }
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Error fetching product");
  }
  return res.json();
};

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });
};
