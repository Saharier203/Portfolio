import { useEffect, useRef, useState } from "react";
import { Arrow, PortfolioMark } from "./Shared";
import {
  architectureImage,
  architectureStages,
  beforeAfterImages,
  datasetColumnsImage,
  datasetFeatures,
  datasetOverview,
  evaluationImages,
  fydpTechnologies,
  timelineImage,
  type FYDPImage,
} from "../data/fydp";

function ProjectImageLightbox({ image }: { image: FYDPImage }) {
  const [unavailable, setUnavailable] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    closeButton.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [open]);

  return (
    <>
      {unavailable ? (
        <div className="fydp-image-placeholder" role="img" aria-label={`${image.caption} image not supplied`}>
          <span className="mono">IMAGE TO ADD</span>
          <strong>{image.filename}</strong>
        </div>
      ) : (
        <button
          className="fydp-image-trigger"
          type="button"
          aria-label={`Open larger preview: ${image.caption}`}
          onClick={() => setOpen(true)}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            onError={() => setUnavailable(true)}
          />
          <span className="fydp-image-hint" aria-hidden="true">
            Click to enlarge
          </span>
        </button>
      )}

      {open && !unavailable && image.src && (
        <div
          className="fydp-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            className="fydp-lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`Image preview: ${image.caption}`}
          >
            <button
              ref={closeButton}
              className="fydp-lightbox-close"
              type="button"
              aria-label="Close image preview"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <img src={image.src} alt={image.alt} />
            <p>{image.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectFigure({
  image,
  className = "",
}: {
  image: FYDPImage;
  className?: string;
}) {
  return (
    <figure className={`fydp-figure ${className}`}>
      <ProjectImageLightbox image={image} />
      <figcaption>
        <span>{image.caption}</span>
        {image.duration && <span className="fydp-figure-duration">Duration: {image.duration}</span>}
      </figcaption>
    </figure>
  );
}

function ProjectHero() {
  return (
    <header className="fydp-hero">
      <div className="fydp-hero-inner">
        <p className="eyebrow">
          <span className="red-dash" /> Final Year Design Project
        </p>
        <h1>
          Multimodal Educational
          <br />
          Video Summarization<span className="accent">.</span>
        </h1>
        <p className="fydp-hero-subtitle">
          Using Large Language Models and Visual Feature Analysis
        </p>
        <p className="fydp-hero-description">
          An AI-based research project that identifies important educational video segments through
          speech and visual feature analysis to generate shorter, more focused lecture videos.
        </p>
        <div className="fydp-project-meta" aria-label="Project details">
          <span>Final Year Design Project</span>
          <span>AI/ML Research</span>
          <span>Team project</span>
        </div>
        <div className="fydp-hero-technologies" aria-label="Technologies used">
          {fydpTechnologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </header>
  );
}

function BeforeAfterComparison() {
  return (
    <section className="fydp-section fydp-comparison" aria-labelledby="fydp-comparison-title">
      <div className="fydp-section-heading">
        <p className="eyebrow">
          <span className="red-dash" /> The output
        </p>
        <h2 id="fydp-comparison-title">
          Before and after<span className="accent">.</span>
        </h2>
        <p>
          The system identifies less important segments and retains the selected educational content
          to generate a shorter version of the original lecture.
        </p>
      </div>
      <div className="fydp-comparison-grid">
        {beforeAfterImages.map((image, index) => (
          <ProjectFigure
            key={image.filename}
            image={image}
            className={index === 0 ? "fydp-before" : "fydp-after"}
          />
        ))}
        <span className="fydp-comparison-connector" aria-hidden="true">
          <span>→</span>
        </span>
      </div>
    </section>
  );
}

function SegmentTimeline() {
  return (
    <section className="fydp-section" aria-labelledby="fydp-timeline-title">
      <div className="fydp-section-heading">
        <p className="eyebrow">
          <span className="red-dash" /> Segment decisions
        </p>
        <h2 id="fydp-timeline-title">
          How the System Selects Important Segments<span className="accent">.</span>
        </h2>
      </div>
      <ProjectFigure image={timelineImage} className="fydp-timeline-figure" />
      <div className="fydp-classification-notes">
        <p>
          <strong>KEEP</strong>
          <span>Segments selected as important.</span>
        </p>
        <p>
          <strong>DISCARD</strong>
          <span>Segments identified as less important.</span>
        </p>
        <p className="fydp-classification-caption">
          The timeline visualizes the system's segment-level decisions.
        </p>
      </div>
    </section>
  );
}

function ProjectArchitecture() {
  return (
    <section className="fydp-section" aria-labelledby="fydp-architecture-title">
      <div className="fydp-section-heading">
        <p className="eyebrow">
          <span className="red-dash" /> System architecture
        </p>
        <h2 id="fydp-architecture-title">
          Multimodal Summarization Framework<span className="accent">.</span>
        </h2>
      </div>
      <ProjectFigure image={architectureImage} className="fydp-architecture-figure" />
      <ol className="fydp-stage-list">
        {architectureStages.map((stage, index) => (
          <li key={stage}>
            <span className="mono">0{index + 1}</span>
            <span>{stage}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function DatasetPreparation() {
  return (
    <section className="fydp-section fydp-dataset" aria-labelledby="fydp-dataset-title">
      <div className="fydp-section-heading">
        <p className="eyebrow">
          <span className="red-dash" /> Dataset and annotation
        </p>
        <h2 id="fydp-dataset-title">
          Building and Labeling the Dataset<span className="accent">.</span>
        </h2>
        <p>
          The team first prepared a smaller, earlier dataset and then expanded the corpus for
          training. The figures below describe those separate stages.
        </p>
      </div>

      <div className="fydp-dataset-overview">
        {datasetOverview.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
        <article className="fydp-dataset-unreported">
          <strong>Not reported</strong>
          <span>Manual annotation count and KEEP / DISCARD distribution</span>
        </article>
      </div>

      <div className="fydp-dataset-process">
        <article>
          <span className="mono">01 / PREPARE</span>
          <h3>Segment videos and extract features</h3>
          <p>
            Videos were divided into segments and prepared with speech and visual features for the
            modeling workflow.
          </p>
          <div className="fydp-dataset-features" aria-label="Features shown in the framework">
            {datasetFeatures.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </article>
        <article>
          <span className="mono">02 / LABEL</span>
          <h3>Keep human and LLM-assisted labels distinct</h3>
          <div className="fydp-annotation-types">
            <div>
              <strong>Manual / team review</strong>
              <p>
                The project team prepared and reviewed samples. Human-validated decisions use the
                project’s KEEP and DISCARD labels.
              </p>
            </div>
            <div>
              <strong>LLM-assisted</strong>
              <p>
                Mistral predictions are part of the labeling workflow and are followed by human
                validation; they are not counted as manual labels here.
              </p>
            </div>
          </div>
        </article>
        <article>
          <span className="mono">03 / EXPERIMENT</span>
          <h3>Use labeled segments in model experiments</h3>
          <p>
            Labeled features from the expanded corpus were used in the seen-data 80/20 experiments
            and validation workflow. The earlier team-prepared 5K+ segment set from 26 videos was
            reserved as unseen data.
          </p>
        </article>
      </div>

      <div className="fydp-dataset-example">
        <div>
          <p className="eyebrow">Segment-level label example</p>
          <p>
            The project timeline shows the actual KEEP and DISCARD decisions. The supplied
            dataset-column screenshot can be added here when available.
          </p>
          <a className="text-link" href="#fydp-timeline-title">
            See the full segment timeline <Arrow />
          </a>
        </div>
        <ProjectFigure image={timelineImage} className="fydp-dataset-timeline" />
      </div>
      <div className="fydp-dataset-columns">
        <div className="fydp-dataset-columns-heading">
          <p className="eyebrow">Dataset structure</p>
          <p>
            The supplied sample shows segment start and end times, captions, speech and feature
            columns, KEEP / DISCARD decisions, and the manual-label field.
          </p>
        </div>
        <ProjectFigure image={datasetColumnsImage} className="fydp-dataset-columns-figure" />
      </div>
    </section>
  );
}

function EvaluationGallery() {
  return (
    <section className="fydp-section fydp-evaluation" aria-labelledby="fydp-evaluation-title">
      <div className="fydp-section-heading">
        <p className="eyebrow">
          <span className="red-dash" /> Research results
        </p>
        <h2 id="fydp-evaluation-title">
          Experimental Results and Model Evaluation<span className="accent">.</span>
        </h2>
        <p>
          The figures below present the model evaluation outputs from the project. Open any supplied
          image to inspect its original values and labels.
        </p>
      </div>
      <div className="fydp-evaluation-grid">
        {evaluationImages.map((item, index) => (
          <article
            className={`fydp-evaluation-card fydp-evaluation-card-${index + 1}`}
            key={item.filename}
          >
            <h3>{item.title}</h3>
            <ProjectFigure image={item} />
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnologyStack() {
  return (
    <section className="fydp-section fydp-stack" aria-labelledby="fydp-stack-title">
      <div className="fydp-section-heading">
        <p className="eyebrow">
          <span className="red-dash" /> Tools and methods
        </p>
        <h2 id="fydp-stack-title">
          Technology Stack<span className="accent">.</span>
        </h2>
      </div>
      <div className="fydp-stack-list">
        {fydpTechnologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </section>
  );
}

function ContributionSection() {
  const contributions = [
    "Feature extraction and data processing.",
    "Machine-learning experimentation.",
    "LLM integration and prompting.",
    "vLLM optimization for more efficient execution.",
    "Evaluation and analysis of experimental results.",
  ];

  return (
    <section className="fydp-section fydp-contributions" aria-labelledby="fydp-contributions-title">
      <div className="fydp-section-heading">
        <p className="eyebrow">
          <span className="red-dash" /> Individual work
        </p>
        <h2 id="fydp-contributions-title">
          My Contributions<span className="accent">.</span>
        </h2>
        <p>
          This was a team project. My work focused on contributing to the research and
          implementation across these areas, rather than independently developing the entire system.
        </p>
      </div>
      <ul className="fydp-contribution-list">
        {contributions.map((contribution, index) => (
          <li key={contribution}>
            <span className="mono">0{index + 1}</span>
            <span>{contribution}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ResearchOutcomes() {
  return (
    <section className="fydp-section fydp-outcomes" aria-labelledby="fydp-outcomes-title">
      <div className="fydp-section-heading">
        <p className="eyebrow">
          <span className="red-dash" /> Reflection
        </p>
        <h2 id="fydp-outcomes-title">
          Research Outcomes and Future Improvements<span className="accent">.</span>
        </h2>
      </div>
      <div className="fydp-outcome-grid">
        <article>
          <h3>What the experiments demonstrate</h3>
          <p>
            The reported XGBoost results include a ROC AUC of 0.9495 and average precision of
            0.9706. Model tradeoffs vary by metric: the comparison table reports Random Forest at
            90.55% accuracy, XGBoost at 92.51% weighted F1, and LightGBM at 90.05% macro F1.
          </p>
        </article>
        <article>
          <h3>What worked well</h3>
          <p>
            The five-fold XGBoost chart shows a narrow accuracy range across its displayed folds
            (0.953–0.958), alongside precision, recall, and F1 scores. This supports consistency
            across those folds, within the reported experiment.
          </p>
        </article>
        <article>
          <h3>Current limitations</h3>
          <p>
            The earlier unseen set contains 5K+ segments from 26 videos, while the larger corpus
            supports the separate seen-data experiments. The manual-versus-LLM annotation counts
            and KEEP / DISCARD distribution were not supplied, so they are not inferred.
          </p>
        </article>
        <article>
          <h3>Possible future improvements</h3>
          <p>
            Evaluate the models on broader unseen video collections, inspect segment-level errors,
            and report annotation and KEEP / DISCARD distributions alongside validation results.
          </p>
        </article>
      </div>
      <a className="button fydp-back-link" href="/#projects">
        <Arrow /> Back to Projects
      </a>
    </section>
  );
}

export function FYDPProjectPage() {
  useEffect(() => {
    document.title = "Multimodal Educational Video Summarization — Saharier";
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute(
      "content",
      "Final Year Design Project: multimodal educational video summarization using speech, visual feature analysis, and machine learning.",
    );
  }, []);

  return (
    <div className="fydp-page">
      <a className="skip-link" href="#fydp-main">
        Skip to content
      </a>
      <header className="fydp-topbar">
        <a className="wordmark" href="/" aria-label="Saharier portfolio home">
          <PortfolioMark />
          <span>
            Saharier<span className="accent">.</span>
          </span>
        </a>
        <a className="text-link" href="/#projects">
          Back to Projects <Arrow />
        </a>
      </header>
      <main id="fydp-main">
        <ProjectHero />
        <BeforeAfterComparison />
        <SegmentTimeline />
        <ProjectArchitecture />
        <DatasetPreparation />
        <EvaluationGallery />
        <TechnologyStack />
        <ContributionSection />
        <ResearchOutcomes />
      </main>
      <footer className="fydp-footer">
        <a className="wordmark" href="/">
          <PortfolioMark />
          <span>
            Saharier<span className="accent">.</span>
          </span>
        </a>
        <p>Final Year Design Project · AI/ML Research</p>
        <a className="text-link" href="/#projects">
          Back to Projects <Arrow />
        </a>
      </footer>
    </div>
  );
}
