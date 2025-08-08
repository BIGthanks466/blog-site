import React from 'react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Welcome to My Blog",
      content: "This is the first post on my blog built with React."
    },
    {
      id: 2,
      title: "Why I Love React",
      content: "React makes building user interfaces a breeze. JSX is simple and powerful."
    },
    {
      id: 3,
      title: "Learning JavaScript",
      content: "Understanding variables, functions, and loops is the key to mastering JS."
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

export default Blog;
