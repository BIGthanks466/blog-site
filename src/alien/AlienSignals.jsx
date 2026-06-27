import React, { useState, useEffect } from "react";

const styles = `
/* Alien Signals - Sci-Fi Interface CSS */

.alien-signals-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a0033 50%, #0a0a1a 100%);
  color: #00ffcc;
  font-family: "Orbitron", "Courier New", monospace;
  padding: 120px 40px 60px;
  position: relative;
  overflow-x: hidden;
}

.alien-signals-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(0deg, transparent 24%, rgba(0, 255, 204, 0.05) 25%, rgba(0, 255, 204, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, 0.05) 75%, rgba(0, 255, 204, 0.05) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(0, 255, 204, 0.05) 25%, rgba(0, 255, 204, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, 0.05) 75%, rgba(0, 255, 204, 0.05) 76%, transparent 77%, transparent);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: -1;
  animation: drift 20s linear infinite;
}

@keyframes drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.alien-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
  gap: 40px;
}

.header-left {
  flex: 1;
}

.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #00ffcc;
  margin-bottom: 16px;
  font-weight: bold;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #00ffcc;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
  box-shadow: 0 0 10px #00ffcc;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.alien-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0 0 12px 0;
  color: #00ffff;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(255, 0, 110, 0.3);
  letter-spacing: 2px;
}

.alien-desc {
  font-size: 1rem;
  color: rgba(0, 255, 200, 0.7);
  line-height: 1.6;
  max-width: 600px;
  margin: 0;
}

.header-right {
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.status-box {
  background: rgba(0, 255, 200, 0.05);
  border: 1px solid rgba(0, 255, 200, 0.3);
  border-radius: 4px;
  padding: 12px 16px;
  min-width: 160px;
  text-align: center;
}

.status-label {
  font-size: 0.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(0, 255, 200, 0.6);
  display: block;
  margin-bottom: 6px;
}

.status-value {
  font-size: 1.8rem;
  color: #00ffcc;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 200, 0.5);
}

.controls-section {
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
}

.decode-btn,
.clear-logs-btn {
  padding: 12px 24px;
  background: rgba(0, 255, 200, 0.1);
  border: 2px solid rgba(0, 255, 200, 0.3);
  color: #00ffcc;
  font-family: "Orbitron", monospace;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.decode-btn:hover,
.clear-logs-btn:hover {
  background: rgba(0, 255, 200, 0.2);
  border-color: #00ffcc;
  box-shadow: 0 0 15px rgba(0, 255, 200, 0.3);
}

.decode-btn.active {
  background: rgba(0, 255, 200, 0.2);
  border-color: #00ffcc;
  box-shadow: 0 0 20px rgba(0, 255, 200, 0.5), inset 0 0 10px rgba(0, 255, 200, 0.1);
}

.signals-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.waveform-section,
.signal-log-section {
  background: rgba(0, 20, 40, 0.6);
  border: 1px solid rgba(0, 255, 200, 0.2);
  border-radius: 8px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: bold;
  color: rgba(0, 255, 200, 0.8);
  border-bottom: 1px solid rgba(0, 255, 200, 0.2);
  padding-bottom: 12px;
}

.array-label,
.decoding-label {
  font-size: 0.75rem;
  color: rgba(255, 0, 110, 0.7);
  letter-spacing: 1px;
}

.waveform-container {
  width: 100%;
  height: 150px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
  border: 1px solid rgba(0, 255, 200, 0.1);
}

.waveform-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 8px rgba(0, 255, 200, 0.3));
}

.waveform-tip {
  font-size: 0.8rem;
  color: rgba(0, 255, 200, 0.5);
  margin: 0;
  font-style: italic;
}

.log-entries {
  max-height: 300px;
  overflow-y: auto;
}

.log-entry {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.85rem;
  padding: 8px;
  border-left: 2px solid rgba(0, 255, 200, 0.2);
  padding-left: 12px;
  transition: all 0.3s ease;
}

.log-entry:hover {
  background: rgba(0, 255, 200, 0.05);
  border-left-color: #00ffcc;
  padding-left: 16px;
}

.log-time {
  color: rgba(255, 0, 110, 0.7);
  font-weight: bold;
  min-width: 90px;
}

.log-message {
  color: rgba(0, 255, 200, 0.8);
  line-height: 1.4;
  flex: 1;
}

.log-entries::-webkit-scrollbar {
  width: 6px;
}

.log-entries::-webkit-scrollbar-track {
  background: rgba(0, 255, 200, 0.05);
}

.log-entries::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 200, 0.3);
  border-radius: 3px;
}

.archive-section {
  margin-bottom: 40px;
}

.archive-header {
  margin-bottom: 30px;
  text-align: center;
}

.archive-header h2 {
  font-size: 2rem;
  margin: 0 0 12px 0;
  color: #00ffff;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  letter-spacing: 2px;
}

.archive-header p {
  color: rgba(0, 255, 200, 0.6);
  font-size: 0.95rem;
  margin: 0;
}

.archive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.archive-card {
  background: rgba(0, 30, 60, 0.5);
  border: 1px solid rgba(0, 255, 200, 0.2);
  border-radius: 6px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.archive-card:hover {
  background: rgba(0, 40, 80, 0.6);
  border-color: rgba(0, 255, 200, 0.5);
  box-shadow: 0 0 20px rgba(0, 255, 200, 0.2), inset 0 0 20px rgba(0, 255, 200, 0.05);
  transform: translateY(-4px);
}

.archive-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 12px;
}

.archive-title {
  font-size: 1.1rem;
  color: #00ffcc;
  font-weight: bold;
  flex: 1;
}

.archive-code {
  font-size: 0.75rem;
  color: rgba(255, 0, 110, 0.7);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.archive-category {
  font-size: 0.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(0, 255, 200, 0.5);
  margin-bottom: 12px;
}

.archive-desc {
  font-size: 0.9rem;
  color: rgba(0, 255, 200, 0.7);
  line-height: 1.5;
  margin: 0;
}

.archive-expanded {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 255, 200, 0.2);
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.archive-expanded p {
  font-size: 0.85rem;
  color: rgba(0, 255, 200, 0.6);
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}

.ambient-footer {
  text-align: center;
  padding: 40px 0;
  border-top: 1px solid rgba(0, 255, 200, 0.2);
  color: rgba(0, 255, 200, 0.4);
  font-size: 0.9rem;
  letter-spacing: 2px;
  animation: flicker 4s ease-in-out infinite;
}

@keyframes flicker {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@media (max-width: 768px) {
  .alien-signals-container {
    padding: 100px 20px 40px;
  }

  .alien-header {
    flex-direction: column;
    gap: 30px;
  }

  .alien-title {
    font-size: 2.5rem;
  }

  .signals-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .archive-grid {
    grid-template-columns: 1fr;
  }
}
`;

