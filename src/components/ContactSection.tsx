import { useRef, useState, type FormEvent } from "react";
import { profile } from "../data/portfolio";
import { Arrow } from "./Shared";

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
const emptyValues: Values = { name: "", email: "", message: "" };

export function ContactSection() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [showFallback, setShowFallback] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const messageBody = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`;
  const draftUrl = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`)}&body=${encodeURIComponent(messageBody)}`;

  function validate() {
    const next: Errors = {};
    if (values.name.trim().length < 2 || values.name.trim().length > 100)
      next.name = "Please enter a name between 2 and 100 characters.";
    const input = form.current?.elements.namedItem("email") as HTMLInputElement | null;
    if (!values.email.trim() || !input?.validity.valid || values.email.trim().length > 254)
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10 || values.message.trim().length > 3000)
      next.message = "Please write a message between 10 and 3,000 characters.";
    setErrors(next);
    const first = (["name", "email", "message"] as const).find((key) => next[key]);
    if (first) {
      (form.current?.elements.namedItem(first) as HTMLElement | null)?.focus();
      return false;
    }
    return true;
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    setStatus("");
    if (!validate()) return;
    setStatus("Your email app should open. Review and send the draft there.");
    setShowFallback(true);
    window.location.href = draftUrl;
  }

  async function copy() {
    setStatus("");
    if (!validate()) return;
    setShowFallback(true);
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(
        `To: ${profile.email}\nSubject: Portfolio enquiry from ${values.name.trim()}\n\n${messageBody}`,
      );
      setCopyStatus("Message copied. Paste it into your email app.");
    } catch {
      setCopyStatus("Copy isn't available here. Select and copy the draft text below.");
    }
  }

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("");
    setCopyStatus("");
  }

  return (
    <section className="contact-band" id="contact">
      <div className="section contact-section" data-reveal>
        <div className="contact-copy">
          <p className="eyebrow">
            <span className="red-dash" /> Let's connect
          </p>
          <h2>
            Have an interesting
            <br />
            project in mind<span className="accent">?</span>
          </h2>
          <p>
            I'm always interested in learning, collaborating, and exploring new opportunities in AI
            and software development.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <Arrow />
          </a>
          <div className="contact-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <span>
              LinkedIn <small>Link coming soon</small>
            </span>
          </div>
          <p className="availability">
            <i /> Open to AI/ML Internship Opportunities
          </p>
        </div>
        <form ref={form} className="contact-form" onSubmit={submit} noValidate>
          <div className="form-topline">
            <span>START A CONVERSATION</span>
            <span>01 — 03</span>
          </div>
          <div className="form-field">
            <label htmlFor="contact-name">
              Your name <span>*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="How should I call you?"
              required
              maxLength={100}
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p className="field-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">
              Email address <span>*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              maxLength={254}
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p className="field-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">
              What's on your mind? <span>*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Tell me a little about your idea…"
              required
              maxLength={3000}
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>
          <div className="form-actions">
            <button className="button primary" type="submit">
              Open Email Draft <Arrow />
            </button>
            <button className="copy-button" type="button" onClick={copy}>
              Copy message
            </button>
          </div>
          <p className="form-disclaimer">
            This opens your email app with a draft. Nothing is sent by this website.
          </p>
          <p className="form-status" role="status">
            {status || copyStatus}
          </p>
          {showFallback && (
            <details className="draft-fallback" open={!!copyStatus}>
              <summary>Email app didn't open? Use this draft.</summary>
              <p>
                Send to <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <textarea
                aria-label="Selectable email draft"
                readOnly
                value={`To: ${profile.email}\nSubject: Portfolio enquiry from ${values.name.trim()}\n\n${messageBody}`}
                rows={6}
              />
            </details>
          )}
        </form>
      </div>
    </section>
  );
}
