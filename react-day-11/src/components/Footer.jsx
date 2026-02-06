import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            TanVeer
          </h2>
          <p className="text-sm text-gray-400">
            Building modern web experiences with clean design and structured code.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link to="/collection" className="hover:text-orange-500">Collection</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Technology</li>
            <li className="hover:text-orange-500 cursor-pointer">Design</li>
            <li className="hover:text-orange-500 cursor-pointer">Lifestyle</li>
            <li className="hover:text-orange-500 cursor-pointer">Development</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Subscribe
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest updates and articles.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-white text-white rounded-l-lg focus:outline-none"
            />
            <button className="bg-orange-500 px-4 rounded-r-lg hover:bg-orange-600 transition">
              Go
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} TanVeer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
