import React, { useState, useMemo } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import posts from './posts.json';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['ALL', 'SIGNAL', 'TECHNOLOGY', 'DESIGN', 'REFLECTION'];

  const filteredPosts = useMemo(() => {
    let result = posts;

    // Filter by category
    if (selectedCategory !== 'ALL') {
      result = result.filter((post) => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term) ||
          post.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }

    // Sort
    if (sortBy === 'newest') {
      result = [...result].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
      result = [...result].sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return result;
  }, [selectedCategory, searchTerm, sortBy]);

  const featuredPost = posts.find((post) => post.featured);

  return (
    <main className="blog-page">
      <div className="blog-bg-orb"></div>

      <section className="blog-wrapper">
        {/* Header */}
        <div className="blog-header">
          <h1 className="blog-title">Blog Archives</h1>
          <p className="blog-subtitle">
            Select a post to read the full transmission.
          </p>
          <p className="blog-count">{filteredPosts.length} signals detected</p>
        </div>

        {/* Search & Filters */}
        <div className="blog-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search transmissions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">⚡</span>
          </div>

          <button className="filters-btn">🔧 Filters</button>
        </div>

        {/* Sort */}
        <div className="sort-section">
          <label className="sort-label">SORT BY</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Categories */}
        <div className="categories-section">
          <label className="categories-label">CATEGORIES</label>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="tags-section">
          <label className="tags-label">TAGS</label>
          <div className="tags-container">
            {Array.from(
              new Set(posts.flatMap((post) => post.tags))
            ).map((tag) => (
              <button
                key={tag}
                className="tag-btn"
                onClick={() => setSearchTerm(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="results-count">{filteredPosts.length} results</div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'ALL' && searchTerm === '' && (
          <div className="featured-section">
            <div className="featured-post">
              <div className="featured-badge">FEATURED TRANSMISSION</div>
              <h2 className="featured-title">{featuredPost.title}</h2>
              <p className="featured-date">{featuredPost.date}</p>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="featured-actions">
                <Link 
                  to={`/blog/${featuredPost.slug}`} 
                  className="btn-read"
                >
                  Read Transmission →
                </Link>
                <button 
                  className="btn-all" 
                  onClick={() => setSelectedCategory('ALL')}
                >
                  All Posts
                </button>
              </div>

              <div className="signal-strength">
                <h3>SIGNAL STRENGTH</h3>
                <div className="strength-bar"></div>
                <div className="strength-info">
                  <div>
                    <span className="strength-label">Mode</span>
                    <span className="strength-value">{featuredPost.category}</span>
                  </div>
                  <div>
                    <span className="strength-label">Status</span>
                    <span className="strength-value">Online</span>
                  </div>
                  <div>
                    <span className="strength-label">Protocol</span>
                    <span className="strength-value">v5.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="posts-section">
          <h2 className="posts-title">ALL TRANSMISSIONS</h2>
          <div className="posts-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-read">{post.readTime} read</span>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="btn-read-more"
                    >
                      Read more →
                    </Link>
                  </div>
                  <div className="post-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="post-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-posts">
                <p>No transmissions found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;