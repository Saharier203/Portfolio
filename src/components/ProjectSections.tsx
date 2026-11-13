import { useEffect, useState } from "react";
import {
  designProjects,
  researchTechnologies,
  software,
  supportingResearch,
  type Project,
  type ResearchVisualKind,
} from "../data/portfolio";
import { Tags, WindowBar } from "./Shared";

const categories = [
  ["Research & Intelligence", "research"],
  ["Things I've Built", "software"],
  ["Architecture", "architecture"],
  ["Cybersecurity", "security"],
  ["Design & Management", "design"],
];

const diagramIcons = {
  video: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
    </>
  ),
  audio: <path d="M4 10v4m4-8v12m4-15v18m4-12v6m4-4v2" />,
  text: (
    <>
      <path d="M7 3h7l4 4v14H7zM14 3v5h5" />
      <path d="M10 12h5m-5 4h5" />
    </>
  ),
  visual: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m21 15-5-5-8 9" />
    </>
  ),
  summary: (
    <>
      <path d="M7 3h10v18H7zM10 7h4" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  interface: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8m-4-3v3" />
    </>
  ),
  content: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h8m-8 4h7" />
    </>
  ),
  learning: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4z" fill="currentColor" stroke="none" />
    </>
  ),
  assessment: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V2h6v2m-7 8 2 2 4-4" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
};

type DiagramIconName = keyof typeof diagramIcons;

function DiagramIcon({ name }: { name: DiagramIconName }) {
  return (
    <svg
      className="diagram-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagramIcons[name]}
    </svg>
  );
}

function ResearchArtwork({ kind }: { kind: ResearchVisualKind }) {
  return (
    <div className={`research-artwork research-artwork-${kind}`} aria-hidden="true">
      {kind === "poultry" ? (
        <svg viewBox="0 0 360 160" fill="none">
          <circle className="artwork-orbit" cx="184" cy="82" r="57" />
          <circle className="artwork-orbit artwork-orbit-small" cx="184" cy="82" r="38" />
          <path
            className="artwork-line"
            d="M66 123h228M83 115l18-16m176 16-18-16"
            strokeLinecap="round"
          />
          <ellipse className="artwork-bird" cx="178" cy="91" rx="43" ry="28" />
          <path className="artwork-wing" d="M151 91c13-19 39-20 54-3-13 15-35 18-54 3Z" />
          <circle className="artwork-bird" cx="211" cy="61" r="17" />
          <path className="artwork-comb" d="M203 46c-5-11 5-13 9-5 5-10 14-4 9 3" />
          <path className="artwork-beak" d="m226 59 17 7-17 7" />
          <circle className="artwork-eye" cx="216" cy="59" r="2" />
          <path className="artwork-line" d="m165 116-5 17m28-16 4 16" strokeLinecap="round" />
          <path className="artwork-line" d="m153 134 8-1m27 0 8 1" strokeLinecap="round" />
          <ellipse className="artwork-egg" cx="112" cy="111" rx="8" ry="11" />
          <ellipse className="artwork-egg" cx="133" cy="113" rx="7" ry="9" />
          <circle className="artwork-spark" cx="271" cy="49" r="3" />
          <circle className="artwork-spark" cx="89" cy="70" r="2" />
        </svg>
      ) : kind === "solar" ? (
        <svg viewBox="0 0 360 160" fill="none">
          <circle className="artwork-sun" cx="100" cy="56" r="22" />
          <path className="artwork-line" d="M100 20v-8m0 88v-8M64 56h-9m99 0h-9M75 31l-7-7m64 64-7-7m0-50 7-7m-64 64 7-7" />
          <path className="artwork-panel" d="m102 91 161-16 28 57-165 15-24-56Z" />
          <path className="artwork-grid" d="m137 87 22 55m24-58 21 55m24-58 20 55M112 110l163-16m-151 39 164-16" />
          <path className="artwork-line" d="m130 64 137 13" strokeLinecap="round" />
          <path className="artwork-brush" d="m201 58 76 8-5 12-76-8z" />
          <path className="artwork-line" d="m219 78-18 25" strokeLinecap="round" />
          <circle className="artwork-spark" cx="303" cy="43" r="3" />
          <circle className="artwork-spark" cx="75" cy="113" r="2" />
        </svg>
      ) : (
        <svg viewBox="0 0 360 160" fill="none">
          <path className="artwork-filmstrip" d="M70 38h220v83H70z" />
          <path className="artwork-film-perforation" d="M82 38v83m196-83v83" />
          <rect className="artwork-frame" x="96" y="52" width="48" height="54" rx="5" />
          <rect className="artwork-frame artwork-frame-accent" x="156" y="52" width="48" height="54" rx="5" />
          <rect className="artwork-frame" x="216" y="52" width="48" height="54" rx="5" />
          <circle className="artwork-play" cx="180" cy="79" r="13" />
          <path className="artwork-play-mark" d="m177 72 10 7-10 7z" />
          <path className="artwork-line" d="M85 137h190" strokeLinecap="round" />
          <path className="artwork-wave" d="M103 137v-5m14 5v-10m14 10v-7m14 7v-14m14 14v-5m14 5v-10m14 10v-7m14 7v-15m14 15v-6m14 6v-11m14 11v-7" strokeLinecap="round" />
          <circle className="artwork-spark" cx="301" cy="48" r="3" />
        </svg>
      )}
    </div>
  );
}

