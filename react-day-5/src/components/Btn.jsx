import React, { useState } from 'react'

const Btn = () => {
    const [count, setcount] = useState(0)
    let a = 1
    let Increase = ()=>{
        setcount(count + 1)
        
    }
    let Decrease = ()=>{
        setcount(count - 1)
    }
    let Reseat = ()=>{
        setcount(0) 
    }
    
  return (
    <div>
      <h1 className='text-3xl'>{count}</h1>
      <button onClick={Increase} className='px-3 py-2 bg-blue-300 rounded-xl  cursor-pointer     '>Increase</button>
      <button onClick={Reseat} className='px-3 py-2 bg-blue-300 rounded-xl  cursor-pointer     '>Reseat</button>
      <button onClick={Decrease} className='px-3 py-2 bg-blue-300 rounded-xl cursor-pointer '>Decrease</button>
    </div>
  )
}

export default Btn
