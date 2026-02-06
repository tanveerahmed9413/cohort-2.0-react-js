import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={image}
          alt={title}
          className="h-full object-contain hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-orange-500">
            ₹{price}
          </span>

          <button className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
