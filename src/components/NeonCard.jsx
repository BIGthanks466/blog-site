import React from "react";
import "./neon.css";

export default function NeonCard({ children, as: Tag = "article", className = "" }) {
  return (
    <Tag className={`neon-card ${className}`}>
      <div className="neon-card__glow"></div>
      <div className="neon-card__inner">{children}</div>
    </Tag>
  );
}