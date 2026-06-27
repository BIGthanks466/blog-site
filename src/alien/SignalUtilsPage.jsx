import React from "react";
import { makeId, glyphs, binaryNoise, seed } from "./SignalUtils";

function SignalUtilsPage() {
  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
      <h1>👽 Alien Signal Utilities</h1>
      <p>Random Glyph Example: <strong>{glyphs[0]}</strong></p>
      <p>Generated ID: <strong>{makeId(8)}</strong></p>
      <p>Binary Noise Sample: <strong>{binaryNoise(5)}</strong></p>
      <p>Random Seed: <strong>{seed()}</strong></p>
      <p style={{ marginTop: "1rem", opacity: 0.7 }}>
        🚀 These utilities power the alien signal experiments.
      </p>
    </div>
  );
}

export default SignalUtilsPage;