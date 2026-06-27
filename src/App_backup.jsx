// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Posts from "./Posts";
import NotFound from "./NotFound";

// Alien Signals page component (your file is inside src/alien/)
import Signals from "./alien/Signals";

import PageTransition from "./PageTransition";

import "./App.css";

export default function App() {
  return (
    <Router>
      <header className="site-header">
        <div className="site-brand">
          <div className="brand-title">FUTURISTIC BLOG</div>
          <div className="brand-subtitle">Neon Interface Lab</div>
        </div>

        <nav className="site-nav">
          <NavLink to="/" end className="nav-pill">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-pill">
            About
          </NavLink>

          <NavLink to="/blog" className="nav-pill">
            Blog
          </NavLink>

          <NavLink to="/alien-signals" className="nav-pill">
            Alien Signals
          </NavLink>
        </nav>
      </header>

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Posts />} />

          <Route path="/alien-signals" element={<Signals />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </Router>
  );
}