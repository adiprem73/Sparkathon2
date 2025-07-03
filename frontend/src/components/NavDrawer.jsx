import React from "react";

const NavDrawer = ({ showNavDrawer, setShowNavDrawer }) => {
  // Categories data
  const categories = [
    { id: 1, name: "Groceries", icon: "fa-shopping-basket" },
    { id: 2, name: "Electronics", icon: "fa-tv" },
    // ... other categories
  ];

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        showNavDrawer ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setShowNavDrawer(false)}
    >
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          showNavDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setShowNavDrawer(false)}
            className="text-white hover:text-gray-200"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-64px)]">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-blue-600"></i>
              </div>
              <div>
                <p className="font-medium">Sign in or create account</p>
                <p className="text-sm text-gray-600">
                  For faster checkout & order tracking
                </p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-medium text-gray-900">
              Departments
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-3"
              >
                <i className={`fas ${category.icon} text-blue-600 w-6`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          <div className="border-t py-2">
            <div className="px-4 py-2 text-sm font-medium text-gray-900">
              Account
            </div>
            {[
              { icon: "fa-box", text: "Orders" },
              { icon: "fa-heart", text: "Lists" },
              // ... other account items
            ].map((item, index) => (
              <button
                key={index}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-3"
              >
                <i className={`fas ${item.icon} text-blue-600 w-6`}></i>
                <span>{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;