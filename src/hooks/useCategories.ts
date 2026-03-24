import { useQuery } from "@tanstack/react-query";

interface Category {
  slug: string;
  name: string;
  url: string;
}

const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch("https://dummyjson.com/products/categories");
  if (!res.ok) {
    throw new Error("Error fetching categories");
  }
  return res.json();
};

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};