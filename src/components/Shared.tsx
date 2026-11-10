import { profile } from "../data/portfolio";

export function Arrow({ up = false }: { up?: boolean }) {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={up ? { transform: "rotate(-90deg)" } : undefined}
    >
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PortraitPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`portrait-placeholder ${compact ? "portrait-compact" : ""}`}>
      {profile.portrait ? (
        <img src={profile.portrait} alt="Saharier" />
      ) : (
        <>
          <span className="portrait-corner top-left" />
          <span className="portrait-corner bottom-right" />
          <svg className="portrait-outline" viewBox="0 0 200 230" fill="none" aria-hidden="true">
            <path
              d="M133 72c0 27-14 48-33 48S67 99 67 72s14-44 33-44 33 17 33 44ZM34 220v-35c0-31 29-49 66-49s66 18 66 49v35"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path d="m74 140 26 45 26-45M100 185v35" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <div className="portrait-caption">
            <span className="mono">YOUR PHOTO HERE</span>
            <small>Portrait placeholder</small>
          </div>
        </>
      )}
    </div>
  );
}

export function WindowBar({ label }: { label: string }) {
  return (
    <div className="window-bar">
      <span className="window-controls" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{label}</span>
      <span className="window-square" aria-hidden="true" />
    </div>
  );
}

export function Tags({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="tags" aria-label="Confirmed technologies and methods">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export function ProjectNote({
  children,
  label = "Project notes",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <details className="project-note">
      <summary>
        {label}
        <span aria-hidden="true">+</span>
      </summary>
      <div className="note-content">{children}</div>
    </details>
  );
}
