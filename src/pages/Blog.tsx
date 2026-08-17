import { Link } from "react-router-dom";
import { useLang, waLink } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { CONTACT, IMAGES } from "../data/site";
import { Reveal, SectionHead } from "../components/Reveal";
import MediaStrip from "../components/MediaStrip";
import LazyImg from "../components/LazyImg";
import { CtaBand } from "../components/Chrome";
import { IconArrow, IconClock, IconWA } from "../components/Icons";

export default function Blog() {
  const { t } = useLang();
  usePageMeta(t("seo.blog"), t("blog.sub"));

  const posts = [
    { img: IMAGES.hero, tag: t("blog.t1"), title: t("blog.p1t"), excerpt: t("blog.p1x"), date: "—", read: "8 min" },
    { img: IMAGES.nonferrous, tag: t("blog.t2"), title: t("blog.p2t"), excerpt: t("blog.p2x"), date: "—", read: "6 min" },
    { img: IMAGES.loading, tag: t("blog.t3"), title: t("blog.p3t"), excerpt: t("blog.p3x"), date: "—", read: "7 min" },
  ];

  return (
    <>
      <section className="blueprint border-b border-graphite-800 bg-graphite-950 pb-12 pt-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead kicker={t("blog.kicker")} title={t("blog.title")} sub={t("blog.sub")} />
        </div>
      </section>

      {/* designed preview cards — visual only, not clickable */}
      <section className="blueprint-light bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-7 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="group flex h-full cursor-default flex-col overflow-hidden border border-line bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink-900/10" aria-disabled="true">
                  <div className="relative overflow-hidden">
                    <LazyImg
                      src={p.img}
                      alt={p.title}
                      className="aspect-[16/10]"
                      imgClassName="grayscale-[30%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <span className="absolute start-4 top-4 bg-graphite-950 px-2.5 py-1.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.18em] text-molten-400">
                      {p.tag}
                    </span>
                    <span className="absolute end-4 top-4 bg-molten-500 px-2.5 py-1.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.18em] text-graphite-950">
                      {t("blog.soon")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-ink-500">
                      <IconClock className="h-3.5 w-3.5" />
                      {p.date} · {p.read}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-semibold uppercase leading-snug tracking-wide text-ink-900">
                      {p.title}
                    </h2>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">{p.excerpt}</p>
                    <p className="mt-5 flex items-center justify-between border-t border-dashed border-line pt-4">
                      <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-graphite-950/40">
                        {t("blog.readSoon")}
                      </span>
                      <IconArrow className="h-4 w-4 text-graphite-950/25 rtl:-scale-x-100" />
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-center font-display text-sm uppercase tracking-[0.3em] text-ink-500/60">
            persismetal.com/blog<span className="blink text-molten-600">_</span>
          </p>
        </div>
      </section>

      {/* media room — exhibitions, mill visits, contracts */}
      <section className="border-t border-graphite-800 bg-graphite-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            kicker={t("blog.mediaKicker")}
            title={t("blog.mediaTitle")}
            sub={t("blog.mediaSub")}
          />
          <div className="mt-10">
            <MediaStrip
              items={[
                { kind: "slot", captionKey: "blog.m1" },
                { kind: "slot", captionKey: "blog.m2" },
                { kind: "slot", captionKey: "blog.m3" },
                { kind: "slot", captionKey: "blog.m4" },
                { kind: "slot", captionKey: "blog.m5" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* meanwhile: talk to us / browse products */}
      <section className="blueprint-light border-y border-line bg-paper py-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink-900 sm:text-3xl">
              {t("blog.cta")}
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(CONTACT.mainWa, "Hello Persis Metal — please send me today's steel and metals price list.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-wa px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-wa-dark hover:text-graphite-50"
            >
              <IconWA className="h-5 w-5 transition-transform group-hover:scale-110" />
              {t("blog.cta")}
            </a>
            <Link
              to="/products"
              className="group flex items-center justify-center gap-3 border border-ink-700/40 px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 transition-all duration-300 hover:border-molten-600 hover:bg-molten-600 hover:text-graphite-50"
            >
              {t("blog.back")}
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
