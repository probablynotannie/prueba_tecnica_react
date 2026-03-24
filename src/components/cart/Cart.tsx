import { useCartStore } from "../../store/useCartStore";
import { FiTrash2 } from "react-icons/fi";

export const Cart = () => {
  const { cart, removeFromCart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">Your cart is empty</div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      <div className="flex flex-col divide-y">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4 gap-4"
          >
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              aria-label={`Remove ${item.title} from cart`}
              className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
