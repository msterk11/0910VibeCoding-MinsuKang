import Section from "@/components/Section";

interface HobbiesProps {
  hobbies: string[];
}

export default function Hobbies({ hobbies }: HobbiesProps) {
  return (
    <Section title="취미">
      <ul className="flex flex-wrap gap-2">
        {hobbies.map((hobby) => (
          <li
            key={hobby}
            className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700"
          >
            {hobby}
          </li>
        ))}
      </ul>
    </Section>
  );
}
