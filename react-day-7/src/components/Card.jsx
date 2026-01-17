import React, { useState } from "react";

const Card = (props) => {
  return (
    <div
      className="card   border-2 border-blue-400  items-center text-center w-[19vw] py-5 px-4 text-black bg-white flex flex-col gap-2 self-start"
    >
      <div className="h-24 w-24">
        <img
          className="h-24 w-24 rounded-full border object-cover"
          src={props.elm.imgUrl}
          alt="this is a user image"
        />
      </div>

      <div className="name text-2xl font-bold">{props.elm.name}</div>
      <div className="role text-blue-500 text-lg font-semibold">
        {props.elm.role}
      </div>
      <div className="desc text-xs text-center font-medium px-2 ">
        {props.elm.desc}
      </div>
      <button
      onClick={()=>{
        props.deleteHandler(props.idx)
      }}
       className="cursor-pointer text-white px-4 py-2 bg-red-500 active:scale-95 font-semibold text-balance rounded">
        Delete
      </button>
    </div>
  );
};

export default Card;
