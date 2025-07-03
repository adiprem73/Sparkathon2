import React from "react";

const HeroCarousel = ({ currentSlide, setCurrentSlide }) => {
  // Hero carousel data
  const heroSlides = [
    {
      id: 1,
      title: "Summer Savings",
      subtitle: "Up to 50% off outdoor essentials",
      cta: "Shop Now",
      image: "https://readdy.ai/api/search-image?query=Summer%20outdoor%20patio%20furniture%20and%20grilling%20equipment%20arranged%20beautifully%20with%20vibrant%20colors%20against%20a%20blue%20sky%20background%2C%20promotional%20banner%20showing%20various%20summer%20items%20on%20sale%20with%20a%20modern%20clean%20aesthetic&width=1200&height=500&seq=21&orientation=landscape",
    },
    {
      id: 2,
      title: "Back to School",
      subtitle: "Everything your student needs",
      cta: "Save Big",
      image: "https://readdy.ai/api/search-image?query=Back%20to%20school%20supplies%20including%20colorful%20notebooks%2C%20backpacks%2C%20laptops%2C%20and%20stationery%20arranged%20in%20an%20appealing%20display%20against%20a%20light%20background%2C%20promotional%20banner%20showing%20educational%20items%20with%20a%20clean%20modern%20design&width=1200&height=500&seq=22&orientation=landscape",
    },
    {
      id: 3,
      title: "Tech Deals",
      subtitle: "Latest gadgets at unbeatable prices",
      cta: "Explore",
      image: "https://readdy.ai/api/search-image?query=Modern%20technology%20gadgets%20including%20smartphones%2C%20tablets%2C%20smartwatches%2C%20and%20wireless%20earbuds%20arranged%20in%20a%20sleek%20display%20against%20a%20gradient%20blue%20background%2C%20promotional%20banner%20showing%20premium%20electronics%20with%20a%20clean%20futuristic%20design&width=1200&height=500&seq=23&orientation=landscape",
    },
  ];

  return (
    <section className="mb-8 relative">
      <div className="rounded-lg overflow-hidden shadow-md">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative ${currentSlide === index ? "block" : "hidden"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="text-white p-6 md:p-12 max-w-md">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-4">{slide.subtitle}</p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors duration-300">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;