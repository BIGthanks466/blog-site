import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = `
  .blog-search-container {
    width: 100%;
    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(10, 15, 35, 0.6) 0%, rgba(20, 10, 40, 0.4) 100%);
    border: 1px solid rgba(0, 255, 200, 0.2);
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 255, 200, 0.1), inset 0 0 20px rgba(0, 255, 200, 0.05);
    font-family: 'Monaco', 'Courier New', monospace;
  }

  .search-bar-wrapper {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }

  .search-input-group {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-input {
    width: 100%;
    padding: 12px 16px 12px 16px;
    background: rgba(0, 20, 40, 0.8);
    border: 2px solid rgba(0, 255, 200, 0.3);
    border-radius: 4px;
    color: #00ffcc;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    transition: all 0.3s ease;
    outline: none;
    box-sizing: border-box;
  }

  .search-input::placeholder {
    color: rgba(0, 255, 200, 0.4);
  }

  .search-input:focus {
    border-color: #00ffcc;
    box-shadow: 0 0 12px rgba(0, 255, 200, 0.3), inset 0 0 8px rgba(0, 255, 200, 0.1);
    background: rgba(0, 30, 60, 0.9);
  }

  .search-icon {
    position: absolute;
    right: 12px;
    color: #00ffcc;
    opacity: 0.6;
    pointer-events: none;
  }

  .filter-toggle {
    padding: 10px 16px;
    background: rgba(0, 255, 200, 0.1);
    border: 2px solid rgba(0, 255, 200, 0.3);
    color: #00ffcc;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }

  .filter-toggle:hover {
    border-color: #00ffcc;
    box-shadow: 0 0 10px rgba(0, 255, 200, 0.3);
    background: rgba(0, 255, 200, 0.15);
  }

  .filter-toggle.active {
    border-color: #00ffcc;
    box-shadow: 0 0 15px rgba(0, 255, 200, 0.4);
    background: rgba(0, 255, 200, 0.2);
  }

  .filters-section {
    background: rgba(0, 10, 25, 0.5);
    border: 1px solid rgba(0, 255, 200, 0.15);
    border-radius: 4px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filter-group {
    margin-bottom: 1.5rem;
  }

  .filter-group:last-child {
    margin-bottom: 0;
  }

  .filter-label {
    display: block;
    color: #ff006e;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
    opacity: 0.8;
  }

  .sort-select {
    width: 100%;
    padding: 10px 12px;
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 255, 200, 0.2);
    color: #00ffcc;
    border-radius: 4px;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .sort-select:hover,
  .sort-select:focus {
    border-color: #00ffcc;
    box-shadow: 0 0 8px rgba(0, 255, 200, 0.2);
  }

  .sort-select option {
    background: #0a0f23;
    color: #00ffcc;
  }

  .filter-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .filter-tag {
    padding: 8px 12px;
    background: rgba(0, 255, 200, 0.05);
    border: 1px solid rgba(0, 255, 200, 0.25);
    color: #00ffcc;
    border-radius: 20px;
    font-size: 12px;
    font-family: 'Monaco', 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .filter-tag:hover {
    border-color: #00ffcc;
    background: rgba(0, 255, 200, 0.15);
    box-shadow: 0 0 8px rgba(0, 255, 200, 0.2);
  }

  .filter-tag.active {
    background: rgba(0, 255, 200, 0.2);
    border-color: #00ffcc;
    box-shadow: 0 0 12px rgba(0, 255, 200, 0.3);
  }

  .filter-tag.small {
    font-size: 11px;
    padding: 6px 10px;
  }

  .clear-filters-btn {
    width: 100%;
    padding: 10px 14px;
    background: rgba(255, 0, 110, 0.1);
    border: 1px solid rgba(255, 0, 110, 0.3);
    color: #ff006e;
    border-radius: 4px;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
  }

  .clear-filters-btn:hover {
    border-color: #ff006e;
    background: rgba(255, 0, 110, 0.15);
    box-shadow: 0 0 10px rgba(255, 0, 110, 0.2);
  }

  .results-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem 0;
    font-size: 12px;
  }

  .result-count {
    color: #00ffcc;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .filter-active-indicator {
    color: #ff006e;
    font-size: 11px;
    font-weight: 600;
  }

  .search-results {
    display: grid;
    gap: 1rem;
  }

  .result-item {
    padding: 1.25rem;
    background: rgba(0, 20, 40, 0.6);
    border: 1px solid rgba(0, 255, 200, 0.15);
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .result-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ffcc, transparent);
    transition: left 0.6s ease;
  }

  .result-item:hover {
    border-color: #00ffcc;
    background: rgba(0, 30, 60, 0.7);
    box-shadow: 0 0 15px rgba(0, 255, 200, 0.15);
    transform: translateY(-2px);
  }

  .result-item:hover::before {
    left: 100%;
  }

  .result-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .result-title {
    margin: 0;
    color: #00ffcc;
    font-size: 16px;
    font-weight: 700;
    flex: 1;
  }

  .result-category {
    padding: 4px 10px;
    background: rgba(255, 0, 110, 0.15);
    border: 1px solid rgba(255, 0, 110, 0.3);
    color: #ff006e;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  .result-excerpt {
    color: rgba(0, 255, 200, 0.7);
    font-size: 13px;
    line-height: 1.5;
    margin: 0 0 0.75rem 0;
    opacity: 0.9;
  }

  .result-meta {
    display: flex;
    gap: 1rem;
    font-size: 11px;
    color: rgba(0, 255, 200, 0.5);
    margin-bottom: 0.75rem;
  }

  .result-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .result-tag {
    padding: 4px 8px;
    background: rgba(0, 255, 200, 0.08);
    border: 1px solid rgba(0, 255, 200, 0.15);
    color: #00ffcc;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 500;
  }

  .result-tag-more {
    padding: 4px 8px;
    color: rgba(0, 255, 200, 0.5);
    font-size: 10px;
    font-weight: 500;
  }

  .no-results {
    text-align: center;
    padding: 3rem 2rem;
    color: rgba(0, 255, 200, 0.6);
  }

  .no-results-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  .no-results h3 {
    color: #00ffcc;
    font-size: 18px;
    margin: 0 0 0.5rem 0;
  }

  .no-results p {
    margin: 0 0 1.5rem 0;
    font-size: 13px;
    opacity: 0.7;
  }

  .reset-btn {
    padding: 10px 20px;
    background: rgba(0, 255, 200, 0.1);
    border: 1px solid rgba(0, 255, 200, 0.3);
    color: #00ffcc;
    border-radius: 4px;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .reset-btn:hover {
    border-color: #00ffcc;
    background: rgba(0, 255, 200, 0.15);
    box-shadow: 0 0 10px rgba(0, 255, 200, 0.2);
  }

  @media (max-width: 768px) {
    .blog-search-container {
      padding: 1.5rem;
      margin: 1rem;
    }

    .search-bar-wrapper {
      flex-direction: column;
    }

    .filter-toggle {
      width: 100%;
      justify-content: center;
    }

    .result-header {
      flex-direction: column;
    }

    .result-category {
      align-self: flex-start;
    }
  }
`;

