"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border/60 py-3"
          : "py-5"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="ralph-timbol-cv.pdf"
          className="font-display font-700 text-lg tracking-tight text-text-primary hover:text-accent transition-colors"
        >
          <span className="text-accent">R</span>LT
          <span className="text-text-muted font-mono text-xs ml-1">.dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-text-secondary hover:text-accent transition-colors hover-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent border border-border hover:border-accent/50 px-3 py-1.5 rounded transition-all"
          >
            <Download size={12} />
            CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-secondary hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-text-secondary hover:text-accent transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-xs font-mono text-accent mt-2"
              >
                <Download size={12} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
