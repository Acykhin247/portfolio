import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: { colors: { bg: "var(--bg)", surface: "var(--surface)", fg: "var(--fg)", muted: "var(--muted)", line: "var(--line)", accent: "var(--accent)" }, fontFamily: { sans: ["var(--font-plex)", "system-ui", "sans-serif"] } } },
} satisfies Config;
