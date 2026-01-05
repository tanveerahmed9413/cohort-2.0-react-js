import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [fullName, setfullName] = useState('')
    const [email, setemail] = useState('')
    const [Alluser, setAlluser] = useState([])

    let submitHandler = (e)=>{
        e.preventDefault()
        console.log('form sub jj');
        let newUser = [...Alluser]
        newUser.push({fullName,email})
        setAlluser(newUser)
        
    }
  return (
    <div>
      <div className="contact">
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input type="text"
            placeholder='Enter FullName'
            value={fullName}
            onChange={(e)=>{
                setfullName(e.target.value);
                
            }}

            />
            <input type="text"
             placeholder='Enter Email' 
             value={email}
             onChange={(e)=>{
                setemail(e.target.value);
                
             }}

             />
            <button> Submit Data </button>
        </form>


            <div>
               {Alluser.map((e,idx)=>{
                return (
                  <div key={idx}>
                    <h1 >{e.fullName}</h1>
                    <h1>{e.email}</h1>
                  </div>
                )
             })}
            </div>









      </div>
    </div>
  )
}

export default Contact
