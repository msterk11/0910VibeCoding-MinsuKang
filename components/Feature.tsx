import type { Profile } from "@/types/profile";

interface FeatureProps {
  feature: Profile["feature"];
  projects: Profile["projects"];
}

export default function Feature({ feature, projects }: FeatureProps) {
  return (
    <section className="bg-paper px-[clamp(22px,4vw,44px)] pb-[clamp(32px,6vw,72px)] text-ink-3">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(24px,4vw,56px)]">
        <div className="grid gap-[18px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            {feature.kicker}
          </span>
          <h3 className="m-0 font-batang text-[clamp(30px,5vw,54px)] font-bold leading-[1.12] tracking-[-0.01em] text-balance">
            {feature.title}
          </h3>
          <p className="m-0 font-batang text-[17px] leading-[1.75] text-pretty text-[#2c2621]">
            <span className="float-left pt-1.5 pr-2.5 font-display text-[64px] leading-[0.8] text-accent">
              {feature.leadDropCap}
            </span>
            {feature.lead}
          </p>
          <p className="m-0 text-[15px] leading-[1.7] text-stone">
            {feature.leadSecondary}
          </p>
        </div>

        <div className="grid border-t-2 border-ink-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="grid gap-2 border-b border-ink-3/15 py-[18px]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-[clamp(22px,3vw,30px)] font-bold">
                  {project.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {project.role}
                </span>
              </div>
              <p className="m-0 text-[15px] leading-[1.6] text-stone">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
