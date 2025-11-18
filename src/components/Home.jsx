import { Link } from "react-scroll";
import Button from "./Button";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-primary">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl sm:text-5xl font-bold bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent animate-pulse mb-2">
          42 common core complete.
        </p>
        <p className="text-lg sm:text-3xl text-accent font-semibold mb-6">
          Available for a 6 month internship in Paris.
        </p>
        <p className="text-base sm:text-3xl text-secondary py-4 max-w-[700px] font-light">
          Where pixels meet programming.
        </p>
        <div className="mt-4">
          <Link to="fortytwo" smooth={true} duration={500}>
            <Button variant="outline" className="my-2 flex items-center">
              See my projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
