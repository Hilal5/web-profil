interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({
  type,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-content">
        <div className="project-type">{type}</div>

        <h3 className="project-title">{title}</h3>

        <p className="project-description">{description}</p>
      </div>

      <div className="project-tags">
        {technologies.map((technology) => (
          <span key={technology} className="project-tag">
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
