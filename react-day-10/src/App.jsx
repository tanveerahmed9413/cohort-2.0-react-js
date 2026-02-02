import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import About from "./Pages/About";

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
