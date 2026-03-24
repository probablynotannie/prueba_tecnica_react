import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/product";
import { useCartStore } from "../../store/useCartStore";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cart } = useCartStore();
  const isInCart = cart.some((item) => item.id === product.id);
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <article className="bg-white h-fit rounded-2xl shadow-sm hover:shadow-xl transition p-4 relative group">
      <button
        type="button"
        onClick={() => navigate(`/product/${product.id}`)}
        className="absolute inset-0 z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black rounded-2xl"
        aria-label={`View details of ${product.title}`}
      />

      <div className="flex items-center gap-1 absolute top-2 left-2 z-20">
        {product.availabilityStatus && (
          <span
            className={`text-xs px-2 py-1 rounded-full
              ${
                product.availabilityStatus.toLowerCase() === "in stock"
                  ? "bg-green-100 text-green-600"
                  : product.availabilityStatus.toLowerCase() === "low stock"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-red-100 text-red-600"
              }
            `}
          >
            {product.availabilityStatus}
          </span>
        )}

        <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        className="h-44 mx-auto object-contain transition group-hover:scale-105"
      />

      <div className="mt-3 space-y-1">
        <h2 className="text-sm font-medium line-clamp-2">{product.title}</h2>

        <p className="text-slate-300 text-sm flex gap-1 items-center">
          <FaStar aria-hidden="true" className="text-orange-400" />
          <span>{product.rating}</span>
        </p>

        {product.brand && (
          <p className="text-xs text-gray-500">{product.brand}</p>
        )}

        <div className="flex items-center gap-2 mt-1">
          <p className="text-lg font-bold text-green-600">
            {discountedPrice.toFixed(2)} €
          </p>

          <p className="text-sm text-gray-400 line-through">
            {product.price} €
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();

          if (isInCart) {
            removeFromCart(product.id);
            toast.error(`${product.title} removed from cart.`);
          } else {
            addToCart(product);
            toast.success(`${product.title} added to cart.`);
          }
        }}
        aria-pressed={isInCart}
        aria-label={
          isInCart
            ? `Remove ${product.title} from cart`
            : `Add ${product.title} to cart`
        }
        className={`z-20 relative
          mt-3 w-full py-2.5 rounded-xl text-sm font-medium
          transition-all duration-200 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-black cursor-pointer
          ${
            isInCart
              ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
              : "bg-black text-white hover:opacity-90"
          }
        `}
      >
        {isInCart ? "In cart" : "Add to cart"}
      </button>
    </article>
  );
};
