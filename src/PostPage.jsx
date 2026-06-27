// src/PostPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PostPage.css";

// Same posts as on the Blog cards (ids must match Blog.jsx)
const posts = [
  {
    id: 1,
    title: "Designing Neon Interfaces That Still Feel Human",
    category: "Design",
    date: "Oct 2025",
    readTime: "6 min read",
    tags: ["UIDesign", "Neon", "Aesthetic"],
    sections: [
      {
        heading: "1. Why Human UI Still Matters",
        paragraphs: [
          "Even futuristic neon UI must feel human, relatable, warm, and readable.",
          "Overuse of glow can make your interface feel like an arcade machine instead of a premium dashboard."
        ]
      },
      {
        heading: "2. Modern Neon Techniques",
        paragraphs: [
          "Use soft gradients instead of hard neon lines.",
          "Avoid 100% white text – use bluish-white or purple-white for better glow integration."
        ]
      },
      {
        heading: "3. Applying This to Your Blog",
        paragraphs: [
          "Reuse one glow style and one accent color so the blog feels like one product, not random pages.",
          "Small motion, clean type, and a consistent glow language make everything feel intentional."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Smooth Page Transitions with React + Framer Motion",
    category: "Code",
    date: "Sep 2025",
    readTime: "8 min read",
    tags: ["React", "FramerMotion", "Animation"],
    sections: [
      {
        heading: "1. Why Transitions Matter",
        paragraphs: [
          "Good transitions make navigation feel intentional and premium.",
          "They help users understand where they came from and where they are going."
        ]
      },
      {
        heading: "2. Core Framer Motion Patterns",
        paragraphs: [
          "Use fade + slide for page entries instead of wild spins and flips.",
          "Stagger content so the page feels like it is assembling smoothly in front of the user."
        ]
      },
      {
        heading: "3. Applying This to Your Blog",
        paragraphs: [
          "Wrap your routes in a transition wrapper so every page feels part of one system.",
          "Reuse the same easing + duration values to keep the motion language consistent."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Alien Signals: Logging Strange Ideas Before You Forget",
    category: "Experiments",
    date: "Aug 2025",
    readTime: "4 min read",
    tags: ["Creativity", "Ideas", "Workflow"],
    sections: [
      {
        heading: "1. Why Capture Weird Ideas?",
        paragraphs: [
          "Strange ideas become UI experiments, products, or full projects later.",
          "If you don’t log them, they vanish like radio noise in deep space."
        ]
      },
      {
        heading: "2. A Lightweight Logging System",
        paragraphs: [
          "Give each idea a name, a quick description, and a tag for the type of experiment.",
          "Don’t judge or over-edit. The goal is to store raw signals, not polished case studies."
        ]
      },
      {
        heading: "3. Connecting It to Your Blog",
        paragraphs: [
          "Turn the best signals into full posts, and link them back to your original notes.",
          "Your blog becomes a public log of how your ideas evolved over time."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Building a Blog That Feels Like a Sci-Fi Interface",
    category: "Code",
    date: "Jul 2025",
    readTime: "7 min read",
    tags: ["React", "DesignSystems"],
    sections: [
      {
        heading: "1. Start with the Mood",
        paragraphs: [
          "Pick a core mood: cockpit, starship bridge, or neon lab console.",
          "Use that mood to drive your colors, card shapes, and typography choices."
        ]
      },
      {
        heading: "2. Components as Console Panels",
        paragraphs: [
          "Treat each section (hero, cards, post layout) like a separate panel on the same dashboard.",
          "Reuse borders, radiuses, and glow strengths so everything feels related."
        ]
      },
      {
        heading: "3. Ship It and Iterate",
        paragraphs: [
          "Don’t wait for perfection. Ship a v1, get it running, and keep polishing the details.",
          "Every new tweak – spacing, glow, motion – trains your future self to design faster."
        ]
      }
    ]
  }
];

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="post-page-shell">
        <div className="post-not-found-card">
          <h1>Post Not Found</h1>
          <button
            className="post-back-button"
            onClick={() => navigate("/blog")}
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="post-page-shell">
      <div className="post-page-card">
        <div className="post-page-top-row">
          <button
            className="post-back-link"
            onClick={() => navigate("/blog")}
          >
            ← Back to Blog
          </button>
          <span className="post-category-pill">{post.category}</span>
        </div>

        <h1 className="post-page-title">{post.title}</h1>

        <div className="post-meta">
          <span>{post.date}</span>
          <span className="dot">•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="post-tags-row">
          {post.tags.map((tag) => (
            <span key={tag} className="post-tag-pill">
              #{tag}
            </span>
          ))}
        </div>

        <div className="post-content">
          {post.sections.map((section) => (
            <section key={section.heading} className="post-section">
              <h3>{section.heading}</h3>
              {section.paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="post-bottom-row">
          <button
            className="post-back-button"
            onClick={() => navigate("/blog")}
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
