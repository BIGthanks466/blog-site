import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";   // Make sure this matches file name exactly
import Blog from "./blog";
import About from "./about";
import AlienHub from "./alien/AlienHub";
import AlienDetail from "./alien/AlienDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/signals" element={<AlienHub />} />
        <Route path="/signals/:id" element={<AlienDetail />} />
      </Routes>
    </Router>
  );
}