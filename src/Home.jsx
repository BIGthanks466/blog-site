import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home-page">
      <div className="stars"></div>
      <div className="stars stars-two"></div>
      <div className="glow-orb-one"></div>
      <div className="glow-orb-two"></div>

      <section className="hero-shell">
        <p className="hero-kicker">WELCOME TO</p>
        <h1 className="hero-title">Futuristic Blog</h1>
        <p className="hero-subtitle">
          A playground for clean code, neon visuals, smooth interactions, and rare futuristic ideas — all built by you, from your cockpit. 🚀
        </p>
        <div className="hero-actions">
          <Link to="/blog" className="primary-btn">
            Explore the Blog
          </Link>
          <Link to="/alien-signals" className="primary-btn secondary-btn">
            Alien Signals
          </Link>
        </div>
      </section>

      <section className="categories-grid">
        <div className="category-card">
          <h3>Micro Experiments</h3>
          <p>Tiny UI tests, hover effects, motion tricks, and clean interaction ideas that keep the interface alive and playful.</p>
        </div>
        <div className="category-card">
          <h3>Deep-Dive Articles</h3>
          <p>Longer posts where you break down design decisions, animations, and the kind of front-end thinking that makes your work stand out.</p>
        </div>
        <div className="category-card">
          <h3>Signal Logs</h3>
          <p>Strange concepts, prototypes, mysterious ideas, and interface experiments sent from the Alien Signals lab.</p>
        </div>
        <div className="category-card">
          <h3>Ghost Protocols</h3>
          <p>Rare transmissions and futuristic interface theories that feel like they were designed tomorrow and leaked into today.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;