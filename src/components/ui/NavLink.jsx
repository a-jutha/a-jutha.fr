import { Link } from "react-scroll";

function NavLink({ to, children, onClick, mobile = false }) {
  const mobileClasses = "py-6 text-4xl";
  const desktopClasses = "";

  return (
    <li className={`hover:text-accent ${mobile ? mobileClasses : desktopClasses}`}>
      <Link
        to={to}
        smooth={true}
        duration={500}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
