import React from "react";

import C from "../assets/skills/c.png";
import CPlus from "../assets/skills/cplus.png";
import TypeScript from "../assets/skills/typescript.png";
import ReactImg from "../assets/skills/react.png";
import Node from "../assets/skills/node.png";
import Mongo from "../assets/skills/mongo.png";
import Tailwind from "../assets/skills/tailwind.png";
import Sass from "../assets/skills/sass.png";

function Skills() {
  return (
    <div
      name="skills"
      className="w-full min-h-screen py-16 md:h-screen bg-primary text-secondary"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

        <div>
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            Skills
          </p>
          <p className="py-4">Here are the technologies I've worked with</p>
        </div>
		
        <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-8 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={ReactImg}
              alt="ReactImg icon"
            ></img>
            <p className="my-4">REACT</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TypeScript}
              alt="TypeScript icon"
            ></img>
            <p className="my-4">TYPESCRIPT</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CPlus} alt="C++ icon"></img>
            <p className="my-4">C++</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={C} alt="C icon"></img>
            <p className="my-4">C</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon"></img>
            <p className="my-4">NODE JS</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon"></img>
            <p className="my-4">MONGO DB</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="Tailwind icon"
            ></img>
            <p className="my-4">TAILWIND</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto object-contain"
              src={Sass}
              alt="Sass icon"
            ></img>
            <p className="my-4">SASS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
