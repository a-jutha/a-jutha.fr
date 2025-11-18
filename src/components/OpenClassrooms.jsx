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
          <p className="py-4">An online learning platform offering career-focused courses in tech and digital skills.</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Item */}
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                Groupomania
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 z-20">
              <p className="text-secondary text-sm mb-4">#React #NodeJS #SASS</p>
              <div className="pt-2">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-amber-500 via-orange-600 to-red-600">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                Hot Takes
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 z-20">
              <p className="text-secondary text-sm mb-4">#NodeJS</p>
              <div className="pt-2">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                Kanap
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 z-20">
              <p className="text-secondary text-sm mb-4">#Vanilla JavaScript</p>
              <div className="pt-2 flex gap-2 justify-center">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700">
            <div className="relative z-10 text-center px-4 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
              <span className="text-2xl md:text-3xl font-black text-white tracking-wider block">
                La Chouette Agence
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 z-20">
              <p className="text-secondary text-sm mb-3">#SEO #HTML #CSS</p>
              <div className="flex gap-2 justify-center">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-fuchsia-500 via-pink-600 to-rose-700">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                Ohmyfood
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 z-20">
              <p className="text-secondary text-sm mb-4">#HTML #SASS</p>
              <div className="pt-2 flex gap-2 justify-center">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-indigo-500 via-purple-600 to-violet-700">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                Reservia
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 z-20">
              <p className="text-secondary text-sm mb-4">#HTML #CSS</p>
              <div className="pt-2 flex gap-2 justify-center">
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
