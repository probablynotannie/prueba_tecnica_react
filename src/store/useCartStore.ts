import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  isOpen: boolean;

  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      isOpen: false,

      toggleCart: () =>
        set((state) => ({ isOpen: !state.isOpen })),

      addToCart: (product) => {
        const existing = get().cart.find(
          (item) => item.id === product.id
        );

        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: [
              ...get().cart,
              { ...product, quantity: 1 },
            ],
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter(
            (item) => item.id !== id
          ),
        });
      },

      increment: (id) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },

      decrement: (id) => {
        set({
          cart: get().cart
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);