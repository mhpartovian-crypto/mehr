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

export const IconPlay = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8 5.5v13l11-6.5z" />
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

/* ---------- product glyphs — engineered line drawings, viewBox 64 ---------- */

const ST = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const FILL_ACC = { fill: "currentColor", opacity: 0.28, stroke: "none" };
const DOT = { fill: "currentColor", stroke: "none" };

export function ProductGlyph({
  k,
  className = "w-12 h-12",
}: {
  k: IconKey;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {k === "ore" && (
        <g>
          <path {...ST} d="M8 46 Q19 22 31 25 Q45 28 56 46" />
          <path {...ST} d="M6 52h52" />
          <path {...FILL_ACC} d="M8 46 Q19 22 31 25 Q45 28 56 46 Z" />
          <circle {...DOT} cx="25" cy="37" r="1.6" />
          <circle {...DOT} cx="34" cy="33" r="1.6" />
          <circle {...DOT} cx="42" cy="39" r="1.6" />
          <path {...ST} strokeWidth="1.6" d="M29 37.5l3.5-3.5M37.5 40.5l3.5-3.5" opacity=".55" />
        </g>
      )}
      {k === "pellet" && (
        <g>
          <circle {...ST} cx="21" cy="23" r="7.5" />
          <circle {...ST} cx="41" cy="21" r="7.5" />
          <circle {...ST} cx="49" cy="37" r="7.5" />
          <circle {...ST} cx="16" cy="41" r="7.5" />
          <circle {...ST} cx="32.5" cy="41.5" r="7.5" />
          <circle {...FILL_ACC} cx="32.5" cy="41.5" r="7.5" />
          <circle {...DOT} cx="21" cy="23" r="1.4" />
        </g>
      )}
      {k === "dri" && (
        <g>
          <rect {...ST} x="11" y="21" width="42" height="22" rx="2.5" />
          <path {...FILL_ACC} d="M13.5 23.5h37v17h-37z" />
          <circle {...ST} strokeWidth="1.7" cx="20" cy="28" r="2.1" />
          <circle {...DOT} cx="30" cy="35" r="2" />
          <circle {...ST} strokeWidth="1.7" cx="42" cy="27.5" r="2.1" />
          <circle {...DOT} cx="47" cy="36.5" r="1.6" />
          <circle {...ST} strokeWidth="1.7" cx="24.5" cy="38.5" r="1.5" />
          <path {...ST} strokeWidth="1.7" d="M14 49h36" opacity=".5" />
        </g>
      )}
      {(k === "billet" || k === "alubillet") &&
        (k === "billet" ? (
          <g>
            <path {...ST} d="M10 24 22 16h30l-12 8Z" />
            <path {...ST} d="M10 24v10l30 0V24M40 34l12-8V16" />
            <path {...ST} d="M10 42 22 34h30l-12 8Z" />
            <path {...FILL_ACC} d="M10 24 22 16h30l-12 8Z" />
            <path {...ST} d="M10 42v9l30 0v-9M40 51l12-8v-9" />
          </g>
        ) : (
          <g>
            <ellipse {...ST} cx="32" cy="17" rx="17" ry="6.5" />
            <ellipse {...FILL_ACC} cx="32" cy="17" rx="17" ry="6.5" />
            <path {...ST} d="M15 17v29c0 3.6 7.6 6.5 17 6.5s17-2.9 17-6.5V17" />
            <path {...ST} strokeWidth="1.7" d="M15 31c0 3.6 7.6 6.5 17 6.5s17-2.9 17-6.5" opacity=".55" />
            <circle {...DOT} cx="32" cy="17" r="1.8" />
          </g>
        ))}
      {(k === "slab" || k === "aluslab") && (
        <g>
          <path {...ST} d="M7 30 21 21h36l-14 9Z" />
          <path {...FILL_ACC} d="M7 30 21 21h36l-14 9Z" />
          <path {...ST} d="M7 30v11l36 10V40" />
          <path {...ST} d="M43 51l14-10V30" />
          {k === "aluslab" && <path {...ST} strokeWidth="1.7" d="M14 37l22 6" opacity=".55" />}
        </g>
      )}
      {k === "pigiron" && (
        <g>
          <path {...ST} d="M12 34l7-14h26l7 14Z" />
          <path {...FILL_ACC} d="M14.5 32l5.5-10.5h24L49.5 32Z" />
          <path {...ST} d="M12 34v7h40v-7" />
          <path {...ST} d="M19 48l3-5h20l3 5Z" strokeWidth="1.8" />
          <path {...ST} strokeWidth="1.7" d="M22 27h20" opacity=".5" />
        </g>
      )}
      {k === "rebar" && (
        <g>
          <rect {...ST} x="8" y="20" width="48" height="7" rx="3.5" />
          <rect {...ST} x="8" y="36" width="48" height="7" rx="3.5" />
          <rect {...FILL_ACC} x="8" y="36" width="48" height="7" rx="3.5" />
          <path {...ST} strokeWidth="1.7" d="M15 20.5 12 26.5M23 20.5 20 26.5M31 20.5 28 26.5M39 20.5 36 26.5M47 20.5 44 26.5M19 36.5 16 42.5M27 36.5 24 42.5M35 36.5 32 42.5M43 36.5 40 42.5M51 36.5 48 42.5" />
        </g>
      )}
      {k === "wirerod" || k === "cuwire" ? (
        k === "wirerod" ? (
          <g>
            <ellipse {...ST} cx="31" cy="33" rx="21" ry="13" />
            <ellipse {...ST} cx="31" cy="33" rx="13" ry="7.5" />
            <ellipse {...FILL_ACC} cx="31" cy="33" rx="13" ry="7.5" />
            <path {...ST} d="M52 33c0 5-4 8-8 9.5" />
            <path {...ST} d="M31 25.5v-8" strokeWidth="1.8" />
          </g>
        ) : (
          <g>
            <ellipse {...ST} cx="31" cy="33" rx="21" ry="13" />
            <ellipse {...ST} cx="31" cy="33" rx="13" ry="7.5" />
            <ellipse {...FILL_ACC} cx="31" cy="33" rx="13" ry="7.5" />
            <path {...ST} d="M52 33c0 5-4 8-8 9.5M52 33c0-2.5-.9-4.8-2.4-6.6" />
            <circle {...DOT} cx="31" cy="33" r="2" />
          </g>
        )
      ) : null}
      {k === "angle" && (
        <g>
          <path {...ST} d="M17 10v42h30v-11H28V10Z" />
          <path {...FILL_ACC} d="M17 10v42h30v-11H28V10Z" />
          <path {...ST} strokeWidth="1.7" d="M22.5 15v31h18" opacity=".55" />
        </g>
      )}
      {k === "channel" && (
        <g>
          <path {...ST} d="M17 10v42h30V41H28V21h19V10Z" />
          <path {...FILL_ACC} d="M17 10v42h30V41H28V21h19V10Z" />
          <path {...ST} strokeWidth="1.7" d="M22.5 15v32h19" opacity=".55" />
        </g>
      )}
      {k === "beam" && (
        <g>
          <path {...ST} d="M14 10h36v11H38v22h12v11H14V43h12V21H14Z" />
          <path {...FILL_ACC} d="M14 10h36v11H38v22h12v11H14V43h12V21H14Z" />
          <path {...ST} strokeWidth="1.7" d="M20 15.5h24" opacity=".55" />
        </g>
      )}
      {k === "coil" && (
        <g>
          <path {...ST} d="M32 9a23 23 0 1 1-16.3 6.8" />
          <path {...ST} d="M32 17.5a14.5 14.5 0 1 0 10.3 4.3" />
          <path {...ST} d="M32 26a6 6 0 1 1-4.3 1.8" />
          <circle {...FILL_ACC} cx="32" cy="32" r="6" />
          <circle {...DOT} cx="32" cy="32" r="1.6" />
        </g>
      )}
      {k === "sheet" && (
        <g>
          <path {...ST} d="M9 27h34l12-11H21Z" />
          <path {...FILL_ACC} d="M9 27h34l12-11H21Z" />
          <path {...ST} d="M9 27v9h34v-9" />
          <path {...ST} d="M43 36l12-11v-9" />
          <path {...ST} strokeWidth="1.7" d="M9 42h34l12-11" opacity=".55" />
        </g>
      )}
      {k === "galvanized" && (
        <g>
          <path {...ST} d="M29 13a19 19 0 1 1-13.5 5.6" />
          <path {...ST} d="M29 21a11.5 11.5 0 1 0 8.2 3.4" />
          <circle {...FILL_ACC} cx="29" cy="32" r="5.5" />
          <circle {...ST} strokeWidth="1.9" cx="48" cy="16" r="8" />
          <path {...ST} strokeWidth="1.9" d="M48 11.5v9M43.5 16h9" />
          <circle {...DOT} cx="29" cy="32" r="1.5" />
        </g>
      )}
      {k === "cathode" && (
        <g>
          <rect {...ST} x="19" y="17" width="26" height="34" rx="1.5" />
          <path {...ST} d="M24 17V9h7M33 17V9h7" />
          <path {...FILL_ACC} d="M19 30h26v9H19z" />
          <path {...ST} strokeWidth="1.7" d="M19 26.5h26M19 42.5h26" opacity=".55" />
          <circle {...DOT} cx="32" cy="34.5" r="1.7" />
        </g>
      )}
      {k === "cusection" && (
        <g>
          <rect {...ST} x="10" y="10" width="26" height="9" rx="1" />
          <rect {...FILL_ACC} x="10" y="10" width="26" height="9" rx="1" />
          <circle {...ST} cx="44" cy="42" r="8" />
          <circle {...ST} strokeWidth="1.7" cx="44" cy="42" r="3.5" opacity=".6" />
          <path {...ST} d="M12 46v8h13v-5h-6v-3Z" />
        </g>
      )}
      {k === "ingot" && (
        <g>
          <path {...ST} d="M12 45l8-21h24l8 21Z" />
          <path {...FILL_ACC} d="M14.5 43l6.8-17.5h21.4L49.5 43Z" />
          <path {...ST} d="M12 45v6h40v-6" />
          <path {...ST} strokeWidth="1.8" d="M24 24l-2.5 21M40 24l2.5 21" opacity=".5" />
        </g>
      )}
      {k === "alusection" && (
        <g>
          <rect {...ST} x="14" y="14" width="36" height="36" rx="2" />
          <rect {...ST} x="25" y="25" width="14" height="14" rx="1" />
          <rect {...FILL_ACC} x="25" y="25" width="14" height="14" rx="1" />
          <path {...ST} strokeWidth="1.7" d="M14 14l11 11M50 14 39 25M50 50 39 39M14 50l11-11" opacity=".5" />
        </g>
      )}
      {k === "fesi" && (
        <g>
          <path {...ST} d="M10 41 17 26l13-6 8 11-9 12Z" />
          <path {...ST} d="M29 20l14-4 11 9-7 13-13-2" />
          <path {...ST} d="M35 44l12 2-5 9-13-3Z" />
          <path {...FILL_ACC} d="M29 20l14-4 11 9-7 13-13-2Z" />
          <path {...ST} strokeWidth="1.6" d="M30 21l6 14M17 27l13 8" opacity=".5" />
        </g>
      )}
      {k === "simn" && (
        <g>
          <path {...ST} d="M10 42 18 26l13-6 7 12-10 12Z" />
          <path {...ST} d="M30 21l14-4 10 9-6 13-12-2" />
          <path {...ST} d="M36 45l12 1-4 9-13-2Z" />
          <path {...FILL_ACC} d="M10 42 18 26l13-6 7 12-10 12Z" />
          <circle {...DOT} cx="24" cy="33" r="1.7" />
          <circle {...DOT} cx="42" cy="28" r="1.7" />
        </g>
      )}
    </svg>
  );
}
