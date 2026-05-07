"use client";

import { useEffect, useRef, useCallback } from "react";

interface BannerCanvasProps {
  images: HTMLImageElement[];
}

type OverlayId = "overlay-1" | "overlay-2" | "overlay-3";

export default function BannerCanvas({ images }: BannerCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);

  // Draw a frame onto the canvas
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    idx = Math.max(0, Math.min(images.length - 1, Math.round(idx)));
    if (idx === lastFrameRef.current) return;
    lastFrameRef.current = idx;

    const img = images[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const ox = (cw - sw) / 2;
    const oy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, ox, oy, sw, sh);
  }, [images]);

  // Resize canvas to match container
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawFrame(lastFrameRef.current < 0 ? 0 : lastFrameRef.current);
  }, [drawFrame]);

  // Toggle overlay visibility
  const setOverlay = useCallback((id: OverlayId, visible: boolean) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (visible) {
      el.style.opacity = "1";
      el.style.transform =
        id === "overlay-3"
          ? "translate(-50%, -50%)"
          : "translateY(0)";
    } else {
      el.style.opacity = "0";
      el.style.transform =
        id === "overlay-1"
          ? "translateY(20px)"
          : id === "overlay-2"
          ? "translateY(-20px)"
          : "translate(-50%, calc(-50% + 20px))";
    }
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    resizeCanvas();
    drawFrame(0);
    setOverlay("overlay-1", true);

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const section = document.getElementById("banner-section");
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionH = section.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / sectionH));

        // Animate frame
        drawFrame(progress * (images.length - 1));

        // Overlays
        setOverlay("overlay-1", progress < 0.3);
        setOverlay("overlay-2", progress >= 0.35 && progress < 0.65);
        setOverlay("overlay-3", progress >= 0.7 && progress < 0.92);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [images, drawFrame, resizeCanvas, setOverlay]);

  return (
    <canvas
      ref={canvasRef}
      id="main-canvas"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 2,
      }}
    />
  );
}
