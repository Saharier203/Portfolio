import { useEffect } from "react";
import { HeroComposition } from "./components/HeroComposition";
import { ProjectSections } from "./components/ProjectSections";
import { ContactSection } from "./components/ContactSection";
import { Arrow, PortraitPlaceholder } from "./components/Shared";
import { profile, skills } from "./data/portfolio";

export default function App() {
  useEffect(() => {
    // The managed dev server caches site configuration until its next restart.
    document.title = "Saharier — Computer Science, Software & Research";
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute(
      "content",
      "Saharier — final-year CSE student at UIU, Bangladesh. Explore research in AI/ML, software development, system architecture, and design.",
    );
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      element.classList.add("will-reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <main>
        <HeroComposition />
        <section className="section about-section" id="about" data-reveal>
          <div className="about-visual">
            <PortraitPlaceholder compact />
            <div className="academic-stamp">
              <span>UIU</span>
              <p>
                Computer Science
                <br />& Engineering
              </p>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">
              <span className="red-dash" /> A little introduction
            </p>
            <h2>
              A little about
              <br />
              what I do<span className="accent">.</span>
            </h2>
            <p>
              I'm a Computer Science student who enjoys exploring the intersection of intelligent
              systems and software development. Through academic research, coursework, and personal
              projects, I've worked on machine learning applications, software platforms,
              hardware-based systems, and technical research.
            </p>
            <div className="about-facts">
              <div>
                <small>Currently studying at</small>
                <strong>United International University</strong>
              </div>
              <div>
                <small>Based in</small>
                <strong>Bangladesh</strong>
              </div>
              <div>
                <small>Expected graduation</small>
                <strong>2026</strong>
              </div>
            </div>
            <a className="text-link" href="#research">
              A closer look at my work <Arrow />
            </a>
          </div>
        </section>
        <ProjectSections />
        <section className="section skills-section" id="skills" data-reveal>
          <header className="section-header">
            <div>
              <p className="eyebrow">
                <span className="red-dash" /> My toolkit
              </p>
              <h2>
                The tools behind
                <br />
                the work<span className="accent">.</span>
              </h2>
            </div>
            <p>
              Technologies I've worked with across coursework, research, and personal projects.
              Always learning, always adding to the toolkit.
            </p>
          </header>
          <div className="skill-groups">
            {Object.entries(skills).map(([group, items], index) => (
              <div className="skill-group" key={group}>
                <span className="mono">0{index + 1}</span>
                <h3>{group}</h3>
                <p>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
        <ContactSection />
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#home">
          <span className="brand-mark">S</span> Saharier<span className="accent">.</span>
        </a>
        <p>Personal portfolio · CSE at UIU · Bangladesh</p>
        <a className="text-link" href="#home">
          Back to top <Arrow up />
        </a>
      </footer>
      <div className="bottom-line">
        <span>Research. Build. Keep learning.</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </>
  );
}
