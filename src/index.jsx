import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import AlienSignals from "./AlienSignals";
import PostPage from "./PostPage"; // <-- important

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostPage />} /> {/* <-- NEW */}
        <Route path="/alien-signals" element={<AlienSignals />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
