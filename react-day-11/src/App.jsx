import { Routes,Route  } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Notfound from "./components/Notfound";
import Contact from "./pages/Contact";




const App = () => {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};


export  default App