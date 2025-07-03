import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import FeaturedDeals from "./components/FeaturedDeals";
import FlashDeals from "./components/FlashDeals";
import PromotionalBanner from "./components/PromotionalBanner";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import CartPreview from "./components/CartPreview";
import NavDrawer from "./components/NavDrawer";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState("New York, 10001");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide for hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isScrolled={isScrolled}
        location={location}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setShowCartPreview={setShowCartPreview}
        setShowNavDrawer={setShowNavDrawer}
      />
      
      <NavDrawer 
        showNavDrawer={showNavDrawer}
        setShowNavDrawer={setShowNavDrawer}
      />

      <main className="container mx-auto px-4 py-6">
        <HeroCarousel 
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        
        <FeaturedDeals />
        <FlashDeals />
        <PromotionalBanner />
        <ProductGrid title="Recommended For You" />
        <ProductGrid title="More Top Deals" startIndex={4} endIndex={8} />
      </main>

      <button
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <CartPreview 
        showCartPreview={showCartPreview}
        setShowCartPreview={setShowCartPreview}
      />

      <MobileBottomNav />
      <Footer />
    </div>
  );
};

export default App;