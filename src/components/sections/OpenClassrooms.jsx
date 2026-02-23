import { ProjectCard, SectionHeader } from "../ui";

function OpenClassrooms() {
  return (
    <div
      name="openclassrooms"
      className="w-full md:h-screen bg-primary text-secondary min-h-screen py-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SectionHeader
          title="OpenClassrooms"
          description="An online learning platform offering career-focused courses in tech and digital skills."
        />

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProjectCard
            title="Groupomania"
            tags="#React #NodeJS #SASS"
            gradient="from-sky-500 via-blue-600 to-indigo-700"
            codeUrl="https://github.com/cremedekiwi/react_groupomania"
            demoUrl="https://groupomania-client-57uy.onrender.com/"
          />

          <ProjectCard
            title="Hot Takes"
            tags="#NodeJS"
            gradient="from-amber-500 via-orange-600 to-red-600"
            codeUrl="https://github.com/cremedekiwi/nodejs_hot_takes"
            demoUrl="https://hot-takes-cdk.netlify.app"
          />

          <ProjectCard
            title="Kanap"
            tags="#Vanilla JavaScript"
            gradient="from-teal-500 via-cyan-600 to-blue-700"
            codeUrl="https://github.com/cremedekiwi/js_kanap"
            demoUrl="https://cremedekiwi.github.io/js_kanap/front/html/index.html"
          />
        </div>
      </div>
    </div>
  );
}

export default OpenClassrooms;
