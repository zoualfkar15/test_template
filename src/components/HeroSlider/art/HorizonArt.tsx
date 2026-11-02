/** A ringed planet rising over three small figures. */
export default function HorizonArt() {
  return (
    <svg viewBox="0 0 680 420">
      <defs>
        <radialGradient id="horizon-planet" cx="35%" cy="35%">
          <stop offset="0" stopColor="#f4efe4" />
          <stop offset="0.45" stopColor="#d7b48a" />
          <stop offset="1" stopColor="#8d6248" />
        </radialGradient>
      </defs>

      <ellipse cx="470" cy="150" rx="92" ry="92" fill="url(#horizon-planet)" />
      <ellipse
        cx="470"
        cy="150"
        rx="128"
        ry="28"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="6"
        transform="rotate(-18 470 150)"
      />

      <g fill="#1a241c">
        <circle cx="250" cy="292" r="9" />
        <rect x="244" y="302" width="12" height="28" rx="5" />
        <circle cx="300" cy="300" r="9" />
        <rect x="294" y="310" width="12" height="26" rx="5" />
        <circle cx="346" cy="286" r="8" />
        <rect x="341" y="295" width="10" height="24" rx="4" />
      </g>
      <ellipse cx="300" cy="342" rx="70" ry="8" fill="rgba(16,24,16,0.28)" />
    </svg>
  );
}
