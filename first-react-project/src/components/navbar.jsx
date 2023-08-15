const Navbar = () => {
  return (
    <nav>
      <div className="Logo">
        <img
          src="/brand_logo.png
        "
          alt="nike"
        />
      </div>
      <ul>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#About">
          <li>
            <li>About</li>
          </li>
        </a>
        <a href="#">
          <li>
            <li>Stores</li>
          </li>
        </a>
        <a href="#">
          <li>
            <li>Contact</li>
          </li>
        </a>
      </ul>
      <div className="buttons">
        <div>
          <a href="Login01">
            <button className="login">Login</button>
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
