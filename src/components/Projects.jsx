import React from "react";
import Netflix from "../assets/netflix.jpg";
import ChatApp from "../assets/chat_app.jpg";
import Admin from "../assets/admin.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-2"> Check out some of my recent projects </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Admin})` }}
            className="shadow-lg shadow-[#040c16] group containter rounded-md flex justify-center items-center content-div px-4"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-3xl font-bold text-white tracking-wider flex">
                Admin React Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://ben-hansen-react-admin-dashboard.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/benhansen11/react-admin-dashboard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group containter rounded-md flex justify-center items-center content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-3xl font-bold text-white tracking-wider">
                Netflix React App
              </span>
              <div className="pt-8 text-center">
                <a href="https://ben-hansen-netflix-react-app.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/benhansen11/Netflix_Dupe">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ChatApp})` }}
            className="shadow-lg shadow-[#040c16] group containter rounded-md flex justify-center items-center content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-3xl font-bold text-white tracking-wider">
                React Chat App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/benhansen11/react_chat_app/tree/main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
