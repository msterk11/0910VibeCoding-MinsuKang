import type { Link as ProfileLink } from "@/types/profile";
import Section from "@/components/Section";

interface LinksProps {
  links: ProfileLink[];
}

export default function Links({ links }: LinksProps) {
  return (
    <Section command="cat ./links.txt">
      <ul className="space-y-1">
        {links.map((link, i) => {
          const isExternal = link.url.startsWith("http");
          return (
            <li key={link.label}>
              <span className="select-none text-dim">[{i}]&nbsp;</span>
              <a
                href={link.url}
                className="text-amber underline underline-offset-2 hover:bg-amber hover:text-screen hover:no-underline"
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
              <span className="text-dim"> &rarr; {link.url}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
