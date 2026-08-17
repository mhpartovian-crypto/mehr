import { useLang } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { ACTIVE_LOGO, LogoMark } from "../components/Logo";
import { Reveal, SectionHead } from "../components/Reveal";

export default function LogoOptions() {
  const { t } = useLang();
  usePageMeta("Logo proposals — Persis Metal");

  const options = [
    { v: 1, n: t("logo.n1"), d: t("logo.d1") },
    { v: 2, n: t("logo.n2"), d: t("logo.d2") },
    { v: 3, n: t("logo.n3"), d: t("logo.d3") },
    { v: 4, n: t("logo.n4"), d: t("logo.d4") },
  ];

  return (
    <section className="blueprint border-b border-graphite-800 bg-graphite-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead kicker={t("logo.kicker")} title={t("logo.title")} sub={t("logo.sub")} />

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {options.map((o, i) => (
            <Reveal key={o.v} delay={(i % 2) * 100}>
              <article className={`brackets relative border p-7 transition-all duration-300 hover:-translate-y-1 ${
                o.v === ACTIVE_LOGO ? "border-molten-500/70 bg-graphite-900" : "border-graphite-700 bg-graphite-900/60"
              }`}>
                {o.v === ACTIVE_LOGO && (
                  <span className="absolute -top-3 start-6 bg-molten-500 px-3 py-1 font-display text-[0.62rem] font-bold uppercase tracking-[0.18em] text-graphite-950">
                    {t("logo.active")}
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-bold text-graphite-700" dir="ltr">
                    0{o.v}
                  </span>
                  <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-graphite-50">{o.n}</h2>
                </div>

                <div className="mt-6 grid grid-cols-2 overflow-hidden border border-graphite-700">
                  <div className="flex flex-col items-center gap-3 bg-graphite-950 py-9">
                    <LogoMark variant={o.v} size={64} className="text-graphite-100" />
                    <span className="text-[0.6rem] uppercase tracking-[0.22em] text-graphite-500">{t("logo.onDark")}</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 bg-graphite-50 py-9">
                    <LogoMark variant={o.v} size={64} className="text-graphite-950" />
                    <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ink-500">{t("logo.onLight")}</span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-graphite-300">{o.d}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-10 border border-dashed border-graphite-600 bg-graphite-900/50 p-6 text-center">
          <p className="text-sm text-graphite-300">{t("logo.note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
