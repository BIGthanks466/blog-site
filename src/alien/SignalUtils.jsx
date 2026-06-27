// Helpers to generate realistic-looking fake transmissions
export function makeId(len = 8) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export function binaryNoise(bits = 144) {
  let s = "";
  for (let i = 0; i < bits; i++) s += Math.random() > 0.5 ? "1" : "0";
  return s.replace(/(.{8})/g, "$1 ").trim();
}

export function glyphs(len = 24) {
  const g = "⟟⌰⟒⋉⟊⌖⍜⍾⟁⋇⋏⋔⋎⋒⋓⋕⋖⋗⋘⋙⋚⋛";
  let s = "";
  for (let i = 0; i < len; i++) s += g[Math.floor(Math.random() * g.length)];
  return s;
}

export function nowIso() {
  return new Date().toISOString().replace("T", " ").replace("Z", " UTC");
}

export function strength() {
  return Math.floor(42 + Math.random() * 54); // 42–96%
}

export function seed() {
  return [
    {
      id: makeId(),
      stamp: nowIso(),
      strength: strength(),
      header: glyphs(28),
      raw: binaryNoise(152),
      translated: "We map the dark water. Your storms are loud. Hold fast.",
      interpretation:
        "Sounds like they're watching oceans or power grids. Maybe a metaphor for chaos and resilience.",
    },
    {
      id: makeId(),
      stamp: nowIso(),
      strength: strength(),
      header: glyphs(20),
      raw: binaryNoise(136),
      translated: "The red sky is memory, not warning.",
      interpretation:
        "Could be about sunsets, Mars… or past wars. Ambiguous on purpose.",
    },
  ];
}