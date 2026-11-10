import { useEffect, useState } from "react";
import {
  designProjects,
  researchTechnologies,
  software,
  supportingResearch,
  type Project,
} from "../data/portfolio";
import { ProjectNote, Tags, WindowBar } from "./Shared";

const categories = [
  ["Research & Intelligence", "research"],
  ["Things I've Built", "software"],
  ["Architecture", "architecture"],
  ["Cybersecurity", "security"],
  ["Design & Management", "design"],
];

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
                <span className={`item-shape shape-${index}`} />
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
            <div className="board-columns">
              {["PLAN", "COORDINATE", "REVIEW"].map((label) => (
                <div key={label}>
                  <span>{label}</span>
                  <i />
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
            <ProjectNote label="Research overview">
              <p>
                My final-year design project explores how multiple sources of information can inform
                educational video summarization. Audio, text, and visual features each offer a
                different perspective on what matters within a lesson.
              </p>
              <p>
                The diagram is a high-level conceptual research workflow, not a claim about
                undocumented model architecture, benchmark performance, or deployment.
              </p>
            </ProjectNote>
          </div>
          <div className="research-workflow">
            <div className="diagram-topline">
              <span>MULTIMODAL ANALYSIS</span>
              <span>FYP / 2026</span>
            </div>
            <div className="video-source">
              <span className="play-icon" aria-hidden="true">
                ▷
              </span>
              <div>
                <strong>Educational video</strong>
                <small>One source. Multiple signals.</small>
              </div>
            </div>
            <div className="workflow-branch" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="signal-cards">
              <div>
                <span>01 / AUDIO</span>
                <div className="waveform" aria-hidden="true">
                  {[12, 24, 34, 16, 42, 28, 46, 22, 34, 16, 26].map((height, i) => (
                    <i key={i} style={{ height }} />
                  ))}
                </div>
                <small>Audio analysis</small>
              </div>
              <div>
                <span>02 / TEXT</span>
                <div className="transcript-lines" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <small>Text analysis</small>
              </div>
              <div>
                <span>03 / VISUAL</span>
                <div className="frame-symbol" aria-hidden="true">
                  <span />
                </div>
                <small>Visual features</small>
              </div>
            </div>
            <div className="workflow-branch reverse" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="workflow-result">
              <span className="result-symbol" aria-hidden="true">
                ↳
              </span>
              <div>
                <strong>Important educational segments</strong>
                <small>Research-based summarization</small>
              </div>
            </div>
            <div className="video-timeline" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <p className="diagram-caption">Conceptual research workflow · Not performance data</p>
          </div>
        </article>
        <div className="supporting-research">
          {supportingResearch.map((project, index) => (
            <article key={project.title}>
              <div className="research-row-heading">
                <span className="mono">0{index + 2}</span>
                <p className="eyebrow">{project.label}</p>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="mini-workflow" aria-label="Conceptual workflow">
                {project.flow.map((step, i) => (
                  <span key={step}>
                    {step}
                    {i < 2 && <b aria-hidden="true">→</b>}
                  </span>
                ))}
              </div>
              <small className="visual-disclaimer">Conceptual workflow</small>
              <ProjectNote>
                <p>{project.note}</p>
              </ProjectNote>
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
                  <ProjectNote>
                    <p>{project.note}</p>
                  </ProjectNote>
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
            <ProjectNote label="Architecture scope">
              <p>
                The focus is system structure, components, and design decisions. This simplified
                conceptual diagram illustrates architectural thinking, not a verified implementation
                or deployment.
              </p>
            </ProjectNote>
          </div>
          <div
            className="architecture-diagram"
            role="img"
            aria-label="Conceptual e-learning system diagram: a learning interface connected to content, learning, and assessment components above a platform data layer"
          >
            <span className="diagram-topline">SYSTEM DESIGN / CONCEPTUAL</span>
            <div className="arch-interface">Learning interface</div>
            <i className="arch-connector" />
            <div className="arch-components">
              <span>Content</span>
              <span>Learning</span>
              <span>Assessment</span>
            </div>
            <i className="arch-connector" />
            <div className="arch-data">
              <span className="database-icon" aria-hidden="true" />
              Platform information
            </div>
            <small>Academic design · Not implementation status</small>
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
            <ProjectNote label="Research scope">
              <p>
                This research considers the implications of emerging computational capabilities for
                existing cryptographic systems. It is an academic investigation, not a claim of a
                new cryptographic implementation or vulnerability discovery.
              </p>
            </ProjectNote>
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
                  <ProjectNote>
                    <p>{project.note}</p>
                  </ProjectNote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
