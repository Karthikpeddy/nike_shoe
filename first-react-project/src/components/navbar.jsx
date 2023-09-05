import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const navigatetologin = () => {
    navigate("/login");
  };
  const navigatetosignup = () => {
    navigate("/signup");
  };
  useEffect(() => {
    scroll.scrollTo("about");
  }, []);
  return (
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="Logo">
        <img
          src="/brand_logo.png
        "
          alt="nike"
        />
      </div>
      <ul>
        <li className="cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="stores" smooth={true} duration={500}>
            Stores
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="buttons">
        <div>
          <motion.button
            whileTap={{ scale: 0.6 }}
            className="login cursor-pointer"
            onClick={navigatetologin}
          >
            Login
          </motion.button>
        </div>
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
export default Navbar;
