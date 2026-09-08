import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeading
          number="05 / CONTACT"
          title="Let's build something useful together."
          description="Terbuka untuk kesempatan kerja, kolaborasi, maupun diskusi mengenai project dan teknologi."
        />

        <Button href={`mailto:${profile.email}`}>Say Hello</Button>

        <br />

        <a href={`mailto:${profile.email}`} className="email">
          {profile.email}
        </a>
      </div>
    </section>
  );
}
