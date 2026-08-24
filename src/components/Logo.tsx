import { Link } from "react-router-dom";

/** Change this to switch the live logo across the whole site (1–4). */
export const ACTIVE_LOGO = 1;

function Mark({ variant, size }: { variant: number; size: number }) {
  const accent = "var(--color-molten-500)";
  const steel = "var(--color-steel-400)";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      {variant === 1 && (
        <>
          <path d="M8 23h15l6-6H14z" fill={accent} />
          <path d="M8 29h15l6-6H14z" fill={steel} />
          <path d="M8 35h15l6-6H14z" fill="currentColor" opacity=".55" />
        </>
      )}
      {variant === 2 && (
        <>
          <rect x="8" y="5" width="7" height="30" fill="currentColor" opacity=".85" />
          <path d="M15 5 L33 12.5 L15 20 Z" fill={accent} />
          <rect x="8" y="5" width="7" height="30" fill="none" stroke="currentColor" strokeWidth="0" />
        </>
      )}
      {variant === 3 && (
        <>
          <path
            d="M20 3 34.3 11.25v16.5L20 36 5.7 27.75V11.25Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            opacity=".85"
          />
          <rect x="14.5" y="12.5" width="4.6" height="15" fill="currentColor" opacity=".85" />
          <path
            d="M19.1 12.5h4.2a5 5 0 0 1 0 10h-4.2v-4.4h3.6a1.9 1.9 0 0 0 0-3.8h-3.6Z"
            fill="currentColor"
            opacity=".85"
          />
          <circle cx="31" cy="8" r="2.6" fill={accent} />
        </>
      )}
      {variant === 4 && (
        <>
          <rect x="6" y="22" width="7" height="12" fill="currentColor" opacity=".5" />
          <rect x="16.5" y="14" width="7" height="20" fill={steel} />
          <rect x="27" y="6" width="7" height="28" fill={accent} />
          <rect x="4" y="35.5" width="32" height="2.4" fill="currentColor" opacity=".85" />
        </>
      )}
    </svg>
  );
}

export function LogoMark({
  size = 36,
  variant = ACTIVE_LOGO,
  className = "",
}: {
  size?: number;
  variant?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex text-graphite-100 ${className}`}>
      <Mark variant={variant} size={size} />
    </span>
  );
}

export default function Logo({ variant = ACTIVE_LOGO }: { variant?: number }) {
  return (
    <Link to="" className="group flex items-center gap-3" aria-label="Persis Metal — home">
      <LogoMark size={38} variant={variant} className="transition-transform duration-300 group-hover:scale-105" />
      <span className="leading-none">
        <span className="block font-display text-[1.05rem] font-semibold uppercase tracking-[0.22em] text-graphite-50">
          Persis
        </span>
        <span className="mt-0.5 flex items-center gap-1.5 font-display text-[1.05rem] font-semibold uppercase tracking-[0.22em] text-molten-400">
          Metal
          <span className="inline-block h-1.5 w-1.5 bg-molten-500 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </span>
    </Link>
  );
}
