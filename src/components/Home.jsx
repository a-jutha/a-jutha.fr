import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-primary">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-base sm:text-4xl text-accent">
          42 common core complete • available for hire
        </p>
        <p className="text-sm sm:text-2xl text-secondary py-4 max-w-[700px]">
          Where pixels meet programming.
        </p>
        <div>
          <Link to="fortytwo" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-accent hover:border-accent">
              See my projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
