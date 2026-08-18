import { Link } from "react-router-dom";
import { useLang, waLink } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { CATEGORIES } from "../data/products";
import { CONTACT, IMAGES, MARKETS, TEAM } from "../data/site";
import { CountUp, Reveal, SectionHead } from "../components/Reveal";
import MediaStrip from "../components/MediaStrip";
import HeroSlider from "../components/HeroSlider";
import LazyImg from "../components/LazyImg";
import { CtaBand, Ticker } from "../components/Chrome";
import {
  IconArrow,
  IconCheck,
  IconClock,
  IconDoc,
  IconTruck,
  IconWA,
  ProductGlyph,
} from "../components/Icons";

/* ---------- hero ---------- */

function Hero() {
  const { t } = useLang();
  return (
    <section className="blueprint relative overflow-hidden bg-graphite-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_20%,rgba(255,125,33,0.09),transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:py-20">
        <div>
          <p className="anim-fade-up flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-molten-400">
            <span className="dot-live inline-block h-2 w-2 rounded-full bg-molten-500" />
            {t("hero.kicker")}
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] font-semibold uppercase leading-[1.02] tracking-tight text-graphite-50 sm:text-6xl lg:text-[4.1rem]">
            <span className="mask-line" style={{ "--d": "80ms" } as React.CSSProperties}>
              <span>{t("hero.t1")}</span>
            </span>
            <span className="mask-line text-molten-400" style={{ "--d": "230ms" } as React.CSSProperties}>
              <span>{t("hero.t2")}</span>
            </span>
          </h1>
          <p className="anim-fade-up mt-6 max-w-xl text-base leading-relaxed text-graphite-300 sm:text-lg" style={{ "--d": "380ms" } as React.CSSProperties}>
            {t("hero.sub")}
          </p>
          <div className="anim-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--d": "500ms" } as React.CSSProperties}>
            <a
              href={waLink(CONTACT.mainWa, "Hello Persis Metal — I would like a price offer.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-wa px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-wa-dark hover:text-graphite-50"
            >
              <IconWA className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              {t("hero.ctaWa")}
            </a>
            <Link
              to="/quote"
              className="group flex items-center justify-center gap-3 border border-graphite-500/60 px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-100 transition-all duration-300 hover:border-molten-500 hover:text-molten-400"
            >
              {t("hero.ctaQuote")}
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        {/* live product slider — images load progressively, never all at once */}
        <Reveal delay={200}>
          <HeroSlider />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- stats ---------- */

function Stats() {
  const { t } = useLang();
  const items = [
    { v: 300000, s: "+", label: t("stats.t1") },
    { v: 14, s: "", label: t("stats.t2") },
    { v: 4, p: "< ", s: "h", label: t("stats.t3") },
    { v: 100, s: "%", label: t("stats.t4") },
  ];
  return (
    <section className="relative border-b border-graphite-800 bg-graphite-900">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-graphite-500">{t("stats.kicker")}</p>
        <div className="mt-6 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 90} className="relative ps-5">
              <span className="absolute inset-y-1 start-0 w-[3px] bg-molten-500" aria-hidden="true" />
              <p className="font-display text-4xl font-semibold tracking-tight text-graphite-50 sm:text-5xl" dir="ltr">
                <CountUp value={it.v} prefix={it.p ?? ""} suffix={it.s} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-graphite-400">{it.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- catalogue boxes (light) ---------- */

function Catalogue() {
  const { t, L } = useLang();
  return (
    <section className="blueprint-light relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead tone="light" kicker={t("cat.kicker")} title={t("cat.title")} sub={t("cat.sub")} />
          <Reveal delay={150}>
            <Link
              to="/products"
              className="group flex items-center gap-3 border border-ink-700/30 px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-700 transition-all duration-300 hover:border-molten-600 hover:bg-molten-600 hover:text-graphite-50"
            >
              {t("pr.details")}
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={(i % 4) * 80}>
              <Link
                to={`/products?cat=${c.id}`}
                className="brackets group flex h-full gap-4 border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink-900/10 sm:flex-col sm:p-6"
              >
                <div className="flex shrink-0 items-start justify-between gap-3 sm:w-full">
                  <span className="flex h-14 w-14 items-center justify-center bg-graphite-950 text-molten-400 transition-colors duration-300 group-hover:bg-molten-500 group-hover:text-graphite-950 sm:h-16 sm:w-16">
                    <ProductGlyph k={c.icon} className="h-10 w-10 sm:h-11 sm:w-11" />
                  </span>
                  <span className="hidden border border-line bg-paper px-2 py-1 font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-500 sm:inline-block">
                    {c.products.length} {t("cat.products")}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-semibold uppercase leading-snug tracking-wide text-ink-900 transition-colors duration-300 group-hover:text-molten-600 sm:mt-5 sm:text-lg">
                    {L(c.name)}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-relaxed text-ink-500 sm:mt-2 sm:line-clamp-none">
                    {L(c.blurb)}
                  </p>
                  <div className="mt-3 hidden border-t border-dashed border-line pt-3.5 sm:mt-4 sm:block">
                    <p className="truncate text-[0.72rem] font-medium uppercase tracking-[0.1em] text-steel-600">
                      {c.products.slice(0, 2).map((p) => L(p.name)).join(" · ")} …
                    </p>
                  </div>
                  <span className="mt-3 flex items-center gap-2 font-display text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-molten-600 sm:mt-4 sm:text-[0.7rem]">
                    {t("cat.open")}
                    <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* real-photo tile inside the grid */}
            <Reveal delay={200}>
              <figure className="brackets group relative h-44 overflow-hidden border border-line sm:h-full sm:min-h-[260px]">
                <LazyImg
                  src={IMAGES.nonferrous}
                  alt={t("media.s5")}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/25 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-50">{t("media.s5")}</p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-molten-400">Cu 99.99% · Al 99.7%</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- advantage, compact ---------- */

function Advantage() {
  const { t } = useLang();
  const items = [
    { icon: <IconClock className="h-5 w-5" />, text: t("adv.c1") },
    { icon: <IconTruck className="h-5 w-5" />, text: t("adv.c2") },
    { icon: <IconDoc className="h-5 w-5" />, text: t("adv.c3") },
    { icon: <IconCheck className="h-5 w-5" />, text: t("adv.c4") },
  ];
  return (
    <section className="border-y border-molten-700/40 bg-graphite-900">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <p className="mb-6 text-center font-display text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-molten-400">
          {t("adv.kicker")}
        </p>
        <ul className="grid gap-x-6 gap-y-5 text-center sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} as="li" delay={i * 80} className="flex items-center justify-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-molten-500/50 bg-molten-500/10 text-molten-400">
                {it.icon}
              </span>
              <span className="text-start text-sm font-medium leading-snug text-graphite-100">{it.text}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- media reel ---------- */

function Media() {
  const { t } = useLang();
  return (
    <section className="bg-graphite-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead kicker={t("media.kicker")} title={t("media.title")} sub={t("media.sub")} />
        <div className="mt-10">
          <MediaStrip
            items={[
              { kind: "img", src: IMAGES.warehouse, captionKey: "media.s1" },
              { kind: "slot", captionKey: "media.s2" },
              { kind: "img", src: IMAGES.loading, captionKey: "media.s3" },
              { kind: "slot", captionKey: "media.s4" },
              { kind: "img", src: IMAGES.nonferrous, captionKey: "media.s5" },
              { kind: "slot", captionKey: "media.s6" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- markets ---------- */

function Markets() {
  const { t, L } = useLang();
  return (
    <section className="blueprint-light border-y border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead tone="light" kicker={t("mkt.kicker")} title={t("mkt.title")} sub={t("mkt.sub")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {MARKETS.map((m, i) => (
            <Reveal key={m.code} delay={i * 80}>
              <article className="group flex h-full flex-col border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-steel-500 hover:shadow-xl hover:shadow-ink-900/10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold tracking-wide text-graphite-950">{m.code}</span>
                  <span className="bg-graphite-950 px-2 py-1 font-display text-[0.6rem] font-bold uppercase tracking-[0.16em] text-molten-400">
                    {m.transit} {t("mkt.days")}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold uppercase tracking-wide text-ink-900">
                  {t(m.nameKey)}
                </h3>
                <p className="mt-2 flex-1 text-[0.78rem] leading-relaxed text-ink-500">{t(m.demandKey)}</p>
                <dl className="mt-4 space-y-1.5 border-t border-dashed border-line pt-3.5 text-[0.72rem]">
                  <div className="flex justify-between gap-2">
                    <dt className="uppercase tracking-[0.12em] text-ink-500/70">{t("mkt.route")}</dt>
                    <dd className="text-end font-medium text-steel-600">{L(m.gate)}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="uppercase tracking-[0.12em] text-ink-500/70">Incoterm</dt>
                    <dd className="font-medium text-steel-600">{L(m.mode)}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- team ---------- */

function Team() {
  const { t, L } = useLang();
  return (
    <section className="bg-graphite-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead kicker={t("team.kicker")} title={t("team.title")} sub={t("team.sub")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.id} delay={i * 100}>
              <article className="brackets group flex h-full flex-col overflow-hidden border border-graphite-800 bg-graphite-900 transition-all duration-300 hover:-translate-y-1.5">
                <div className="relative overflow-hidden">
                  <LazyImg
                    src={m.img}
                    alt={m.name}
                    className="aspect-[4/5]"
                    imgClassName="grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-transparent to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-4 start-5 end-5">
                    <p className="font-display text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-molten-400">{m.langs}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide text-graphite-50">{m.name}</h3>
                    <p className="mt-1 text-sm text-graphite-300">{t(m.roleKey)}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 p-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-graphite-500">{L({ en: "Markets", ru: "Рынки", ar: "الأسواق" })}</p>
                  <p className="text-sm text-graphite-300">{t(m.marketsKey)}</p>
                  <a
                    href={waLink(m.wa, `Hello ${m.name} — I found Persis Metal online and would like to talk.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto flex items-center justify-center gap-2.5 bg-wa px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-graphite-950 transition-all duration-300 hover:bg-wa-dark hover:text-graphite-50"
                  >
                    <IconWA className="h-4 w-4" />
                    {t("team.wa")}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- process ---------- */

function Process() {
  const { t } = useLang();
  const steps = [
    t("proc.s1t"),
    t("proc.s2t"),
    t("proc.s3t"),
    t("proc.s4t"),
    t("proc.s5t"),
  ];
  return (
    <section className="relative overflow-hidden bg-molten-500 py-16 lg:py-20">
      <div className="hatch absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead tone="molten" align="center" kicker={t("proc.kicker")} title={t("proc.title")} />

        <div className="relative mt-12">
          <span
            className="absolute inset-x-10 top-6 hidden h-0.5 bg-graphite-950/20 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 90} className="group flex flex-col items-center text-center">
                <span
                  className="relative z-10 flex h-12 w-12 items-center justify-center bg-graphite-950 font-display text-lg font-bold text-molten-400 shadow-lg shadow-graphite-950/25 transition-transform duration-300 group-hover:scale-110"
                  dir="ltr"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 max-w-[12rem] font-display text-[0.95rem] font-semibold uppercase leading-snug tracking-wide text-graphite-950 transition-opacity duration-300 group-hover:opacity-75 lg:text-base">
                  {s}
                </h3>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLang();
  usePageMeta(t("seo.home"), t("hero.sub"));

  return (
    <>
      <Hero />
      <Stats />
      <Ticker />
      <Catalogue />
      <Advantage />
      <Media />
      <Markets />
      <Team />
      <Process />
      <CtaBand />
    </>
  );
}
