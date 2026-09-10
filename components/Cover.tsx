import type { Profile } from "@/types/profile";

const BARCODE_BARS = [2, 4, 2, 6, 2, 3, 5, 2, 4, 2, 7, 2];

interface CoverProps {
  name: string;
  nameLatin: string;
  role: string;
  masthead: Profile["masthead"];
  cover: Profile["cover"];
}

export default function Cover({
  name,
  nameLatin,
  role,
  masthead,
  cover,
}: CoverProps) {
  return (
    <section className="relative overflow-hidden bg-ink-2">
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(115deg,#221d1a 0 14px,#1a1614 14px 28px)",
        }}
      />
      <div className="absolute inset-0 flex items-end justify-end pr-[clamp(22px,4vw,44px)] pb-[clamp(130px,22vw,210px)]">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
          {masthead.portraitCaption}
        </span>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(16,14,12,.82) 0%,rgba(16,14,12,.25) 38%,rgba(16,14,12,.55) 72%,rgba(16,14,12,.92) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(#f4efe6 .5px,transparent .6px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative grid min-h-[min(860px,138vw)] gap-[clamp(28px,6vw,72px)] p-[clamp(22px,4vw,44px)]">
        <div className="flex flex-wrap items-baseline justify-between gap-[14px] border-b border-paper/30 pb-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-warm">
            {masthead.publisherEn}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            {masthead.issue}
          </span>
        </div>

        <div className="grid gap-1.5">
          <div className="font-display text-[clamp(15px,2.2vw,22px)] italic tracking-[0.01em] text-cream">
            {masthead.tagline}
          </div>
          <h1 className="m-0 font-batang text-[clamp(64px,15.5vw,196px)] font-bold leading-[0.86] tracking-[-0.02em] text-balance text-paper">
            {name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-[18px] gap-y-2.5 font-display text-[clamp(16px,2.6vw,30px)] uppercase tracking-[0.16em] text-accent">
            <span>{nameLatin}</span>
            <span className="h-px w-[34px] bg-current opacity-60" />
            <span className="tracking-[0.1em] text-cream">{role}</span>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-[clamp(20px,4vw,48px)]">
          <div className="grid max-w-[360px] flex-1 basis-[260px] gap-4">
            <div className="grid gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                {cover.storyKicker}
              </span>
              <span className="font-batang text-[clamp(20px,3vw,28px)] leading-[1.25] text-paper">
                {cover.storyTitle}
              </span>
            </div>
            <div className="h-px bg-paper/20" />
            <div className="grid gap-2.5 text-[14px] leading-[1.45] text-warm">
              {cover.teasers.map((teaser) => (
                <span key={teaser.title}>
                  <b className="font-semibold text-paper">{teaser.title}</b> —{" "}
                  {teaser.detail}
                </span>
              ))}
            </div>
          </div>

          <div className="grid justify-items-end gap-2.5 text-right">
            <div className="flex h-[44px] items-end gap-0.5">
              {BARCODE_BARS.map((width, i) => (
                <span
                  key={i}
                  className="h-full bg-paper"
                  style={{ width: `${width}px` }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#8c8077]">
              {masthead.barcode}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
