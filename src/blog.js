// src/blog.js
import React from "react";
import "./blog.css";

const posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    excerpt: "This is the first post on my blog built with React.",
    date: "2025-08-10",
    tag: "Intro",
  },
  {
    id: 2,
    title: "Why I Love React",
    excerpt:
      "React makes building user interfaces a breeze. JSX is simple and powerful.",
    date: "2025-08-08",
    tag: "React",
  },
  {
    id: 3,
    title: "Learning JavaScript",
    excerpt:
      "Understanding variables, functions, and loops is the key to mastering JS.",
    date: "2025-08-05",
    tag: "JavaScript",
  },
];

export default function Blog() {
  return (
    <main className="blog-wrap">
      <h1>📝 Blog Posts</h1>

      <section className="grid">
        {posts.map((p) => (
          <article key={p.id} className="card">
            <header className="card-head">
              <span className="pill">{p.tag}</span>
              <time className="date">
                {new Date(p.date).toLocaleDateString()}
              </time>
            </header>

            <h2 className="title">{p.title}</h2>
            <p className="excerpt">{p.excerpt}</p>

            <div className="actions">
              <a className="btn read" href="#">
                Read more →
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}