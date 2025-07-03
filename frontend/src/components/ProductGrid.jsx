import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ title, startIndex = 0, endIndex = 8 }) => {
  // Product grid data
  const products = [
    {
      id: 9,
      name: "LEGO Star Wars The Mandalorian Set",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.8,
      image: "https://readdy.ai/api/search-image?query=LEGO%20Star%20Wars%20The%20Mandalorian%20Set%20on%20a%20minimalist%20light%20gray%20background%2C%20product%20photography%20with%20soft%20shadows%2C%20high%20resolution%20detailed%20image%20of%20colorful%20building%20blocks%20set%20with%20minifigures&width=300&height=300&seq=9&orientation=squarish",
    },
    // ... other products
  ];

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer inline-flex items-center"
        >
          View all <i className="fas fa-chevron-right text-xs ml-1"></i>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(startIndex, endIndex).map((product) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;