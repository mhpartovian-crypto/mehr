import type { IconKey } from "../data/products";

/* ---------- UI icons ---------- */

type P = { className?: string };

export const IconWA = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const IconArrow = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const IconPhone = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconMail = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const IconPin = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconDoc = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6M9 13h6M9 17h6" />
  </svg>
);

export const IconCheck = ({ className = "w-4 h-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m4 12.5 5.5 5.5L20 6.5" />
  </svg>
);

export const IconMenu = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M3 6h18M3 12h12M3 18h18" />
  </svg>
);

export const IconX = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const IconTruck = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M1 5h13v11H1zM14 8h4l4 4v4h-8z" />
    <circle cx="6" cy="18.5" r="2" />
    <circle cx="17.5" cy="18.5" r="2" />
  </svg>
);

export const IconTrain = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="5" y="3" width="14" height="14" rx="3" />
    <path d="M5 11h14M9 17l-2 4M15 17l2 4M9.5 14h.01M14.5 14h.01" />
  </svg>
);

export const IconShip = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M3 15l9 4 9-4-2-8H5l-2 8ZM12 7V3h4" />
  </svg>
);

/* ---------- product glyphs (technical line drawings) ---------- */

export function ProductGlyph({
  k,
  className = "w-12 h-12",
}: {
  k: IconKey;
  className?: string;
}) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {k === "ore" && (
        <g {...s}>
          <path d="M8 46 Q20 24 32 26 Q46 28 56 46 Z" />
          <path d="M6 52h52" />
          <circle cx="26" cy="38" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="35" cy="34" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="42" cy="40" r="1.4" fill="currentColor" stroke="none" />
        </g>
      )}
      {k === "pellet" && (
        <g {...s}>
          <circle cx="22" cy="24" r="7" />
          <circle cx="40" cy="22" r="7" />
          <circle cx="48" cy="36" r="7" />
          <circle cx="18" cy="40" r="7" />
          <circle cx="33" cy="42" r="7" />
        </g>
      )}
      {k === "dri" && (
        <g {...s}>
          <rect x="12" y="20" width="40" height="24" rx="2" />
          <circle cx="21" cy="28" r="2" />
          <circle cx="31" cy="35" r="2" />
          <circle cx="42" cy="27" r="2" />
          <circle cx="46" cy="37" r="2" />
          <circle cx="25" cy="39" r="1.4" />
        </g>
      )}
      {(k === "billet" || k === "alubillet") && (
        <g {...s}>
          <path d="M12 22 L26 14 H52 L38 22 Z" />
          <path d="M12 34 L26 26 H52 L38 34 Z" />
          <path d="M12 46 L26 38 H52 L38 46 Z" />
        </g>
      )}
      {(k === "slab" || k === "aluslab") && (
        <g {...s}>
          <path d="M8 30 L24 22 H56 L40 30 Z" />
          <path d="M8 30v10l32 8V30" />
          <path d="M40 48l16-8V30" />
        </g>
      )}
      {k === "pigiron" && (
        <g {...s}>
          <path d="M12 42 L20 26 H44 L52 42 Z" />
          <path d="M22 36 L26 29 H38 L42 36 Z" />
          <path d="M12 42v6h40v-6" />
        </g>
      )}
      {k === "rebar" && (
        <g {...s}>
          <path d="M10 26h44M10 38h44" />
          <path d="M16 22l-4 8M24 22l-4 8M32 22l-4 8M40 22l-4 8M48 22l-4 8M20 34l-4 8M28 34l-4 8M36 34l-4 8M44 34l-4 8M52 34l-4 8" strokeWidth="1.6" />
        </g>
      )}
      {k === "wirerod" || k === "cuwire" || k === "fesi" || k === "simn" ? (
        k === "fesi" || k === "simn" ? (
          <g {...s}>
            <path d="M10 42 L16 28 L28 24 L34 34 L26 44 Z" />
            <path d="M30 22 L42 18 L52 26 L46 38 L34 36 Z" />
            <path d="M36 40 L48 42 L44 52 L32 50 Z" />
            {k === "simn" && (
              <>
                <circle cx="22" cy="34" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="42" cy="28" r="1.3" fill="currentColor" stroke="none" />
              </>
            )}
          </g>
        ) : (
          <g {...s}>
            <ellipse cx="32" cy="34" rx="20" ry="12" />
            <ellipse cx="32" cy="34" rx="12" ry="6.5" />
            <path d="M52 34c0 4-3 6-6 7" />
            <path d="M32 27.5v-6" />
          </g>
        )
      ) : null}
      {k === "angle" && (
        <g {...s}>
          <path d="M18 12v38h28v-9H27V12Z" />
        </g>
      )}
      {k === "channel" && (
        <g {...s}>
          <path d="M18 12v38h28v-9H27V21h19v-9Z" />
        </g>
      )}
      {k === "beam" && (
        <g {...s}>
          <path d="M16 12h32v9H36v22h12v9H16v-9h12V21H16Z" />
        </g>
      )}
      {k === "coil" && (
        <g {...s}>
          <path d="M32 10a22 22 0 1 1-15.6 6.5" />
          <path d="M32 18a14 14 0 1 0 10 4.2" />
          <path d="M32 26a6 6 0 1 1-4.3 1.8" />
        </g>
      )}
      {k === "sheet" && (
        <g {...s}>
          <path d="M10 26h32l12-10H22Z" />
          <path d="M10 26v8h32v-8" />
          <path d="M42 34l12-10v-8" />
        </g>
      )}
      {k === "galvanized" && (
        <g {...s}>
          <path d="M30 14a18 18 0 1 1-12.8 5.3" />
          <path d="M30 21a11 11 0 1 0 7.8 3.2" />
          <path d="M50 12v8M46 16h8" strokeWidth="1.8" />
          <circle cx="50" cy="16" r="7" strokeWidth="1.8" />
        </g>
      )}
      {k === "cathode" && (
        <g {...s}>
          <rect x="20" y="16" width="24" height="34" rx="1" />
          <path d="M24 16V9h6M34 16V9h6" />
          <path d="M20 26h24M20 40h24" strokeWidth="1.6" />
        </g>
      )}
      {k === "cusection" && (
        <g {...s}>
          <path d="M12 40v10h12v-4h-6v-6Z" />
          <circle cx="44" cy="44" r="7" />
          <path d="M14 12h36v8H14Z" />
        </g>
      )}
      {k === "ingot" && (
        <g {...s}>
          <path d="M14 44 L21 26 H43 L50 44 Z" />
          <path d="M22 26 L26 16 H38 L42 26" />
          <path d="M14 44v6h36v-6" />
        </g>
      )}
      {k === "alusection" && (
        <g {...s}>
          <path d="M14 14h36v9H36v27h-8V23H14Z" />
        </g>
      )}
    </svg>
  );
}
