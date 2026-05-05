interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-3">
        — {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-700 text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-base max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
