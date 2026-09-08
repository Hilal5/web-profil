import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          number="03 / PROJECTS"
          title="Things I've built."
          description="Beberapa project yang merepresentasikan pengalaman saya dalam pengembangan aplikasi web."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              type={project.type}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
