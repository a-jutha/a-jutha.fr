import React from "react";
import Transcendance from "../assets/project/ft_t.jpg";
import Inception from "../assets/project/inception.jpg";
import Webserv from "../assets/project/webserv.jpg";
import Cub3d from "../assets/project/cub3d.jpg";
import Minishell from "../assets/project/minishell.jpg";
import Philo from "../assets/project/philo.jpg";

function FortyTwo() {
  return (
    <div
      name="fortytwo"
      className="w-full md:h-screen bg-primary text-secondary min-h-screen py-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            42
          </p>
          <p className="py-4">#c #c++ #typescript #tailwind</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Transcendance})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Content */}
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                ft_transcendance
              </span>
              <p className="text-secondary text-sm mb-4">#TypeScript #Fastify #SQLite #Tailwind</p>
              <div className="pt-4">
                <a
                  href="https://github.com/cremedekiwi/ts_transcendence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Inception})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                inception
              </span>
              <p className="text-secondary text-sm mb-4">#Docker</p>
              <div className="pt-4">
                <a
                  href="https://github.com/cremedekiwi/inception"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Webserv})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                webserv
              </span>
              <p className="text-secondary text-sm mb-4">#c++</p>
              <div className="pt-4">
                <a
                  href="https://github.com/cremedekiwi/cpp_webserv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Cub3d})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                cub3d
              </span>
              <p className="text-secondary text-sm mb-4">#c</p>
              <div className="pt-4">
                <a
                  href="https://github.com/cremedekiwi/c_cub3d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Minishell})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                minishell
              </span>
              <p className="text-secondary text-sm mb-4">#c</p>
              <div className="pt-4">
                <a
                  href="https://github.com/cremedekiwi/c_minishell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Philo})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                philosopher
              </span>
              <p className="text-secondary text-sm mb-4">#c</p>
              <div className="pt-4">
                <a
                  href="https://github.com/cremedekiwi/c_philosopher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FortyTwo;
