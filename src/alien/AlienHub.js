import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./alien.css";
import { seed, makeId, strength, glyphs, binaryNoise, nowIso } from "./SignalUtils";

const STORAGE_KEY = "alien_signals_v1";

export default function AlienHub() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setItems(JSON.parse(saved));
    } else {
      const s = seed();
      setItems(s);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    }
  }, []);

  function addTransmission() {
    const t = {
      id: makeId(),
      stamp: nowIso(),
      strength: strength(),
      header: glyphs(24),
      raw: binaryNoise(160),
      translated: "We hear your small suns. Do not fear the quiet between.",
      interpretation:
        "Maybe about cities at night (lights = small suns). The ‘quiet between’ could be power gaps or silence online.",
    };
    const next = [t, ...items];
    setItems(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <div className="alien-wrap">
      <div className="alien-hero">
        <h1>📡 Signal Receiver</h1>
        <p className="muted">
          Fictional transmissions decoded from an unknown source. For creative exploration only.
        </p>
        <div className="actions">
          <button onClick={addTransmission}>Generate New Transmission</button>
          <Link className="secondary" to="/">Back to Home</Link>
        </div>
      </div>

      <ul className="grid">
        {items.map((t) => (
          <li key={t.id} className="card">
            <div className="meta">
              <span>Transmission #{t.id}</span>
              <span>Strength: {t.strength}%</span>
              <span>{t.stamp}</span>
            </div>
            <pre className="header">{t.header}</pre>
            <pre className="raw">{t.raw}</pre>
            <blockquote className="translated">“{t.translated}”</blockquote>
            <p className="interp"><strong>Interpretation:</strong> {t.interpretation}</p>
            <Link className="view" to={`/signals/${t.id}`}>Open</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}