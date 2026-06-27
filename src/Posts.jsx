import { useParams, Link } from "react-router-dom";
import { posts } from "./data/posts";

function Post() {
  const { slug } = useParams();

  // Sort newest first
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const currentIndex = sortedPosts.findIndex(
    (p) => p.slug === slug
  );

  const post = sortedPosts[currentIndex];

  if (!post) {
    return <h2>Post not found.</h2>;
  }

  const prevPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  const nextPost =
    currentIndex > 0
      ? sortedPosts[currentIndex - 1]
      : null;

  const relatedPosts = sortedPosts.filter(
    (p) =>
      p.category === post.category &&
      p.slug !== post.slug
  );

  return (
    <div className="post-page">
      <h1>{post.title}</h1>

      <p>
        {post.date} • {post.readTime}
      </p>

      <div className="post-content">
        {post.content}
      </div>

      <div className="post-navigation">
        {prevPost && (
          <Link to={`/blog/${prevPost.slug}`}>
            ← Previous
          </Link>
        )}

        {nextPost && (
          <Link to={`/blog/${nextPost.slug}`}>
            Next →
          </Link>
        )}
      </div>

      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <h3>Related Posts</h3>

          {relatedPosts.map((item) => (
            <Link
              key={item.slug}
              to={`/blog/${item.slug}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;