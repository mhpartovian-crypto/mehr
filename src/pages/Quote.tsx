import { useState, type FormEvent } from "react";
import { useLang, waLink } from "../i18n";
import { CATEGORIES } from "../data/products";
import { CONTACT } from "../data/site";
import { Reveal, SectionHead } from "../components/Reveal";
import { IconCheck, IconWA, IconDoc } from "../components/Icons";

const inputCls =
  "w-full border border-line bg-card px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-all duration-200";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500";

export default function Quote() {
  const { t, L } = useLang();
  const [f, setF] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    wa: "",
    product: "",
    grade: "",
    qty: "",
    incoterm: "CFR",
    dest: "",
    msg: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof f) => (e: { target: { value: string } }) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      "RFQ — persismetal.com",
      `Product: ${f.product}`,
      f.grade && `Grade/spec: ${f.grade}`,
      `Quantity: ${f.qty} t`,
      `Incoterm: ${f.incoterm}`,
      `Destination: ${f.dest}`,
      `Buyer: ${f.name}${f.company ? ` — ${f.company}` : ""}`,
      `Country: ${f.country}`,
      f.email && `Email: ${f.email}`,
      `WhatsApp: ${f.wa}`,
      f.msg && `Note: ${f.msg}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(CONTACT.mainWa, text), "_blank", "noopener");
    setSent(true);
  };

  return (
    <>
      <section className="blueprint border-b border-graphite-800 bg-graphite-950 pb-12 pt-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead kicker={t("nav.quote")} title={t("q.title")} sub={t("q.sub")} />
        </div>
      </section>

      <section className="blueprint-light border-b border-line bg-paper py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="border border-line bg-card p-7 shadow-sm sm:p-9">
            {sent ? (
              <div className="py-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-wa text-graphite-950">
                  <IconCheck className="h-8 w-8" />
                </span>
                <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-relaxed text-ink-700">{t("q.success")}</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-7 border border-ink-700 px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink-700 transition-colors duration-300 hover:border-molten-600 hover:text-molten-600"
                >
                  {t("q.again")}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>{t("q.name")}</label>
                  <input required value={f.name} onChange={set("name")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{t("q.company")}</label>
                  <input value={f.company} onChange={set("company")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{t("q.country")}</label>
                  <input required value={f.country} onChange={set("country")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{t("q.wa")}</label>
                  <input required dir="ltr" value={f.wa} onChange={set("wa")} placeholder="+964 · +998 · +971 …" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{t("q.email")}</label>
                  <input type="email" value={f.email} onChange={set("email")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{t("q.product")}</label>
                  <select required value={f.product} onChange={set("product")} className={inputCls}>
                    <option value="">{t("q.selectProduct")}</option>
                    {CATEGORIES.map((c) => (
                      <optgroup key={c.id} label={L(c.name)}>
                        {c.products.map((p) => (
                          <option key={p.slug} value={`${L(p.name)} (${p.grade})`}>
                            {L(p.name)} — {p.grade}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{t("q.grade")}</label>
                  <input value={f.grade} onChange={set("grade")} placeholder={t("q.gradePh")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{t("q.qty")}</label>
                  <input required type="number" min="1" value={f.qty} onChange={set("qty")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{t("q.incoterm")}</label>
                  <select value={f.incoterm} onChange={set("incoterm")} className={inputCls}>
                    {["EXW", "FOB", "CFR", "CIF", "DAP"].map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{t("q.dest")}</label>
                  <input required value={f.dest} onChange={set("dest")} className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>{t("q.msg")}</label>
                  <textarea rows={4} value={f.msg} onChange={set("msg")} placeholder={t("q.msgPh")} className={`${inputCls} resize-none`} />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="group flex w-full items-center justify-center gap-3 bg-wa px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-wa-dark hover:text-graphite-50">
                    <IconWA className="h-5 w-5 transition-transform group-hover:scale-110" />
                    {t("q.send")}
                  </button>
                  <p className="mt-3 text-center text-xs text-ink-500">
                    {t("q.alt")}{" "}
                    <a href={`mailto:${CONTACT.salesEmail}?subject=RFQ — persismetal.com`} className="font-semibold text-molten-600 hover:underline">
                      {CONTACT.salesEmail}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={120} className="border border-line bg-graphite-950 p-7">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-molten-400">{t("q.benefits")}</p>
              <ul className="mt-5 space-y-4">
                {[t("q.b1"), t("q.b2"), t("q.b3")].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-graphite-100">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-molten-500 font-display text-xs font-bold text-graphite-950">
                      {i + 1}
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220} className="border border-line bg-card p-7">
              <p className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-900">
                <IconDoc className="h-5 w-5 text-molten-600" />
                {t("proc.s2t")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{t("proc.s2d")}</p>
              <a
                href={waLink(CONTACT.mainWa, "Hello Persis Metal — I would like a price offer.")}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-3 border border-wa px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-wa-dark transition-all duration-300 hover:bg-wa hover:text-graphite-950"
              >
                <IconWA className="h-4 w-4" />
                {t("cta.btnWa")}
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
