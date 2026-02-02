import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between mb-10 font-bold px-6 py-8 text-center bg-amber-700 items-center'>
      <div className="left">Navbar</div>
      <div className='flex gap-6 '> 
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Project'>Project</Link>
      </div>
    </div>
  )
}

export default Nav
