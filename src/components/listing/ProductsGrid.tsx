import type { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export const ProductsGrid = ({ products }: Props) => {
  return (
      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
  );
};
