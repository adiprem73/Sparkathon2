import React from "react";

const ProductCard = ({ product, isFlashDeal = false }) => {
  // Format price with discount badge
  const formatPrice = (price, originalPrice) => {
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
    return (
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-semibold text-lg">${price.toFixed(2)}</span>
          {originalPrice > price && (
            <span className="ml-2 text-xs bg-yellow-400 text-black font-bold px-1 py-0.5 rounded whitespace-nowrap">
              Save {discount}%
            </span>
          )}
        </div>
        {originalPrice > price && (
          <span className="text-gray-500 line-through text-sm">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>
    );
  };

  // Render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <i
            key={`full-${i}`}
            className="fas fa-star text-yellow-400 text-sm"
          ></i>
        ))}
        {halfStar && (
          <i className="fas fa-star-half-alt text-yellow-400 text-sm"></i>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <i
            key={`empty-${i}`}
            className="far fa-star text-yellow-400 text-sm"
          ></i>
        ))}
        <span className="text-xs text-gray-600 ml-1">
          ({(rating * 100).toFixed(0)})
        </span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 cursor-pointer">
          <i className="far fa-heart text-gray-600"></i>
        </button>
        {isFlashDeal && (
          <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-xs font-bold">
            Ends in: {formatTimeRemaining(product.endTime)}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 h-10">
          {product.name}
        </h3>
        <div className="mt-1 mb-2">{renderStars(product.rating)}</div>
        <div className="mt-auto">
          {formatPrice(product.price, product.originalPrice)}
          <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-full font-medium text-sm transition-colors duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function for flash deals
const formatTimeRemaining = (endTime) => {
  const now = new Date();
  const diff = endTime.getTime() - now.getTime();
  if (diff <= 0) return "Ended";
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default ProductCard;