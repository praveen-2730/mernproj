import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Men from "./Men";
import Women from "./Women";
import Kid from "./Kid";

const Main = () => {
  const [api, setApi] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products setApi={setApi} />} />
        <Route path="/men" element={<Men api={api} />} />
        <Route path="/women" element={<Women api={api} />} />
        <Route path="/kid" element={<Kid api={api} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Main;
