import React from 'react';

/** Shared isometric stage — used by Hero and LanguageSelect */
export default function HeroScene({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hs-sage" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a8f78" />
          <stop offset="100%" stopColor="#1f6b5a" />
        </linearGradient>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8cfe3" />
          <stop offset="100%" stopColor="#1a4a66" />
        </linearGradient>
        <linearGradient id="hs-sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4ebe0" />
          <stop offset="100%" stopColor="#efe6d6" />
        </linearGradient>
        <linearGradient id="hs-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f07a4a" />
          <stop offset="100%" stopColor="#e25b2a" />
        </linearGradient>
      </defs>

      {/* floating seed shapes */}
      <circle cx="86" cy="78" r="10" fill="#efe6d6" opacity="0.85" />
      <circle cx="640" cy="96" r="7" fill="#e25b2a" opacity="0.9" />
      <path d="M610 180l28-8-8 28-28 8z" fill="#d8e8f2" opacity="0.75" />
      <path
        d="M92 360c18-22 42-18 48 2 8 26-18 48-40 44-20-4-30-28-8-46z"
        fill="#efe6d6"
        opacity="0.35"
      />

      {/* LEFT platform — sky block + reclining figure with laptop */}
      <g className="hs-float hs-float--a">
        <path d="M70 250l110-58 110 58-110 58z" fill="url(#hs-sky)" />
        <path d="M70 250v42l110 58 110-58v-42l-110 58z" fill="#123d52" />
        <path d="M180 308v42l110-58v-42z" fill="#0d3044" />
        {/* figure */}
        <ellipse cx="148" cy="232" rx="18" ry="18" fill="#101820" />
        <path
          d="M120 248c8-18 54-22 72-4 10 10 8 28-6 34l-40 8c-20 2-34-16-26-38z"
          fill="#f4f7f6"
        />
        <rect x="168" y="236" width="52" height="34" rx="4" fill="#101820" />
        <rect x="172" y="240" width="44" height="24" rx="2" fill="#2a8f78" />
        <rect x="118" y="268" width="22" height="30" rx="8" fill="#101820" />
        <circle cx="210" cy="220" r="5" fill="#e25b2a" />
      </g>

      {/* CENTER platform — sand + figure with book */}
      <g className="hs-float hs-float--b">
        <path d="M280 310l95-50 95 50-95 50z" fill="url(#hs-sand)" />
        <path d="M280 310v36l95 50 95-50v-36l-95 50z" fill="#d9ceb8" />
        <path d="M375 360v36l95-50v-36z" fill="#c4b59a" />
        <ellipse cx="350" cy="268" rx="16" ry="16" fill="#101820" />
        <path
          d="M318 282c12-20 58-18 70 4 8 14 2 32-14 36l-34 6c-22 2-34-20-22-46z"
          fill="#1f6b5a"
        />
        <rect x="368" y="286" width="28" height="36" rx="3" fill="#e25b2a" />
        <path d="M330 338c-6 14-2 22 10 24" stroke="#101820" strokeWidth="8" strokeLinecap="round" />
        <circle cx="420" cy="292" r="9" fill="#f4f7f6" />
        <path d="M416 286c4-10 12-12 16-6" stroke="#e25b2a" strokeWidth="2" fill="none" />
      </g>

      {/* RIGHT accent arrow platform + waving figure */}
      <g className="hs-float hs-float--c">
        <path d="M470 250l90-48 48 26-42 22 62 34-90 48-48-26 42-22z" fill="url(#hs-accent)" />
        <path d="M470 250v34l20 11 48-26v-34l-48 26z" fill="#b8441c" />
        <ellipse cx="530" cy="214" rx="17" ry="17" fill="#101820" />
        <path
          d="M500 228c10-16 52-20 66-2 10 12 6 30-10 36l-36 8c-22 2-34-20-20-42z"
          fill="#d8e8f2"
        />
        <path d="M558 236l42-28" stroke="#efe6d6" strokeWidth="10" strokeLinecap="round" />
        <path d="M592 204l18-4-8 20" fill="#efe6d6" />
        <path
          d="M512 268c-4 16 2 28 16 30"
          stroke="#101820"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M548 250c18-8 28 6 22 18"
          stroke="#101820"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>

      {/* FRONT sage platform */}
      <g className="hs-float hs-float--d">
        <path d="M190 390l120-64 120 64-120 64z" fill="url(#hs-sage)" />
        <path d="M190 390v30l120 64 120-64v-30l-120 64z" fill="#0f3d34" />
        <path d="M310 454v30l120-64v-30z" fill="#0a2c26" />
        {/* mini stack / plant */}
        <rect x="270" y="360" width="18" height="28" rx="3" fill="#efe6d6" />
        <rect x="292" y="348" width="18" height="40" rx="3" fill="#d8e8f2" />
        <rect x="314" y="354" width="18" height="34" rx="3" fill="#e25b2a" />
        <circle cx="360" cy="350" r="14" fill="#2a8f78" />
        <path d="M360 336v-16M348 344l-12-10M372 344l12-10" stroke="#efe6d6" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* paper plane */}
      <g className="hs-float hs-float--plane">
        <path d="M128 140l96 36-62 20-8 34-26-90z" fill="#f4f7f6" />
        <path d="M128 140l96 36-62 20z" fill="#d8e8f2" />
      </g>
    </svg>
  );
}
