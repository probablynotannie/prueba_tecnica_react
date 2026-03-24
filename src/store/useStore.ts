import { create } from "zustand";

interface Store {
  search: string;
  category: string;

  minRating: number;
  inStockOnly: boolean;

  setSearch: (value: string) => void;
  setCategory: (value: string) => void;

  setMinRating: (value: number) => void;
  setInStockOnly: (value: boolean) => void;
}
export const useStore = create<Store>((set) => ({
  search: "",
  category: "all",

  minRating: 0,
  inStockOnly: false,

  setSearch: (value) => set({ search: value }),
  setCategory: (value) => set({ category: value }),

  setMinRating: (value) => set({ minRating: value }),
  setInStockOnly: (value) => set({ inStockOnly: value }),
}));
