import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className='flex justify-between mb-20 font-black bg-amber-700 py-10 px-16'>
     <div className="left">Navbar</div>
     <div className="right flex gap-10 cursor-pointer"> 
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Product</Link>
      <Link to='/contact'>Contact</Link>
     </div>
    </div>
  )
}

export default Nav
