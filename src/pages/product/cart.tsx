import React from "react";

type ProductType = {
  name: string;
  price: number;
  description: string;
  image: string;
  discount?: number;
  discountType?: string;
};

type CartProps = {
  open: boolean;
  onClose: () => void;
  cart: ProductType[];
};

const Cart: React.FC<CartProps> = ({ open, onClose, cart }) => {
  if (!open) return null;

  // Group products by name for quantity
  const summary = cart.reduce<Record<string, { item: ProductType; qty: number }>>(
    (acc, item) => {
      if (acc[item.name]) {
        acc[item.name].qty += 1;
      } else {
        acc[item.name] = { item, qty: 1 };
      }
      return acc;
    },
    {}
  );

  // Calculate total
  const total = Object.values(summary).reduce(
    (sum, { item, qty }) =>
      sum +
      qty *
        (item.discount
          ? item.price * (1 - item.discount / 100)
          : item.price),
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl font-bold"
          style={{ lineHeight: "1", width: "2.5rem", height: "2.5rem" }}
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-6 text-center border-b pb-3">Cart Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {Object.values(summary).map(({ item, qty }, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between border rounded-lg px-3 py-2 shadow-sm bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded border"
                    />
                    <div>
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        {item.discount ? (
                          <>
                            <span className="text-red-600 font-bold">
                              ₵{(item.price * (1 - item.discount / 100)).toFixed(2)}
                            </span>
                            <span className="line-through text-gray-400">
                              ₵{item.price.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span>₵{item.price.toFixed(2)}</span>
                        )}
                        {item.discountType && (
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
                            {item.discount}%
                            {item.discountType && ` ${item.discountType}`}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-400">Qty</span>
                    <span className="text-base font-bold">{qty}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold text-lg border-t pt-4">
              <span>Total</span>
              <span>₵{total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;