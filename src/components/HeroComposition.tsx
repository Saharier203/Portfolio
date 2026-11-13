import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { Arrow, PortfolioMark, PortraitPlaceholder, WindowBar } from "./Shared";

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Contact", "contact"],
];

export function HeroComposition() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [navPinned, setNavPinned] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const persistentToggle = useRef<HTMLButtonElement>(null);
  const heroNavigation = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        (navPinned ? persistentToggle.current : toggle.current)?.focus();
      }
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, [menuOpen, navPinned]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-8% 0px -55% 0px", threshold: 0 },
    );
    navigation.forEach(([, id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = heroNavigation.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      const pinned = !entry.isIntersecting;
      setNavPinned(pinned);
      if (!pinned) setMenuOpen(false);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = stage.current;
    if (!node) return;
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      node.style.setProperty("--panel-x", "0px");
      node.style.setProperty("--panel-y", "0px");
    };
    const move = (event: PointerEvent) => {
      if (!media.matches) return reset();
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--panel-x", `${x}px`);
        node.style.setProperty("--panel-y", `${y}px`);
      });
    };
    node.addEventListener("pointermove", move);
    node.addEventListener("pointerleave", reset);
    media.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", reset);
      media.removeEventListener("change", reset);
    };
  }, []);

  const renderNavLinks = (menuId: string) => (
    <nav
      id={menuId}
      className={menuOpen ? "nav-links is-open" : "nav-links"}
      aria-label="Main navigation"
    >
      {navigation.map(([label, id]) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? "location" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <header
        className={`persistent-navigation${navPinned ? " is-visible" : ""}`}
        aria-hidden={!navPinned}
        inert={!navPinned}
      >
        <a className="wordmark" href="#home">
          <PortfolioMark />
          <span>
            Saharier<span className="accent">.</span>
          </span>
        </a>
        <button
          ref={persistentToggle}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="persistent-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        {renderNavLinks("persistent-menu")}
      </header>
      <section className="hero-section" id="home">
        <div className="page-topline">
          <span>SAHARIER</span>
          <span>BANGLADESH · UIU</span>
        </div>
        <div className="hero-stage" ref={stage}>
          <article className="main-window">
            <WindowBar label="saharier / portfolio" />
            <header className="main-navigation" ref={heroNavigation}>
              <a className="wordmark" href="#home">
                <PortfolioMark />
                <span>
                  Saharier<span className="accent">.</span>
                </span>
              </a>
              <button
                ref={toggle}
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="main-menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span />
                <span />
              </button>
              {renderNavLinks("main-menu")}
            </header>
            <div className="hero-content">
              <div className="hero-copy">
                <p className="hero-greeting">
                  <span>Hello,</span> I'm Saharier
                </p>
                <h1>
                  Computer Science
                  <br />
                  <span>Student</span>
                  <span className="accent">.</span>
                </h1>
                <p className="hero-subheading">Exploring AI, Software & Research</p>
                <p className="hero-introduction">
                  I'm a final-year CSE student interested in building intelligent systems,
                  developing practical software, and exploring research-driven ideas.
                </p>
                <div className="hero-actions">
                  <a className="button primary" href="#projects">
                    Explore My Work <Arrow />
                  </a>
                  <a className="text-link" href="#contact">
                    Get in Touch <Arrow />
                  </a>
                </div>
              </div>
              <div className="hero-portrait">
                <PortraitPlaceholder />
                <span className="portrait-label">
                  <span className="accent">01 /</span> A WORK IN PROGRESS. ALWAYS.
                </span>
              </div>
            </div>
            <div className="hero-bottom">
              <p className="availability">
                <i /> Open to AI/ML Internship Opportunities
              </p>
              <span>FINAL YEAR CSE · CLASS OF 2026</span>
            </div>
          </article>
          <aside className="info-window" aria-label="Contact, interests, and academic profile">
            <WindowBar label="a little more about me" />
            <div className="info-content">
              <p className="eyebrow">Let's connect</p>
              <a className="info-contact" href={`mailto:${profile.email}`}>
                <span>Email</span>
                <strong>{profile.email}</strong>
                <Arrow />
              </a>
              <a className="info-contact" href={profile.github} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>github.com/Saharier203</strong>
                <Arrow />
              </a>
              <div className="info-contact unavailable">
                <span>LinkedIn</span>
                <strong>Link coming soon</strong>
              </div>
              <div className="info-block">
                <h2>
                  Areas of interest<span className="accent">.</span>
                </h2>
                <ul>
                  {[
                    "Multimodal AI & Video Analysis",
                    "Computer Vision & Language Models",
                    "Educational Technology",
                    "Software Application Development",
                    "Workflow Automation",
                  ].map((item, i) => (
                    <li key={item}>
                      <span className="mono">0{i + 1}</span>
                      {item}
                      <span aria-hidden="true">↗</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="info-block academics">
                <span className="eyebrow">Currently at</span>
                <h2>
                  United International
                  <br />
                  University
                </h2>
                <p>BSc in Computer Science and Engineering</p>
                <div>
                  <span>Bangladesh</span>
                  <strong>Expected 2026</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="hero-footnote">
          <span>A selection of academic & personal work</span>
          <a href="#about">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </>
  );
}
