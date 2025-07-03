import React from "react";

const CartPreview = ({ showCartPreview, setShowCartPreview }) => {
  // Sample cart items data
  const cartItems = [
    {
      id: 1,
      name: "Apple AirPods Pro (2nd Generation)",
      price: 199.99,
      image: "https://readdy.ai/api/search-image?query=Apple%20AirPods%20Pro%20white%20wireless%20earbuds%20on%20a%20minimalist%20light%20gray%20background%2C%20product%20photography%20with%20soft%20shadows%2C%20high%20resolution%20detailed%20image%20of%20premium%20earbuds&width=300&height=300&seq=1&orientation=squarish",
    },
    // ... other cart items
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        showCartPreview ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-bold">Your Cart (3 items)</h3>
        <button
          onClick={() => setShowCartPreview(false)}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center py-4 border-b">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <h4 className="text-sm font-medium">{item.name}</h4>
              <div className="flex justify-between mt-1">
                <span className="text-blue-600 font-semibold">
                  ${item.price.toFixed(2)}
                </span>
                <div className="flex items-center border rounded">
                  <button className="px-2 py-1 text-gray-600 cursor-pointer">
                    -
                  </button>
                  <span className="px-2">1</span>
                  <button className="px-2 py-1 text-gray-600 cursor-pointer">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t bg-gray-50 absolute bottom-0 w-full">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold">$899.97</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Estimated tax:</span>
          <span className="font-semibold">$72.00</span>
        </div>
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total:</span>
          <span>$971.97</span>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-bold transition-colors duration-300">
          Checkout
        </button>
        <button className="w-full mt-2 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-full font-bold transition-colors duration-300">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPreview;