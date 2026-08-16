import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { Code2, Globe, FlaskConical, Cpu, Network, PenTool } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    label: "Programming & Scripting",
    color: "accent" as const,
    skills: ["Python", "JavaScript", "TypeScript", "Assembly", "C/C++"],
  },
  {
    icon: Globe,
    label: "Web Development",
    color: "gold" as const,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PHP", "REST APIs"],
  },
  {
    icon: FlaskConical,
    label: "Testing & QA",
    color: "accent" as const,
    skills: [
      "Manual Testing",
      "Playwright Automation",
      "Test Case Design",
      "Bug Reporting",
      "Agile/Scrum",
    ],
  },
  {
    icon: Cpu,
    label: "Embedded Systems & IoT",
    color: "gold" as const,
    skills: ["Arduino", "ESP32", "Sensor & Actuator Integration", "IoT Communication"],
  },
  {
    icon: Network,
    label: "Networking",
    color: "accent" as const,
    skills: [
      "Network Configuration",
      "Troubleshooting",
      "VLANs",
      "Routing Protocols",
      "Wireless LAN",
      "Cisco IOS",
    ],
  },
  {
    icon: PenTool,
    label: "CAD & Technical Drafting",
    color: "gold" as const,
    skills: ["AutoCAD 2D Drafting", "AutoCAD 3D Modeling"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-bg-secondary rounded-3xl">
      <SectionHeading
        label="02. Skills"
        title="Technical Toolkit"
        subtitle="Technologies and disciplines I've worked with across full-stack development, software quality assurance, and embedded engineering."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map(({ icon: Icon, label, color, skills }) => (
          <div
            key={label}
            className="gradient-border bg-bg/50 rounded-xl p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                  color === "accent"
                    ? "bg-accent/10 border-accent/20"
                    : "bg-gold/10 border-gold/20"
                }`}
              >
                <Icon
                  size={15}
                  className={color === "accent" ? "text-accent" : "text-gold"}
                />
              </div>
              <h3
                className={`font-display font-600 text-sm ${
                  color === "accent" ? "text-accent" : "text-gold"
                }`}
              >
                {label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} label={skill} variant={color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
