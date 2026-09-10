interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
