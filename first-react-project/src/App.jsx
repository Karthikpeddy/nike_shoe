import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Stores from "./components/Stores";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login01";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Home />
      <About />
      <Stores />
      <Contact />
    </div>
  );
};

export default App;
