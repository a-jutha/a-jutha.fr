import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

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

          <ProjectCard
            title="La Chouette Agence"
            tags="#SEO #HTML #CSS"
            gradient="from-lime-500 via-green-600 to-emerald-700"
            codeUrl="https://github.com/cremedekiwi/html_lachouetteagence"
            demoUrl="https://cremedekiwi.github.io/html_lachouetteagence/"
          />

          <ProjectCard
            title="Ohmyfood"
            tags="#HTML #SASS"
            gradient="from-fuchsia-500 via-pink-600 to-rose-700"
            codeUrl="https://github.com/cremedekiwi/sass_ohmyfood"
            demoUrl="https://cremedekiwi.github.io/sass_ohmyfood/"
          />

          <ProjectCard
            title="Reservia"
            tags="#HTML #CSS"
            gradient="from-indigo-500 via-purple-600 to-violet-700"
            codeUrl="https://github.com/cremedekiwi/css_reservia"
            demoUrl="https://cremedekiwi.github.io/css_reservia/"
          />
        </div>
      </div>
    </div>
  );
}

export default OpenClassrooms;
