import React from "react";

const Header = ({ isScrolled, location, searchQuery, setSearchQuery, setShowCartPreview, setShowNavDrawer }) => {
  return (
    <header className={`bg-blue-600 text-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button
              onClick={() => setShowNavDrawer(true)}
              className="mr-4 cursor-pointer"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            <div className="text-2xl font-bold">
              <span className="text-white">Walmart</span>
            </div>
          </div>

          {/* Center section - Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full bg-white rounded-4xl">
              <input
                type="text"
                placeholder="Search everything at Walmart online and in store"
                className="w-full py-2 pl-4 pr-10 rounded-full border-none text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full px-3 text-blue-600 cursor-pointer">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center cursor-pointer">
              <i className="fas fa-map-marker-alt mr-1"></i>
              <span className="text-sm">{location}</span>
            </div>
            <button className="cursor-pointer">
              <i className="fas fa-user text-xl"></i>
            </button>
            <button
              className="relative cursor-pointer"
              onClick={() => setShowCartPreview(true)}
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-blue-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden bg-blue-600 px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Walmart"
            className="w-full py-2 pl-4 pr-10 rounded-full border-none text-sm text-gray-800 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-0 top-0 h-full px-3 text-blue-600 cursor-pointer">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-white shadow-md overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex py-4 space-x-8">
            {[
              { icon: "fa-tag", name: "Deals", color: "from-yellow-400 to-yellow-500", textColor: "text-blue-900" },
              { icon: "fa-arrow-down", name: "Rollback", color: "from-red-500 to-red-600", textColor: "text-white" },
              ...categories.map(cat => ({ 
                icon: cat.icon, 
                name: cat.name, 
                color: "from-blue-50 to-blue-100", 
                textColor: "text-blue-600" 
              }))
            ].map((item, index) => (
              <button 
                key={index} 
                className="group flex flex-col items-center min-w-[5rem] cursor-pointer transition-transform hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${item.color} ${item.textColor} rounded-xl p-3 mb-2 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <i className={`fas ${item.icon} text-lg`}></i>
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

// Categories data
const categories = [
  { id: 1, name: "Groceries", icon: "fa-shopping-basket" },
  { id: 2, name: "Electronics", icon: "fa-tv" },
  { id: 3, name: "Fashion", icon: "fa-tshirt" },
  { id: 4, name: "Home", icon: "fa-home" },
  { id: 5, name: "Toys", icon: "fa-gamepad" },
  { id: 6, name: "Pharmacy", icon: "fa-prescription-bottle-alt" },
  { id: 7, name: "Sports", icon: "fa-football-ball" },
  { id: 8, name: "Auto", icon: "fa-car" },
  { id: 9, name: "Patio & Garden", icon: "fa-leaf" },
  { id: 10, name: "Baby", icon: "fa-baby" },
];

export default Header;