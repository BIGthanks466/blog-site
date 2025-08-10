// src/post.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "./setupPosts";   // default import (no curly braces)
import "./blog.css";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="page">
        <h1>Post not found</h1>
        <Link to="/blog" className="read-more">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <article className="post-hero">
        <span className="blog-meta">
          <span role="img" aria-label={post.category}>
            {post.emoji}
          </span>{" "}
          {post.category}
        </span>
        <h1 className="post-title">{post.title}</h1>
      </article>

      <div className="post-body">
        {post.image && (
          <img src={post.image} alt={post.title} />
        )}

        {/* Split paragraphs by blank line (\n\n) */}
        {post.content
          .split("\n\n")
          .map((para, i) =>
            para.trim() ? <p key={i}>{para.trim()}</p> : null
          )}
      </div>

      <Link to="/blog" className="read-more">← Back to all posts</Link>
    </div>
  );
}