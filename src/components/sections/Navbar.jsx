import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaBars, FaChevronDown, FaGithub, FaLinkedin, FaTimes, FaFilePdf } from "react-icons/fa";
import CV from "../../assets/cv_jarumugam_fr.pdf";
import { NavLink } from "../ui";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const handleClick = () => setNav(!nav);

  // Fermer le dropdown desktop en cliquant ailleurs
  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

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
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdown((v) => !v)}
              className="flex items-center gap-1.5 px-4 py-2 hover:text-accent transition-colors duration-300"
            >
              projets
              <FaChevronDown
                size={11}
                className={`transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`}
              />
            </button>
            {dropdown && (
              <ul className="absolute top-full left-0 mt-1 w-52 rounded-lg border border-slate-700/60 bg-slate-950/95 backdrop-blur-md shadow-lg py-1 flex flex-col">
                <li>
                  <NavLink to="pro" onClick={() => setDropdown(false)}>pro</NavLink>
                </li>
                <li>
                  <NavLink to="fortytwo" onClick={() => setDropdown(false)}>42</NavLink>
                </li>
                <li>
                  <NavLink to="openclassrooms" onClick={() => setDropdown(false)}>openclassrooms</NavLink>
                </li>
              </ul>
            )}
          </li>
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
              {/* Accordion projets */}
              <li className="py-4 text-3xl text-secondary flex flex-col items-center">
                <button
                  onClick={() => setMobileDropdown((v) => !v)}
                  className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
                >
                  projets
                  <FaChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileDropdown ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileDropdown && (
                  <ul className="mt-3 flex flex-col items-center gap-1">
                    <NavLink to="pro" onClick={handleClick} mobile>pro</NavLink>
                    <NavLink to="fortytwo" onClick={handleClick} mobile>42</NavLink>
                    <NavLink to="openclassrooms" onClick={handleClick} mobile>openclassrooms</NavLink>
                  </ul>
                )}
              </li>

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
