import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Card from "./Card";

const RightSidebar = () => {
  const movies = [
  {
    banner: "https://images.unsplash.com/photo-1767173079068-532d49e30ef6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
    name: "Dark",
    duration: "50 min",
    season: "S-1 EP-3"
  },
  {
    banner: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80",
    name: "Breaking Bad",
    duration: "47 min",
    season: "S-1 EP-5"
  },
  {
    banner: "https://plus.unsplash.com/premium_photo-1687118731563-ce48ca657778?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    name: "Money Heist",
    duration: "45 min",
    season: "S-1 EP-5"
  },
  {
    banner: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
    name: "Stranger Things",
    duration: "55 min",
    season: "S-1 EP-4"
  },
  {
    banner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    name: "Loki",
    duration: "50 min",
    season: "S-1 EP-2"
  },
  {
    banner: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    name: "Game of Thrones",
    duration: "60 min",
    season: "S-1 EP-8"
  },
  {
    banner: "https://plus.unsplash.com/premium_photo-1671288795359-5a505b9c6663?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
    name: "Peaky Blinders",
    duration: "58 min",
    season: "S-1 EP-6"
  },
  {
    banner: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    name: "The Boys",
    duration: "55 min",
    season: "S-1 EP-4"
  },
  {
    banner: "https://plus.unsplash.com/premium_photo-1760877449066-47f4208e14e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
    name: "Narcos",
    duration: "49 min",
    season: "S-1 EP-3"
  },
  {
    banner: "https://plus.unsplash.com/premium_photo-1663837827386-2eb667eca095?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sherlock",
    duration: "90 min",
    season: "S-1 EP-4"
  }
];


  return (
    <div className="w-[75%]  bg-black  px-3 py-5">
      <Navbar />
      <Home />
        <h1 className="text-3xl text-white py-3.5 mt-2 text-balance font-black">Continue Watching</h1>
      <div className="mt-4 py-4 flex  gap-4 overflow-x-auto snap-x snap-mandatory">
        {movies.map((elm, idx) => (
          <div className="snap-start ">
            <Card key={idx} data={elm} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
