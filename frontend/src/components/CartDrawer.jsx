import React from 'react';

export default function CartDrawer({
  open,
  onClose,
  items = [],
  total = 0,
  onRemove,
  onUpdate,
  onCheckout,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
     
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

     
      <div
        className="ml-auto w-full max-w-lg bg-white h-full p-6 overflow-auto relative z-50"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500">
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-600">Cart is empty</p>
        ) : (
          <div>
            {items.map((it) => (
              <div key={it._id} className="flex gap-4 items-center py-3 border-b">
                <img
                  src={it.productId.image || 'https://via.placeholder.com/80'}
                  alt="p"
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{it.productId.name}</div>
                      <div className="text-sm text-gray-500">
                        ₹{it.productId.price}
                      </div>
                    </div>
                    <div className="text-sm">
                      ₹{(it.productId.price * it.qty).toFixed(2)}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={it.qty}
                      onChange={(e) =>
                        onUpdate(it._id, Number(e.target.value))
                      }
                      className="w-20 border rounded px-2 py-1"
                    />
                    <button
                      onClick={() => onRemove(it._id)}
                      className="text-red-600 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-4 flex justify-between items-center">
              <div className="text-lg font-semibold">Total</div>
              <div className="text-lg font-bold">₹{total.toFixed(2)}</div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={onCheckout}
                disabled={loading}
                className="flex-1 px-4 py-2 rounded bg-indigo-600 text-white"
              >
                Checkout
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded border"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
