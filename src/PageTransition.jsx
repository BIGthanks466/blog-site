// src/PageTransition.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageTransition.css";

export default function PageTransition({ children }) {
  const location = useLocation();

  // "in" | "out"
  const [phase, setPhase] = useState("in");

  // Used to swap the rendered children AFTER fade-out
  const [routeKey, setRouteKey] = useState(location.pathname);

  // Prevent timeout stacking / memory leaks
  const timeoutRef = useRef(null);

  // Match this with CSS transition duration (ms)
  const DURATION = 220;

  useEffect(() => {
    // Clear any previous timers
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Start fade out
    setPhase("out");

    // After fade out, swap content and fade in
    timeoutRef.current = setTimeout(() => {
      setRouteKey(location.pathname);
      setPhase("in");
    }, DURATION);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [location.pathname]);

  return (
    <div className={`page-transition ${phase}`}>
      {/* key forces React to treat route content as changed after routeKey updates */}
      <div key={routeKey} className="page-transition-inner">
        {children}
      </div>
    </div>
  );
}