import React, { useState } from 'react'


const Student = () => {
    const [marks, setmarks] = useState([33,44,53,99,25])
    function cnMarks(){
       let newMarks =  marks.map((elm)=>{
        
           if(elm > 95 ){
            return elm
           }else{
            return elm + 5
           }
        
        })
        setmarks(newMarks)
    }
  return (
    <div>
      {marks.map((elm,idx)=>{
        return <h3 key={idx}>student {idx + 1} = {elm} ({elm > 33 ? 'PASS' : 'FAIL'})</h3>
      })}

      <button onClick={cnMarks} className='p-2 bg-red-400'>give them grace</button>
    </div>
  )
}

export default Student
