import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Stores from "./components/Stores";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login01";
import Signup from "./components/signup";
import { BrowserRouter } from "react-router-dom";
import Contact_s from "./components/contact_s";
import Shopnow from "./components/Shopnow";
import ProductDetails from "./components/ProductDetails";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <div>
                  <Navbar />
                  <Home />
                  <About />
                  <Stores />
                  <Contact />
                </div>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contact_s" element={<Contact_s />} />
            <Route path="shopnow" element={<Shopnow />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AnimatePresence>
  );
};

export default App;
