import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { BadgeCheck, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    desc: "Foundational networking concepts including IP addressing, subnetting, and basic device configuration.",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    desc: "VLANs, inter-VLAN routing, STP, EtherChannel, and wireless LAN configuration and management.",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    desc: "OSPF, BGP basics, network security fundamentals, and network automation with Python.",
  },
];

const seminars = [
  "IoT Systems Design and Development",
  "Software Quality Assurance Fundamentals",
  "Embedded Systems Programming Workshop",
  "Cybersecurity Awareness Seminar",
];

export default function Certifications() {
  return (
    <Section id="certifications" className="bg-bg-secondary rounded-3xl">
      <SectionHeading
        label="06. Certifications"
        title="Credentials"
        subtitle="Professional certifications and technical training programs."
      />

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="gradient-border bg-bg/50 rounded-xl p-6 card-hover flex flex-col"
          >
            <div className="flex items-start gap-3 mb-3">
              <BadgeCheck size={16} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-600 text-text-primary text-sm leading-snug">
                  {cert.title}
                </h4>
                <p className="text-accent/70 text-xs mt-1 font-mono">
                  {cert.issuer}
                </p>
              </div>
            </div>
            <p className="text-text-muted text-xs leading-relaxed flex-1">
              {cert.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Seminars */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <BookOpen size={14} className="text-gold" />
          <h3 className="font-display font-600 text-text-secondary text-sm">
            Seminars & Workshops
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {seminars.map((s) => (
            <span
              key={s}
              className="font-mono text-xs px-3 py-1.5 rounded border border-gold/20 text-gold/70 bg-gold/5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
