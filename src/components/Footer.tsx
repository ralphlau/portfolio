import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Ralph Laurenz Cunanan Timbol. Built
          with Next.js + Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:timbolralphlaurenz@gmail.com"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="#"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="#"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
