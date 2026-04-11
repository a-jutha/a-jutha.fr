import { Link } from "react-scroll";
import { Button } from "../ui";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-transparent">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-white tracking-tight">
          Juthamandjou Arumugam
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold py-2 leading-tight">
          <span className="text-accent">
            Développeur Web & Mobile
          </span>
        </h2>

        <div className="flex flex-col gap-2 mt-4">
          <p className="text-base sm:text-2xl text-white max-w-[700px] font-light italic">
            Quand les pixels rencontrent la programmation.
          </p>
        </div>

        <div className="mt-8">
          <Link to="pro" smooth={true} duration={500}>
            <Button
              variant="outline"
              className="group px-6 py-3 flex items-center gap-3"
            >
              Voir mes projets
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
