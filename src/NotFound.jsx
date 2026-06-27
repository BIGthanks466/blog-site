// src/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // we'll create this CSS file

function NotFound() {
  return (
    <main className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn’t exist.</p>
      <Link to="/" className="home-link">
        ⬅️ Go Back Home
      </Link>
    </main>
  );
}

export default NotFound;