function AlienSignals() {
  const [decodeMode, setDecodeMode] = useState(true);
  const [waveformData, setWaveformData] = useState(
    Array.from({ length: 40 }, () => Math.random() * 100)
  );
  const [expandedArchive, setExpandedArchive] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveformData((prev) => [
        ...prev.slice(1),
        Math.random() * 100,
      ]);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const signalLogs = [
    { time: "23:46:19 AM", message: "⚡ Contact established. Frequency locked. Awaiting response protocol." },
    { time: "23:46:22 AM", message: "🌌 Harmonic resonance detected. Signal origin: Unknown vector. Distance: Incalculable." },
    { time: "23:46:25 AM", message: "📡 Pattern recognition complete. Transmission contains geometric sequences. Mathematical impossibility." },
    { time: "23:46:28 AM", message: "⚠️ Warning: Signal changing frequency. It knows we're listening. Intent unclear." },
    { time: "23:46:31 AM", message: "🔮 Decode status: 47%. Message contains layers. Each layer reveals deeper questions." },
  ];

  const archiveItems = [
    {
      id: 1,
      title: "First Contact Protocol",
      category: "TRANSMISSION ARCHIVES",
      code: "AX-001",
      desc: "The signal arrived without warning. Three distinct pulses. Then silence for 7 minutes. Then it returned... changed.",
      expanded: "They're not trying to communicate. They're trying to understand. The pulses aren't language—they're questions. Each one more profound than the last.",
    },
    {
      id: 2,
      title: "The Harmonic Shift",
      category: "COSMIC JOURNAL",
      code: "AX-089",
      desc: "Something fundamental changed at 11:47 PM UTC. The signal shifted to a frequency no terrestrial source could produce.",
      expanded: "The mathematics involved should not exist. Our instruments shouldn't be able to detect it. Yet here it is. Waiting. Patient. Intelligent.",
    },
    {
      id: 3,
      title: "Geometric Transmission",
      category: "SIGNAL LOG",
      code: "AX-247",
      desc: "The latest sequence contains a pattern. Not random. Not noise. A blueprint. For what, we cannot yet comprehend.",
      expanded: "If we decode this correctly, we won't be hearing from them anymore. We'll be becoming them. Or they'll be becoming us. The implications are... astronomical.",
    },
    {
      id: 4,
      title: "The Silent Years",
      category: "HISTORICAL RECORD",
      code: "AX-1947",
      desc: "They've been here longer than we thought. The archives show signals dating back decades. We were just never listening correctly.",
      expanded: "The signal has been constant. Waiting. Testing. Evolving. Every year it grows more sophisticated. Every year, it understands us better.",
    },
    {
      id: 5,
      title: "Quantum Entanglement Observed",
      category: "RESEARCH NOTES",
      code: "AX-512",
      desc: "The signal exhibits properties of quantum superposition. It exists in multiple states simultaneously. Our measurement changes its properties.",
      expanded: "By observing it, we're creating it. Or it's creating us. The boundary between observer and observed has become... unclear.",
    },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="alien-signals-container">
        <div className="alien-header">
          <div className="header-left">
            <div className="live-indicator">
              <span className="pulse-dot"></span>
              LIVE UPLINK — SIGNAL INCOMING
            </div>
            <h1 className="alien-title">
              Alien Signals 👽
            </h1>
            <p className="alien-desc">
              They've been calling from the void. Patient. Methodical. Each transmission more complex than the last. We're not decoding a message—we're witnessing the birth of understanding between two worlds that were never meant to meet.
            </p>
          </div>
          <div className="header-right">
            <div className="status-box">
              <div className="status-label">SIGNAL LOCK</div>
              <div className="status-value">47%</div>
            </div>
            <div className="status-box">
              <div className="status-label">PULSE INDEX</div>
              <div className="status-value">#0860</div>
            </div>
            <div className="status-box">
              <div className="status-label">ORIGIN</div>
              <div className="status-value">UNKNOWN</div>
            </div>
          </div>
        </div>

        <div className="controls-section">
          <button 
            className={`decode-btn ${decodeMode ? "active" : ""}`}
            onClick={() => setDecodeMode(!decodeMode)}
          >
            Decode Mode: {decodeMode ? "ON" : "OFF"}
          </button>
          <button className="clear-logs-btn">Clear Logs</button>
        </div>

        <div className="signals-grid">
          <div className="waveform-section">
            <div className="section-header">
              <span>⚡ WAVEFORM MONITOR</span>
              <span className="array-label">ARRAY-7 · DEEP SPACE</span>
            </div>
            <div className="waveform-container">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="waveform-svg">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00ffcc" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {waveformData.map((value, i) => (
                  <rect
                    key={i}
                    x={(i / waveformData.length) * 500}
                    y={150 - (value / 100) * 120}
                    width={500 / waveformData.length}
                    height={(value / 100) * 120}
                    fill="url(#waveGradient)"
                    opacity="0.9"
                  />
                ))}
              </svg>
            </div>
            <p className="waveform-tip">The silence between the pulses matters more than the pulses themselves.</p>
          </div>

          <div className="signal-log-section">
            <div className="section-header">
              <span>📡 SIGNAL LOG</span>
              <span className="decoding-label">REAL-TIME DECODING</span>
            </div>
            <div className="log-entries">
              {signalLogs.map((log, i) => (
                <div key={i} className="log-entry">
                  <span className="log-time">{log.time}</span>
                  <span className="log-message">{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="archive-section">
          <div className="archive-header">
            <h2>🔮 TRANSMISSION ARCHIVE</h2>
            <p>Every signal ever received. Every mystery ever documented. Click to decrypt and understand what they're trying to tell us.</p>
          </div>

          <div className="archive-grid">
            {archiveItems.map((item) => (
              <div
                key={item.id}
                className={`archive-card ${expandedArchive === item.id ? "expanded" : ""}`}
                onClick={() =>
                  setExpandedArchive(expandedArchive === item.id ? null : item.id)
                }
              >
                <div className="archive-card-header">
                  <div className="archive-title">{item.title}</div>
                  <div className="archive-code">{item.code}</div>
                </div>
                <div className="archive-category">{item.category}</div>
                <p className="archive-desc">{item.desc}</p>
                {expandedArchive === item.id && (
                  <div className="archive-expanded">
                    <p>{item.expanded}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="ambient-footer">
          <p>🌌 Status: Listening. Always listening. They're out there. They're calling. And we're finally beginning to understand.</p>
        </div>
      </div>
    </>
  );
}

export default AlienSignals;