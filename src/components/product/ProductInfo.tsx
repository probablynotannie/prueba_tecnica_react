import type { Product } from "../../types/product";
import { FiStar } from "react-icons/fi";
import { useCartStore } from "../../store/useCartStore";
import { FaTruck } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

interface Props {
  product: Product;
}

export const ProductInfo = ({ product }: Props) => {
  const { addToCart, toggleCart, removeFromCart, cart } = useCartStore();

  const isInCart = cart.some((item) => item.id === product.id);
  const cartItem = cart.find((item) => item.id === product.id);

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <section aria-labelledby="product-title" className="flex flex-col">
      <h1 id="product-title" className="text-3xl font-bold mb-2">
        {product.title}
      </h1>

      <div
        role="img"
        aria-label={`Rating: ${product.rating} out of 5`}
        className="flex items-center gap-1 mb-3"
      >
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            aria-hidden="true"
            size={16}
            className={
              i < Math.round(product.rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
        <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
      </div>

      <p className="text-gray-600 mb-4">{product.description}</p>

      <div className="flex items-center gap-3 mb-4">
        <p className="text-2xl font-bold text-green-600">
          {discountedPrice.toFixed(2)} €
        </p>

        <p className="text-gray-400 line-through">{product.price} €</p>

        <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      <div className="text-sm text-gray-500 space-y-1 mb-4">
        {product.brand && <p>Brand: {product.brand}</p>}

        <p>Stock: {product.availabilityStatus}</p>

        {product.shippingInformation && (
          <p className="flex items-center gap-2">
            <FaTruck aria-hidden="true" className="text-blue-700" />
            <span>{product.shippingInformation}</span>
          </p>
        )}

        {product.warrantyInformation && (
          <p className="flex items-center gap-2">
            <FaShield aria-hidden="true" className="text-green-800" />
            <span>{product.warrantyInformation}</span>
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {product.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-xs px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          if (isInCart) {
            removeFromCart(product.id);
          } else {
            addToCart(product);
            toggleCart();
          }
        }}
        aria-pressed={isInCart}
        aria-label={
          isInCart
            ? `Remove ${product.title} from cart`
            : `Add ${product.title} to cart`
        }
        className={`w-full py-3 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-black ${
          isInCart
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-black hover:opacity-90 text-white"
        }`}
      >
        {isInCart ? "Remove from cart" : "Add to cart"}
      </button>

      {cartItem && (
        <p
          aria-live="polite"
          className="text-xs text-gray-400 mt-2 text-center"
        >
          In cart: {cartItem.quantity}
        </p>
      )}
    </section>
  );
};
