import type { Note, Profile } from "@/types/profile";

function NoteList({ items }: { items: Note[] }) {
  return (
    <div className="grid gap-3.5">
      {items.map((item, i) => (
        <p
          key={item.term}
          className="m-0 grid grid-cols-[auto_1fr] items-start gap-3 text-[16px] leading-[1.6] text-cream"
        >
          <span className="font-display text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>
            <b className="text-paper">{item.term}</b> — {item.note}
          </span>
        </p>
      ))}
    </div>
  );
}

interface ColumnsProps {
  interests: Profile["interests"];
  hobbies: Profile["hobbies"];
}

export default function Columns({ interests, hobbies }: ColumnsProps) {
  return (
    <section className="bg-ink-3 px-[clamp(22px,4vw,44px)] py-[clamp(32px,6vw,72px)] text-paper">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(24px,4vw,56px)]">
        <div className="grid content-start gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            {interests.kicker}
          </span>
          <h4 className="m-0 font-display text-[clamp(24px,3.4vw,36px)] font-bold">
            {interests.title}
          </h4>
          <NoteList items={interests.items} />
        </div>

        <div className="grid content-start gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            {hobbies.kicker}
          </span>
          <h4 className="m-0 font-display text-[clamp(24px,3.4vw,36px)] font-bold">
            {hobbies.title}
          </h4>
          <NoteList items={hobbies.items} />
          <div
            className="mt-1.5 flex h-[132px] items-center justify-center border border-paper/30"
            style={{
              background:
                "repeating-linear-gradient(135deg,rgba(244,239,230,.07) 0 10px,transparent 10px 20px)",
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8c8077]">
              {hobbies.photoCaption}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
