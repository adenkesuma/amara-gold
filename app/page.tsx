"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import BannerCanvas from "@/components/BannerCanvas";
import CTASection from "@/components/CTASection";

const TOTAL_FRAMES = 242;
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

// Build frame URL list; skip every 2nd on mobile
const FRAME_URLS: string[] = [];
for (let i = 1; i <= TOTAL_FRAMES; i++) {
  if (isMobile && i % 2 === 0) continue;
  const n = String(i).padStart(4, "0");
  FRAME_URLS.push(`/frames/frame_${n}.jpg`);
}

export default function Home() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);

  const handleLoaded = useCallback((imgs: HTMLImageElement[]) => {
    setImages(imgs);
    setReady(true);
  }, []);

  return (
    <>
      <LoadingScreen frameUrls={FRAME_URLS} onLoaded={handleLoaded} />

      {ready && (
        <>
          <Navbar />

          {/* ── BANNER ── */}
          <section
            id="banner-section"
            style={{ position: "relative", height: "300vh" }}
          >
            <div
              style={{
                position: "sticky",
                top: 0,
                height: "100vh",
                width: "100%",
                overflow: "hidden",
              }}
            >
              {/* Warm amber glow behind canvas */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, rgba(201,123,26,0.2) 0%, rgba(10,5,0,0) 80%)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />

              <BannerCanvas images={images} />

              {/* ── OVERLAY 1: Cold Pressed (0–30%) ── */}
              <div
                id="overlay-1"
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "10%",
                  zIndex: 10,
                  pointerEvents: "none",
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "4px",
                    color: "var(--amber)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  Cold Pressed Mango
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                    fontSize: "clamp(52px, 6vw, 84px)",
                    lineHeight: 1.0,
                    background:
                      "linear-gradient(135deg, var(--cream) 0%, var(--amber) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Pure Gold.<br />Perfectly<br />Bottled.
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "var(--cream-muted)",
                    marginTop: "24px",
                    lineHeight: 1.6,
                  }}
                >
                  Cold-pressed. Never heated.<br />Never artificial.
                </p>
              </div>

              {/* ── OVERLAY 2: The Burst (35–65%) ── */}
              <div
                id="overlay-2"
                style={{
                  position: "absolute",
                  top: "18%",
                  right: "8%",
                  textAlign: "right",
                  zIndex: 10,
                  pointerEvents: "none",
                  opacity: 0,
                  transform: "translateY(-20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "4px",
                    color: "var(--amber)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  The Burst Moment
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 400,
                    fontSize: "clamp(48px, 5.5vw, 76px)",
                    lineHeight: 1.0,
                    color: "var(--cream)",
                  }}
                >
                  Liquid<br />Sunshine.
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "var(--cream-muted)",
                    marginTop: "24px",
                    lineHeight: 1.6,
                  }}
                >
                  100% mango.<br />Nothing else in the bottle.
                </p>
              </div>

              {/* ── OVERLAY 3: Center (70–92%) ── */}
              <div
                id="overlay-3"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, calc(-50% + 20px))",
                  textAlign: "center",
                  width: "80%",
                  zIndex: 10,
                  pointerEvents: "none",
                  opacity: 0,
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "4px",
                    color: "var(--amber)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  Pure Gold. Perfectly Bottled.
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                    fontSize: "clamp(60px, 7vw, 92px)",
                    lineHeight: 1.0,
                    background:
                      "linear-gradient(135deg, var(--amber) 0%, var(--amber-light) 50%, var(--cream) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Nature&apos;s<br />gold,
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "var(--cream-muted)",
                    marginTop: "24px",
                    lineHeight: 1.6,
                  }}
                >
                  Every drop earning its place in the bottle.
                </p>
              </div>
            </div>
          </section>

          {/* ── FEATURES STRIP ── */}
          <section
            style={{
              background: "var(--bg-section)",
              borderTop: "1px solid rgba(201,123,26,0.15)",
              borderBottom: "1px solid rgba(201,123,26,0.15)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              padding: "64px 80px",
              gap: "40px",
            }}
          >
            {[
              { num: "100%", label: "Pure Mango" },
              { num: "0°", label: "Cold Pressed" },
              { num: "0", label: "Artificial Additives" },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "var(--amber)",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    color: "var(--cream-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </section>

          <CTASection />

          {/* ── FOOTER ── */}
          <footer
            style={{
              padding: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(201,123,26,0.1)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                letterSpacing: "4px",
                color: "var(--amber)",
                textTransform: "uppercase",
              }}
            >
              Amara Gold
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                color: "var(--cream-muted)",
                opacity: 0.5,
              }}
            >
              © 2025 Amara Gold. All rights reserved.
            </span>
          </footer>
        </>
      )}
    </>
  );
}
