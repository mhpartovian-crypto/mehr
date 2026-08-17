import { Link } from "react-router-dom";

export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 11 L20 4 L34 11 L20 18 Z" fill="#ff7d21" />
      <path d="M6 20.5 L20 13.5 L34 20.5 L20 27.5 Z" fill="#84a7c6" />
      <path d="M6 30 L20 23 L34 30 L20 37 Z" fill="#dde4ec" />
    </svg>
  );
}

export default function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Persis Metal — home">
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
        <LogoMark />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] font-semibold tracking-[0.08em] ${
            light ? "text-graphite-50" : "text-ink-900"
          }`}
        >
          PERSIS<span className="text-molten-500">·</span>METAL
        </span>
        <span
          className={`mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.32em] ${
            light ? "text-graphite-400" : "text-ink-500"
          }`}
        >
          persismetal.com
        </span>
      </span>
    </Link>
  );
}
