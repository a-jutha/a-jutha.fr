import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaFilePdf } from "react-icons/fa";
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
    <>
      <div className="fixed w-full h-[80px] flex justify-end md:justify-between items-center px-8 bg-slate-950/55 backdrop-blur-md text-secondary z-50">
        {/* Desktop menu */}
        <ul className="hidden md:flex font-semibold items-center">
          <NavLink to="pro">pro</NavLink>
          <NavLink to="fortytwo">42</NavLink>
          <NavLink to="openclassrooms">openclassrooms</NavLink>
        </ul>

        {/* Desktop socials */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6 text-sm font-semibold">
          <a
            className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"
            href="https://www.linkedin.com/in/a-jutha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"
            href="https://github.com/a-jutha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-300"
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf size={24} />
          </a>
        </div>

        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden cursor-pointer text-secondary"
        >
          <FaBars />
        </div>
      </div>

      {/* Mobile menu — rendu via portal dans document.body pour éviter tout containing block */}
      {nav &&
        createPortal(
          <div className="fixed inset-0 z-[200] flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #0b1220 0%, #0f172a 45%, #111827 100%)' }}>
            <div
              onClick={handleClick}
              className="absolute top-6 right-4 cursor-pointer text-secondary"
            >
              <FaTimes size={20} />
            </div>
            <ul className="flex flex-col items-center text-secondary">
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
          </div>,
          document.body
        )}
    </>
  );
}

export default Navbar;
