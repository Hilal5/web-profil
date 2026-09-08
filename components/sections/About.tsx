import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          number="01 / ABOUT"
          title="A little about me."
          description="Mengenal lebih dekat latar belakang dan pengalaman saya dalam dunia pengembangan software."
        />

        <div className="about-grid">
          {/* FOTO */}
          <div className="about-photo">
            <div className="about-photo-frame">
              <Image
                src="/images/profile/pass-photo.png"
                alt="Hilal Prayogi"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 320px"
                className="about-photo-image"
              />
            </div>

            <div className="about-photo-label">
              <span>HILAL PRAYOGI</span>
              <span>WEB DEVELOPER</span>
            </div>
          </div>

          {/* DESKRIPSI */}
          <div className="about-text">
            <p>
              Saya adalah lulusan{" "}
              <span className="highlight">{profile.education.degree}</span> dari{" "}
              <span className="highlight">{profile.education.university}</span>{" "}
              dengan IPK{" "}
              <span className="highlight">{profile.education.gpa}</span>.
            </p>

            <p>{profile.about}</p>

            <p>
              Saya memiliki pengalaman praktis dalam pengembangan aplikasi web,
              integrasi API, backend, dan pengelolaan alur data.
            </p>
          </div>

          {/* STATISTIK */}
          <div className="stats">
            <div className="stat">
              <div className="stat-number">{profile.education.gpa}</div>
              <div className="stat-label">GPA / IPK</div>
            </div>

            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">Work Experience</div>
            </div>

            <div className="stat">
              <div className="stat-number">4+</div>
              <div className="stat-label">Web Technologies</div>
            </div>

            <div className="stat">
              <div className="stat-number">2026</div>
              <div className="stat-label">Graduation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
