import React from 'react';
import './styles/alienSignals.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Blog from './Blog';
import BlogPostDetail from './BlogPostDetail';
import AlienSignals from './alien/AlienSignals';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/alien-signals" element={<AlienSignals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;