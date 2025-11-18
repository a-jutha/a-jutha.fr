import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import CV from "../assets/cv_jarumugam_fr.pdf";
import { Link } from "react-scroll";
import NavLink from "./NavLink";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-secondary">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex font-semibold">
        <NavLink to="skills">skills</NavLink>
        <NavLink to="fortytwo">42</NavLink>
        <NavLink to="openclassrooms">openclassrooms</NavLink>
        <NavLink to="contact">contact</NavLink>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
        }
      >
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

        <NavLink to="skills" onClick={handleClick} mobile>
          skills
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
              href="https://github.com/cremedekiwi"
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
