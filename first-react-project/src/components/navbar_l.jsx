import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarL = () => {
  const navigate = useNavigate();
  const navigatetologin = () => {
    navigate("/login");
  };
  const navigatetosignup = () => {
    navigate("/signup");
  };
  return (
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="Logo">
        <Link to="/">
          <img
            src="/brand_logo.png
        "
            alt="nike"
          />
        </Link>
      </div>
      <ul>
        <li className="cursor-pointer">
          <Link to="/#home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/#about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/#stores" smooth={true} duration={500}>
            Stores
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/#scontact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="buttons">
        <div>
          <motion.button
            whileTap={{ scale: 0.6 }}
            className="getstarted cursor-pointer"
            onClick={navigatetosignup}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  );
};
export default NavbarL;
