import React from "react";
import { useState } from "react";


const App = () => {
  const [username, setuser] = useState("");
  const [email, setemail] = useState("");
  const [alluser, setalluser] = useState([]);

  let formHandler = (e) => {
    e.preventDefault();
    let newUsers = [...alluser];
    newUsers.push({ username, email });
    setalluser(newUsers);

    console.log(newUsers);

    setuser("");
    setemail("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          required
          value={username}
          onChange={(e) => {
            setuser(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <div>
        {alluser.map((elm, idx) => {
          return (
            <div className="flex gap-5 bg-re-d-400 py-3 px-2 ">
              <h1>{elm.username}</h1>
              <h1>{elm.email}</h1>
            </div>
          );
        })}
      </div>
    </div>
    

  );
};

export default App;
