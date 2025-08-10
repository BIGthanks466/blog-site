import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      style={{
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d0d0d, #1a1a2e)",
        color: "#f5f5f5",
      }}
    >
      {/* Heading */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        👋 Welcome Home
      </h1>

      {/* Intro */}
      <p style={{ fontSize: "1.2rem", maxWidth: "680px", margin: "0 auto 28px" }}>
        🚀 This is a learning project growing into a real, helpful blog. We share
        practical lessons about <strong>web dev</strong>, <strong>design</strong>, and
        building for <span style={{ color: "#00ffcc" }}>humans 🧑‍💻</span>.
      </p>

      {/* Actions */}
      <div
        className="hero-actions"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {/* Blog link */}
        <a
          href="/blog"
          className="btn"
          style={{
            background: "#00ff99",
            color: "#000",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            boxShadow: "0 0 10px #00ff99",
          }}
        >
          📝 Read the Blog
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/..."
          target="_blank"
          rel="noreferrer"
          className="btn secondary"
          style={{
            background: "#ffcc00",
            color: "#000",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            boxShadow: "0 0 10px #ffcc00",
          }}
        >
          ⭐️ Star on GitHub
        </a>

        {/* Alien Signals link */}
        <Link
          to="/signals"
          className="btn secondary alien"
          style={{
            background: "#2196F3",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            boxShadow: "0 0 10px #2196F3",
          }}
        >
          🛸 Alien Signals
        </Link>
      </div>
    </main>
  );
}