import React from "react";
import Python from "../assets/python.png";
import React_JS from "../assets/react_js.png";
import SQLite from "../assets/sqlite.png";
import C_Sharp from "../assets/c_sharp.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            {" "}
            These are the technologies I'm experienced with{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-col-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-40 mx-auto" src={Python} alt="Python logo" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-40 mx-auto" src={SQLite} alt="SQLite logo" />
            <p className="my-4">SQLite</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-40 mx-auto" src={React_JS} alt="React JS logo" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-40 mx-auto" src={C_Sharp} alt="C# logo" />
            <p className="my-4">C#</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
