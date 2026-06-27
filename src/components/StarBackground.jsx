import React, { useEffect, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function StarBackground() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  if (!engineReady) return null; // Prevent render before engine is ready

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#000000" }, // black background
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" }, // white stars
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default StarBackground;