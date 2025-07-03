import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import other pages as you create them

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
