import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { HeroComposition } from "./components/HeroComposition";
import { ProjectSections } from "./components/ProjectSections";
import { ContactSection } from "./components/ContactSection";
import { Arrow, PortfolioMark, PortraitPlaceholder } from "./components/Shared";
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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const anchorEasing = (progress: number) =>
      progress < 0.5
        ? 4 * progress ** 3
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    const lenis = new Lenis({
      lerp: 0.16,
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1,
      syncTouch: !prefersReducedMotion,
      syncTouchLerp: 0.1,
    });
    let frame = 0;
    const animate = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    let anchorFrame = 0;

    const cancelAnchorAnimation = () => {
      if (!anchorFrame) return;
      cancelAnimationFrame(anchorFrame);
      anchorFrame = 0;
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]:not(.skip-link)');
      if (!link) return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname !== window.location.pathname ||
        destination.search !== window.location.search ||
        !destination.hash
      )
        return;

      const targetId = decodeURIComponent(destination.hash.slice(1));
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      if (window.location.hash !== destination.hash) {
        window.history.pushState(null, "", destination.hash);
      }

      const scrollOffset = Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop,
      );
      const offset = Number.isFinite(scrollOffset) ? scrollOffset : 0;

      if (prefersReducedMotion) {
        cancelAnchorAnimation();
        const startY = window.scrollY;
        const targetY = Math.max(
          0,
          target.getBoundingClientRect().top + startY - offset,
        );
        const startTime = performance.now();
        const duration = 1350;

        const animateAnchor = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          window.scrollTo(0, startY + (targetY - startY) * anchorEasing(progress));
          if (progress < 1) {
            anchorFrame = requestAnimationFrame(animateAnchor);
          } else {
            anchorFrame = 0;
          }
        };
        anchorFrame = requestAnimationFrame(animateAnchor);
        return;
      }

      lenis.scrollTo(target, {
        duration: 1.35,
        easing: anchorEasing,
        offset: -offset,
      });
    };
    document.addEventListener("click", handleAnchorClick);
    document.addEventListener("wheel", cancelAnchorAnimation, { passive: true });
    document.addEventListener("touchstart", cancelAnchorAnimation, { passive: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      document.removeEventListener("wheel", cancelAnchorAnimation);
      document.removeEventListener("touchstart", cancelAnchorAnimation);
      cancelAnchorAnimation();
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
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
          <PortfolioMark /> Saharier<span className="accent">.</span>
        </a>
        <p>CSE at UIU · Bangladesh</p>
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
