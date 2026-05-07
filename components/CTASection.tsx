"use client";

import { useState } from "react";

export default function CTASection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="cta-section"
      style={{
        background: "linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-section) 50%, var(--bg-deep) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 160px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 40% at center top, rgba(201,123,26,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "11px",
          letterSpacing: "4px",
          color: "var(--amber)",
          textTransform: "uppercase",
          marginBottom: "24px",
          position: "relative",
        }}
      >
        Small Batch · Cold Pressed
      </p>

      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(42px, 6vw, 80px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--cream)",
          letterSpacing: "-1px",
          lineHeight: 1.05,
          marginBottom: "24px",
          position: "relative",
        }}
      >
        The world&apos;s finest<br />
        <span
          style={{
            background: "linear-gradient(90deg, var(--amber), var(--amber-light))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          mango, bottled.
        </span>
      </h2>

      {/* Gold divider */}
      <div
        style={{
          width: "80px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--amber), transparent)",
          margin: "0 auto 40px",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          color: "var(--cream-muted)",
          letterSpacing: "1px",
          marginBottom: "48px",
          position: "relative",
        }}
      >
        Small batch. Cold pressed. Ships worldwide.
      </p>

      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "3px",
          textTransform: "uppercase",
          textDecoration: "none",
          color: "var(--bg-deep)",
          background: "linear-gradient(135deg, var(--amber), var(--amber-light))",
          padding: "18px 52px",
          borderRadius: 0,
          display: "inline-block",
          boxShadow: hovered
            ? "0 0 80px rgba(201,123,26,0.65)"
            : "0 0 50px rgba(201,123,26,0.45)",
          transform: hovered ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          position: "relative",
        }}
      >
        Shop the Bottle
      </a>
    </section>
  );
}
