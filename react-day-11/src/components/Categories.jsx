import React from "react";

const categories = [
  "Technology",
  "Lifestyle",
  "Arts & Culture",
  "Design",
  "Entertainment",
  "Education",
];

const Categories = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-16">
      <h2 className="text-xl font-semibold mb-8 text-center">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl text-center cursor-pointer hover:shadow-md transition"
          >
            <p className="font-medium">{cat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
