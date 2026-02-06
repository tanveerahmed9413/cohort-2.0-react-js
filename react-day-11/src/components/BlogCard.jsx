import React from "react";

const BlogCard = ({ title, image }) => {
  return (
    <div className="bg-white flex gap-3 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img src={image} alt="" className="h-40 w-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          Short description goes here...
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
