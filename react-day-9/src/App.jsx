import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

const App = () => {

  const [allpokimone, setAllpokimone] = useState([]);





  let pokiData = async () => {
    let res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    setAllpokimone(res.data.results);
    console.log(res.data.results);
  };

  useEffect(function(){
    pokiData()
  },[])

  return (
    <div>
      <div className="flex justify-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVWqg-0SP8o52YfeyuMeiZPakL0k1TrRKFw&s" alt="" />
      </div>



        <div className="px-4 py-7 flex gap-3 flex-wrap items-center justify-center">
          {allpokimone.map((poki,idx)=>{
          return <div key={idx} className=" py-6">
            <UserCard key={idx } poki={poki} idx={idx + 1} />
          </div>
        })}
        </div>
      
    </div>
  );
};

export default App;
