"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110, 231, 247, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(110, 231, 247, ${((120 - dist) / 120) * 0.08})`;
            ctx.stroke();
          }
        });
      });

      animFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" style={{ backgroundSize: "40px 40px" }} />

      {/* Hero glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Photo Placeholder */}
        <div
          className="mx-auto mb-8 animate-fade-in"
          style={{ opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="relative inline-block">
           <img
              src="/ralph-photo.jpg"
            alt="Ralph Laurenz Timbol"
             className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-accent/40 object-cover object-top animate-glow-pulse"
              />
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-accent/15 scale-110" />
          </div>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-accent">Open to opportunities</span>
        </div>

        {/* Name — single line, uniform color */}
        <h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-800 text-text-primary leading-tight tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: "100ms", opacity: 0, animationFillMode: "forwards" }}
        >
          Ralph Laurenz Cunanan Timbol
        </h1>

        {/* Role */}
        <div
          className="flex items-center justify-center gap-3 mb-6 animate-fade-up"
          style={{ animationDelay: "250ms", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="h-px w-12 bg-accent/40" />
          <p className="font-mono text-sm text-accent tracking-widest uppercase">
            Computer Engineering Graduate
          </p>
          <span className="h-px w-12 bg-accent/40" />
        </div>

        {/* Tagline */}
        <p
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "350ms", opacity: 0, animationFillMode: "forwards" }}
        >
          Building reliable IoT systems and quality software —
          <br className="hidden md:block" /> from embedded hardware to automated test pipelines.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-14 animate-fade-up"
          style={{ animationDelay: "450ms", opacity: 0, animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="group relative bg-accent text-bg font-display font-600 text-sm px-7 py-3 rounded overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(110,231,247,0.4)]"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="border border-border hover:border-accent/60 text-text-secondary hover:text-accent font-display font-500 text-sm px-7 py-3 rounded transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-5 animate-fade-up"
          style={{ animationDelay: "550ms", opacity: 0, animationFillMode: "forwards" }}
        >
          <a href="mailto:timbolralphlaurenz@gmail.com" className="text-text-muted hover:text-accent transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

    </section>
  );
}
