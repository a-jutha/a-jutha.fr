import React from "react";
import Groupomania from "../assets/project/groupomania.jpg";
import HotTakes from "../assets/project/hot_takes.jpg";
import Kanap from "../assets/project/kanap.jpg";
import ChouetteAgence from "../assets/project/chouette_agence.jpg";
import Ohmyfood from "../assets/project/ohmyfood.jpg";
import Reservia from "../assets/project/reservia.jpg";

function OpenClassrooms() {
  return (
    <div
      name="openclassrooms"
      className="w-full md:h-screen bg-primary text-secondary min-h-screen py-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            OpenClassrooms
          </p>
          <p className="py-4">#react #nodejs #js #sass #html #css</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Groupomania})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                Groupomania
              </span>
              <p className="text-secondary text-sm mb-4">#React #NodeJS #SASS</p>
              <div className="pt-4">
                <a
                  href="https://github.com/cremedekiwi/react_groupomania"
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
            style={{ backgroundImage: `url(${HotTakes})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                Hot Takes
              </span>
              <p className="text-secondary text-sm mb-4">#NodeJS</p>
              <div className="pt-4">
                <a
                  href="https://github.com/cremedekiwi/nodejs_hot_takes"
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
            style={{ backgroundImage: `url(${Kanap})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                Kanap
              </span>
              <p className="text-secondary text-sm mb-4">#Vanilla JavaScript</p>
              <div className="pt-4 flex gap-2 justify-center">
                <a
                  href="https://cremedekiwi.github.io/js_kanap/front/html/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cremedekiwi/js_kanap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ChouetteAgence})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                La Chouette Agence
              </span>
              <p className="text-secondary text-sm mb-4">#SEO #HTML #CSS</p>
              <div className="pt-4 flex gap-2 justify-center">
                <a
                  href="https://cremedekiwi.github.io/html_lachouetteagence/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cremedekiwi/html_lachouetteagence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Ohmyfood})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                Ohmyfood
              </span>
              <p className="text-secondary text-sm mb-4">#HTML #SASS</p>
              <div className="pt-4 flex gap-2 justify-center">
                <a
                  href="https://cremedekiwi.github.io/sass_ohmyfood/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cremedekiwi/sass_ohmyfood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Reservia})` }}
            className="group container rounded-lg flex justify-center items-center mx-auto content-div shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transform transition-all duration-300">
              <span className="text-2xl font-bold text-accent tracking-wider block mb-3">
                Reservia
              </span>
              <p className="text-secondary text-sm mb-4">#HTML #CSS</p>
              <div className="pt-4 flex gap-2 justify-center">
                <a
                  href="https://cremedekiwi.github.io/css_reservia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cremedekiwi/css_reservia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
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
}

export default OpenClassrooms;
