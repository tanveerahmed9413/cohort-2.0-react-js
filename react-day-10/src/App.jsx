import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Pontact" element={<Contact />} />
        </Routes>
      
    </div>
  );
};

export default App;
