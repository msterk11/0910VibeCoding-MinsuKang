import type { Project } from "@/types/profile";
import Section from "@/components/Section";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Section title="프로젝트">
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.name}>
            <h3 className="font-semibold text-neutral-900">{project.name}</h3>
            <p className="mt-1 text-neutral-700">{project.description}</p>
            <p className="mt-1 text-sm text-neutral-500">{project.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
