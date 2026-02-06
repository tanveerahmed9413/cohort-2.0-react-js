import React from "react";

const Home = () => {
  return (
    <div className="pt-20 px-6 md:px-16  min-h-screen">
      
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          

          <h1 className="text-2xl md:text-5xl font-bold leading-tight mt-6">
            Designing Modern Web Experiences That Inspire & Convert
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            I share insights about design systems, frontend development,
            productivity, and building digital products that matter.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <img
              src="https://tanveerahmed9413.github.io/firstportfolio/tanveer2.jpg"
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Tanveer Ahmed</p>
              <p className="text-sm text-gray-500">January 2026</p>
            </div>
          </div>
        </div>

        {/* Right Featured Image Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt=""
              className="w-full h-[200px] md:h-[300px] object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
