import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";          // file: src/Navbar.js
import Home   from "./Home";            // file: src/Home.js
import Blog   from "./blog";            // file: src/blog.js
import About  from "./about";           // file: src/about.js

import AlienHub    from "./alien/AlienHub";       // file: src/alien/AlienHub.js
import AlienDetail from "./alien/AlienDetail";    // file: src/alien/AlienDetail.js

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