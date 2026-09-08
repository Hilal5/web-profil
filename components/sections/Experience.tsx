import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          number="02 / EXPERIENCE"
          title="Where I've worked."
          description="Pengalaman praktis dalam mengembangkan aplikasi web dan bekerja dalam lingkungan profesional."
        />

        <div className="timeline">
          {experiences.map((experience) => (
            <article
              key={`${experience.date}-${experience.company}`}
              className="timeline-item"
            >
              <div className="timeline-date">{experience.date}</div>

              <h3 className="timeline-role">{experience.role}</h3>

              <div className="timeline-company">
                {experience.company}
                {" — "}
                {experience.location}
              </div>

              <p className="timeline-description">{experience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
