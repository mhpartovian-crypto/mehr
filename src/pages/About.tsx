import { useLang } from "../i18n";
import { IMAGES, MILLS } from "../data/site";
import { CountUp, Reveal, SectionHead } from "../components/Reveal";
import { IconCheck, IconDoc, IconShip } from "../components/Icons";
import { CtaBand } from "../components/Chrome";

export default function About() {
  const { t } = useLang();

  return (
    <>
      {/* opening */}
      <section className="blueprint relative overflow-hidden border-b border-graphite-800 bg-graphite-950 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHead kicker={t("about.kicker")} title={t("about.title")} />
            <Reveal delay={150}>
              <p className="mt-6 text-base leading-relaxed text-graphite-300">{t("about.p1")}</p>
              <p className="mt-4 text-base leading-relaxed text-graphite-300">{t("about.p2")}</p>
            </Reveal>
            <Reveal delay={250} className="mt-8 grid grid-cols-2 gap-px border border-graphite-700 bg-graphite-700 sm:grid-cols-4">
              {[
                { v: <CountUp value={300000} suffix="+" />, l: t("stats.tons") },
                { v: <CountUp value={14} />, l: t("stats.markets") },
                { v: <span>{"<"}<CountUp value={4} />h</span>, l: t("stats.response") },
                { v: <CountUp value={100} suffix="%" />, l: t("stats.mtc") },
              ].map((s, i) => (
                <div key={i} className="bg-graphite-900 p-4 text-center">
                  <p className="font-display text-2xl font-semibold text-molten-500">{s.v}</p>
                  <p className="mt-1 text-[0.6rem] uppercase tracking-[0.14em] text-graphite-500">{s.l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={200} className="brackets relative">
            <div className="overflow-hidden border border-graphite-700">
              <img
                src={IMAGES.warehouse}
                alt="Steel coils and billets in a Persis Metal warehouse"
                className="img-breathe h-full w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-4 bg-molten-500 px-4 py-2 font-display text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-graphite-950 ltr:left-6 rtl:right-6">
              {t("about.statsK")}
            </span>
          </Reveal>
        </div>
      </section>

      {/* mission / network / documents */}
      <section className="blueprint-light border-b border-line bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-3">
          <Reveal className="border border-line bg-card p-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-molten-600">{t("about.missionK")}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold uppercase leading-tight text-ink-900">{t("about.missionT")}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">{t("about.missionD")}</p>
          </Reveal>

          <Reveal delay={110} className="border border-line bg-graphite-950 p-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-molten-400">{t("about.netK")}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold uppercase leading-tight text-graphite-50">{t("about.netT")}</h3>
            <p className="mt-4 text-sm leading-relaxed text-graphite-400">{t("about.netD")}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {MILLS.map((m) => (
                <span key={m} className="border border-graphite-600 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-graphite-300 transition-colors duration-200 hover:border-molten-500 hover:text-molten-400">
                  {m}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220} className="border border-line bg-card p-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-molten-600">{t("about.docK")}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold uppercase leading-tight text-ink-900">{t("about.docT")}</h3>
            <ul className="mt-5 space-y-3">
              {[t("about.d1"), t("about.d2"), t("about.d3"), t("about.d4")].map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-snug text-ink-700">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-wa" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* logistics band */}
      <section className="relative overflow-hidden bg-graphite-900">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden border border-graphite-700">
              <img
                src={IMAGES.port}
                alt="Container terminal at dusk — Persis Metal logistics"
                loading="lazy"
                className="img-breathe h-80 w-full object-cover lg:h-[26rem]"
              />
            </div>
            <span className="absolute top-4 bg-graphite-950/90 px-4 py-2 font-display text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-molten-400 backdrop-blur-sm ltr:left-4 rtl:right-4">
              {t("mkt.kicker")}
            </span>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHead kicker={t("mkt.kicker")} title={t("mkt.title")} sub={t("mkt.sub")} />
            <Reveal delay={150} className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: <IconShip className="h-6 w-6" />, k: t("mkt.mode"), v: t("adv.r2b") },
                { icon: <IconDoc className="h-6 w-6" />, k: t("about.docK"), v: t("adv.r3b") },
                { icon: <IconCheck className="h-6 w-6" />, k: t("team.kicker"), v: t("adv.r4b") },
              ].map((x, i) => (
                <div key={i} className="border border-graphite-700 bg-graphite-850 p-5 transition-colors duration-300 hover:border-molten-500/70">
                  <span className="text-molten-400">{x.icon}</span>
                  <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-graphite-500">{x.k}</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-graphite-100">{x.v}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
