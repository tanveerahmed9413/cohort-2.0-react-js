import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex border rounded-xl gap-2 justify-between items-center bg-blue-400 px-2 py-2.5'>
      <div className='flex gap-2.5 items-center px-6 py-3 rounded-xl bg-[#251F33] backdrop-blur-md border border-white/20 '>
       <FaSearch /> <input type="text" className='"bg-transparent px-2 text-white placeholder:text-white/60 focus:outline-none' placeholder='Search for films, directors, or actors' />
      </div>
      <div className="div flex gap-6 text-2xl">
        <IoNotifications />
      <FaRegUserCircle />
      </div>

    </div>
  )
}

export default Navbar
