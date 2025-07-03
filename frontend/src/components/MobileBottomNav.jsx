import React from "react";

const MobileBottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-40">
      {[
        { icon: "fa-home", text: "Home", active: true },
        { icon: "fa-th-large", text: "Categories" },
        { icon: "fa-search", text: "Search" },
        { icon: "fa-shopping-cart", text: "Cart", badge: 3 },
        { icon: "fa-user", text: "Account" },
      ].map((item, index) => (
        <button key={index} className="flex flex-col items-center px-2 cursor-pointer">
          <div className="relative">
            <i className={`fas ${item.icon} ${item.active ? "text-blue-600" : "text-gray-600"}`}></i>
            {item.badge && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-blue-800 text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </div>
          <span className={`text-xs mt-1 ${item.active ? "text-blue-600" : "text-gray-600"}`}>
            {item.text}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MobileBottomNav;