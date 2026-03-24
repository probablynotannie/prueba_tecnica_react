import { useCartStore } from "../../store/useCartStore";
import { useEffect, useRef } from "react";
import { FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const CartPopover = () => {
  const {
    cart,
    isOpen,
    toggleCart,
    removeFromCart,
    increment,
    decrement,
    clearCart,
  } = useCartStore();

  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        toggleCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggleCart]);

  const total = cart.reduce((acc, item) => {
    const discountedPrice = item.price * (1 - item.discountPercentage / 100);
    return acc + discountedPrice * item.quantity;
  }, 0);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Shopping cart"
      className="absolute right-0 mt-1 w-96 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <FiShoppingCart aria-hidden />
          Cart
        </div>

        <button
          onClick={toggleCart}
          aria-label="Close cart"
          className="p-1 rounded hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-black"
        >
          <FiX />
        </button>
      </div>
      <div className="max-h-80 overflow-y-auto px-4 py-3 flex flex-col gap-4">
        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-gray-400 text-sm gap-2">
            <FiShoppingCart size={22} aria-hidden />
            <p>Your cart is empty</p>
          </div>
        )}

        <div className="flex flex-col divide-y divide-slate-100">
          {cart.map((item) => {
            const discountedPrice =
              item.price * (1 - item.discountPercentage / 100);

            return (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  toggleCart();
                }}
                className="flex rounded-xl group transition hover:bg-slate-100 p-2 gap-3 items-center cursor-pointer"
              >
                <img
                  src={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  className="h-14 w-14 object-contain bg-gray-50 rounded-lg"
                />

                <div className="flex-1">
                  <p className="text-xs font-medium line-clamp-2">
                    {item.title}
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm font-semibold text-green-700">
                      {discountedPrice.toFixed(2)} €
                    </p>

                    <p className="text-xs text-gray-400 line-through">
                      {item.price} €
                    </p>

                    {item.discountPercentage > 0 && (
                      <span className="text-[10px] bg-red-100 text-red-500 px-2 py-0.5 rounded">
                        -{Math.round(item.discountPercentage)}%
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        decrement(item.id);
                      }}
                      aria-label={`Decrease quantity of ${item.title}`}
                      className="p-1 rounded bg-slate-50 group-hover:bg-slate-200 border border-slate-100 transition hover:scale-110 focus:ring-2 focus:ring-black"
                    >
                      <FiMinus size={12} />
                    </button>

                    <span className="text-sm">{item.quantity}</span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        increment(item.id);
                      }}
                      aria-label={`Increase quantity of ${item.title}`}
                      className="p-1 rounded bg-slate-50 group-hover:bg-slate-200 border border-slate-100 transition hover:scale-110 focus:ring-2 focus:ring-black"
                    >
                      <FiPlus size={12} />
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {(discountedPrice * item.quantity).toFixed(2)} €
                  </p>

                  <p className="text-[11px] text-green-700">
                    Saving{" "}
                    {((item.price - discountedPrice) * item.quantity).toFixed(
                      2,
                    )}{" "}
                    €
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(item.id);
                  }}
                  aria-label={`Remove ${item.title} from cart`}
                  className="cursor-pointer text-gray-300 hover:text-red-500 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {cart.length > 0 && (
        <div className="px-4 py-4 border-t border-slate-200 space-y-3">
          <div
            className="flex justify-between text-sm font-semibold"
            aria-live="polite"
          >
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <button className="cursor-pointer w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition text-sm focus:ring-2 focus:ring-black">
            Checkout
          </button>
          <div className="flex items-center justify-center">
            <button
              onClick={clearCart}
              className="cursor-pointer text-xs text-gray-400 hover:text-red-500 transition"
            >
              Empty cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
