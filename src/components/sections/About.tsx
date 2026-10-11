import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Shield, Cpu, Code2, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Building complete applications with Next.js and PostgreSQL — from database schema to UI, including multi-tenant systems with role-based access control.",
  },
  {
    icon: Shield,
    title: "Software Testing",
    desc: "Manual & automated QA with Playwright. Detail-oriented approach to test case design and regression coverage.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    desc: "Hands-on experience with Arduino and ESP32 — building IoT solutions from hardware up.",
  },
];

export default function About() {
  return (
    <Section id="about" className="border-t border-border/30">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <SectionHeading label="01. About" title="Who I Am" />
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
             I&apos;m a Computer Engineering graduate from{" "}
              <span className="text-text-primary font-medium">
              System Plus College Foundation
            </span>{" "}
              in the Philippines, graduating with a 1.34 GPA.
            </p>
            <p>
              I work as a part-time Full Stack Developer at DE Webnet Solution,
              building applications with Next.js, TypeScript, PostgreSQL, and Prisma.
              I also have experience in manual and automated software testing using{" "}
              <span className="text-accent font-medium">Playwright</span>, and I
              focus on secure access, isolated organization data, and reliable
              software backed by unit, integration, and browser tests.
            </p>
            <p>
              My engineering thesis involved designing an{" "}
            <span className="text-text-primary font-medium">
              IoT-Based Beehive Monitoring System
            </span>{" "}
              with a PHP and MySQL web application, REST APIs, ESP32 real-time
              data integration, IoT hardware assembly, and solar-battery power.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mt-6 text-text-muted">
            <MapPin size={14} />
            <span className="font-mono text-xs">Pampanga, Philippines</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="gradient-border bg-surface/30 rounded-xl p-5 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-600 text-text-primary text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
