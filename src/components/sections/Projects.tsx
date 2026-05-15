"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { ExternalLink, Github, Star, Lock } from "lucide-react";

const filters = ["All", "Embedded", "QA/Testing", "Web", "IoT"];

const placeholderProjects = [
  {
    title: "IoT Environment Monitor",
    desc: "ESP32-based sensor node that monitors temperature, humidity, and air quality, reporting to a cloud dashboard.",
    tags: ["ESP32", "MQTT", "IoT"],
    category: "IoT",
  },
  {
    title: "Network Lab Config",
    desc: "CCNA lab exercises including VLAN configuration, inter-VLAN routing, and wireless network setup using Cisco Packet Tracer.",
    tags: ["Networking", "VLAN", "OSPF"],
    category: "Embedded",
  },
  {
    title: "REST API Test Framework",
    desc: "Python-based API testing framework with test case generation and reporting for RESTful endpoints.",
    tags: ["Python", "API Testing", "Pytest"],
    category: "QA/Testing",
  },
  {
    title: "Arduino Sensor Hub",
    desc: "Multi-sensor data acquisition system using Arduino, logging readings to SD card and displaying on OLED screen.",
    tags: ["Arduino", "C++", "Embedded"],
    category: "Embedded",
  },
  {
    title: "Project Coming Soon",
    desc: "Currently working on new projects. Check back soon for updates.",
    tags: ["TBA"],
    category: "Web",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? placeholderProjects
      : placeholderProjects.filter((p) => p.category === activeFilter);

  return (
    <Section id="projects">
      <SectionHeading
        label="03. Projects"
        title="What I've Built"
        subtitle="From embedded hardware systems to automated testing frameworks."
      />

      {/* Featured Project — Thesis */}
      <div className="relative mb-8 rounded-2xl overflow-hidden gradient-border bg-card-glow bg-bg-secondary animate-glow-pulse">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative p-8 md:p-10">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star size={14} className="text-gold fill-gold" />
                <span className="font-mono text-xs text-gold tracking-widest uppercase">
                  Featured Project · Thesis
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-700 text-text-primary leading-tight max-w-2xl">
                The Design and Development of an IoT-Based Beehive Monitoring System
                for Philippine Stingless Bee Colonies (Tetragonula Biroi)
              </h3>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
            An IoT-based beehive monitoring system developed for Tetragonula biroi
            (stingless bee) colonies in the Philippines. The system integrates
            temperature, humidity, and weight sensors with automated feedback
            mechanisms and real-time Discord alerts — shifting beekeeping from
            reactive observation to proactive, data-driven colony management.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-7">
            {[
              "Real-time monitoring of temperature, humidity, and hive weight",
              "Automated actuators (fan, mist atomizer, heater) responding to threshold deviations",
              "Alerts for abnormal hive conditions",
              "Web-based remote access via ESP32 Wi-Fi connectivity",
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-sm">
                <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                <span className="text-text-secondary">{feat}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-7">
            {["ESP32 Microcontroller", "IoT Communication", "Web Dashboard", "Real-Time Analytics"].map((tech) => (
              <Badge key={tech} label={tech} variant="accent" />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-accent text-bg font-display font-600 text-sm px-5 py-2.5 rounded hover:shadow-[0_0_20px_rgba(110,231,247,0.3)] transition-all"
            >
              <ExternalLink size={14} />
              View Details
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-border hover:border-accent/50 text-text-secondary hover:text-accent font-display font-500 text-sm px-5 py-2.5 rounded transition-all"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* HireTrack — In Progress */}
      <div className="relative mb-16 rounded-2xl overflow-hidden gradient-border bg-bg-secondary">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative p-8 md:p-10">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                  In Progress · Apr 2026 – Present
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-700 text-text-primary leading-tight max-w-2xl">
                HireTrack — Job Application Pipeline Manager
              </h3>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
            A full-stack job application tracking system featuring a drag-and-drop
            Kanban pipeline board, interview scheduling, recruiter contact management,
            and an application statistics dashboard with JWT-based authentication.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-7">
            {[
              "Drag-and-drop Kanban pipeline board",
              "Interview scheduling and notes",
              "Recruiter contact management",
              "Application statistics dashboard",
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-sm">
                <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                <span className="text-text-secondary">{feat}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-7">
            {["Next.js", "PostgreSQL", "TailwindCSS", "JWT Auth", "Playwright"].map((tech) => (
              <Badge key={tech} label={tech} variant="accent" />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-2 border border-accent/30 hover:border-accent text-accent font-display font-500 text-sm px-5 py-2.5 rounded transition-all"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
              activeFilter === filter
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-muted hover:border-accent/40 hover:text-text-secondary"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Placeholder Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="gradient-border bg-surface/30 rounded-xl p-5 card-hover flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-display font-600 text-text-primary text-sm leading-snug">
                {project.title}
              </h4>
              <Lock size={12} className="text-text-muted flex-shrink-0 mt-0.5" />
            </div>
            <p className="text-text-secondary text-xs leading-relaxed mb-4 flex-1">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} label={tag} variant="muted" />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                disabled
                className="flex-1 text-xs font-mono text-text-muted border border-border/50 py-1.5 rounded cursor-not-allowed opacity-50"
              >
                Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-text-muted font-mono text-xs mt-10">
        More projects will be added as I continue building and documenting my work.
      </p>
    </Section>
  );
}