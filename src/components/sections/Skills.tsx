import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { Code2, FlaskConical, Cpu, Network, GitBranch } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    label: "Programming",
    color: "accent" as const,
    skills: ["Python", "JavaScript", "TypeScript", "Assembly", "C/C++"],
  },
  {
    icon: FlaskConical,
    label: "Testing & QA",
    color: "gold" as const,
    skills: [
      "Manual Testing",
      "Playwright",
      "Test Case Design",
      "Regression Testing",
      "Bug Reporting",
    ],
  },
  {
    icon: Cpu,
    label: "Embedded Systems",
    color: "accent" as const,
    skills: ["Arduino", "ESP32", "Raspberry Pi", "IoT", "Sensor Integration"],
  },
  {
    icon: Network,
    label: "Networking",
    color: "gold" as const,
    skills: [
      "Network Configuration",
      "Troubleshooting",
      "TCP/IP",
      "VLANs",
      "Wireless",
    ],
  },
  {
    icon: GitBranch,
    label: "Tools & Platforms",
    color: "accent" as const,
    skills: ["Git", "GitHub", "VS Code", "Linux", "Postman"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-bg-secondary rounded-3xl">
      <SectionHeading
        label="02. Skills"
        title="Technical Toolkit"
        subtitle="Technologies and disciplines I've worked with across engineering and software quality domains."
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
