import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Shield, Cpu, Wrench, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Software Testing",
    desc: "Manual & automated QA with Playwright. Detail-oriented approach to test case design and regression coverage.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    desc: "Hands-on experience with Arduino, ESP32, and Raspberry Pi — building IoT solutions from hardware up.",
  },
  {
    icon: Wrench,
    title: "Problem Solver",
    desc: "Methodical debugger with strong fundamentals in networking, databases, and software architecture.",
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
              Systems Plus College Foundation
            </span>{" "}
              in the Philippines, recognized with Cum Laude honors and Dean&apos;s
              List standing throughout my academic career.
            </p>
            <p>
              I have experience in manual and automated software testing using{" "}
              <span className="text-accent font-medium">Playwright</span>, with a
              solid foundation in Python, JavaScript, and embedded systems. I am
              detail-oriented and capable of contributing to reliable, high-quality
              software.
            </p>
            <p>
              My engineering thesis involved designing an{" "}
            <span className="text-text-primary font-medium">
              IoT-Based Beehive Monitoring System
            </span>{" "}
              for Philippine stingless bee colonies — integrating ESP32, temperature,
              humidity, and weight sensors with automated feedback mechanisms and
              real-time remote monitoring.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mt-6 text-text-muted">
            <MapPin size={14} />
            <span className="font-mono text-xs">Philippines</span>
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
