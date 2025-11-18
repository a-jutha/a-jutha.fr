function ProjectCard({ title, tags, gradient, codeUrl, demoUrl }) {
  return (
    <div
      className={`group container rounded-lg flex flex-col justify-center items-center mx-auto h-[200px] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 hover:border-accent overflow-hidden relative bg-gradient-to-br ${gradient}`}
    >
      {/* Title always visible */}
      <div className="relative z-10 text-center opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300">
        <span className="text-3xl font-black text-white tracking-wider block">
          {title}
        </span>
      </div>

      {/* Content on hover */}
      <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 z-20">
        <p className="text-secondary text-sm mb-4">{tags}</p>
        <div className="pt-2 flex gap-2 justify-center">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <button className="text-center rounded-lg px-6 py-3 bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg">
                Demo
              </button>
            </a>
          )}
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <button className="text-center rounded-lg px-6 py-3 bg-accent text-white font-bold text-base hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/50">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
