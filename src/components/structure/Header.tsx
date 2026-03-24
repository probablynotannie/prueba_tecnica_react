import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { CartPopover } from "../cart/CartPopover";
import { BsCart4 } from "react-icons/bs";

export const Header = () => {
  const { toggleCart, cart } = useCartStore();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-300 sticky top-0 z-60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="text-lg md:text-xl font-semibold tracking-tight focus:outline-none focus:ring-2 focus:ring-black rounded"
        >
          ReactShop
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-6 text-sm"
        >
          <Link
            to="/"
            className="hover:text-black text-gray-600 transition focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            Home
          </Link>
          <Link
            to="/"
            className="hover:text-black text-gray-600 transition focus:outline-none focus:ring-2 focus:ring-black rounded"
          >
            Products
          </Link>
        </nav>

        <div className="relative">
          <button
            type="button"
            onClick={toggleCart}
            aria-label={`Shopping cart with ${totalItems} item${
              totalItems !== 1 ? "s" : ""
            }`}
            aria-haspopup="dialog"
            className="relative cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/10 transition focus:outline-none focus:ring-2 focus:ring-black"
          >
            <BsCart4 aria-hidden="true" />

            {totalItems > 0 && (
              <span
                aria-live="polite"
                className="absolute -top-1 -right-1 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full"
              >
                {totalItems}
              </span>
            )}
          </button>

          <CartPopover />
        </div>
      </div>
    </header>
  );
};
