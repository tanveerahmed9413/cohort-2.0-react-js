import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");

  let localData  = JSON.parse(localStorage.getItem('all-users') )|| []

  const [allUsers, setAllUsers] = useState(localData);



  let formSubmitHandler = (e) => {
    e.preventDefault();

    let newUsers = [...allUsers];
    newUsers.push({ name, imgUrl, role, desc });
    setAllUsers(newUsers);
    localStorage.setItem('all-users',JSON.stringify(newUsers))

    

    setName("");
    setImgUrl("");
    setRole("");
    setDesc("");
  };

  let deleteHandler = (idx) => {
    let copyAllUsers = [...allUsers];
    let cnf = confirm('are you want to sure  delete ')
    if(cnf){
      copyAllUsers.splice(idx, 1);
    }
    
    
    setAllUsers(copyAllUsers);

    localStorage.setItem('all-users',JSON.stringify(copyAllUsers))
  };

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
            return (
              <div
                key={idx}
                className="card   border-2 border-blue-400  items-center text-center w-[19vw] py-5 px-4 text-black bg-white flex flex-col gap-2 self-start"
              >
                <div className="h-24 w-24">
                  <img
                    className="h-24 w-24 rounded-full border object-cover"
                    src={elm.imgUrl}
                    alt="this is a user image"
                  />
                </div>

                <div className="name text-2xl font-bold">{elm.name}</div>
                <div className="role text-blue-500 text-lg font-semibold">
                  {elm.role}
                </div>
                <div className="desc text-xs text-center font-medium px-2 ">
                  {elm.desc}
                </div>
                <button
                  onClick={() => {
                    deleteHandler(idx);
                  }}
                  className="cursor-pointer text-white px-4 py-2 bg-red-500 active:scale-95 font-semibold text-balance rounded"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
