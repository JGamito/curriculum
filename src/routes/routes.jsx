import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/home";
import Projects from "../components/pages/Projects/projects";
import Technologies from "../components/pages/Technologies/technologies";
import Contact from "../components/pages/Contact/Contact";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Navigator;
