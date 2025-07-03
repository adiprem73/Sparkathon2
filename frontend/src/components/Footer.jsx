import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Footer columns */}
          {[
            {
              title: "Customer Service",
              links: ["Help", "Track Orders", "Returns", "Product Recalls", "Store Directory"],
            },
            {
              title: "Get to Know Us",
              links: ["Our Company", "Careers", "Walmart Business", "Sell on Walmart.com", "Press Center"],
            },
            {
              title: "Walmart Services",
              links: ["Pharmacy", "Money Services", "Protection Plans", "Get the Walmart App", "Gift Cards"],
            },
            {
              title: "Privacy & Security",
              links: ["Privacy Notice", "Terms of Use", "Tax Exempt Program", "California Supply Chain Act", "Your Privacy Choices"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-800 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* App download section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Download the App</h3>
            <div className="flex flex-col space-y-3">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <i className="fab fa-apple text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <i className="fab fa-google-play text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <i className="fab fa-cc-visa text-2xl text-blue-600"></i>
              <i className="fab fa-cc-mastercard text-2xl text-red-500"></i>
              <i className="fab fa-cc-amex text-2xl text-blue-400"></i>
              <i className="fab fa-cc-paypal text-2xl text-blue-800"></i>
            </div>
            <div className="flex items-center space-x-4">
              {["facebook", "twitter", "instagram", "pinterest"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-gray-600">
                  <i className={`fab fa-${social} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p className="mb-2">© 2025 Walmart. All rights reserved.</p>
            <p>
              The trademarks Walmart and the Walmart Spark design are
              registered trademarks of Walmart Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;