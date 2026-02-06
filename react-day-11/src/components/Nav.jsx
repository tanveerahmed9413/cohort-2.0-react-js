import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl  mx-auto px-10 py-5 flex justify-between items-center">
        
        <div className="text-2xl font-black text-orange-500">
          TanVeer
        </div>

        <div className="flex gap-8 font-black">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-gray-600 hover:text-orange-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-gray-600 hover:text-orange-500 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-gray-600 hover:text-orange-500 transition"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-gray-600 hover:text-orange-500 transition"
            }
          >
            Collection
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
