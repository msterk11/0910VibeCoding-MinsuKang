import Section from "@/components/Section";

interface InterestsProps {
  interests: string[];
}

export default function Interests({ interests }: InterestsProps) {
  return (
    <Section title="관심사">
      <ul className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <li
            key={interest}
            className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700"
          >
            {interest}
          </li>
        ))}
      </ul>
    </Section>
  );
}
