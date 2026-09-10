import type { Link as ProfileLink } from "@/types/profile";
import Section from "@/components/Section";

interface LinksProps {
  links: ProfileLink[];
}

export default function Links({ links }: LinksProps) {
  return (
    <Section title="링크">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => {
          const isExternal = link.url.startsWith("http");
          return (
            <li key={link.label}>
              <a
                href={link.url}
                className="text-neutral-900 underline underline-offset-4 hover:text-neutral-500"
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
