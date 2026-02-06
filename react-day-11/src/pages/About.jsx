import React from "react";

const About = () => {
  return (
    <div className="pt-28 py-20 px-6 md:px-16   min-h-screen">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            I'm Tanveer Ahmed, a passionate frontend developer focused on 
            building clean, responsive and user-friendly web applications.
            I enjoy combining traditional design principles with modern
            development tools like React and Tailwind CSS.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            My goal is to create digital experiences that are not only visually
            appealing but also functional and scalable.
          </p>

          <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Contact Me
          </button>
        </div>

        {/* Right Image */}
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <img
            src="https://tanveerahmed9413.github.io/firstportfolio/tanveer2.jpg"
            alt="profile"
            className="rounded-2xl w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-gray-600">
              Building responsive and modern user interfaces using React,
              JavaScript and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">UI Design</h3>
            <p className="text-gray-600">
              Creating clean layouts with strong typography, spacing and
              consistent design systems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Problem Solving</h3>
            <p className="text-gray-600">
              Writing structured, maintainable code and solving real-world
              application challenges.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
