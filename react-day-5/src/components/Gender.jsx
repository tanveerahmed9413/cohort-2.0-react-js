
import React, { useState } from 'react'
import Baathroom from './Baathroom'

const Gender = () => {

    const [wash, setwash] = useState('Male')

    let CngGender = ()=>{
        if(wash == 'Male'){
            setwash('Female')
        }else{
            setwash('Male')
        }
    }
  return (
    <div>
        <h2 className='text-5xl py-5'>{wash}</h2>
      <button onClick={CngGender} className='bg-emerald-300 px-3 py-2'>change gender</button>
      <div>
        <Baathroom user={wash}/>
      </div>
    </div>
  )
}

export default Gender

