import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from './posts.json';
import './BlogPostDetail.css';

function BlogPostDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="blog-detail-page">
        <div className="not-found">
          <h1>Post not found</h1>
          <Link to="/blog" className="back-link">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-detail-page">
      <div className="blog-detail-bg-orb"></div>

      <article className="blog-detail-container">
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>

        <header className="post-detail-header">
          <div className="post-detail-meta">
            <span className="post-detail-category">{post.category}</span>
            <span className="post-detail-date">{post.date}</span>
          </div>
          <h1 className="post-detail-title">{post.title}</h1>
          <p className="post-detail-author">By {post.author}</p>
          <p className="post-detail-read">{post.readTime} read</p>
        </header>

        <div className="post-detail-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="post-detail-content">
          {post.content}
        </div>

        <footer className="post-detail-footer">
          <div className="post-detail-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="detail-tag">
                #{tag}
              </span>
            ))}
          </div>

          {post.details && (
            <div className="post-details-box">
              <h3>Signal Details</h3>
              <p>{post.details}</p>
            </div>
          )}

          <div className="post-nav">
            <Link to="/blog" className="nav-btn">
              All Posts
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}

export default BlogPostDetail;