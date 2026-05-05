import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap, Award, Calendar } from "lucide-react";

const honors = [
  "Cum Laude Graduate",
  "Dean's Lister",
  "Academic Excellence Awardee",
];

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        label="05. Education"
        title="Academic Background"
        subtitle="Foundation in computer engineering with a focus on embedded systems, networking, and software development."
      />

      <div className="gradient-border bg-surface/30 rounded-xl p-8 md:p-10 max-w-3xl">
        <div className="flex items-start gap-5">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
            <GraduationCap size={22} className="text-gold" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <h3 className="font-display text-xl font-700 text-text-primary">
                  BS Computer Engineering
                </h3>
                <p className="text-text-secondary font-medium mt-0.5">
                  Systems Plus College Foundation
                </p>
                <p className="text-text-muted text-sm mt-0.5">
                  Angeles City, Pampanga, Philippines
                </p>
              </div>
              <div className="flex items-center gap-2 text-text-muted flex-shrink-0">
                <Calendar size={13} />
                <span className="font-mono text-xs">2022 – 2026</span>
              </div>
            </div>

            {/* Honors */}
            <div className="space-y-2">
              {honors.map((honor) => (
                <div key={honor} className="flex items-center gap-3">
                  <Award size={13} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{honor}</span>
                </div>
              ))}
            </div>

            {/* Thesis */}
            <div className="mt-6 pt-5 border-t border-border/50">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                Thesis
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="text-text-primary font-medium">
                  The Design and Development of an IoT-Based Beehive Monitoring System
                  for Philippine Stingless Bee Colonies (Tetragonula Biroi)
                </span>{" "}
                — An IoT solution integrating temperature, humidity, and weight sensors
                 with automated feedback mechanisms for real-time 
                 stingless bee colony health management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
