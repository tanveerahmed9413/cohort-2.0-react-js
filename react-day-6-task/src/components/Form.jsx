import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [allData, setAllData] = useState([])

  let formHandler = (e)=>{
    e.preventDefault()
    let allUser = [...allData]
    allUser.push({fullName,phoneNumber})
    setAllData(allUser)

    console.log('hello ji form lock ho gaya hai ');

    setFullName('')
    setPhoneNumber('')
    
  }
  let deleteHandler = (index)=>{
    let newData = [...allData]
    newData.splice(index,1)
    setAllData(newData)
  }

  return (
    <>
    <div className="py-8 px-4 items-center justify-center ">
      <form onSubmit={(e)=>{
          formHandler(e)
      }}
      className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white shadow-xl">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Contact
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-white/80"> Name </label>
          <input
            type="text"
            required
            placeholder="Enter contact name"
            className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400  placeholder:text-white/50"
            value={fullName}
            onChange={(e)=>{
              setFullName(e.target.value)
            }}
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-sm mb-1 text-white/80"> Phone Number </label>
          <input
            type="text"
            required
            placeholder="Enter phone number"
            className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400  placeholder:text-white/50"
            value={phoneNumber}
            onChange={(e)=>{
              setPhoneNumber(e.target.value)
            }}
          />
        </div>

        {/* Button */}
        <button
          className="w-full py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold tracking-wide">
          Save Contact
        </button>
      </form>
    </div>
    <div className="py-10 grid grid-col-3 gap-4 h-fit">
            {allData.map((elm,idx)=>{
              return(
                  <div
                  key={idx}
        className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-full max-w-sm  shadow-lg text-white">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{elm.fullName}</h3>
          <p className="text-sm text-white/70">📞 {elm.phoneNumber}</p>
        </div>

        <button
        onClick={()=>{
          deleteHandler(idx)
        }}
          className="px-3 py-1.5 rounded-lg text-sm cursor-pointer bg-red-500 hover:bg-red-600 active:scale-95 transition">
          Delete
        </button>
      </div>
              )
            })}
    </div>
    </>
  );
};

export default Form;
