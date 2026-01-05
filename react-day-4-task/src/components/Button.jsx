import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='px-3 py-1 rounded-xl bg-white/20 backdrop-blur-md border border-white/20'>{text}</button>
    </div>
  )
}

export default Button
