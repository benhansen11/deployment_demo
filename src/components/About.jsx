import React from "react";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div className="sm:text-center">
            <p className="text-4xl px-2 font-bold inline border-b-4 border-pink-600">
              Programming
            </p>
          </div>
        </div>
        <Zoom>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-left text-1xl">
              <p>
                At the College of Idaho, I played baseball all four years while
                pursuing my computer science major along with minors in
                communication, environmental studies, and legal psychology. As
                I've always been very involved with technology, I found my
                passion for programming during online classes due to covid. I
                love to learn and pick up new skills and test my knowledge as
                I'm naturally a very competitive person. I think this attribute,
                my background in communication, and my background in sports
                allow me to work well with others, be a great team player, and
                push myself to be the best as I can be.
              </p>
            </div>
            <div className="sm:text-left text-1xl">
              <p>
                The main programming langauge I was taught in school was Python
                along with a databases class taught in SQLite. Over the past few
                months, I've grown immensely as a programmer since I've been
                able to sit down, teach myself more concepts along with new
                laguages and new ideas in familiar languages. I've been
                practicing with LeetCode, making projects such as this one, and
                improving my knowledge as a programmer. Scroll down to the next
                section to see some of the projects I've worked on such as an
                Admin Dashboard, a Netflix Dupe, and the code for a Chat App.
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default About;