const samplePosts = [
  {
    id: 1,
    slug: 'building-the-future-web',
    title: "Building the Future Web",
    date: "September 2025",
    category: "future-design",
    tags: ["web", "design", "future"],
    readTime: "6 min read",
    excerpt: "Patterns for immersive, living interfaces. Exploring the future of web development."
  },
  {
    id: 2,
    slug: 'cosmic-ui-inspiration',
    title: "Cosmic UI Inspiration",
    date: "September 2025",
    category: "cosmic-ui",
    tags: ["design", "inspiration"],
    readTime: "8 min read",
    excerpt: "Design ideas borrowed from the stars... exploring galactic themes, glowing effects."
  },
  {
    id: 3,
    slug: 'alien-tech-secrets',
    title: "Alien Tech Secrets",
    date: "August 2025",
    category: "signal-interface",
    tags: ["signals", "mystery"],
    readTime: "5 min read",
    excerpt: "Leaked knowledge from intergalactic engineers... patterns and architectures."
  },
  {
    id: 4,
    slug: 'galactic-design-patterns',
    title: "Galactic Design Patterns",
    date: "July 2025",
    category: "design-systems",
    tags: ["patterns", "reusable"],
    readTime: "7 min read",
    excerpt: "Reusable components for cosmic-scale projects. Discover futuristic design systems."
  },
  {
    id: 5,
    slug: 'neon-interfaces-code',
    title: "Neon Interfaces & Code",
    date: "June 2025",
    category: "code",
    tags: ["neon", "ui", "css"],
    readTime: "4 min read",
    excerpt: "Creating glowing, cyberpunk-style interfaces with CSS and JavaScript."
  }
];

