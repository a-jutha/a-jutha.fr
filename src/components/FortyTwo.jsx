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
          <p className="py-4">A tuition-free coding school with a peer-to-peer learning model and no teachers.</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Item */}
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-accent via-blue-500 to-purple-600">
            {/* Title always visible */}
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                ft_transcendance
              </span>
            </div>
            {/* Content on hover */}
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <p className="text-secondary text-sm mb-4">#TypeScript #Fastify #SQLite #Tailwind</p>
              <div className="pt-2">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                inception
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <p className="text-secondary text-sm mb-4">#Docker</p>
              <div className="pt-2">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                webserv
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <p className="text-secondary text-sm mb-4">#C++</p>
              <div className="pt-2">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                cub3d
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <p className="text-secondary text-sm mb-4">#C</p>
              <div className="pt-2">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                minishell
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <p className="text-secondary text-sm mb-4">#C</p>
              <div className="pt-2">
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
          <div className="group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700">
            <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-3xl font-black text-white tracking-wider block">
                philosopher
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <p className="text-secondary text-sm mb-4">#C</p>
              <div className="pt-2">
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
