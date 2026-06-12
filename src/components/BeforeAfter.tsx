"use client";

import { useRef, useState } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  height?: number;
  beforePosition?: string;
  afterPosition?: string;
}

export default function BeforeAfter({
  before,
  after,
  beforeLabel = "Före",
  afterLabel = "Efter",
  height = 440,
  beforePosition = "center",
  afterPosition = "center",
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none cursor-ew-resize"
      style={{ height, touchAction: "none" }}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
        updatePos(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updatePos(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      {/* Efter-bild – hela bakgrunden */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: afterPosition }}
      />

      {/* Före-bild – klippt till vänstra delen */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={beforeLabel}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: beforePosition }}
        />
      </div>

      {/* Skiljelinje */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.5)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        {/* Handtag */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-ink">
            <path
              d="M4 7H1M1 7L3 5M1 7L3 9M10 7H13M13 7L11 5M13 7L11 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Etiketter */}
      <span className="absolute top-4 left-4 bg-background/70 text-foreground text-xs px-3 py-1 uppercase tracking-widest pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 bg-background/70 text-foreground text-xs px-3 py-1 uppercase tracking-widest pointer-events-none">
        {afterLabel}
      </span>
    </div>
  );
}
