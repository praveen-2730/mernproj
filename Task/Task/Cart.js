import React from "react";
import { Routes, Route } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Kid from "./Kid";

const Cart = () => {
  return (
    <Routes>
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kid" element={<Kid />} />
    </Routes>
  );
};

export default Cart;
