import PageTransition from "../components/layout/PageTransition";
import ProjectCard from "../components/projects/ProjectCard";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <SectionHeading
        description="The work here is intentionally practical: workflow tools, data-heavy interfaces, and backend systems designed around real operational problems instead of novelty."
        eyebrow="Projects"
        title="Selected product builds, dashboards, and backend systems."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>
    </PageTransition>
  );
}
