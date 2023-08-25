import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
        <img
          src="/brand_logo.png
        "
          alt="nike"
        />
      </div>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="stores" smooth={true} duration={500}>
            Stores
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="buttons">
        <div>
          <button className="login cursor-pointer" onClick={navigatetologin}>
            Login
          </button>
        </div>
        <div>
          <button
            className="getstarted cursor-pointer"
            onClick={navigatetosignup}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
