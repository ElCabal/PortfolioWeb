import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Works from "../views/Works";
import Contact from "../views/Contact";
import { AnimatePresence } from "framer-motion";
export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};
