import type { Project } from "@/types/profile";
import Section from "@/components/Section";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Section command="ls -la ~/projects">
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.name}>
            <p>
              <span className="select-none text-dim">drwxr-xr-x&nbsp;&nbsp;</span>
              <span className="text-amber">{project.name}/</span>
            </p>
            <p className="mt-1 pl-4">{project.description}</p>
            <p className="mt-0.5 pl-4 text-dim"># role: {project.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
