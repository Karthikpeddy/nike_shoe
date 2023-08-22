import { Link } from "react-scroll";

const Navbar = () => {
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
          <a href="Login01">
            <button className="login ">Login</button>
          </a>
        </div>
        <div>
          <a href="#">
            <button className="getstarted">Get Started</button>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
