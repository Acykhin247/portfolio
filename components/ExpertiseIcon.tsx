const icons: Record<string, JSX.Element> = {
  analytics: <path d="M4 19V9m6 10V5m6 14v-7m6 7V3" />,
  visualization: <path d="M4 19h16M7 19V9m5 10V5m5 14v-7" />,
  database: <><ellipse cx="12" cy="5" rx="7" ry="2.5" /><path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" /><path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" /></>,
  automation: <><circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /><path d="M9.5 7H15a3 3 0 0 1 3 3v4.5M14.5 17H9a3 3 0 0 1-3-3V9.5" /></>,
};
export default function ExpertiseIcon({ name }: { name: keyof typeof icons }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">{icons[name]}</svg>);
}
