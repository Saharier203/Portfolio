# Saharier — Premium Personal Portfolio Implementation Plan

## 1. Goal and confirmed decisions

Rebuild the existing portfolio into a distinctive personal website for **Saharier**, a final-year Computer Science and Engineering student at **United International University (UIU), Bangladesh**, with expected graduation in **2026**.

Use the supplied reference image as composition and visual-direction inspiration, not as a source of identity, biography, project facts, or assets. The final result must feel personal, editorial, technically credible, and intentionally composed.

Confirmed with the user:
- Keep the existing **React 19 + Vite 8 + TypeScript + Tailwind CSS v4** stack.
- The name/email/message form will validate input and open a prefilled email draft. It will not claim to send mail from the website.
- No backend, CMS, database, provider credentials, account system, or messaging storage is needed.
- The truncated “Build a real” requirement introduces no additional stack requirements.
- Use a clearly replaceable portrait placeholder; no fake photograph or stock person standing in for Saharier.
- LinkedIn remains visibly unavailable until the actual URL is provided.

## 2. Repository findings and scope

- `src/App.tsx` contains the 12 projects, inline technical diagrams, mockups, project notes, and responsive category navigation.
- There are no About, Skills, or Contact sections and no working contact flow.
- `src/index.css` has approximately 3,236 lines with several historical themes layered over each other. Replace this cascade with a single organized design system rather than adding another override block.
- Existing hero branding is anonymous and uses a glowing CS/orbital graphic that conflicts with this brief.
- Existing images and visual mockups are not real project documentation. Retain only useful, accurate diagrams and clearly label illustrative previews.
- `src/main.tsx` is the entry point and imports the global stylesheet.
- `index.html` contains Figma-managed shell markers; preserve those markers while setting appropriate English language, page title, and description through supported shell values.
- Repository scripts: `pnpm build`, `pnpm format`; oxfmt is the configured formatter. No existing test runner or lint script.
- Use the host-managed development server; do not start another server.

In scope: presentation rebuild, personal content, all 12 projects, skills, real navigation and contact actions, responsive behavior, restrained motion, accessibility, and verification.

Out of scope: real email delivery, CMS editing, publishing/deployment, project source links not provided, fabricated case-study results, downloadable CV without a supplied file, generated portraits, and new application backend features.

## 3. Visual system

### Palette and surfaces
- Page: deep near-black `#090A09`.
- Main panels: charcoal `#111311` and `#171917`.
- Main text: off-white `#F3F0EB`; body text: `#A7AAA3`.
- Accent: coral-red `#E74B50`, with restrained darker red surfaces for small labels.
- Borders: white at approximately 8–12% opacity.
- Shadows: subtle black, used primarily to separate overlapping windows.
- Avoid neon, purple/blue gradients, luminous buttons, 3D objects, decorative orbit graphics, and oversized rounding.
- Limit glass effects to navigation/window chrome or an occasional translucent panel; project content is mostly opaque charcoal.
- Card/window radii: 6–12px. No pill-shaped large containers.

### Typography and spacing
- Reuse the already wired public Manrope family for bold, tight editorial headings and clean body text.
- DM Mono only for small research annotations, workflow labels, and project metadata.
- No oversized italic serif slogans.
- Desktop content width approximately 1,240–1,360px; generous section spacing with compact internal hierarchy.
- Use a clear type scale: hero 64–80px desktop / 40–48px mobile, section headings 36–48px / 30–36px, readable 14–16px body text.
- Accent highlighting is selective, not applied to every heading.

## 4. Page structure and composition

### A. Overlapping hero stage — `#home`

Desktop:
- Build a real semantic layout, not a screenshot of a site.
- Main portfolio window occupies roughly 72–78% of the stage and sits slightly left of center, rotated approximately -1 degree.
- Secondary information window sits toward the upper right, rotated approximately +1.5 degrees and partially behind the main window.
- Reserve a readable exposed rail for secondary content; overlap must not cover links or interactive controls.
- Thin borders, understated window chrome, and balanced spacing convey the reference’s layered-window composition.
- The heading and CTAs remain large and legible; avoid shrinking all content to mimic the small reference image.
- No hidden contact or academic information: secondary content remains readable alongside or below the main window.

