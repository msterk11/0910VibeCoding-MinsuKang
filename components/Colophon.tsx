import type { Profile } from "@/types/profile";

interface ColophonProps {
  colophon: Profile["colophon"];
  masthead: Profile["masthead"];
  links: Profile["links"];
}

export default function Colophon({ colophon, masthead, links }: ColophonProps) {
  return (
    <section className="bg-paper px-[clamp(22px,4vw,44px)] pt-[clamp(32px,6vw,72px)] pb-[clamp(40px,7vw,90px)] text-ink-3">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink-3 pb-2.5">
        <h2 className="m-0 font-display text-[clamp(24px,3.6vw,38px)] font-black">
          {colophon.title}
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
          {colophon.kicker}
        </span>
      </div>

      <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[clamp(20px,3vw,44px)]">
        {links.map((link) => {
          const external = link.url.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.url}
              className="card-invert grid gap-2 border border-ink-3/25 p-[22px] no-underline"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] opacity-60">
                {link.kicker}
              </span>
              <span className="font-display text-[clamp(22px,3vw,30px)] font-bold">
                {link.label} ↗
              </span>
              <span className="font-mono text-[12px] opacity-70">
                {link.display}
              </span>
            </a>
          );
        })}

        <div className="grid content-start gap-2 text-[13px] leading-[1.7] text-stone">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-3">
            Masthead
          </span>
          <span>
            {masthead.credits}
            <br />
            {masthead.publisher}
            <br />
            {masthead.issueShort}
            <br />
            {masthead.typeNote}
          </span>
        </div>
      </div>
    </section>
  );
}
