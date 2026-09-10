import Section from "@/components/Section";

interface InterestsProps {
  interests: string[];
}

export default function Interests({ interests }: InterestsProps) {
  return (
    <Section command="cat ./interests.txt">
      <ul className="space-y-1">
        {interests.map((interest, i) => (
          <li key={interest}>
            <span className="select-none text-dim">
              {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;
            </span>
            {interest}
          </li>
        ))}
      </ul>
    </Section>
  );
}