Main window:
- Branding: **Saharier / Personal Portfolio**.
- Navigation: **Home, About, Projects, Research, Contact**.
- Greeting: **“Hello, I'm Saharier”**.
- Primary heading: **“Computer Science Student”** with **“Exploring AI, Software & Research”** as a strong second line/subheading.
- Introduction exactly as supplied: “I'm a final-year CSE student interested in building intelligent systems, developing practical software, and exploring research-driven ideas.”
- Status: **“Open to AI/ML Internship Opportunities”**, with a small non-glowing coral indicator.
- Primary CTA **Explore My Work** → `#projects`.
- Secondary CTA **Get in Touch** → `#contact`.
- Right-hand portrait slot: editorial image-frame proportions with coral backdrop, restrained outline icon, and explicit **“Portrait placeholder”** label. Keep the asset configurable so a future local portrait can replace it without redesign.

Secondary window:
- Contact: `saharieriqbal0@gmail.com` (`mailto:`), `github.com/Saharier203` (real HTTPS link), **LinkedIn — link coming soon** (text, not a dead link).
- Areas of interest: Artificial Intelligence; Machine Learning; Software Engineering; Research & Development; Automation.
- Academic information: United International University; BSc in Computer Science and Engineering; Expected Graduation: 2026; Bangladesh.
- Small labels and restrained SVG icons, no invented contact details or achievements.

Tablet/mobile:
- Reduce rotation and overlap progressively; at mobile widths use unrotated, stacked full-width windows.
- Keep the main introduction before the secondary information in DOM and visual order.
- Portrait slot follows the hero copy; secondary information follows the main window.
- No horizontal overflow or tiny desktop-scaled interface.

### B. About — `#about`

Heading: **“A little about what I do.”**

Use the supplied description verbatim:
“I'm a Computer Science student who enjoys exploring the intersection of intelligent systems and software development. Through academic research, coursework, and personal projects, I've worked on machine learning applications, software platforms, hardware-based systems, and technical research.”

Split layout with a restrained portrait-placeholder crop or academic identity panel on one side and the text on the other. Show UIU, CSE, Bangladesh, and graduation 2026 as concise typographic facts. Do not add unsupported employment history or performance metrics.

### C. Projects introduction and category navigation — `#projects`

- Introduce the work as academic, research, and personal projects.
- Provide a compact anchor index: Research & Intelligence; Things I've Built; Architecture; Cybersecurity; Design & Management.
- All categories remain distinct and visible on the page; this is not a single generic filter grid.
- Navigation uses real anchors, current-section indication, smooth scroll, and appropriate scroll margins.

### D. Research & Intelligence — `#research`

Give the final-year project the greatest project-level prominence:

1. **Multimodal Educational Video Summarization Using Large Language Models and Visual Feature Analysis**
   - Mark **Final Year Design Project** and research-based system.
   - Describe audio, text, and visual feature analysis for educational summarization.
   - Confirmed technology tags: **Python, Faster-Whisper, OpenCV, OpenCLIP, vLLM, LLMs, scikit-learn**.
   - Present a factual high-level conceptual workflow: educational video → audio/text/visual analysis → important educational segments.
   - Do not assert undocumented component ordering, model architecture, accuracy, runtime, or deployment.
   - Label diagram **Conceptual research workflow**.

2. **Smart Poultry Farm**
   - Academic hardware and machine-learning project exploring chicken-health monitoring through poultry-dropping analysis.
3. **Smart Solar Panel Cleaner**
   - Microprocessor course project; intelligent solar panel cleaning incorporating machine learning.
4. **Automated AI Shorts Generation Pipeline**
   - Personal local automation workflow; working system with output quality and consistency still being improved.
   - Explicit **Work in progress** label.

