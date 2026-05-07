"use client";

import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  frameUrls: string[];
  onLoaded: (images: HTMLImageElement[]) => void;
}

export default function LoadingScreen({ frameUrls, onLoaded }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const loadedRef = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (frameUrls.length === 0) {
      setHidden(true);
      return;
    }

    imagesRef.current = new Array(frameUrls.length);
    loadedRef.current = 0;

    frameUrls.forEach((url, idx) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedRef.current++;
        const pct = Math.round((loadedRef.current / frameUrls.length) * 100);
        setProgress(pct);
        if (loadedRef.current === frameUrls.length) {
          setTimeout(() => {
            setHidden(true);
            onLoaded(imagesRef.current);
          }, 400);
        }
      };
      img.src = url;
      imagesRef.current[idx] = img;
    });
  }, [frameUrls, onLoaded]);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg-deep)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        transition: "opacity 0.8s ease",
        opacity: progress === 100 ? 0 : 1,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "6px",
          color: "var(--amber)",
          textTransform: "uppercase",
        }}
      >
        Amara Gold
      </div>

      <div
        style={{
          width: "200px",
          height: "1px",
          background: "rgba(201,123,26,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--amber), var(--amber-light))",
            width: `${progress}%`,
            transition: "width 0.1s ease",
          }}
        />
      </div>

      <div
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "11px",
          letterSpacing: "3px",
          color: "var(--cream-muted)",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
