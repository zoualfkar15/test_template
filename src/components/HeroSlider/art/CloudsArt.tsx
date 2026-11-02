/** A pale car floating on pink clouds. */
export default function CloudsArt() {
  return (
    <svg viewBox="0 0 680 420">
      <defs>
        <filter id="clouds-puff" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <linearGradient id="clouds-car-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d5e4ef" />
          <stop offset="1" stopColor="#8ea4b8" />
        </linearGradient>
      </defs>

      <g filter="url(#clouds-puff)" opacity="0.95">
        <ellipse cx="250" cy="230" rx="150" ry="78" fill="#f4b7c6" />
        <ellipse cx="390" cy="250" rx="170" ry="90" fill="#f7c3cf" />
        <ellipse cx="300" cy="280" rx="190" ry="70" fill="#e89aaf" />
        <ellipse cx="460" cy="220" rx="110" ry="60" fill="#f8d0da" />
        <ellipse cx="180" cy="260" rx="100" ry="54" fill="#f6c9d4" />
      </g>

      <g transform="translate(168 118) rotate(-8)">
        <ellipse cx="170" cy="168" rx="120" ry="16" fill="rgba(40,16,28,0.28)" />
        <path d="M28 108 L78 78 L150 62 L250 66 L318 92 L338 118 L332 142 L22 142 Z" fill="#f6f7f8" />
        <path d="M132 66 L168 34 L236 34 L268 70 Z" fill="#eceff2" />
        <path d="M142 66 L172 40 L214 40 L228 66 Z" fill="url(#clouds-car-glass)" />
        <path d="M232 66 L248 42 L262 42 L276 70 Z" fill="#9eb4c6" />
        <path d="M22 118 H338" stroke="#d7dbe0" strokeWidth="3" />
        <circle cx="92" cy="142" r="22" fill="#2a2d33" />
        <circle cx="92" cy="142" r="10" fill="#c5c8ce" />
        <circle cx="268" cy="142" r="22" fill="#2a2d33" />
        <circle cx="268" cy="142" r="10" fill="#c5c8ce" />
        <path d="M300 96 h22 v10 h-22z" fill="#f0d36a" />
        <path d="M36 98 h16 v8 h-16z" fill="#e07a7a" />
      </g>
    </svg>
  );
}
