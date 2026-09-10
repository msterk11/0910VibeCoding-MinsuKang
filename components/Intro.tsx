import type { Profile } from "@/types/profile";

interface IntroProps {
  name: string;
  affiliation: Profile["affiliation"];
  bio: string;
}

export default function Intro({ name, affiliation, bio }: IntroProps) {
  return (
    <header className="space-y-4">
      <div>
        <p className="text-dim">
          <span className="select-none">$ </span>whoami
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-[0.3em] text-amber sm:text-4xl">
          {name}
        </h1>
      </div>
      <div>
        <p className="text-dim">
          <span className="select-none">$ </span>cat ./affiliation
        </p>
        <p className="mt-1">
          {affiliation.school} / {affiliation.department}
        </p>
      </div>
      <div>
        <p className="text-dim">
          <span className="select-none">$ </span>cat ./about.txt
        </p>
        <p className="mt-1 max-w-prose leading-relaxed">{bio}</p>
      </div>
    </header>
  );
}
