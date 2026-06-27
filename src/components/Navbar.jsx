import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const clickSoundRef = useRef(null);
  const hoverSoundRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const playClickSound = () => {
    if (clickSoundRef.current) {
      const sound = clickSoundRef.current.cloneMode();
      sound.currentTime = 0;
      sound.volume = 0.35;
      sound.play().catch(() => {});
    }
  };

  const playHoverSound = () => {
    if (hoverSoundRef.current) {
      const sound = hoverSoundRef.current.cloneMode();
      sound.currentTime = 0;
      sound.volume = 0.15;
      sound.play().catch(() => {});
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    playClickSound();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    playClickSound();
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    playClickSound();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutsideMenu = (e) => {
      if (isMenuOpen && !e.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/" onClick={handleNavClick}>
          <span className="glow-logo">Futuristic Blog</span>
        </NavLink>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink
            to="/"
            onClick={handleNavClick}
            onMouseEnter={playHoverSound}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/blog"
            onClick={handleNavClick}
            onMouseEnter={playHoverSound}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Blog
          </NavLink>
        </li>

        {/* Categories Dropdown */}
        <li className="nav-item-dropdown" ref={dropdownRef}>
          <button
            className="dropdown-toggle"
            onClick={toggleDropdown}
            onMouseEnter={playHoverSound}
            aria-expanded={isDropdownOpen}
          >
            Categories
            <span className="dropdown-arrow">{isDropdownOpen ? '▼' : '▼'}</span>
          </button>

          <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
            <li>
              <NavLink
                to="/blog?category=micro-experiments"
                onClick={handleNavClick}
                onMouseEnter={playHoverSound}
              >
                Micro Experiments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog?category=deep-dive"
                onClick={handleNavClick}
                onMouseEnter={playHoverSound}
              >
                Deep-Dive Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog?category=signal-logs"
                onClick={handleNavClick}
                onMouseEnter={playHoverSound}
              >
                Signal Logs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog?category=ghost-protocols"
                onClick={handleNavClick}
                onMouseEnter={playHoverSound}
              >
                Ghost Protocols
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            to="/about"
            onClick={handleNavClick}
            onMouseEnter={playHoverSound}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/alien-signals"
            onClick={handleNavClick}
            onMouseEnter={playHoverSound}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Alien Signals
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            onClick={handleNavClick}
            onMouseEnter={playHoverSound}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Audio Elements */}
      <audio ref={clickSoundRef} src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==" />
      <audio ref={hoverSoundRef} src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==" />
    </nav>
  );
}

export default Navbar;