export default function BlogSearchFilter({ posts = samplePosts }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('date-desc');
  const [showFilters, setShowFilters] = useState(true);

  const handlePostClick = (post) => {
    navigate(`/blog/${post.slug || post.id}`);
  };

  const categories = useMemo(() => {
    return [...new Set(posts.map(p => p.category))].filter(Boolean).sort();
  }, [posts]);

  const allTags = useMemo(() => {
    const tags = new Set();
    posts.forEach(p => {
      if (p.tags && Array.isArray(p.tags)) {
        p.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(post.category);

      const matchesTags = selectedTags.length === 0 || 
        (post.tags && post.tags.some(tag => selectedTags.includes(tag)));

      return matchesSearch && matchesCategory && matchesTags;
    });

    if (sortBy === 'date-desc') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'date-asc') {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [posts, searchQuery, selectedCategories, selectedTags, sortBy]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTags([]);
    setSortBy('date-desc');
  };

  const hasActiveFilters = searchQuery || selectedCategories.length > 0 || selectedTags.length > 0;

  return (
    <>
      <style>{styles}</style>
      <div className="blog-search-container">
        <div className="search-bar-wrapper">
          <div className="search-input-group">
            <input
              type="text"
              className="search-input"
              placeholder="Search transmissions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="search-icon">⚡</span>
          </div>
          <button
            className={`filter-toggle ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <span>≡</span>
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="filters-section">
            <div className="filter-group">
              <label className="filter-label">Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="title-asc">Title (A-Z)</option>
              </select>
            </div>

            {categories.length > 0 && (
              <div className="filter-group">
                <label className="filter-label">Categories</label>
                <div className="filter-tags">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`filter-tag ${selectedCategories.includes(category) ? 'active' : ''}`}
                      onClick={() => handleCategoryToggle(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {allTags.length > 0 && (
              <div className="filter-group">
                <label className="filter-label">Tags</label>
                <div className="filter-tags">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      className={`filter-tag small ${selectedTags.includes(tag) ? 'active' : ''}`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {hasActiveFilters && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear All Filters
              </button>
            )}
          </div>
        )}

        <div className="results-info">
          <span className="result-count">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'}
          </span>
          {hasActiveFilters && (
            <span className="filter-active-indicator">● Filters Active</span>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="search-results">
            {filteredPosts.map(post => (
              <div 
                key={post.id} 
                className="result-item"
                onClick={() => handlePostClick(post)}
              >
                <div className="result-header">
                  <h3 className="result-title">{post.title}</h3>
                  {post.category && (
                    <span className="result-category">{post.category}</span>
                  )}
                </div>
                {post.excerpt && (
                  <p className="result-excerpt">{post.excerpt}</p>
                )}
                <div className="result-meta">
                  <span>{post.date}</span>
                  {post.readTime && (
                    <span>{post.readTime}</span>
                  )}
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="result-tags">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="result-tag">#{tag}</span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="result-tag-more">+{post.tags.length - 3}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">📡</div>
            <h3>No Transmissions Found</h3>
            <p>Try adjusting your filters or search query</p>
            <button className="reset-btn" onClick={clearFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}