import { useState, useEffect } from "react";
import type { Product } from "../../types/product";

interface Props {
  product: Product;
}

export const ProductImages = ({ product }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    setSelectedImage(product.thumbnail || product.images?.[0]);
  }, [product]);

  return (
    <section aria-label="Product images">
      <div className="bg-gray-50 rounded-xl p-6 flex justify-center">
        <img
          src={selectedImage}
          alt={product.title}
          className="h-80 object-contain transition duration-300"
        />
      </div>

      <div
        role="listbox"
        aria-label="Product image gallery"
        className="flex gap-2 mt-4 justify-center"
      >
        {product.images?.map((img, i) => (
          <button
            key={i}
            type="button"
            role="option"
            aria-selected={selectedImage === img}
            aria-label={`View image ${i + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`
              h-14 w-14 border rounded-lg p-1 transition
              focus:outline-none focus:ring-2 focus:ring-black
              ${
                selectedImage === img
                  ? "border-black"
                  : "border-gray-200 hover:border-gray-400"
              }
            `}
          >
            <img
              src={img}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>
    </section>
  );
};
