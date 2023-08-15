import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Stores from "./components/Stores";
import Home from "./components/home";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Stores />
      <Contact />
    </div>
  );
};

export default App;
