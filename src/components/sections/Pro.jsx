import { ProjectCard, SectionHeader } from "../ui";

function Pro() {
  return (
    <div
      name="pro"
      className="w-full md:h-screen bg-transparent text-secondary min-h-screen py-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SectionHeader
          title="Pro"
          description="Projets réalisés pour des clients et un projet personnel."
        />

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProjectCard
            title="accompamed"
            tags="#React #Tailwind #Hono"
            gradient="from-teal-500 via-cyan-600 to-blue-700"
            demoUrl="https://accompamed.fr"
          />

          <ProjectCard
            title="vintage traction"
            tags="#React #Tailwind"
            gradient="from-amber-500 via-orange-600 to-red-700"
            demoUrl="https://vintage-traction.com/"
          />

          <ProjectCard
            title="stars"
            tags="#React Native #Expo"
            gradient="from-violet-600 via-purple-700 to-indigo-800"
            demoUrl="https://expo.dev/accounts/a-jutha/projects/stars/builds/f762eb47-8221-40c9-9e49-eed3910f22f6"
            demoLabel="APK"
          />
        </div>
      </div>
    </div>
  );
}

export default Pro;
