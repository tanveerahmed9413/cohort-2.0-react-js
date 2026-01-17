import React, { useState } from 'react'
import Card from './components/Card'


const App = () => {
 const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  let formSubmitHandler = (e) => {
    e.preventDefault();

    let newUsers = [...allUsers];
    newUsers.push({ name, imgUrl, role, desc });
    setAllUsers(newUsers);

    console.log(newUsers);
    console.log("hello");

    setName("");
    setImgUrl("");
    setRole("");
    setDesc("");
  };

  let deleteHandler = (idx)=>{
      let copyAllUsers = [...allUsers]
       copyAllUsers.splice(idx,1)
       setAllUsers(copyAllUsers)
  }

  return (
    <>
      <div className="flex flex-col  w-full">
        <form
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}
          className="grid grid-cols-2 justify-between w-full"
        >
          <input
            type="text"
            placeholder="Enter Your Name "
            className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Enter Image URL "
            className="border-2 text-xl font-semibold px-5 py-2 rounded m-2"
            value={imgUrl}
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Enter Your Role "
            className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 "
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Enter  Description"
            className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 "
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />

          <button className=" border-2 text-xl font-semibold px-5 py-2 m-2 rounded bg-green-500 cursor-pointer active:scale-95 ">
            Create User
          </button>
        </form>

        <div className="px-4 py-8 gap-4 flex flex-wrap">
          {allUsers.map(function (elm, idx) {
            return <Card  
             elm={elm}
             deleteHandler={deleteHandler}  
             idx={idx}
             
             />
          })}
        </div>
      </div>
      </>
  );
}


export default App
