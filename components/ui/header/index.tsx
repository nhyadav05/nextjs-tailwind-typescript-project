import React from "react";

const Header: React.FC = () => {
  return (
  
      <header className="bg-white shadow-lg w-full fixed top-0 z-10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <a  className="text-xl font-bold text-gray-800">
                My Website
              </a>
            </div>
            <ul className="flex space-x-4">
              <li>
                <a 
                className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a
                  // href="/about"
                  className="text-gray-600 hover:text-gray-800"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  // href="/contact"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      

  );
};

export default Header;
