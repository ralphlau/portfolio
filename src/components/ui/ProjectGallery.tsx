"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import type { ProjectImage } from "@/lib/projects";

export default function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [timerVersion, setTimerVersion] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [hidden, setHidden] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion(); updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (images.length < 2 || hovered || focused || paused || reducedMotion || hidden) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % images.length), 5000);
    return () => window.clearTimeout(timer);
  }, [index, timerVersion, images.length, hovered, focused, paused, reducedMotion, hidden]);

  const navigate = (next: number) => {
    setIndex((next + images.length) % images.length);
    setTimerVersion((version) => version + 1);
  };
  if (!images.length) return null;
  const autoPlaying = !hovered && !focused && !paused && !reducedMotion && !hidden;

  return (
    <div role="region" aria-roledescription="carousel" aria-label={`${title} screenshots`} tabIndex={0}
      className="rounded-xl border border-border overflow-hidden bg-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault(); navigate(index + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        const end = event.changedTouches[0]?.clientX;
        if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 45) navigate(index + (end < touchStart.current ? 1 : -1));
        touchStart.current = null;
      }} onTouchCancel={() => { touchStart.current = null; }}>
      <div className="aspect-[8/5] overflow-hidden touch-pan-y">
        <div className={`flex h-full ${reducedMotion ? "" : "transition-transform duration-500 ease-in-out"}`} style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((item, slide) => (
            <div key={item.src} role="group" aria-roledescription="slide" aria-label={`${slide + 1} of ${images.length}: ${item.caption}`} aria-hidden={slide !== index} className="w-full h-full flex-shrink-0">
              <Image src={item.src} alt={item.alt} width={1440} height={900} loading="lazy" unoptimized draggable={false} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-3 sm:p-4 border-t border-border bg-surface/30">
        <button type="button" aria-label="Previous screenshot" onClick={() => navigate(index - 1)} className="gallery-control"><ChevronLeft size={18} /></button>
        <div className="min-w-0 text-center">
          <p className="font-mono text-xs text-text-secondary mb-2" aria-live={autoPlaying ? "off" : "polite"} aria-atomic="true">{images[index].caption}</p>
          <div className="flex justify-center gap-1">
            {images.map((item, slide) => (
              <button key={item.src} type="button" aria-label={`Show screenshot ${slide + 1}: ${item.caption}`} aria-current={slide === index ? "true" : undefined} onClick={() => navigate(slide)} className="w-8 h-8 flex items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                <span className={`w-2 h-2 rounded-full transition-colors ${slide === index ? "bg-accent" : "bg-text-muted/40"}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-1">
          {!reducedMotion && <button type="button" aria-label={paused ? "Resume slideshow" : "Pause slideshow"} onClick={() => setPaused((value) => !value)} className="gallery-control">{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
          <button type="button" aria-label="Next screenshot" onClick={() => navigate(index + 1)} className="gallery-control"><ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
  );
}
