Keanu Reeves, [8/6/2025 4:13 AM]
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Blog from './blog';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

Keanu Reeves, [8/6/2025 4:53 AM]
// src/blog.js
import React from 'react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "My First Blog Post",
      content: "This is the content of my first blog post. I'm learning React and building my own blog!"
    },
    {
      id: 2,
      title: "React is Awesome",
      content: "React makes building user interfaces a breeze. JSX is simple and powerful."
    }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '30px' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;Keanu Reeves, [8/6/2025 4:13 AM]
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Blog from './blog';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

Keanu Reeves, [8/6/2025 4:56 AM]
{
  id: 3,
  title: "Learning JavaScript",
  content: "Understanding variables, functions, and loops is the key to mastering JS."
}