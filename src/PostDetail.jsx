import React from "react";
import { Link, useParams } from "react-router-dom";
import "./PostDetail.css";
import posts from "./posts.json";

export default function PostDetail() {
  const { slug } = useParams();

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const post = sortedPosts.find(
    (item) =>
      String(item.slug).trim().toLowerCase() === String(slug).trim().toLowerCase() ||
      String(item.id) === String(slug)
  );

  if (!post) {
    return (
      <main className="pd-page">
        <div className="pd-wrap">
          <article className="pd-card">
            <p className="pd-kicker">404</p>
            <h1>Post not found</h1>
            <p className="pd-intro">
              The blog post you are looking for does not exist.
            </p>

            <div className="pd-navRow center">
              <Link className="pd-navBtn" to="/blog">
                Back to Blog
              </Link>
            </div>
          </article>
        </div>
      </main>
    );
  }

  const currentIndex = sortedPosts.findIndex((item) => item.id === post.id);
  const prevPost =
    currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  return (
    <main className="pd-page">
      <div className="pd-wrap">
        <article className="pd-card">
          <p className="pd-meta">
            {post.date} • {post.author || "Alex"}
          </p>

          <h1>{post.title}</h1>

          {(post.excerpt || post.description) && (
            <p className="pd-intro">{post.excerpt || post.description}</p>
          )}

          <div className="pd-body">
            {Array.isArray(post.content) ? (
              post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{post.content}</p>
            )}
          </div>

          <div className="pd-navRow">
            <div className="pd-navSide left">
              {prevPost ? (
                <Link className="pd-navBtn" to={`/blog/${prevPost.slug || prevPost.id}`}>
                  ← Prev: {prevPost.title}
                </Link>
              ) : (
                <span className="pd-navMuted">No previous</span>
              )}
            </div>

            <div className="pd-navSide center">
              <Link className="pd-navBtn" to="/blog">
                Back to Blog
              </Link>
            </div>

            <div className="pd-navSide right">
              {nextPost ? (
                <Link className="pd-navBtn" to={`/blog/${nextPost.slug || nextPost.id}`}>
                  Next: {nextPost.title} →
                </Link>
              ) : (
                <span className="pd-navMuted">No next</span>
              )}
            </div>
          </div>

          <div className="pd-footerHint">
            Tip: add <b>image</b>, <b>excerpt</b>, <b>author</b>, and <b>slug</b> in
            your posts.json for stronger SEO.
          </div>
        </article>
      </div>
    </main>
  );
}