import React from "react";
import { Link } from "react-router-dom";
import posts from "./setupPosts";
import "./blog.css";

export default function Blog() {
  return (
    <div className="page">
      <h1>📝 Blog Posts</h1>

      {posts.map((p) => (
        <article key={p.id} className="blog-post">
          <div className="blog-meta">
            <span role="img" aria-label="emoji">{p.emoji}</span>{" "}
            <span>{p.category}</span>
          </div>

          <h3>{p.title}</h3>

          <img src={p.image} alt={p.title} className="blog-image" />

          <p>{p.content.substring(0, 140)}...</p>

          <Link to={`/post/${p.id}`} className="read-more">
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}