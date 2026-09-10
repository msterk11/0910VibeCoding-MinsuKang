import Section from "@/components/Section";

interface HobbiesProps {
  hobbies: string[];
}

export default function Hobbies({ hobbies }: HobbiesProps) {
  return (
    <Section command="cat ./hobbies.txt">
      <ul className="space-y-1">
        {hobbies.map((hobby, i) => (
          <li key={hobby}>
            <span className="select-none text-dim">
              {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;
            </span>
            {hobby}
          </li>
        ))}
      </ul>
    </Section>
  );
}
