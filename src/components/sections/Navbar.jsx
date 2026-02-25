import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-primary text-secondary z-50">
      {/* Desktop menu */}
      <ul className="hidden md:flex font-semibold">
        <NavLink to="pro">pro</NavLink>
        <NavLink to="fortytwo">42</NavLink>
        <NavLink to="openclassrooms">openclassrooms</NavLink>
        <NavLink to="contact">contact</NavLink>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-[150] relative cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="fixed inset-0 bg-primary z-[100] md:hidden flex items-center justify-center">
          <ul className="flex flex-col items-start">
            <li className="py-6 text-4xl hover:text-accent">
              <a
                onClick={handleClick}
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                cv
              </a>
            </li>

            <NavLink to="pro" onClick={handleClick} mobile>
              pro
            </NavLink>
            <NavLink to="fortytwo" onClick={handleClick} mobile>
              42
            </NavLink>
            <NavLink to="openclassrooms" onClick={handleClick} mobile>
              openclassrooms
            </NavLink>
            <NavLink to="contact" onClick={handleClick} mobile>
              contact
            </NavLink>
          </ul>
        </div>
      )}

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-secondary"
              href="https://www.linkedin.com/in/juth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-secondary"
              href="https://github.com/a-jutha"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-secondary"
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
