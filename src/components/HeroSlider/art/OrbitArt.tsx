/** An astronaut standing under a flock of birds. */
export default function OrbitArt() {
  return (
    <svg viewBox="0 0 680 420">
      <g fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
        <path d="M80 120 c20 -24 48 -24 64 0" />
        <path d="M150 96 c16 -20 40 -20 54 0" />
        <path d="M220 128 c18 -22 42 -22 58 0" />
        <path d="M300 88 c14 -16 32 -16 44 0" />
      </g>

      <g transform="translate(400 150)">
        <ellipse cx="40" cy="150" rx="28" ry="7" fill="rgba(0,0,0,0.35)" />
        <circle cx="40" cy="28" r="22" fill="#f7f8fa" />
        <circle cx="40" cy="30" r="13" fill="#b7d4ea" />
        <rect x="22" y="52" width="36" height="46" rx="16" fill="#f7f8fa" />
        <rect x="6" y="58" width="16" height="30" rx="8" fill="#e4ebf2" />
        <path d="M30 98 v32 M52 98 v32" stroke="#f7f8fa" strokeWidth="8" strokeLinecap="round" />
      </g>
    </svg>
  );
}
