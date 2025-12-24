import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src="https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="nav">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Anout</a></li>
            <li><a href="">Coaches</a></li>
            <li><a href="">Evnets</a></li>
            <li><a href="">Contacts</a></li>
        </ul>
      </div>
      <button>Book Now</button>
    </div>
  )
}

export default Header
