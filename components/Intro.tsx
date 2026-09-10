import type { Profile } from "@/types/profile";

interface IntroProps {
  name: string;
  affiliation: Profile["affiliation"];
  bio: string;
}

export default function Intro({ name, affiliation, bio }: IntroProps) {
  return (
    <header>
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {name}
      </h1>
      <p className="mt-2 text-neutral-500">
        {affiliation.school} {affiliation.department}
      </p>
      <p className="mt-6 leading-relaxed text-neutral-700">{bio}</p>
    </header>
  );
}
