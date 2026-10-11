import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "DE Webnet Solution",
    role: "Full Stack Developer (Part-time)",
    period: "Sept 2026 – Present",
    location: "Remote",
    type: "Part-time · Remote",
    description:
      "Develop and maintain full-stack web applications for multiple clients against approved technical specifications.",
    responsibilities: [
      "Developed and maintained production-ready client systems using Next.js, TypeScript, PostgreSQL, and Prisma.",
      "Implemented role-based access control, multi-tenant data isolation, and append-only audit logging for secure data handling.",
      "Built authentication, scheduling, records management, and reporting modules from business requirements.",
      "Wrote and maintained unit, integration, and browser-level automated tests to improve reliability and reduce pre-release issues.",
    ],
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Automated Testing"],
  },
  {
    company: "Cloudstaff Philippines Inc.",
    role: "Associate SQA Engineer Trainee",
    period: "Jan 2026 – Apr 2026",
    location: "Angeles City, Pampanga",
    type: "Trainee · Angeles City, Pampanga",
    description:
      "Contributed to software quality assurance processes within a professional development team, focusing on both manual and automated testing practices.",
    responsibilities: [
      "Conducted manual testing of application features and documented defects with detailed reproduction steps.",
      "Developed and executed Playwright end-to-end tests to increase regression coverage and efficiency.",
      "Designed and maintained test cases and documentation aligned with acceptance criteria and project requirements.",
      "Participated in agile ceremonies and collaborated with cross-functional teams.",
    ],
    skills: ["Manual Testing", "Playwright", "Test Documentation", "Agile", "Bug Tracking"],
  },
];

export default function Experience() {
  return (
    <Section id="experience" className="bg-bg-secondary rounded-3xl">
      <SectionHeading
        label="04. Experience"
        title="Work History"
        subtitle="Professional experience in full-stack development and software quality assurance."
      />

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="gradient-border bg-bg/40 rounded-xl p-7 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={14} className="text-accent" />
                  <span className="font-mono text-xs text-accent tracking-wide uppercase">
                    {exp.type}
                  </span>
                </div>
                <h3 className="font-display text-xl font-700 text-text-primary">
                  {exp.role}
                </h3>
                <p className="text-text-secondary mt-0.5 font-medium">
                  {exp.company}
                </p>
              </div>
              <div className="flex items-center gap-2 text-text-muted flex-shrink-0">
                <Calendar size={13} />
                <span className="font-mono text-xs">{exp.period}</span>
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              {exp.description}
            </p>

            <ul className="space-y-2 mb-6">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <Badge key={skill} label={skill} variant="accent" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
