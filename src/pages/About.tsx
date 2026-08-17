import { useLang } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { IMAGES, MILLS } from "../data/site";
import { Reveal, SectionHead } from "../components/Reveal";
import MediaStrip from "../components/MediaStrip";
import LazyImg from "../components/LazyImg";
import { CtaBand } from "../components/Chrome";
import { IconCheck, IconDoc, IconTruck, IconWA } from "../components/Icons";

function Story() {
  const { t, L } = useLang();
  return (
    <section className="bg-graphite-950 pb-16 pt-14 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <SectionHead kicker={t("ab.kicker")} title={t("ab.title")} />
          <Reveal delay={120} className="mt-7 space-y-5 text-base leading-relaxed text-graphite-300">
            <p>{t("ab.p1")}</p>
            <p>{t("ab.p2")}</p>
          </Reveal>
          <Reveal delay={200} className="mt-8 grid grid-cols-3 gap-px border border-graphite-700 bg-graphite-700">
            {[
              { k: "2009", v: { en: "founding year", ru: "год основания", ar: "سنة التأسيس" } },
              { k: "23", v: { en: "product specs", ru: "спецификаций", ar: "مواصفة منتج" } },
              { k: "14", v: { en: "markets served", ru: "рынков", ar: "سوقًا" } },
            ].map((s, i) => (
              <div key={i} className="bg-graphite-900 p-4 text-center">
                <p className="font-display text-2xl font-semibold text-molten-400" dir="ltr">{s.k}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-graphite-500">
                  {L(s.v)}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <div className="absolute -inset-3 border border-molten-500/30" aria-hidden="true" />
          <div className="relative overflow-hidden">
            <LazyImg src={IMAGES.warehouse} alt={t("media.s1")} className="aspect-[4/3]" imgClassName="img-breathe" />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/60 to-transparent" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Network() {
  const { t } = useLang();
  return (
    <section className="blueprint-light border-y border-line bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead tone="light" kicker={t("ab.netK")} title={t("ab.netT")} sub={t("ab.netSub")} />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {MILLS.map((m, i) => (
            <Reveal key={m} delay={(i % 4) * 70}>
              <div className="group flex h-full items-center gap-3 border border-line bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-molten-500">
                <span className="font-display text-lg font-bold text-graphite-950/25 transition-colors group-hover:text-molten-500" dir="ltr">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-semibold uppercase tracking-wide text-ink-900">{m}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const { t } = useLang();
  const vals = [
    { icon: <IconDoc className="h-6 w-6" />, t: t("ab.v1t"), d: t("ab.v1d") },
    { icon: <IconTruck className="h-6 w-6" />, t: t("ab.v2t"), d: t("ab.v2d") },
    { icon: <IconWA className="h-6 w-6" />, t: t("ab.v3t"), d: t("ab.v3d") },
  ];
  return (
    <section className="bg-graphite-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead kicker={t("ab.values")} title={t("ab.whyT")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {vals.map((v, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="brackets group h-full border border-graphite-800 bg-graphite-900 p-7 transition-all duration-300 hover:-translate-y-1.5">
                <span className="flex h-13 w-13 items-center justify-center bg-molten-500/10 p-3 text-molten-400 transition-colors duration-300 group-hover:bg-molten-500 group-hover:text-graphite-950">
                  {v.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-graphite-50">{v.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-graphite-400">{v.d}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-14 border border-graphite-700 bg-graphite-900 p-7">
          <p className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.22em] text-molten-400">
            <IconCheck className="h-4 w-4" />
            {t("ab.whyK")}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-graphite-300">{t("ab.whyT")}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function About() {
  const { t } = useLang();
  usePageMeta(t("seo.about"), t("ab.p1"));

  return (
    <>
      <Story />
      <Network />
      <section className="bg-graphite-950 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead kicker={t("media.kicker")} title={t("media.title")} sub={t("media.sub")} />
          <div className="mt-10">
            <MediaStrip
              items={[
                { kind: "img", src: IMAGES.warehouse, captionKey: "media.s1" },
                { kind: "img", src: IMAGES.loading, captionKey: "media.s3" },
                { kind: "slot", captionKey: "media.s4" },
                { kind: "slot", captionKey: "media.s6" },
              ]}
            />
          </div>
        </div>
      </section>
      <Values />
      <CtaBand />
    </>
  );
}
