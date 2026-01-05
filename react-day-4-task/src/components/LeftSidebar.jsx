import React from "react";
import { FaFilm } from "react-icons/fa";
import SidebarText from "./SidebarText";

const LeftSidebar = () => {
  return (
    <div className="w-[25%]   bg-blue-400 py-2 px-3">
      <div className="h-full  rounded-2xl py-3 bg-[#251F33] backdrop-blur-md border border-white/20 p-5 flex flex-col gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <FaFilm className="text-red-500" />
          <span>Drameeo</span>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-3 text-white/80 text-sm font-bold">
          <p className="text-xs uppercase text-white/40">Menu</p>

          <SidebarText text="Home" />
          <SidebarText text="Explore" />
          <SidebarText text="Genres" />
          <SidebarText text="Favourites" />

          <hr className="border-white/20 my-2" />

          <p className="text-xs uppercase text-white/40">Library</p>

          <SidebarText text="Continue Watching" />
          <SidebarText text="Recently Added" />
          <SidebarText text="My Collection" />
          <SidebarText text="Downloads" />

          <hr className="border-white/20 my-2" />

          <SidebarText text="Settings" />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