const researchStepIcons: Record<ResearchVisualKind, DiagramIconName[]> = {
  poultry: ["visual", "data", "assessment"],
  solar: ["visual", "data", "interface"],
  shorts: ["video", "data", "summary"],
};

function ProductPreview({ kind }: { kind: Project["kind"] }) {
  return (
    <figure className={`product-preview preview-${kind}`}>
      <div className="preview-art" aria-hidden="true">
        {kind === "inventory" ? (
          <div className="mobile-mockup">
            <div className="phone-notch" />
            <small>MY INVENTORY</small>
            <h4>
              Everything,
              <br />
              in its place.
            </h4>
            <div className="mock-search">Search inventory</div>
            {["Product overview", "Stock details", "Categories"].map((label, index) => (
              <div className="inventory-item" key={label}>
                <span className={`item-shape shape-${index}`}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {index === 0 ? (
                      <path d="m4 8 8-4 8 4v9l-8 4-8-4V8Zm0 0 8 4 8-4m-8 4v9" />
                    ) : index === 1 ? (
                      <path d="M9 5h6m-5 0v3l-3 3v7h10v-7l-3-3V5m-8 8h14" />
                    ) : (
                      <path d="M6 4h12v16H6zM9 8h6m-6 4h6m-6 4h4" />
                    )}
                  </svg>
                </span>
                <div>
                  <strong>{label}</strong>
                  <i />
                </div>
                <span>↗</span>
              </div>
            ))}
            <div className="mock-mobile-nav">
              <span>Overview</span>
              <span>Inventory</span>
              <span>Profile</span>
            </div>
          </div>
        ) : kind === "code" ? (
          <div className="editor-mockup">
            <WindowBar label="learning-workspace.js" />
            <div className="editor-tabs">
              <span>Learn by doing</span>
              <span>JavaScript</span>
            </div>
            <div className="editor-code">
              <p>
                <span>01</span>
                <em>// Make room for curiosity.</em>
              </p>
              <p>
                <span>02</span>
                <b>function</b> learn() {"{"}
              </p>
              <p>
                <span>03</span>&nbsp; practice();
              </p>
              <p>
                <span>04</span>&nbsp; explore();
              </p>
              <p>
                <span>05</span>
                {"}"}
              </p>
            </div>
            <div className="editor-hint">
              <i /> AI-assisted learning <span>GUIDANCE</span>
            </div>
            <div className="code-visual" aria-hidden="true">
              <span>&lt;/&gt;</span>
              <i />
              <i />
              <i />
              <b />
            </div>
          </div>
        ) : kind === "social" ? (
          <div className="desktop-mockup social-mockup">
            <WindowBar label="community / desktop" />
            <div className="social-layout">
              <aside>
                <b>
                  social<span>.</span>
                </b>
                <i />
                <i />
                <i />
              </aside>
              <div>
                <div className="social-profile">
                  <span>S</span>
                  <div>
                    <b>Your community</b>
                    <small>A place to connect.</small>
                  </div>
                </div>
                <div className="social-image">
                  <i className="social-orb social-orb-one" />
                  <i className="social-orb social-orb-two" />
                  <i className="social-orb social-orb-three" />
                  <span>
                    Ideas worth
                    <br />
                    sharing.
                  </span>
                </div>
                <div className="social-lines">
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        ) : kind === "management" ? (
          <div className="board-mockup">
            <small>PROJECT WORKSPACE</small>
            <h4>Ideas → a plan.</h4>
            <div className="board-roadmap">
              {["PLAN", "COORDINATE", "REVIEW"].map((label, index) => (
                <div className="roadmap-step" key={label}>
                  <span className="roadmap-node">{index + 1}</span>
                  <b>{label}</b>
                  <i />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`desktop-mockup ${kind === "design" ? "design-mockup" : ""}`}>
            <WindowBar label="job-portal / interface study" />
            <div className="mock-website-nav">
              <b>
                nextrole<span>.</span>
              </b>
              <span>Explore opportunities</span>
            </div>
            <div className="mock-website-body">
              <span>YOUR NEXT CHAPTER</span>
              <h4>
                Good work.
                <br />
                Better possibilities.
              </h4>
              <div className="recruitment-art" aria-hidden="true">
                <svg viewBox="0 0 260 48" fill="none">
                  <circle cx="31" cy="24" r="18" />
                  <circle cx="31" cy="18" r="5" />
                  <path d="M20 36c2-7 6-10 11-10s9 3 11 10" />
                  <circle cx="74" cy="24" r="18" />
                  <circle cx="74" cy="18" r="5" />
                  <path d="M63 36c2-7 6-10 11-10s9 3 11 10" />
                  <circle cx="117" cy="24" r="18" />
                  <circle cx="117" cy="18" r="5" />
                  <path d="M106 36c2-7 6-10 11-10s9 3 11 10" />
                  <path d="M153 14h83M153 24h66M153 34h74" />
                  <circle className="recruitment-spark" cx="241" cy="24" r="4" />
                </svg>
              </div>
              <div className="mock-search">
                Role, keyword, or skill <span>Search</span>
              </div>
              <div className="mock-role">
                <span>Candidate profile</span>
                <span>Assessment</span>
                <span>Review</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <figcaption>Illustrative interface preview · Original screenshots not provided</figcaption>
    </figure>
  );
}

export function ProjectSections() {
  const [currentCategory, setCurrentCategory] = useState("research");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrentCategory(visible.target.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    categories.forEach(([, id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="projects-introduction section" id="projects" data-reveal>
        <div className="section-header">
          <div>
            <p className="eyebrow">
              <span className="red-dash" /> Selected work
            </p>
            <h2>
              Different disciplines.
              <br />
              The same curiosity<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Academic research, practical software, and experiments along the way. Here's what I've
            been exploring throughout my degree.
          </p>
        </div>
        <nav className="category-navigation" aria-label="Project categories">
          {categories.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={currentCategory === id ? "location" : undefined}
            >
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="section research-section" id="research" data-reveal>
        <header className="category-header">
          <p className="eyebrow">
            <span className="category-number">01</span> Research & AI/ML
          </p>
          <h2>
            Research & Intelligence<span className="accent">.</span>
          </h2>
          <span className="project-count">04 PROJECTS</span>
        </header>
        <article className="featured-research">
          <div className="research-copy">
            <div className="research-badge">
              <i /> FINAL YEAR DESIGN PROJECT
            </div>
            <h3>
              Multimodal Educational Video Summarization{" "}
              <span>Using Large Language Models and Visual Feature Analysis</span>
            </h3>
            <p>
              A research-based educational video summarization system that brings together audio,
              text, and visual feature analysis to identify important educational segments.
            </p>
            <Tags items={researchTechnologies} />
          </div>
          <div
            className="research-workflow"
            role="img"
            aria-label="Conceptual workflow: an educational video is analyzed for audio, text, and visual signals, then summarized into key educational moments. Not performance data."
          >
            <div className="diagram-topline">
              <span>MULTIMODAL ANALYSIS</span>
              <span>FYP / 2026</span>
            </div>
            <div className="video-source">
              <DiagramIcon name="video" />
              <div>
                <strong>Video</strong>
                <small>One source</small>
              </div>
            </div>
            <div className="workflow-branch" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="signal-cards">
              <div>
                <DiagramIcon name="audio" />
                <small>Analyze audio</small>
              </div>
              <div>
                <DiagramIcon name="text" />
                <small>Read transcript</small>
              </div>
              <div>
                <DiagramIcon name="visual" />
                <small>Inspect frames</small>
              </div>
            </div>
            <div className="workflow-branch reverse" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="workflow-result">
              <DiagramIcon name="summary" />
              <div>
                <strong>Key moments</strong>
                <small>Video summary</small>
              </div>
            </div>
            <div className="video-timeline" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <p className="diagram-caption">Concept only · No performance data</p>
          </div>
        </article>
        <div className="supporting-research">
          {supportingResearch.map((project, index) => (
            <article key={project.title}>
              <ResearchArtwork kind={project.visual} />
              <div className="research-row-heading">
                <span className="mono">0{index + 2}</span>
                <p className="eyebrow">{project.label}</p>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="mini-workflow" aria-label="Conceptual workflow">
                {project.flow.map((step, i) => (
                  <span key={step}>
                    <DiagramIcon name={researchStepIcons[project.visual][i]} />
                    <span>{step}</span>
                    {i < 2 && <b aria-hidden="true">→</b>}
                  </span>
                ))}
              </div>
              <small className="visual-disclaimer">Conceptual workflow</small>
            </article>
          ))}
        </div>
      </section>

      <section className="software-band">
        <div className="section" id="software">
          <header className="category-header" data-reveal>
            <p className="eyebrow">
              <span className="category-number">02</span> Software & application development
            </p>
            <h2>
              Things I've Built<span className="accent">.</span>
            </h2>
            <span className="project-count">04 PROJECTS</span>
          </header>
          <div className="software-projects">
            {software.map((project, index) => (
              <article className="software-project" key={project.title} data-reveal>
                <ProductPreview kind={project.kind} />
                <div className="software-copy">
                  <div className="project-index mono">PROJECT / 0{index + 1}</div>
                  <p className="eyebrow">{project.context}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Tags items={project.tags} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section additional-work">
        <header className="section-header" data-reveal>
          <div>
            <p className="eyebrow">
              <span className="red-dash" /> Beyond the application
            </p>
            <h2>
              Architecture, research
              <br />& thoughtful design<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Not all work ends in an application. These projects focus on how systems are structured,
            questioned, designed, and managed.
          </p>
        </header>
        <article className="architecture-project" id="architecture" data-reveal>
          <div>
            <p className="eyebrow">03 / System architecture</p>
            <h3>
              Online E-Learning
              <br />
              Platform Architecture
            </h3>
            <p>
              An academic architecture design project exploring the components and design decisions
              behind an online learning platform—not a fully implemented application.
            </p>
          </div>
          <div
            className="architecture-diagram"
            role="img"
            aria-label="Conceptual e-learning system diagram: a learning interface connected to content, learning, and assessment components above a platform data layer"
          >
            <span className="diagram-topline">SYSTEM DESIGN / CONCEPTUAL</span>
            <div className="arch-interface">
              <DiagramIcon name="interface" />
              <span>Learn</span>
            </div>
            <i className="arch-connector" />
            <div className="arch-components">
              <div>
                <DiagramIcon name="content" />
                <small>Browse</small>
              </div>
              <div>
                <DiagramIcon name="learning" />
                <small>Learn</small>
              </div>
              <div>
                <DiagramIcon name="assessment" />
                <small>Assess</small>
              </div>
            </div>
            <i className="arch-connector" />
            <div className="arch-data">
              <DiagramIcon name="data" />
              <span>Store</span>
            </div>
            <small>Concept only · Not implemented</small>
          </div>
        </article>
        <article className="security-project" id="security" data-reveal>
          <div className="research-document" aria-hidden="true">
            <div className="document-kicker">RESEARCH NOTES / COMPUTER SECURITY</div>
            <div className="document-title">
              The quantum
              <br />
              question<span>.</span>
            </div>
            <svg className="security-artwork" viewBox="0 0 120 90" fill="none">
              <circle cx="60" cy="44" r="33" />
              <ellipse cx="60" cy="44" rx="16" ry="33" />
              <ellipse cx="60" cy="44" rx="33" ry="14" />
              <path d="M51 44v-6a9 9 0 0 1 18 0v6m-21 0h24v19H48z" />
              <circle className="security-node" cx="60" cy="11" r="3" />
              <circle className="security-node" cx="27" cy="44" r="3" />
              <circle className="security-node" cx="93" cy="44" r="3" />
            </svg>
            <div className="document-lines">
              <i />
              <i />
              <i />
            </div>
            <div className="document-footer">
              <span>COMPUTATION</span>
              <span>CRYPTOGRAPHY</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">04 / Cybersecurity research</p>
            <h3>Quantum Computing and Its Potential Threat to Computer Security</h3>
            <p>
              Academic research exploring the potential impact of quantum computing on existing
              cryptographic systems and computer security.
            </p>
          </div>
        </article>
        <div className="design-work" id="design" data-reveal>
          <header className="design-heading">
            <p className="eyebrow">05 / UI/UX & project management</p>
            <h3>
              Designing the experience.
              <br />
              Planning the work.
            </h3>
          </header>
          <div className="design-gallery">
            {designProjects.map((project) => (
              <article key={project.title}>
                <ProductPreview kind={project.kind} />
                <div className="design-copy">
                  <p className="eyebrow">{project.context}</p>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <Tags items={project.tags} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
