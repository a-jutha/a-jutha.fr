import { useEffect, useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import CV from "../../assets/cv_jarumugam_fr.pdf";
import { NavLink } from "../ui";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [nav]);

  return (
    <div className="fixed w-full h-[80px] flex justify-end md:justify-between items-center px-4 bg-slate-950/55 backdrop-blur-md border-b border-slate-700/60 text-secondary z-50">
      {/* Desktop menu */}
      <ul className="hidden md:flex font-semibold items-center gap-4">
        <NavLink to="pro">pro</NavLink>
        <NavLink to="fortytwo">42</NavLink>
        <NavLink to="openclassrooms">openclassrooms</NavLink>
      </ul>

      {/* Desktop socials */}
      <div className="hidden md:flex items-center gap-2 lg:gap-3 text-sm font-semibold">
        <a
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-600/80 hover:border-accent hover:text-accent transition-colors duration-300"
          href="https://www.linkedin.com/in/a-jutha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={16} />
          LinkedIn
        </a>
        <a
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-600/80 hover:border-accent hover:text-accent transition-colors duration-300"
          href="https://github.com/a-jutha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={16} />
          GitHub
        </a>
        <a
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-600/80 hover:border-accent hover:text-accent transition-colors duration-300"
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFillPersonLinesFill size={16} />
          CV
        </a>
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-[150] relative cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-[100] md:hidden flex items-center justify-center">
          <ul className="flex flex-col items-start">
            <NavLink to="pro" onClick={handleClick} mobile>
              pro
            </NavLink>
            <NavLink to="fortytwo" onClick={handleClick} mobile>
              42
            </NavLink>
            <NavLink to="openclassrooms" onClick={handleClick} mobile>
              openclassrooms
            </NavLink>

            <li className="py-4 text-3xl hover:text-accent">
              <a
                onClick={handleClick}
                href="https://www.linkedin.com/in/a-jutha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </li>
            <li className="py-4 text-3xl hover:text-accent">
              <a
                onClick={handleClick}
                href="https://github.com/a-jutha"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li className="py-4 text-3xl hover:text-accent">
              <a
                onClick={handleClick}
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                cv
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
