import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        background: { color: "#0b0f1a" },
        particles: {
          number: { value: 60 },
          color: { value: "#4cc9f0" },
          links: {
            enable: true,
            color: "#4cc9f0"
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: 2
          }
        }
      }}
    />
  );
}