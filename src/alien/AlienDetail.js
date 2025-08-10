import React, { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./alien.css";

const STORAGE_KEY = "alien_signals_v1";

export default function AlienDetail() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setItems(saved ? JSON.parse(saved) : []);
  }, []);

  const t = useMemo(() => items.find((x) => x.id === id), [items, id]);

  if (!t) {
    return (
      <div className="alien-wrap">
        <p>Transmission not found.</p>
        <Link className="secondary" to="/signals">Back to Signals</Link>
      </div>
    );
  }

  return (
    <div className="alien-wrap">
      <h1>Transmission #{t.id}</h1>
      <p className="muted">{t.stamp} • Strength {t.strength}%</p>
      <pre className="header">{t.header}</pre>
      <pre className="raw">{t.raw}</pre>
      <blockquote className="translated">“{t.translated}”</blockquote>
      <p className="interp"><strong>Interpretation:</strong> {t.interpretation}</p>
      <Link className="secondary" to="/signals">← Back</Link>
    </div>
  );
}