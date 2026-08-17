import { Link } from "react-router-dom";
import { useLang, waLink } from "../i18n";
import { CATEGORIES } from "../data/products";
import { CONTACT, IMAGES, MANIFEST, MARKETS, TEAM } from "../data/site";
import { CountUp, Reveal, SectionHead } from "../components/Reveal";
import { ProductGlyph, IconWA, IconCheck, IconArrow, IconTruck, IconTrain, IconShip, IconMail } from "../components/Icons";
import { CtaBand, Ticker } from "../components/Chrome";

/* ---------- hero ---------- */

function Hero() {
  const { t, L } = useLang();
  const statusChip = {
    loading: "text-molten-400 border-molten-500/60 bg-molten-500/10",
    transit: "text-steel-300 border-steel-500/60 bg-steel-500/10",
    booked: "text-graphite-300 border-graphite-500/60 bg-graphite-700/30",
  } as const;
  const statusText = {
    loading: t("st.loading"),
    transit: t("st.transit"),
    booked: t("st.booked"),
  };

  return (
    <section className="relative overflow-hidden bg-graphite-950">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Molten steel inside an Iranian steel mill"
          className="img-breathe h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/70 to-graphite-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-transparent to-graphite-950/60 rtl:bg-gradient-to-l" />
        <div className="blueprint absolute inset-0 opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-24 lg:pt-20">
        <div>
          <p className="anim-fade-up flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-molten-400">
            <span className="inline-block h-px w-10 bg-molten-500" />
            {t("hero.kicker")}
          </p>

          <h1 className="mt-6 font-display font-semibold uppercase leading-[1.02] tracking-tight text-graphite-50">
            <span className="mask-line text-4xl sm:text-6xl lg:text-[4.4rem]">
              <span style={{ "--d": "80ms" } as React.CSSProperties}>{t("hero.t1")}</span>
            </span>
            <span className="mask-line text-4xl text-molten-500 sm:text-6xl lg:text-[4.4rem]">
              <span style={{ "--d": "220ms" } as React.CSSProperties}>{t("hero.t2")}</span>
            </span>
            <span className="mask-line text-4xl sm:text-6xl lg:text-[4.4rem]">
              <span style={{ "--d": "360ms" } as React.CSSProperties}>{t("hero.t3")}</span>
            </span>
          </h1>

          <p className="anim-fade-up mt-6 max-w-xl text-base leading-relaxed text-graphite-200 sm:text-lg" style={{ "--d": "500ms" } as React.CSSProperties}>
            {t("hero.sub")}
          </p>

          <div className="anim-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--d": "620ms" } as React.CSSProperties}>
            <a
              href={waLink(CONTACT.mainWa, "Hello Persis Metal — I would like a price offer.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-wa px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950 shadow-lg shadow-wa/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-wa/40"
            >
              <IconWA className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              {t("hero.ctaWa")}
            </a>
            <Link
              to="/quote"
              className="group flex items-center justify-center gap-3 border border-graphite-400/60 bg-graphite-900/40 px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-50 backdrop-blur-sm transition-all duration-300 hover:border-molten-500 hover:text-molten-400"
            >
              {t("hero.ctaQuote")}
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        {/* live manifest board */}
        <Reveal delay={250}>
          <div className="brackets border border-graphite-700 bg-graphite-900/85 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-graphite-700 px-5 py-4">
              <div>
                <p className="flex items-center gap-2.5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-graphite-50">
                  <span className="dot-live inline-block h-2.5 w-2.5 rounded-full bg-molten-500" />
                  {t("hero.board.title")}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-graphite-500">
                  {t("hero.board.sub")}
                </p>
              </div>
              <span className="font-display text-2xl font-semibold text-graphite-700">PM</span>
            </div>

            <div className="hidden grid-cols-[1.2fr_1.2fr_0.9fr] gap-2 px-5 pt-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-graphite-500 sm:grid">
              <span>{t("hero.col.product")}</span>
              <span>{t("hero.col.route")}</span>
              <span>{t("hero.col.terms")}</span>
            </div>

            <ul>
              {MANIFEST.map((m, i) => (
                <li
                  key={i}
                  className="anim-fade-up grid grid-cols-1 gap-1 border-b border-graphite-800 px-5 py-3.5 transition-colors duration-200 last:border-b-0 hover:bg-graphite-850 sm:grid-cols-[1.2fr_1.2fr_0.9fr] sm:items-center sm:gap-2"
                  style={{ "--d": `${450 + i * 130}ms` } as React.CSSProperties}
                >
                  <span className="text-sm font-semibold text-graphite-100">
                    {m.product}
                    <span className="ms-2 text-xs font-normal text-graphite-500">{m.qty}</span>
                  </span>
                  <span className="text-xs text-graphite-400">{L(m.route)}</span>
                  <span className="flex items-center justify-between gap-2 sm:justify-start">
                    <span className="text-xs text-graphite-400">{m.terms}</span>
                    <span className={`border px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] ${statusChip[m.status]}`}>
                      {statusText[m.status]}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="px-5 py-3 text-[0.65rem] text-graphite-600">{t("hero.board.note")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- stats ---------- */

function Stats() {
  const { t } = useLang();
  const items = [
    { v: <CountUp value={300000} suffix="+" />, label: t("stats.tons") },
    { v: <CountUp value={14} />, label: t("stats.markets") },
    { v: <span>{"<"}<CountUp value={4} /> h</span>, label: t("stats.response") },
    { v: <CountUp value={100} suffix="%" />, label: t("stats.mtc") },
  ];
  return (
    <section className="border-b border-graphite-800 bg-graphite-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-graphite-800 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal
            key={i}
            delay={i * 90}
            className="bg-graphite-900 px-6 py-10 text-center transition-colors duration-300 hover:bg-graphite-850 lg:py-12"
          >
            <p className="font-display text-4xl font-semibold text-molten-500 lg:text-5xl">{it.v}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-graphite-400">{it.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- categories ---------- */

function Categories() {
  const { t, L } = useLang();
  return (
    <section className="bg-graphite-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead kicker={t("cat.kicker")} title={t("cat.title")} sub={t("cat.sub")} />
          <Reveal delay={150}>
            <Link
              to="/products"
              className="group mb-2 flex items-center gap-3 border border-graphite-600 px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-graphite-100 transition-all duration-300 hover:border-molten-500 hover:bg-molten-500 hover:text-graphite-950"
            >
              {t("cat.viewAll")}
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-graphite-800">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 60}>
              <Link
                to={`/products?cat=${c.id}`}
                className="group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 border-b border-graphite-800 px-2 py-6 transition-all duration-300 hover:bg-graphite-900 sm:grid-cols-[3.5rem_3.5rem_1.4fr_1fr_auto_auto] sm:gap-x-6 sm:px-4"
              >
                <span className="font-display text-sm text-graphite-600 transition-colors group-hover:text-molten-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hidden text-graphite-500 transition-colors duration-300 group-hover:text-molten-400 sm:block">
                  <ProductGlyph k={c.icon} className="h-12 w-12" />
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold uppercase tracking-wide text-graphite-100 transition-colors group-hover:text-molten-400 sm:text-xl">
                    {L(c.name)}
                  </span>
                </span>
                <span className="col-start-2 text-sm text-graphite-400 sm:col-start-auto">{L(c.blurb)}</span>
                <span className="col-start-2 mt-1 font-display text-xs uppercase tracking-[0.18em] text-graphite-500 sm:col-start-auto sm:mt-0">
                  {c.products.length} {t("cat.items")}
                </span>
                <IconArrow className="col-start-2 mt-1 h-5 w-5 text-graphite-600 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-molten-500 sm:col-start-auto sm:mt-0 rtl:-scale-x-100 rtl:group-hover:-translate-x-1.5" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- advantage comparison ---------- */

function Advantages() {
  const { t } = useLang();
  const rows = [1, 2, 3, 4, 5, 6];
  return (
    <section className="blueprint relative border-y border-graphite-800 bg-graphite-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead kicker={t("adv.kicker")} title={t("adv.title")} sub={t("adv.sub")} />

        <div className="mt-12 hidden grid-cols-[1fr_1fr_1.25fr] gap-px bg-graphite-700 lg:grid">
          <div className="bg-graphite-900 p-4" />
          <div className="bg-graphite-900 p-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-graphite-400">
            {t("adv.colA")}
          </div>
          <div className="bg-molten-500 p-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-graphite-950">
            {t("adv.colB")}
          </div>
          {rows.map((r) => (
            <div key={r} className="contents">
              <div className="bg-graphite-900 p-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-graphite-200">
                {t(`adv.r${r}l`)}
              </div>
              <div className="bg-graphite-900 p-5 text-sm leading-relaxed text-graphite-400">
                {t(`adv.r${r}a`)}
              </div>
              <div className="group/cell bg-graphite-850 p-5 text-sm font-medium leading-relaxed text-graphite-50 transition-colors duration-300 hover:bg-graphite-800">
                <span className="flex items-start gap-3">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-molten-500" />
                  {t(`adv.r${r}b`)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* mobile cards */}
        <div className="mt-10 space-y-4 lg:hidden">
          {rows.map((r, i) => (
            <Reveal key={r} delay={i * 70}>
              <div className="brackets border border-graphite-700 bg-graphite-850 p-5">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-molten-400">
                  {t(`adv.r${r}l`)}
                </p>
                <p className="mt-3 text-sm text-graphite-400">
                  <span className="font-semibold uppercase tracking-wider text-graphite-500">{t("adv.colA")}: </span>
                  {t(`adv.r${r}a`)}
                </p>
                <p className="mt-2 flex items-start gap-2.5 text-sm font-medium text-graphite-50">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-molten-500" />
                  {t(`adv.r${r}b`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- markets ---------- */

function Markets() {
  const { t, L } = useLang();
  const icons = [IconTruck, IconTruck, IconTrain, IconShip];
  return (
    <section className="relative overflow-hidden bg-graphite-950 py-20 lg:py-28">
      <div className="absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center lg:flex" aria-hidden="true">
        <svg viewBox="0 0 1200 200" className="w-full max-w-6xl opacity-30">
          <path
            d="M60 160 C 250 40, 450 40, 600 110 S 950 170, 1140 60"
            fill="none"
            stroke="#ff7d21"
            strokeWidth="1.5"
            strokeDasharray="6 10"
            className="dash-drift"
          />
          <circle cx="60" cy="160" r="5" fill="#ff7d21" />
          <circle cx="600" cy="110" r="5" fill="#84a7c6" />
          <circle cx="1140" cy="60" r="5" fill="#ff7d21" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead kicker={t("mkt.kicker")} title={t("mkt.title")} sub={t("mkt.sub")} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETS.map((m, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={m.code} delay={i * 90}>
                <article className="group flex h-full flex-col border border-graphite-800 bg-graphite-900 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-molten-500/70 hover:shadow-xl hover:shadow-graphite-950">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl font-semibold leading-none text-graphite-700 transition-colors duration-300 group-hover:text-molten-500/50">
                      {m.code}
                    </span>
                    <Icon className="h-6 w-6 text-graphite-500 transition-colors duration-300 group-hover:text-molten-400" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-graphite-50">
                    {t(m.nameKey)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-graphite-400">{t(m.demandKey)}</p>

                  <dl className="mt-5 space-y-2 border-t border-dashed border-graphite-700 pt-4 text-xs">
                    <div className="flex justify-between gap-3">
                      <dt className="uppercase tracking-[0.16em] text-graphite-500">{t("mkt.mode")}</dt>
                      <dd className="text-graphite-200">{L(m.mode)}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="uppercase tracking-[0.16em] text-graphite-500">{t("mkt.transit")}</dt>
                      <dd className="font-display text-molten-400">
                        {m.transit} {t("mkt.days")}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="uppercase tracking-[0.16em] text-graphite-500">{t("mkt.gate")}</dt>
                      <dd className="text-end text-graphite-200">{L(m.gate)}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- team ---------- */

function Team() {
  const { t } = useLang();
  return (
    <section className="blueprint-light border-y border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead tone="light" kicker={t("team.kicker")} title={t("team.title")} sub={t("team.sub")} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.id} delay={i * 110}>
              <article className="group border border-line bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <span className="absolute top-4 border border-graphite-950/20 bg-card/90 px-2.5 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-700 backdrop-blur-sm ltr:left-4 rtl:right-4">
                    {m.langs}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink-900">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-molten-600">{t(m.roleKey)}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-500">
                    <span className="text-ink-700">{t("team.markets")}: </span>
                    {t(m.marketsKey)}
                  </p>
                  <div className="mt-5 flex gap-2.5">
                    <a
                      href={waLink(m.wa, `Hello ${m.name} — I found you on persismetal.com and would like to talk about a metal order.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 bg-wa px-4 py-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-graphite-950 transition-all duration-300 hover:bg-wa-dark hover:text-graphite-50"
                    >
                      <IconWA className="h-4 w-4" />
                      {t("team.chat")}
                    </a>
                    <a
                      href={`mailto:${m.email}`}
                      aria-label={`Email ${m.name}`}
                      className="flex items-center justify-center border border-line px-3.5 text-ink-700 transition-colors duration-300 hover:border-molten-500 hover:text-molten-600"
                    >
                      <IconMail className="h-4 w-4" />
                    </a>
                  </div>
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
  return (
    <section className="bg-graphite-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead kicker={t("proc.kicker")} title={t("proc.title")} sub={t("proc.sub")} />
        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((s, i) => (
            <Reveal key={s} as="li" delay={i * 90}>
              <div className="group relative border-t-2 border-graphite-700 pt-6 transition-colors duration-300 hover:border-molten-500">
                <span className="font-display text-4xl font-semibold text-graphite-700 transition-colors duration-300 group-hover:text-molten-500">
                  {String(s).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold uppercase tracking-wide text-graphite-100">
                  {t(`proc.s${s}t`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-400">{t(`proc.s${s}d`)}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <Categories />
      <Advantages />
      <Markets />
      <Team />
      <Process />
      <CtaBand />
      <span className="sr-only">{t("hero.board.note")}</span>
    </>
  );
}
