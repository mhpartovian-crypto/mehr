import { useEffect, useState, type FormEvent } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useLang, waLink } from "../i18n";
import { findProduct } from "../data/products";
import { TEAM } from "../data/site";
import { Reveal, SectionHead } from "../components/Reveal";
import { ProductGlyph, IconWA, IconPhone, IconDoc, IconCheck, IconArrow } from "../components/Icons";
import { CtaBand } from "../components/Chrome";

const inputCls =
  "w-full border border-line bg-card px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-all duration-200";

function AnalysisForm({ productName }: { productName: string }) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [doc, setDoc] = useState("MTC + chemical analysis");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const rep = TEAM[0];
    const msg = `Analysis request — persismetal.com\nProduct: ${productName}\nDocuments: ${doc}\nName: ${name}${company ? `\nCompany: ${company}` : ""}\nSend to: ${contact}`;
    window.open(waLink(rep.wa, msg), "_blank", "noopener");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-wa/40 bg-wa/10 p-6 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-wa text-graphite-950">
          <IconCheck className="h-6 w-6" />
        </span>
        <p className="mt-4 text-sm font-medium leading-relaxed text-ink-700">{t("p.aSuccess")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3.5">
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={t("p.aName")} className={inputCls} />
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder={t("p.aCompany")} className={inputCls} />
      <input required value={contact} onChange={(e) => setContact(e.target.value)} placeholder={t("p.aContact")} className={inputCls} />
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{t("p.aDoc")}</span>
        <select value={doc} onChange={(e) => setDoc(e.target.value)} className={inputCls}>
          <option>MTC + chemical analysis</option>
          <option>MTC (EN 10204 3.1)</option>
          <option>Chemical analysis</option>
          <option>SGS inspection report</option>
        </select>
      </label>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2.5 bg-graphite-950 px-5 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-graphite-50 transition-colors duration-300 hover:bg-molten-600"
      >
        <IconDoc className="h-4 w-4" />
        {t("p.aSend")}
      </button>
    </form>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { t, L } = useLang();
  const found = findProduct(slug ?? "");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!found) return <Navigate to="/products" replace />;
  const { product: p, category } = found;
  const rep = TEAM[p.rep];

  return (
    <>
      {/* header */}
      <section className="blueprint relative border-b border-graphite-800 bg-graphite-950 pb-16 pt-10 lg:pt-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav className="anim-fade-up flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-graphite-500" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-molten-400">{t("nav.home")}</Link>
            <span>/</span>
            <Link to="/products" className="transition-colors hover:text-molten-400">{t("nav.products")}</Link>
            <span>/</span>
            <Link to={`/products?cat=${category.id}`} className="transition-colors hover:text-molten-400">
              {L(category.name)}
            </Link>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            <div>
              <span className="anim-fade-up inline-block border border-steel-500/50 bg-steel-500/10 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-steel-300">
                {p.grade}
              </span>
              <h1 className="anim-fade-up mt-4 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-graphite-50 sm:text-5xl lg:text-6xl" style={{ "--d": "100ms" } as React.CSSProperties}>
                {L(p.name)}
              </h1>
              <p className="anim-fade-up mt-5 max-w-2xl text-base leading-relaxed text-graphite-300 sm:text-lg" style={{ "--d": "200ms" } as React.CSSProperties}>
                {L(p.summary)}
              </p>

              <div className="anim-fade-up mt-8 grid grid-cols-2 gap-px border border-graphite-700 bg-graphite-700 sm:grid-cols-3 lg:grid-cols-5" style={{ "--d": "300ms" } as React.CSSProperties}>
                {[
                  { k: t("p.moq"), v: p.moq },
                  { k: t("p.hs"), v: p.hs },
                  { k: t("p.origin"), v: t("origin.iran") },
                  { k: t("p.port"), v: p.ports[0] },
                  { k: t("p.incoterms"), v: p.incoterms.join(" · ") },
                ].map((f, i) => (
                  <div key={i} className="bg-graphite-900 p-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-graphite-500">{f.k}</p>
                    <p className="mt-1.5 font-display text-sm font-semibold uppercase tracking-wide text-molten-400">{f.v}</p>
                  </div>
                ))}
              </div>

              <div className="anim-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--d": "400ms" } as React.CSSProperties}>
                <a
                  href={waLink(rep.wa, `Hello ${rep.name} — I'm interested in ${L(p.name)} (${p.grade}). Please send today's price.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 bg-wa px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <IconWA className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {t("p.chat")}
                </a>
                <a
                  href="#analysis"
                  className="flex items-center justify-center gap-3 border border-graphite-500/60 px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-100 transition-all duration-300 hover:border-molten-500 hover:text-molten-400"
                >
                  <IconDoc className="h-5 w-5" />
                  {t("p.analysisTitle")}
                </a>
              </div>
            </div>

            {/* glyph panel */}
            <Reveal delay={200} className="brackets relative hidden border border-graphite-700 bg-graphite-900/70 p-10 lg:block">
              <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative flex flex-col items-center">
                <span className="text-molten-500">
                  <ProductGlyph k={p.icon} className="h-44 w-44" />
                </span>
                <p className="mt-6 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-graphite-300">
                  {L(p.name)}
                </p>
                <p className="mt-1 text-center text-[0.65rem] uppercase tracking-[0.22em] text-graphite-600">
                  {p.grade} · {t("origin.iran")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* technical specs */}
      <section className="bg-graphite-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead kicker={t("p.overview")} title={t("p.tech")} />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="border border-graphite-800 bg-graphite-900">
              <h3 className="border-b border-graphite-800 px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-molten-400">
                {t("p.chem")}
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  {p.chem.map(([label, val], i) => (
                    <tr key={label} className={`transition-colors hover:bg-graphite-850 ${i % 2 ? "bg-graphite-900" : "bg-graphite-850/40"}`}>
                      <td className="px-6 py-3 text-graphite-300" dir="ltr">{label}</td>
                      <td className="px-6 py-3 text-end font-display font-semibold text-graphite-50" dir="ltr">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={100} className="border border-graphite-800 bg-graphite-900">
                <h3 className="border-b border-graphite-800 px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-molten-400">
                  {t("p.mech")}
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    {p.mech.map((row, i) => (
                      <tr key={row.k} className={`transition-colors hover:bg-graphite-850 ${i % 2 ? "bg-graphite-900" : "bg-graphite-850/40"}`}>
                        <td className="px-6 py-3 text-graphite-300">{t(`k.${row.k}`)}</td>
                        <td className="px-6 py-3 text-end font-display font-semibold text-graphite-50" dir="ltr">{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>

              <Reveal delay={180} className="border border-graphite-800 bg-graphite-900 p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-molten-400">
                  {t("p.standards")}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.standards.map((s) => (
                    <span key={s} className="border border-steel-500/50 bg-steel-500/10 px-3 py-1.5 font-display text-xs font-medium uppercase tracking-[0.1em] text-steel-300">
                      {s}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-molten-400">
                  {t("p.packing")}
                </h3>
                <p className="mt-2.5 text-sm text-graphite-300">{L(p.packing)}</p>
                {p.ports.length > 1 && (
                  <>
                    <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-molten-400">
                      {t("p.port")}
                    </h3>
                    <p className="mt-2.5 text-sm text-graphite-300">{p.ports.join(" · ")}</p>
                  </>
                )}
              </Reveal>
            </div>
          </div>

          {/* applications */}
          <Reveal delay={120} className="mt-6 border border-graphite-800 bg-graphite-900 p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-molten-400">{t("p.apps")}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {p.apps.map((a, i) => (
                <p key={i} className="flex items-center gap-3 border border-dashed border-graphite-700 px-4 py-3 text-sm text-graphite-200 transition-colors duration-200 hover:border-molten-500/60">
                  <IconCheck className="h-4 w-4 shrink-0 text-molten-500" />
                  {L(a)}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* sales + analysis */}
      <section id="analysis" className="blueprint-light border-y border-line bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHead tone="light" kicker={t("p.salesTitle")} title={L(p.name)} sub={t("p.salesSub")} />
            <Reveal delay={120} className="mt-8 flex items-center gap-5 border border-line bg-card p-6">
              <img src={rep.img} alt={rep.name} loading="lazy" className="h-20 w-20 shrink-0 border border-line object-cover grayscale" />
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold uppercase tracking-wide text-ink-900">{rep.name}</p>
                <p className="text-sm font-medium text-molten-600">{t(rep.roleKey)}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-500">{rep.langs}</p>
              </div>
            </Reveal>
            <Reveal delay={200} className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(rep.wa, `Hello ${rep.name} — I'm interested in ${L(p.name)} (${p.grade}). Please send today's price.`)}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-3 bg-wa px-6 py-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-300 hover:bg-wa-dark hover:text-graphite-50"
              >
                <IconWA className="h-5 w-5" />
                {t("p.chat")}
              </a>
              <a
                href={`tel:${rep.wa.replace(/^(\d{2})(\d{3})(\d{7})$/, "+$1$2$3")}`}
                className="flex items-center justify-center gap-3 border border-line bg-card px-6 py-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-700 transition-colors duration-300 hover:border-molten-500 hover:text-molten-600"
                dir="ltr"
              >
                <IconPhone className="h-4 w-4" />
                {t("p.call")}
              </a>
            </Reveal>
          </div>

          <Reveal delay={150} className="border border-line bg-card p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink-900">
              {t("p.analysisTitle")}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{t("p.analysisSub")}</p>
            <div className="mt-6">
              <AnalysisForm productName={L(p.name)} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* related */}
      <section className="bg-graphite-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead kicker={L(category.name)} title={t("p.related")} />
            <Link to="/products" className="mb-1 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-molten-400 transition-colors hover:text-molten-300">
              {t("p.back")}
              <IconArrow className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.products
              .filter((x) => x.slug !== p.slug)
              .slice(0, 3)
              .map((r, i) => (
                <Reveal key={r.slug} delay={i * 80}>
                  <Link
                    to={`/products/${r.slug}`}
                    className="group flex h-full items-center gap-5 border border-graphite-800 bg-graphite-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-molten-500/70"
                  >
                    <span className="text-graphite-500 transition-colors group-hover:text-molten-400">
                      <ProductGlyph k={r.icon} className="h-14 w-14 shrink-0" />
                    </span>
                    <span>
                      <span className="block font-display text-base font-semibold uppercase tracking-wide text-graphite-100 group-hover:text-molten-400">
                        {L(r.name)}
                      </span>
                      <span className="mt-1 block text-xs text-graphite-500">{r.grade} · {t("p.moq")} {r.moq}</span>
                    </span>
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
