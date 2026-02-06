import Categories from "../components/Categories";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-10">
      
      {/* Hero Section */}
      <div className="h-screen">
        <Hero />
      </div>
     

      {/* Categories */}
     <Categories />

      {/* Blog Section */}
     <div className="py-5">
       <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlogCard 
          title="The Relevance of Cyber Security"
          image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
        />
        <BlogCard 
          title="The Pace of Life"
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        />
      </div>
      <div className="  text-center">
        <button className=" px-5 py-4 border cursor-pointer bg-white text-orange-500 capitalize font-black text-xl rounded "><Link to='/collection'>Explore Collection</Link></button>
      </div>
     </div>

     {/* Footer */}
     <div>
      <Footer />
     </div>

    </div>
  );
};


export default Home