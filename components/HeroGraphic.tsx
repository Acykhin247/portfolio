// An original, hand-built dashboard illustration (not a copy of any reference image).
export default function HeroGraphic() {
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="Illustration of a dashboard showing revenue, a progress ring and a bar chart" className="w-full max-w-md">
      <rect x="4" y="4" width="412" height="292" rx="18" fill="var(--surface)" stroke="var(--line)" />
      <rect x="20" y="20" width="180" height="64" rx="10" fill="var(--bg)" stroke="var(--line)" />
      <text x="32" y="42" fontSize="11" fill="var(--muted)">Total Revenue</text>
      <text x="32" y="68" fontSize="22" fontWeight="600" fill="var(--fg)">GHS 84.5M</text>
      <text x="150" y="42" fontSize="11" fill="var(--accent)">+12.3%</text>
      <circle cx="330" cy="52" r="34" fill="none" stroke="var(--line)" strokeWidth="8" />
      <circle cx="330" cy="52" r="34" fill="none" stroke="var(--accent)" strokeWidth="8" strokeDasharray="176" strokeDashoffset="42" strokeLinecap="round" transform="rotate(-90 330 52)" />
      <text x="330" y="57" fontSize="13" fontWeight="600" textAnchor="middle" fill="var(--fg)">76%</text>
      {[{ h: 30, v: 2.5 }, { h: 42, v: 3.3 }, { h: 58, v: 7.6 }, { h: 66, v: 8.4 }, { h: 90, v: 23 }, { h: 110, v: 34.9 }].map((b, i) => (
        <g key={i} transform={`translate(${28 + i * 56},0)`}>
          <rect x="0" y={220 - b.h} width="34" height={b.h} rx="4" fill={i > 3 ? "var(--accent)" : "var(--line)"} />
        </g>
      ))}
      <line x1="20" y1="222" x2="400" y2="222" stroke="var(--line)" />
    </svg>
  );
}
