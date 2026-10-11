"use client";

import { useState } from "react";
import { ExternalLink, Lock, Star } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import ProjectDetail from "@/components/ui/ProjectDetail";
import { projects, type Project } from "@/lib/projects";

const filters = ["All", "Web", "IoT"];
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = projects.filter((project) => activeFilter === "All" || project.category === activeFilter);
  return (
    <Section id="projects">
      <SectionHeading label="03. Projects" title="What I've Built" subtitle="Full-stack applications, tested workflows, and connected hardware. Most recent projects first." />
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">
        {filters.map((filter) => <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${activeFilter === filter ? "border-accent bg-accent/10 text-accent" : "border-border text-text-muted hover:border-accent/40 hover:text-text-secondary"}`}>{filter}</button>)}
      </div>
      {filtered.map((project) => (
        <article key={project.id} className={`relative mb-8 rounded-2xl overflow-hidden gradient-border bg-bg-secondary ${project.id === "healthos" ? "bg-card-glow animate-glow-pulse" : ""}`}>
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative p-8 md:p-10">
            <div className="flex items-center gap-2 mb-2">
              {project.id === "healthos" && <Star size={14} className="text-gold fill-gold" />}
              <span className={`font-mono text-xs tracking-widest uppercase ${project.id === "healthos" ? "text-gold" : "text-accent"}`}>{project.id === "healthos" ? "Featured Project · " : ""}{project.date}</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-700 text-text-primary leading-tight max-w-2xl mb-5">{project.title}</h3>
            <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">{project.summary}</p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-7">
              {project.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm"><span className="w-1 h-1 mt-2 rounded-full bg-accent flex-shrink-0" /><span className="text-text-secondary">{feature}</span></li>)}
            </ul>
            <div className="flex flex-wrap gap-2 mb-7">{project.tags.map((tag) => <Badge key={tag} label={tag} variant="accent" />)}</div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => setSelected(project)} aria-label={`View details: ${project.title}`} className="flex items-center gap-2 bg-accent text-bg font-display font-600 text-sm px-5 py-2.5 rounded hover:shadow-[0_0_20px_rgba(110,231,247,0.3)] transition-all"><ExternalLink size={14} />View Details</button>
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-border hover:border-accent/50 text-text-secondary hover:text-accent font-display font-500 text-sm px-5 py-2.5 rounded transition-all"><ExternalLink size={14} />Live Site</a>}
              {["kita", "tala", "deatlas", "student-alerts"].includes(project.id) && <span className="flex items-center gap-2 text-text-muted font-display font-500 text-sm px-5 py-2.5 rounded border border-border/50"><Lock size={14} />Private Repository</span>}
            </div>
          </div>
        </article>
      ))}
      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}
