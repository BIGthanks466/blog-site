import React from 'react';
import './About.css';

function About() {
  return (
    <main className="about-page">
      <div className="about-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <section className="about-container">
        <div className="about-header">
          <h1 className="about-title">About This Blog</h1>
          <p className="about-subtitle">
            Welcome to <span>Futuristic Blog</span> — a project built with <strong>design</strong>, <strong>web development</strong>, and <strong>creativity</strong> at its heart. 🚀
          </p>
        </div>

        <div className="about-cards-container">
          <div className="about-card">
            <div className="card-icon">📋</div>
            <h2 className="about-card-title">Mission</h2>
            <p className="about-card-text">
              To share knowledge that helps humans build futuristic, immersive web experiences inspired by the stars — from layouts and motion to tiny UI details that make interfaces feel alive.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🌌</div>
            <h2 className="about-card-title">Vision</h2>
            <p className="about-card-text">
              A galaxy where design and code merge seamlessly, creating experiences that feel warm, glowing and humane — not cold or robotic. Neon, but still comfortable for real people.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">👽</div>
            <h2 className="about-card-title">Inspiration</h2>
            <p className="about-card-text">
              From alien transmissions to cosmic UI ideas — everything here is a playful yet practical take on creativity, with experiments you can reuse in your own projects.
            </p>
          </div>
        </div>

        <div className="creator-bio">
          <div className="creator-avatar"></div>
          <div className="creator-content">
            <h2 className="creator-title">Creator Bio</h2>
            <p>
              Behind this blog is a curious builder who loves mixing <strong>clean code</strong> with <strong>cinematic UI vibes</strong>. Every page here is both a learning lab and a design experiment.
            </p>
            <p>
              The goal isn't just to make things look cool — it's to build interfaces that feel smooth, focused, and friendly, even when they look like they came from the future.
            </p>
            <ul className="creator-skills">
              <li>⚛️ Loves React, futuristic layouts and micro-interactions</li>
              <li>🎨 Designs with soft ambient sounds and calm visuals</li>
              <li>🚀 Always experimenting with new ideas for the next project</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;