import ProjectCard from "./ProjectCard";

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
          <p className="py-4">
            A tuition-free coding school with a peer-to-peer learning model and
            no teachers.
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProjectCard
            title="ft_transcendance"
            tags="#TypeScript #Fastify #SQLite #Tailwind"
            gradient="from-accent via-blue-500 to-purple-600"
            codeUrl="https://github.com/cremedekiwi/ts_transcendence"
          />

          <ProjectCard
            title="inception"
            tags="#Docker"
            gradient="from-blue-600 via-indigo-600 to-purple-700"
            codeUrl="https://github.com/cremedekiwi/inception"
          />

          <ProjectCard
            title="webserv"
            tags="#C++"
            gradient="from-emerald-500 via-teal-600 to-cyan-700"
            codeUrl="https://github.com/cremedekiwi/cpp_webserv"
          />

          <ProjectCard
            title="cub3d"
            tags="#C"
            gradient="from-orange-500 via-red-500 to-pink-600"
            codeUrl="https://github.com/cremedekiwi/c_cub3d"
          />

          <ProjectCard
            title="minishell"
            tags="#C"
            gradient="from-violet-600 via-purple-600 to-fuchsia-700"
            codeUrl="https://github.com/cremedekiwi/c_minishell"
          />

          <ProjectCard
            title="philosopher"
            tags="#C"
            gradient="from-rose-500 via-pink-600 to-purple-700"
            codeUrl="https://github.com/cremedekiwi/c_philosopher"
          />
        </div>
      </div>
    </div>
  );
}

export default FortyTwo;
