/** A saucer shining its beam on a waving figure. */
export default function FieldArt() {
  return (
    <svg viewBox="0 0 680 420">
      <defs>
        <linearGradient id="field-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(214,232,255,0.65)" />
          <stop offset="1" stopColor="rgba(214,232,255,0)" />
        </linearGradient>
        <radialGradient id="field-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="360" cy="118" rx="120" ry="36" fill="url(#field-glow)" />

      <g transform="translate(290 78)">
        <path d="M46 62 L94 300 L186 300 L138 62 Z" fill="url(#field-beam)" />
        <ellipse cx="90" cy="28" rx="22" ry="16" fill="#d7ecff" />
        <ellipse cx="90" cy="46" rx="78" ry="18" fill="#f4f7fb" />
        <ellipse cx="90" cy="52" rx="40" ry="8" fill="#c5d0dc" />
      </g>

      <g transform="translate(400 268)" fill="#f6f3ea">
        <circle cx="20" cy="8" r="8" />
        <rect x="15" y="18" width="10" height="26" rx="4" />
        <path d="M8 28 h14" stroke="#f6f3ea" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 28 h12" stroke="#f6f3ea" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
