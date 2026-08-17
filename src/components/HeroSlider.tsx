import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";
import { findProduct } from "../data/products";
import { IMAGES } from "../data/site";
import { IconArrow, IconClock } from "./Icons";
import { LogoMark } from "./Logo";

const INTERVAL = 6000; // ms per slide — long enough to read, never boring

type Slide =
  | { kind: "product"; slug: string; img: string }
  | { kind: "range"; img: string };

export default function HeroSlider() {
  const { t, L } = useLang();
  const [active, setActive] = useState(0);
  const [armed, setArmed] = useState(false); // block scrolled into view
  const [loadedUpTo, setLoadedUpTo] = useState(-1); // progressive image loading
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const slides = useMemo<Slide[]>(
    () => [
      { kind: "product", slug: "billet-bloom", img: IMAGES.hero },
      { kind: "product", slug: "iron-ore-pellet", img: IMAGES.pellet },
      { kind: "product", slug: "hot-rolled-coil", img: IMAGES.coil },
      { kind: "product", slug: "copper-cathode", img: IMAGES.nonferrous },
      { kind: "range", img: IMAGES.warehouse },
    ],
    []
  );

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // arm the slider only once the block enters the viewport
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setArmed(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "120px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // progressive loading: current slide + only the next one
  useEffect(() => {
    if (armed) setLoadedUpTo((v) => Math.max(v, 0));
  }, [armed]);
  useEffect(() => {
    setLoadedUpTo((v) => Math.max(v, Math.min(active + 1, slides.length - 1)));
  }, [active, slides.length]);

  useEffect(() => {
    if (!armed || reduced || paused) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % slides.length),
      INTERVAL
    );
    return () => window.clearInterval(id);
  }, [armed, reduced, paused, slides.length]);

  const go = (i: number) => setActive((i + slides.length) % slides.length);

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <div className="absolute -inset-3 border border-steel-500/30 lg:-inset-4" aria-hidden="true" />
        <div className="relative aspect-[4/3] overflow-hidden bg-graphite-800">
          {slides.map((s, i) => {
            const isActive = i === active;
            const prod = s.kind === "product" ? findProduct(s.slug)?.product : undefined;
            return (
              <div
                key={i}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                {i <= loadedUpTo ? (
                  <img
                    src={s.img}
                    alt={prod ? L(prod.name) : t("hero.stockT")}
                    className={`h-full w-full object-cover ${
                      isActive && !reduced ? "img-breathe" : ""
                    }`}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <LogoMark size={44} className="animate-pulse text-graphite-700" />
                  </div>
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-graphite-950/10 to-transparent"
                  aria-hidden="true"
                />

                {isActive && (
                  <div key={`cap-${i}`} className="absolute inset-x-0 bottom-0 p-5">
                    {prod ? (
                      <>
                        <span className="anim-fade-up inline-block bg-molten-500 px-2.5 py-1 font-display text-[0.62rem] font-bold uppercase tracking-[0.16em] text-graphite-950">
                          {prod.grade}
                        </span>
                        <p
                          className="anim-fade-up mt-2 font-display text-xl font-semibold uppercase tracking-wide text-graphite-50"
                          style={{ "--d": "120ms" } as React.CSSProperties}
                        >
                          {L(prod.name)}
                        </p>
                        <Link
                          to={`/products/${prod.slug}`}
                          className="anim-fade-up group mt-2.5 inline-flex items-center gap-2 border-b border-molten-500/60 pb-0.5 font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-molten-400 transition-colors hover:border-molten-300 hover:text-molten-300"
                          style={{ "--d": "240ms" } as React.CSSProperties}
                        >
                          {t("hero.view")}
                          <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                        </Link>
                      </>
                    ) : (
                      <>
                        <p className="anim-fade-up font-display text-xl font-semibold uppercase tracking-wide text-graphite-50">
                          {t("hero.stockT")}
                        </p>
                        <p
                          className="anim-fade-up mt-1.5 max-w-sm text-xs leading-relaxed text-graphite-300"
                          style={{ "--d": "120ms" } as React.CSSProperties}
                        >
                          {t("hero.stockS")}
                        </p>
                        <Link
                          to="/products"
                          className="anim-fade-up group mt-2.5 inline-flex items-center gap-2 border-b border-molten-500/60 pb-0.5 font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-molten-400 transition-colors hover:border-molten-300 hover:text-molten-300"
                          style={{ "--d": "240ms" } as React.CSSProperties}
                        >
                          {t("hero.browse")}
                          <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <span
            className="absolute start-4 top-4 bg-graphite-950/70 px-2 py-1 font-display text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-graphite-200 backdrop-blur-sm"
            dir="ltr"
          >
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>

          <div className="absolute end-4 top-4 flex items-center gap-2">
            <button
              onClick={() => go(active - 1)}
              aria-label={t("hero.prev")}
              className="flex h-9 w-9 items-center justify-center border border-graphite-500/60 bg-graphite-950/60 text-graphite-100 backdrop-blur-sm transition-colors duration-200 hover:border-molten-500 hover:text-molten-400"
            >
              <IconArrow className="h-4 w-4 -scale-x-100" />
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label={t("hero.next")}
              className="flex h-9 w-9 items-center justify-center border border-graphite-500/60 bg-graphite-950/60 text-graphite-100 backdrop-blur-sm transition-colors duration-200 hover:border-molten-500 hover:text-molten-400"
            >
              <IconArrow className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* progress bars */}
      <div className="mt-4 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`${i + 1} / ${slides.length}`}
            className="group h-4 flex-1"
          >
            <span className="block h-[3px] w-full overflow-hidden bg-graphite-700 transition-colors duration-200 group-hover:bg-graphite-600">
              {i === active && armed && !reduced && (
                <span
                  key={`bar-${active}`}
                  className="grow-x block h-full bg-molten-500"
                  style={{ "--dur": `${INTERVAL}ms` } as React.CSSProperties}
                />
              )}
              {i === active && (reduced || !armed) && (
                <span className="block h-full w-full bg-molten-500" />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* reply-time bar */}
      <div className="mt-4 flex items-center gap-4 border border-graphite-700 bg-graphite-900/80 px-5 py-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-molten-500 text-graphite-950">
          <IconClock className="h-5 w-5" />
        </span>
        <p className="text-sm text-graphite-300">
          {t("hero.reply")} —{" "}
          <strong className="font-display text-lg font-semibold text-molten-400" dir="ltr">
            &lt; 4h
          </strong>
          <span className="mx-2 text-graphite-600">·</span>
          <span className="font-display text-xs uppercase tracking-[0.16em] text-graphite-200">
            {t("hero.chip3")}
          </span>
        </p>
      </div>
    </div>
  );
}
