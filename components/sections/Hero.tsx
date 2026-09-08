import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-label">{profile.role.toUpperCase()}</div>

          <h1>
            Hi, I&apos;m <span>Hilal.</span>
            <br />I build for the web.
          </h1>

          <p className="hero-description">{profile.introduction}</p>

          <div className="hero-actions">
            <Button href="#projects">View My Work</Button>

            <Button href="#contact" variant="secondary">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
