import React from "react";
import ProductCard from "./ProductCard";

const FlashDeals = () => {
  // Flash deals data with countdown
  const flashDeals = [
    {
      id: 17,
      name: "Beats Studio Pro Wireless Headphones",
      price: 199.99,
      originalPrice: 349.99,
      rating: 4.6,
      image: "https://readdy.ai/api/search-image?query=Beats%20Studio%20Pro%20Wireless%20Headphones%20in%20matte%20black%20on%20a%20minimalist%20light%20gray%20background%2C%20product%20photography%20with%20soft%20shadows%2C%20high%20resolution%20detailed%20image%20of%20premium%20over-ear%20headphones%20with%20iconic%20design&width=300&height=300&seq=17&orientation=squarish",
      endTime: new Date(Date.now() + 3600000), // 1 hour from now
    },
    // ... other flash deals
  ];

  return (
    <section className="mb-10 bg-gradient-to-r from-red-600 to-red-500 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <i className="fas fa-bolt text-yellow-400 text-xl mr-2"></i>
          <h2 className="text-xl font-bold text-white">Flash Deals</h2>
        </div>
        <a
          href="#"
          className="text-white hover:text-yellow-200 text-sm font-medium cursor-pointer inline-flex items-center"
        >
          View all <i className="fas fa-chevron-right text-xs ml-1"></i>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {flashDeals.map((product) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} isFlashDeal={true} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashDeals;