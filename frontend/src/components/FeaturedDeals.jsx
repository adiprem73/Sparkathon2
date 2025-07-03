import React from "react";
import ProductCard from "./ProductCard";

const FeaturedDeals = () => {
  // Featured deals data
  const featuredDeals = [
    {
      id: 1,
      name: "Apple AirPods Pro (2nd Generation)",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      image: "https://readdy.ai/api/search-image?query=Apple%20AirPods%20Pro%20white%20wireless%20earbuds%20on%20a%20minimalist%20light%20gray%20background%2C%20product%20photography%20with%20soft%20shadows%2C%20high%20resolution%20detailed%20image%20of%20premium%20earbuds&width=300&height=300&seq=1&orientation=squarish",
    },
    // ... other featured deals
  ];

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Featured Deals</h2>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer inline-flex items-center"
        >
          View all <i className="fas fa-chevron-right text-xs ml-1"></i>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featuredDeals.slice(0, 4).map((product) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDeals;