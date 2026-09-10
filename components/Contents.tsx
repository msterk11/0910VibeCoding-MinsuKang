import type { Profile } from "@/types/profile";

interface ContentsProps {
  contents: Profile["contents"];
}

export default function Contents({ contents }: ContentsProps) {
  return (
    <section className="bg-paper px-[clamp(22px,4vw,44px)] py-[clamp(32px,6vw,72px)] text-ink-3">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink-3 pb-2.5">
        <h2 className="m-0 font-display text-[clamp(26px,4vw,44px)] font-black tracking-[0.02em]">
          Contents
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
          {contents.note}
        </span>
      </div>

      <div className="mt-[clamp(22px,3vw,34px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-[clamp(18px,3vw,40px)] gap-y-3.5">
        {contents.entries.map((entry) => (
          <div
            key={entry.title}
            className="flex items-baseline gap-3.5 border-b border-ink-3/15 pb-2.5"
          >
            <span className="min-w-[38px] font-display text-[22px] text-accent">
              {entry.page}
            </span>
            <span className="text-[15px] leading-[1.4]">
              <b>{entry.title}</b>
              <br />
              <span className="text-stone">{entry.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
