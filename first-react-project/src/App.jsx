import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Stores from "./components/Stores";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Login01 from "./components/Login01";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<Login01 />} />
      </Routes>
      <Navbar />
      <Home />
      <About />
      <Stores />
      <Contact />
    </div>
  );
};

export default App;
