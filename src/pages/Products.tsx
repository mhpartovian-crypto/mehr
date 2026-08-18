import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLang } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { CATEGORIES } from "../data/products";
import { IMAGES } from "../data/site";
import { Reveal, SectionHead } from "../components/Reveal";
import MediaStrip from "../components/MediaStrip";
import { ProductGlyph, IconArrow, IconWA } from "../components/Icons";
import { waLink } from "../i18n";
import { CONTACT } from "../data/site";
import { CtaBand } from "../components/Chrome";

export default function Products() {
  const { t, L } = useLang();
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") ?? "all";
  const [q, setQ] = useState("");

  usePageMeta(t("seo.products"), t("pr.sub"));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const setCat = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("cat");
    else next.set("cat", id);
    setParams(next, { replace: true });
  };

  const visible = CATEGORIES.filter((c) => cat === "all" || c.id === cat);
  const query = q.trim().toLowerCase();
  const match = (s: string) => s.toLowerCase().includes(query);

  return (
    <>
      <section className="blueprint border-b border-graphite-800 bg-graphite-950 pb-12 pt-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead kicker={t("pr.kicker")} title={t("pr.title")} sub={t("pr.sub")} />

          {/* filters */}
          <Reveal delay={120} className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCat("all")}
                className={`border px-4 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                  cat === "all"
                    ? "border-molten-500 bg-molten-500 text-graphite-950"
                    : "border-graphite-600 text-graphite-300 hover:border-molten-500 hover:text-molten-400"
                }`}
              >
                {t("pr.all")}
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={`border px-4 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                    cat === c.id
                      ? "border-molten-500 bg-molten-500 text-graphite-950"
                      : "border-graphite-600 text-graphite-300 hover:border-molten-500 hover:text-molten-400"
                  }`}
                >
                  {L(c.name)}
                </button>
              ))}
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("pr.search")}
              className="w-full border border-graphite-600 bg-graphite-900 px-4 py-2.5 text-sm text-graphite-100 placeholder:text-graphite-500 transition-all duration-200 lg:w-72"
            />
          </Reveal>
        </div>
      </section>

      {/* catalog — light */}
      <section className="blueprint-light bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {visible.map((c) => {
            const prods = c.products.filter(
              (p) =>
                !query ||
                match(L(p.name)) ||
                match(p.grade) ||
                match(p.hs) ||
                match(p.slug.replace(/-/g, " "))
            );
            if (prods.length === 0) return null;
            return (
              <div key={c.id} className="mb-14 last:mb-0">
                <Reveal className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-graphite-950 text-molten-400">
                    <ProductGlyph k={c.icon} className="h-10 w-10" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink-900 sm:text-3xl">
                      {L(c.name)}
                    </h2>
                    <p className="mt-1 text-sm text-ink-500">{L(c.blurb)}</p>
                  </div>
                </Reveal>

                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {prods.map((p, i) => (
                    <Reveal key={p.slug} delay={(i % 3) * 80}>
                      <Link
                        to={`/products/${p.slug}`}
                        className="brackets group flex h-full flex-col border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/10"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-graphite-950 transition-colors duration-300 group-hover:text-molten-600">
                            <ProductGlyph k={p.icon} className="h-12 w-12" />
                          </span>
                          <span className="border border-line bg-paper px-2 py-1 font-display text-[0.6rem] font-bold uppercase tracking-[0.12em] text-steel-600">
                            {p.grade}
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-semibold uppercase leading-snug tracking-wide text-ink-900 transition-colors group-hover:text-molten-600">
                          {L(p.name)}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 flex-1 text-[0.8rem] leading-relaxed text-ink-500">
                          {L(p.summary)}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-dashed border-line pt-3.5">
                          <span className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-ink-500">
                            {t("p.moq")}: <strong className="text-ink-900" dir="ltr">{p.moq}</strong>
                          </span>
                          <span className="flex items-center gap-1.5 font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-molten-600">
                            {t("pr.details")}
                            <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          {visible.every((c) =>
            c.products.every(
              (p) => query && !(match(L(p.name)) || match(p.grade) || match(p.hs) || match(p.slug.replace(/-/g, " ")))
            )
          ) && (
            <div className="border border-dashed border-ink-500/40 bg-card p-10 text-center">
              <p className="text-sm font-medium text-ink-700">{t("pr.none")}</p>
              <a
                href={waLink(CONTACT.mainWa, `Hello Persis Metal — I'm looking for: ${q}`)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 bg-wa px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-graphite-950"
              >
                <IconWA className="h-4 w-4" />
                {t("hero.ctaWa")}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* media reel */}
      <section className="bg-graphite-950 py-16 lg:py-24">
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
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
