// src/setupPosts.js
const posts = [
  {
    id: "1",
    title: "How to Start Coding in React",
    category: "Coding blog",
    emoji: "🚀",
    image: "https://source.unsplash.com/800x400/?react,code",
    content: `
React is a powerful JavaScript library for building user interfaces.

This guide will help you get started with the basics of React, including components, props, and state.

We'll also cover how to create pages with React Router and how to style with CSS modules.
    `.trim(),
  },
  {
    id: "2",
    title: "Life at a Tech Startup",
    category: "Startup life",
    emoji: "💼",
    image: "https://source.unsplash.com/800x400/?startup,office",
    content: `
Working at a startup can be fast‑paced and exciting.

Learn what to expect and how to thrive in a startup environment—from wearing many hats to shipping quickly.

We'll share tips on communication, focus, and asking great questions.
    `.trim(),
  },
  {
    id: "3",
    title: "The Power of UI/UX Design",
    category: "Design thinking",
    emoji: "🎨",
    image: "https://source.unsplash.com/800x400/?design,ux",
    content: `
Good design is not just about looks—it's about usability.

Let’s explore how UI/UX affects user experience and engagement, with practical principles you can apply today.

We’ll also link to resources and checklists to level up your next project.
    `.trim(),
  },
];

export default posts;