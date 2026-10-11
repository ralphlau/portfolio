"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ProjectGallery from "@/components/ui/ProjectGallery";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    node.showModal();
    return () => {
      node.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog ref={dialog} aria-labelledby={`detail-${project.id}`} className="project-dialog text-text-primary bg-bg-secondary rounded-2xl border border-border p-0"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
        }
      }}>
      <div className="p-5 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="font-mono text-xs text-accent mb-2">{project.date}</p>
            <h3 id={`detail-${project.id}`} className="font-display font-700 text-xl sm:text-2xl">{project.title}</h3>
          </div>
          <button type="button" autoFocus aria-label="Close project details" onClick={onClose} className="gallery-control flex-shrink-0"><X size={18} /></button>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">{project.summary}</p>
        <ProjectGallery images={project.images} title={project.title} />
        {project.galleryNote && <p className="text-text-muted text-xs leading-relaxed mt-3">{project.galleryNote}</p>}
        <div className="flex flex-wrap gap-2 my-5">{project.tags.map((tag) => <Badge key={tag} label={tag} variant="accent" />)}</div>
        <ul className="space-y-2 text-sm text-text-secondary mb-5">
          {project.features.map((feature) => <li key={feature} className="flex gap-3"><span className="w-1 h-1 mt-2 rounded-full bg-accent flex-shrink-0" />{feature}</li>)}
        </ul>
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-mono text-xs hover-underline"><ExternalLink size={14} />Live site</a>}
      </div>
    </dialog>
  );
}
