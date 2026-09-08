import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  const groups = [
    {
      title: "Frontend",
      items: skills.frontend,
    },
    {
      title: "Backend",
      items: skills.backend,
    },
    {
      title: "Tools & Others",
      items: skills.tools,
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          number="04 / SKILLS"
          title="Tools I work with."
          description="Teknologi dan kemampuan yang saya gunakan dalam pengembangan aplikasi dan pekerjaan sehari-hari."
        />

        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.title} className="skills-group">
              <h3 className="skills-group-title">{group.title}</h3>

              <div className="skills-list">
                {group.items.map((skill) => (
                  <span key={skill} className="skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
