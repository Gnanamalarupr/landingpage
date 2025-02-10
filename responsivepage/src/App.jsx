import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {  Route, Routes } from "react-router-dom";
import Navlinks from "./components/Navlinks/Navlinks"

function App() {
  return (
  <div>
        <Navlinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
  );
}

export default App;
