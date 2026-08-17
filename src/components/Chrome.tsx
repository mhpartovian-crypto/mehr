import { Link } from "react-router-dom";
import { useLang, waLink } from "../i18n";
import { CONTACT, TICKER_ITEMS } from "../data/site";
import { IconWA } from "./Icons";

export function Ticker() {
  const { t } = useLang();
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-graphite-700 bg-graphite-900 py-3">
      <div className="flex items-center">
        <span className="relative z-10 hidden shrink-0 items-center gap-2 bg-graphite-900 pe-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-molten-400 sm:flex">
          <span className="dot-live inline-block h-2 w-2 rounded-full bg-molten-500" />
          {t("ticker.label")}
        </span>
        <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap ps-8">
          {items.map((it, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-sm font-medium uppercase tracking-[0.18em] text-graphite-300"
            >
              {it}
              <svg viewBox="0 0 8 8" className="h-2 w-2 text-molten-600" aria-hidden="true">
                <rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" fill="currentColor" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WaFloat() {
  const { t } = useLang();
  return (
    <a
      href={waLink(
        CONTACT.mainWa,
        "Hello Persis Metal — I would like a price offer."
      )}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 z-40 flex items-center gap-3 ltr:right-5 rtl:left-5"
      aria-label="WhatsApp"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-md border border-graphite-700 bg-graphite-900 px-3 py-2 text-xs font-medium text-graphite-100 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        {t("hero.ctaWa")}
      </span>
      <span className="wa-float flex h-14 w-14 items-center justify-center rounded-full bg-wa text-graphite-950 shadow-2xl shadow-wa/30 transition-transform duration-300 group-hover:scale-110">
        <IconWA className="h-7 w-7" />
      </span>
    </a>
  );
}

export function CtaBand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-molten-500">
      <div className="hatch absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="blueprint-light absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-graphite-950 sm:text-4xl lg:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mt-3 text-base font-medium text-graphite-900/80">{t("cta.sub")}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink(
              CONTACT.mainWa,
              "Hello Persis Metal — I would like a price offer."
            )}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-3 bg-graphite-950 px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-50 transition-all duration-300 hover:bg-graphite-800"
          >
            <IconWA className="h-5 w-5 text-wa transition-transform duration-300 group-hover:scale-110" />
            {t("cta.btnWa")}
          </a>
          <Link
            to="/quote"
            className="flex items-center justify-center border-2 border-graphite-950 px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-300 hover:bg-graphite-950 hover:text-graphite-50"
          >
            {t("cta.btnQuote")}
          </Link>
        </div>
      </div>
    </section>
  );
}
