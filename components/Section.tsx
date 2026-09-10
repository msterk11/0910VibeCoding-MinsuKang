interface SectionProps {
  command: string;
  children: React.ReactNode;
}

export default function Section({ command, children }: SectionProps) {
  return (
    <section className="mt-8">
      <p className="text-dim">
        <span className="select-none">$ </span>
        {command}
      </p>
      <div className="mt-2">{children}</div>
    </section>
  );
}
