import React from "react";

const PromotionalBanner = () => {
  return (
    <section className="mb-10">
      <div className="bg-blue-100 rounded-lg overflow-hidden shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
              Walmart+ Members
            </h2>
            <p className="text-blue-800 mb-4">
              Free shipping, no order minimum. Exclusive deals and free
              delivery.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full self-start transition-colors duration-300">
              Try it free
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://readdy.ai/api/search-image?query=Happy%20diverse%20family%20unpacking%20Walmart%20delivery%20boxes%20in%20a%20modern%20living%20room%2C%20showing%20convenience%20of%20home%20delivery%20service%2C%20bright%20and%20cheerful%20scene%20with%20blue%20shopping%20bags%20and%20cardboard%20boxes%20with%20Walmart%20style%20packaging&width=600&height=400&seq=24&orientation=landscape"
              alt="Walmart+ Membership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;