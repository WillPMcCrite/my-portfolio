import { useState } from 'react';
import './index.css'




export default function Home() {
  const [showResume, setShowResume] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100 overflow-y-auto">
      {/* Navbar */}
      <nav className="w-full bg-white h-20 shadow-md flex items-center px-6">
        {/* Add logo/nav later */}
      </nav>

      {/* Main two-column layout */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-5rem)]">
        {/* Left side: About Me */}
        <div className="w-full md:w-3/5 bg-[#2B3A67] text-white p-16">
          <div className="max-w-2xl py-6">
            <h1 className="text-4xl font-bold mb-16">About Me</h1>
            <p className=" font-roboto text-lg leading-relaxed indent-8 py-12 ">
                I'm a software engineer and Auburn University graduate with a
                degree in Software Engineering. I have hands-on experience in both
                front-end and back-end development, contributing to full-stack applications
                and QA efforts for clients like Alloy Piping Products, Servis1st Bank, and 
                Kratos Defense. My technical skills include React, Typescript, Node.js, and 
                Tailwind CSS on the front end, with experience testing RESTful APIs using Postman and managing 
                data with SQLite on the back end. I'm also familiar with integrating Web APIs and developing 
                reliable, user-focused software that bridges functionality and user experience.
            </p>
            <button
            onClick={() => setShowResume(true)}
            className="mt-8 px-6 py-2 bg-white text-[#2B3A67] font-semibold rounded hover:bg-gray-200 transition"
            >
              View Resume
            </button>
          </div>

          <div className="flex justify-between items-center mt-10">
            <div className="bg-white p-2 rounded">
              <img src="/AlloyLogo.png" alt="Alloy Logo" className="h-20" />
            </div>
            <div className="bg-white p-2 rounded">
              <img src="/AubLogo.png" alt="Auburn Logo" className="h-20" />
            </div>
            <div className="bg-white p-2 rounded">
              <img src="/KratosLogo.png" alt="Kratos Logo" className="h-20" />
              </div>
            <div className="bg-white p-2 rounded">
              <img src="/OspreyLogo.png" alt="Osprey Logo" className="h-20" />
            </div>
          </div>

        </div>

        {/* Right side: Full image */}
        <div className="w-full md:w-2/5 relative overflow-hidden">
          <img
            src="/MyPhoto.jpg"
            alt="Portrait"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-4xl h-[80vh] p-6 rounded shadow-lg relative overflow-y-auto">
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
              </button>
              <iframe
                src="/WillMcCriteResume2025.pdf"
                className="w-full h-full"
                title="Resume"
              />
            </div>
          </div>
        )}



    </div>
  );
}
