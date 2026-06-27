// src/Projects.js
export default function Projects() {
  const items = [
    { title: "MyBlog", desc: "This site — React + Router.", link: "#" },
    { title: "Nesteko", desc: "Real estate UI exploration.", link: "#" },
  ];
  return (
    <main className="container">
      <h1>Projects</h1>
      <p>Selected work and experiments. More coming soon.</p>
      <div className="grid">
        {items.map(p => (
          <a key={p.title} className="card" href={p.link}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}