Use a large feature followed by a compact technical project list or asymmetrical supporting panels, not four equal cards. Hardware visuals are labeled conceptual system diagrams, not fabricated prototype photos.

### E. Things I've Built — `#software`

Use alternating editorial project rows with a product-style preview on one side and a concise overview on the other. Avoid repeating the research layout.

- **Inventory Management Mobile Application** — Mobile App Development course.
- **Job Recruitment Portal** — web development with exam-based recruitment workflow.
- **AI-Assisted Code Learning Platform** — educational platform with AI-assisted coding support. Do not describe it only as a concept; do not claim undocumented implementation details.
- **Social Media Application** — Advanced Object-Oriented Programming; confirmed **Java, JavaFX, MySQL** tags.

Every unavailable screenshot becomes a visibly labeled **Illustrative interface preview — original screenshots not provided**. Use simple CSS/HTML mockups, not fake live application controls, invented statistics, or deployment badges.

### F. Additional academic work

Keep distinct labeled subsections within a more compact editorial area:

- `#architecture`: **Online E-Learning Platform Architecture** — academic architecture design, with a clearly labeled conceptual component diagram. Do not present as a deployed application.
- `#security`: **Quantum Computing and Its Potential Threat to Computer Security** — research-oriented feature with a typography-led abstract/document treatment. Replace decorative quantum-orbit art; no false findings.
- `#design`: a small visual gallery for **Job Portal UI/UX Design** (Figma prototyping) and **Project Management & Benchmark Analysis** (Jira, Figma, benchmark analysis). Label preview placeholders; do not invent actual Jira tasks or benchmark results.

Each project has a short overview and a keyboard-operable expandable project note. Expanded content uses only supplied facts; do not invent a full case study. Prefer inline disclosures over modal dialogs or empty “View case study” buttons.

### G. Skills — `#skills`

Clean typography-based groups, no progress bars, proficiency percentages, “expert” claims, or floating logo cloud:
- **Programming:** Python, Java, JavaScript, C/C++, SQL.
- **AI & Machine Learning:** YOLOv8, OpenCV, OpenCLIP, Faster-Whisper, vLLM, scikit-learn.
- **Development:** React, Next.js, Django, HTML, CSS.
- **Tools:** Git, GitHub, VS Code, Google Colab, Linux, MySQL, Figma, Jira.

### H. Contact — `#contact`

Heading: **“Have an interesting project in mind?”**

Text: **“I'm always interested in learning, collaborating, and exploring new opportunities in AI and software development.”**

- Real email and GitHub links.
- LinkedIn “Link coming soon” is non-interactive text.
- Form fields: Name, Email, Message, all explicitly labeled and required.
- Name: 2–100 trimmed characters; email: native email validity and maximum 254 characters; message: 10–3,000 trimmed characters.
- Button: **Open Email Draft**.
- Persistent explanatory text: **“This opens your email app with a draft. Nothing is sent by this website.”**
- Validate before navigation; focus the first invalid field and show meaningful inline errors.
- Build `mailto:saharieriqbal0@gmail.com` with a URL-encoded subject and body containing the sender’s name, email, and message.
- Never show “message sent” or clear fields automatically.
- After activation, show a polite status: **“Your email app should open. Review and send the draft there.”**
- Mail-client availability cannot be reliably detected. Always provide the direct email link and a **Copy message** fallback. If Clipboard API permission fails, keep the selectable text and explain manual copying.
- No form values logged, persisted, or transmitted to a third-party service.

Footer: Saharier, personal portfolio, concise UIU/CSE attribution, and a working Back to top link.

## 5. Implementation architecture

