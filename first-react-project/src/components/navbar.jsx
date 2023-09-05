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
      <motion.div
        whileHover={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="Logo cursor-pointer"
      >
        <Link to="/">
          <img
            src="/brand_logo.png
        "
            alt="nike"
          />
        </Link>
      </motion.div>
      <ul>
        <motion.li
          whileHover={{ scale: 0.9 }}
          className="cursor-pointer rounded-lg"
        >
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 0.9 }} className="cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 0.9 }} className="cursor-pointer">
          <Link to="stores" smooth={true} duration={500}>
            Stores
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 0.9 }} className="cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </motion.li>
      </ul>
      <div className="buttons">
        <div>
          <motion.button
            whileTap={{ scale: 0.6 }}
            whileHover={{ scale: 0.9 }}
            className="login cursor-pointer"
            onClick={navigatetologin}
          >
            Login
          </motion.button>
        </div>
        <div>
          <motion.button
            whileTap={{ scale: 0.6 }}
            whileHover={{ scale: 0.9 }}
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
