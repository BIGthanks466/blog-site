// src/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // make sure this file exists

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close the mobile menu after clicking a link
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      {/* Logo / Brand */}
      <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
        My Blog
      </NavLink>

      {/* Hamburger button (shows on small screens via CSS) */}
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      {/* Links */}
      <ul className={`nav-links ${open ? "open" : ""}`} onClick={closeMenu}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
        </li>
      </ul>
    </header>
  );
}