- Keep Vite and React; no routing or animation library required.
- `src/App.tsx`: page composition and section wiring.
- `src/data/portfolio.ts`: typed personal profile, links, project records, skill groups. This is the single source of truth; absent optional URLs/assets remain absent.
- `src/components/HeroComposition.tsx`: overlapping main/secondary panels, navigation, portrait placeholder.
- `src/components/ProjectSections.tsx`: differentiated project layouts and reusable factual visual/disclosure helpers.
- `src/components/ContactSection.tsx`: controlled fields, validation, encoded email draft, accessible feedback, clipboard fallback.
- `src/index.css`: one consolidated theme, organized tokens, global layered base styles, layout/component rules, breakpoints, motion and reduced-motion rules. Remove superseded themes and unused orbit/glow styles.
- Existing `src/main.tsx` font/global CSS wiring stays intact.
- Update page language/title/description in `index.html` without removing Figma-managed markers.
- Small reusable inline SVG icons are decorative unless they carry meaning. No new icon library needed.
- No stock imagery needed: the missing portrait and project artifacts are represented honestly with explicit placeholders.

## 6. Interaction, accessibility, and responsive rules

- Header links map to actual section IDs; mobile menu closes on selection and Escape, exposes `aria-expanded`, and returns focus to its toggle when dismissed via Escape.
- Active navigation uses IntersectionObserver; no scroll-event polling.
- Category index uses smooth anchor scrolling and restrained color/underline transitions; does not hide unrelated categories.
- Entrance effects: opacity and translateY of at most 12px, approximately 400ms, once per section. Content is visible if observation fails or is unavailable.
- Hero panel parallax: pointer-fine desktop only, maximum 4–6px translation and under 0.5 degrees additional tilt; use requestAnimationFrame and CSS variables, not React state on every pointer movement.
- Reset transforms on pointer leave. Disable all parallax, entrance translation, and smooth scroll when `prefers-reduced-motion: reduce` is enabled.
- Hover preview lift at most 3px; no pulsing status dots, orbiting shapes, button glow, or continuous float animations.
- Semantic landmarks, single H1, ordered headings, skip link, visible focus, accessible disclosures, and minimum 44px touch targets.
- Do not make critical information available only on hover.
- Desktop rotations must not rotate normal body reading layouts outside the hero stage.
- Verify off-white/gray and coral text contrast on dark surfaces; darker muted text is reserved for decorative labels, not essential content.

## 7. Verification and acceptance

### Automated/static checks
- Format changed source through the repository formatter: `pnpm format` with the intended changed paths.
- Run `pnpm build` and `pnpm exec tsc --noEmit`.
- Check all twelve project titles, required skill groups, profile facts, headings, anchor IDs, and confirmed research technologies.
- Confirm there are no fake project URLs, fake portraits, omitted section content, old anonymous branding, or obsolete layered theme blocks.

### Live browser checks
- Test widths approximately 1440, 1024, 768, and 390px.
- Check visible desktop overlap, readable secondary panel, accurate DOM reading order, mobile stacking, no horizontal overflow, and anchor targets not hidden by navigation.
- Test hero CTAs, main/category navigation, active state, mobile open/close/Escape, keyboard traversal, and every project disclosure.
- Contact: empty submit, malformed email, whitespace-only input, maximum lengths, valid draft encoding (including &, ?, newlines and Unicode), preserved input values, honest completion text, and copy fallback.
- A generated mailto URI can be verified in-browser; actual external mail-client launch/delivery depends on the visitor’s device and must not be claimed verified.
- Test reduced-motion behavior, non-hover/touch use, and focus visibility.
- Inspect browser console for runtime errors.
- Compare composition directly against the supplied reference: layered slightly rotated windows, right portrait area, dark editorial layout, restrained coral accents; no excessive glass, round-card repetition, neon, or floating graphics.

### Definition of done
- Saharier’s identity and academic facts are consistent throughout.
- Hero visibly implements the reference-inspired overlapping composition.
- About, Research & Intelligence, Things I've Built, additional academic work, Skills, and Contact are present and usable.
- All 12 projects retain distinct contexts and honest implementation/research status.
- Missing portrait/screenshots/LinkedIn are explicit placeholders, not false evidence.
- Contact flow works as the agreed email-draft flow without a backend.
- Responsive and accessibility checks pass; build/type checks succeed; any external mail-client limitations are documented.
