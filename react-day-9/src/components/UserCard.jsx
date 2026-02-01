import React from "react";

const UserCard = ({ poki, idx }) => {
  const id = poki.url.split("/").filter(Boolean).pop();

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div
      className="cursor-pointer bg-[#1b1b1b] rounded-2xl border-2 border-blue-400 p-5 text-white
transition-all duration-300 ease-in-out
hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <p className="text-gray-300 font-semibold">#{idx}</p>
        <span className="h-4 w-4 bg-orange-400 rounded-full shadow-md shadow-orange-400"></span>
      </div>

      {/* Pokemon Image Circle */}
      <div className="flex justify-center mt-4">
        <div className="h-44 w-44 rounded-full bg-[#2b2b2b] flex items-center justify-center">
          <img className="h-36 object-contain" src={imgUrl} alt={poki.name} />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold mt-8 text-center uppercase">
        {poki.name}
      </h2>
    </div>
  );
};

export default UserCard;
