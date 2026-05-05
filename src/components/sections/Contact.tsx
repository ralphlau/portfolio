import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Github, Linkedin, Phone, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "timbolralphlaurenz@gmail.com",
    href: "mailto:timbolralphlaurenz@gmail.com",
    accent: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ralphlau",
    href: "#",
    accent: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ralph-laurenz-timbol",
    href: "#",
    accent: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 921-578-1684",
    href: "#",
    accent: false,
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          label="07. Contact"
          title="Let's Connect"
          subtitle="I'm currently open to new opportunities. Whether you have a role in mind, a project to collaborate on, or just want to talk engineering — I'd love to hear from you."
        />

        {/* Big CTA */}
        <a
          href="mailto:timbolralphlaurenz@gmail.com"
          className="group inline-flex items-center gap-3 bg-accent/10 border border-accent/30 hover:border-accent hover:bg-accent/15 text-accent rounded-xl px-8 py-5 transition-all mb-12 hover:shadow-[0_0_40px_rgba(110,231,247,0.15)]"
        >
          <Mail size={20} />
          <span className="font-display font-600 text-lg">
            timbolralphlaurenz@gmail.com
          </span>
          <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-4">
          {contactLinks.map(({ icon: Icon, label, value, href, accent }) => (
            <a
              key={label}
              href={href}
              className="gradient-border bg-surface/20 rounded-xl p-4 text-left hover:bg-surface/40 transition-all card-hover"
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon
                  size={13}
                  className={accent ? "text-accent" : "text-text-muted"}
                />
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                  {label}
                </span>
              </div>
              <p
                className={`text-sm font-medium truncate ${
                  accent ? "text-accent" : "text-text-secondary"
                }`}
              >
                {value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
