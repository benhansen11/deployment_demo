import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Profile_Pic from "../assets/profile_pic.png";
import { Slide } from "react-awesome-reveal";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <Slide>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="py-20 text-[#0a192f]"></p>
          <p className="py-5 text-[#0a192f]"></p>
          <p className="text-3xl text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Ben Hansen,
          </h1>
          <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Software Developer from the College of Idaho.
          </h2>
          <div className="flex max-w-[700]">
            <p className="text-2xl text-[#8892b0] py-6 max-w-[500px]">
              I'm a highly motivated and diligent worker seeking a challenging
              career opportunity where I can leverage my skills in
              problem-solving, attention to detail, teamwork, communication, and
              programming to contribute to the success of an organization.
            </p>
            <img
              className="w-60 h-60 mx-auto rounded-full xs:w-30 xs:h-30 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60"
              src={Profile_Pic}
              alt="Profile"
            />
          </div>
          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
            <div className="w-full grid grid-cols-40 sm:grid-col-4 gap-4 text-center py-8"></div>
          </div>
      </div>
      </Slide>
    </div>
  );
};

export default Home;
