import { Link, useSearchParams } from "react-router-dom";
import { useLang } from "../i18n";
import { ALL_PRODUCTS, CATEGORIES, PRODUCT_COUNT } from "../data/products";
import { Reveal, SectionHead } from "../components/Reveal";
import { ProductGlyph, IconArrow } from "../components/Icons";
import { CtaBand } from "../components/Chrome";

export default function Products() {
  const { t, L } = useLang();
  const [params, setParams] = useSearchParams();
  const active = params.get("cat") ?? "all";

  const list =
    active === "all"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.catId === active);

  return (
    <>
      <section className="blueprint relative border-b border-graphite-800 bg-graphite-950 pb-14 pt-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            kicker={t("products.kicker")}
            title={t("products.title")}
            sub={t("products.sub")}
          />

          <Reveal delay={150} className="mt-10 flex flex-wrap gap-2">
            <button
              onClick={() => setParams({})}
              className={`border px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                active === "all"
                  ? "border-molten-500 bg-molten-500 text-graphite-950"
                  : "border-graphite-600 text-graphite-300 hover:border-molten-500 hover:text-molten-400"
              }`}
            >
              {t("products.all")} · {PRODUCT_COUNT}
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setParams({ cat: c.id })}
                className={`border px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                  active === c.id
                    ? "border-molten-500 bg-molten-500 text-graphite-950"
                    : "border-graphite-600 text-graphite-300 hover:border-molten-500 hover:text-molten-400"
                }`}
              >
                {L(c.name)}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-graphite-950 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-graphite-500">
            {list.length} {t("products.count")}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link
                  to={`/products/${p.slug}`}
                  className="group flex h-full flex-col border border-graphite-800 bg-graphite-900 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-molten-500/70 hover:shadow-xl hover:shadow-graphite-950"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-graphite-500 transition-colors duration-300 group-hover:text-molten-400">
                      <ProductGlyph k={p.icon} className="h-14 w-14" />
                    </span>
                    <span className="border border-steel-500/50 bg-steel-500/10 px-2.5 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-steel-300">
                      {p.grade}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-graphite-50 transition-colors duration-200 group-hover:text-molten-400">
                    {L(p.name)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-400">
                    {L(p.summary)}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-dashed border-graphite-700 pt-4 text-xs text-graphite-400">
                    <span>
                      <span className="uppercase tracking-[0.14em] text-graphite-500">{t("p.moq")}: </span>
                      {p.moq}
                    </span>
                    <span className="flex items-center gap-1.5 font-display uppercase tracking-[0.14em] text-molten-400">
                      {t("p.tech")}
                      <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
