import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/products";
import { TEAM } from "../data/site";
import {
  applyContent,
  resetToDefaults,
  snapshotContent,
  wasServerContentLoaded,
  EDITABLE_GROUPS,
  MECH_KEYS,
  IMAGE_SLOTS,
  type ContentJSON,
} from "../content/store";
import { D, type Loc } from "../i18n";
import Logo from "../components/Logo";

const DRAFT_KEY = "pm-studio-draft";
const clone = <T,>(x: T): T => JSON.parse(JSON.stringify(x));

const inp =
  "w-full border border-graphite-600 bg-graphite-950 px-3 py-2 text-sm text-graphite-100 placeholder:text-graphite-600 transition-all duration-200";
const lbl = "mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-graphite-500";
const tabBtn = (on: boolean) =>
  `px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200 border-b-2 ${
    on
      ? "border-molten-500 text-molten-400"
      : "border-transparent text-graphite-400 hover:text-graphite-100"
  }`;

function LocInput({
  value,
  onChange,
  textarea = false,
}: {
  value: Loc;
  onChange: (v: Loc) => void;
  textarea?: boolean;
}) {
  const Field = textarea ? "textarea" : "input";
  return (
    <div className="grid gap-2 lg:grid-cols-3">
      {(["en", "ru", "ar"] as const).map((lang) => (
        <div key={lang}>
          <span className={lbl}>{lang === "en" ? "English" : lang === "ru" ? "Русский" : "العربية"}</span>
          <Field
            dir={lang === "ar" ? "rtl" : "ltr"}
            rows={textarea ? 3 : undefined}
            className={`${inp} ${textarea ? "resize-none" : ""}`}
            value={value?.[lang] ?? ""}
            onChange={(e: { target: { value: string } }) => onChange({ ...value, [lang]: e.target.value })}
          />
        </div>
      ))}
    </div>
  );
}

export default function Editor() {
  const [c, setC] = useState<ContentJSON>(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) return JSON.parse(raw) as ContentJSON;
    } catch {
      /* ignore */
    }
    return snapshotContent();
  });
  const [tab, setTab] = useState<"products" | "texts" | "contact" | "images">("products");
  const [catId, setCatId] = useState(CATEGORIES[0].id);
  const [slug, setSlug] = useState(CATEGORIES[0].products[0].slug);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const hasDraft = useRef<boolean>(localStorage.getItem(DRAFT_KEY) !== null);

  const serverContent = wasServerContentLoaded();

  /* autosave draft */
  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(c));
      } catch {
        /* ignore */
      }
    }, 600);
    return () => window.clearTimeout(id);
  }, [c]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(id);
  }, [toast]);

  const up = (fn: (d: ContentJSON) => void) =>
    setC((prev) => {
      const d = clone(prev);
      fn(d);
      return d;
    });

  const cat = CATEGORIES.find((x) => x.id === catId) ?? CATEGORIES[0];
  const p = c.products?.[slug];

  const setProd = <K extends keyof NonNullable<ContentJSON["products"]>[string]>(
    k: K,
    v: NonNullable<ContentJSON["products"]>[string][K]
  ) =>
    up((d) => {
      if (!d.products) d.products = {};
      if (!d.products[slug]) d.products[slug] = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (d.products[slug] as any)[k] = v;
    });

  const csv = (arr?: string[]) => (arr ?? []).join(", ");
  const fromCsv = (s: string) =>
    s.split(/[,،]/).map((x) => x.trim()).filter(Boolean);

  /* ---------- export / import / actions ---------- */

  const download = () => {
    const json = { ...c, updatedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "content.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    localStorage.removeItem(DRAFT_KEY);
    setToast("فایل content.json دانلود شد — آن را در ریشه هاست (کنار index.html) آپلود کنید.");
  };

  const copyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(c, null, 2));
      setToast("کل JSON در کلیپ‌بورد کپی شد.");
    } catch {
      setToast("کپی ممکن نشد — از دکمه دانلود استفاده کنید.");
    }
  };

  const importFile = (file: File) => {
    file
      .text()
      .then((txt) => {
        const json = JSON.parse(txt) as ContentJSON;
        if (typeof json !== "object" || json === null) throw new Error("bad");
        setC(json);
        applyContent(json);
        setToast("فایل وارد شد و پیش‌نمایش زنده اعمال شد.");
      })
      .catch(() => setToast("فایل انتخابی یک JSON معتبر نیست."));
  };

  const preview = () => {
    resetToDefaults();
    applyContent(c);
    setToast("تغییرات به‌صورت زنده اعمال شد — «مشاهده سایت» را بزنید.");
  };

  const reset = () => {
    if (!window.confirm("همه تغییرات به حالت کارخانه برگردد؟")) return;
    resetToDefaults();
    localStorage.removeItem(DRAFT_KEY);
    setC(snapshotContent());
    setToast("به حالت پیش‌فرض برگشت.");
  };

  const filteredGroups = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return EDITABLE_GROUPS;
    return EDITABLE_GROUPS.map((g) => ({
      ...g,
      keys: g.keys.filter((k) => {
        if (k.toLowerCase().includes(q)) return true;
        const loc = D[k];
        return !!loc && [loc.en, loc.ru, loc.ar].some((v) => v?.toLowerCase().includes(q));
      }),
    })).filter((g) => g.keys.length > 0);
  }, [search]);

  return (
    <div className="blueprint min-h-screen bg-graphite-950 pb-24">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-graphite-800 bg-graphite-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3.5">
          <Logo />
          <span className="border border-molten-500/50 bg-molten-500/10 px-2.5 py-1 font-display text-[0.62rem] font-bold uppercase tracking-[0.2em] text-molten-400">
            Content Studio
          </span>
          <span
            className={`hidden items-center gap-2 px-2.5 py-1 text-[0.65rem] font-semibold sm:flex ${
              serverContent
                ? "border border-wa/50 bg-wa/10 text-wa"
                : "border border-graphite-600 text-graphite-400"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${serverContent ? "bg-wa" : "bg-graphite-500"}`} />
            {serverContent
              ? "content.json روی سرور فعال است"
              : "content.json هنوز آپلود نشده — سایت روی پیش‌فرض است"}
          </span>
          <div className="ms-auto flex flex-wrap items-center gap-2">
            <Link
              to="/"
              className="border border-graphite-600 px-3.5 py-2 font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-graphite-200 transition-colors hover:border-molten-500 hover:text-molten-400"
            >
              مشاهده سایت
            </Link>
            <button
              onClick={preview}
              className="border border-steel-500/60 px-3.5 py-2 font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-steel-300 transition-colors hover:border-steel-400 hover:text-steel-300"
            >
              پیش‌نمایش زنده
            </button>
            <button
              onClick={copyJson}
              className="border border-graphite-600 px-3.5 py-2 font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-graphite-200 transition-colors hover:border-molten-500 hover:text-molten-400"
            >
              کپی JSON
            </button>
            <button
              onClick={download}
              className="bg-molten-500 px-4 py-2 font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-molten-400"
            >
              ⬇ دانلود content.json
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5">
          <nav className="flex gap-1 overflow-x-auto">
            {(
              [
                ["products", "محصولات"],
                ["texts", "متن‌های صفحات"],
                ["contact", "تماس و تیم"],
                ["images", "تصاویر"],
              ] as const
            ).map(([id, fa]) => (
              <button key={id} onClick={() => setTab(id)} className={tabBtn(tab === id)}>
                {fa}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {hasDraft.current && (
        <div className="mx-auto mt-5 flex max-w-6xl items-center justify-between gap-4 border border-steel-500/40 bg-steel-500/10 px-4 py-3 text-xs text-steel-300">
          <span>پیش‌نویس ذخیره‌شدهٔ جلسهٔ قبل بازیابی شد — تا وقتی دانلود نکنید، فقط روی همین مرورگر است.</span>
          <button
            onClick={() => {
              localStorage.removeItem(DRAFT_KEY);
              hasDraft.current = false;
              setC(snapshotContent());
            }}
            className="shrink-0 border border-steel-500/50 px-3 py-1.5 font-semibold transition-colors hover:bg-steel-500/20"
          >
            دور ریختن پیش‌نویس
          </button>
        </div>
      )}

      <main className="mx-auto mt-6 max-w-6xl px-5">
        {/* ================= PRODUCTS ================= */}
        {tab === "products" && (
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            {/* picker */}
            <div className="h-fit border border-graphite-800 bg-graphite-900 p-4 lg:sticky lg:top-32">
              <p className={lbl}>دسته</p>
              <select
                className={inp}
                value={catId}
                onChange={(e) => {
                  setCatId(e.target.value);
                  const nc = CATEGORIES.find((x) => x.id === e.target.value);
                  if (nc) setSlug(nc.products[0].slug);
                }}
              >
                {CATEGORIES.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.name.en}
                  </option>
                ))}
              </select>
              <p className={`${lbl} mt-4`}>محصول</p>
              <div className="max-h-[52vh] space-y-1 overflow-y-auto pe-1">
                {cat.products.map((x) => (
                  <button
                    key={x.slug}
                    onClick={() => setSlug(x.slug)}
                    className={`block w-full border px-3 py-2.5 text-start text-xs font-medium transition-all duration-200 ${
                      slug === x.slug
                        ? "border-molten-500 bg-molten-500/10 text-molten-400"
                        : "border-graphite-700 text-graphite-300 hover:border-graphite-500 hover:text-graphite-100"
                    }`}
                    dir="ltr"
                  >
                    {x.name.en}
                    <span className="mt-0.5 block text-[0.62rem] text-graphite-500">{x.grade}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* form */}
            {p && (
              <div className="space-y-6 border border-graphite-800 bg-graphite-900 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-graphite-800 pb-4">
                  <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-graphite-50" dir="ltr">
                    {p.name?.en}
                  </h2>
                  <Link
                    to={`/products/${slug}`}
                    className="border border-steel-500/50 px-3 py-1.5 font-display text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-steel-300 transition-colors hover:border-steel-400"
                  >
                    دیدن صفحه محصول
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <span className={lbl}>گرید (Grade)</span>
                    <input dir="ltr" className={inp} value={p.grade ?? ""} onChange={(e) => setProd("grade", e.target.value)} />
                  </div>
                  <div>
                    <span className={lbl}>حداقل سفارش (MOQ)</span>
                    <input dir="ltr" className={inp} value={p.moq ?? ""} onChange={(e) => setProd("moq", e.target.value)} />
                  </div>
                  <div>
                    <span className={lbl}>کد گمرکی (HS)</span>
                    <input dir="ltr" className={inp} value={p.hs ?? ""} onChange={(e) => setProd("hs", e.target.value)} />
                  </div>
                </div>

                <div>
                  <span className={lbl}>نام محصول — ۳ زبان</span>
                  <LocInput value={p.name as Loc} onChange={(v) => setProd("name", v)} />
                </div>
                <div>
                  <span className={lbl}>توضیح کوتاه — ۳ زبان</span>
                  <LocInput textarea value={p.summary as Loc} onChange={(v) => setProd("summary", v)} />
                </div>
                <div>
                  <span className={lbl}>بسته‌بندی — ۳ زبان</span>
                  <LocInput value={p.packing as Loc} onChange={(v) => setProd("packing", v)} />
                </div>

                {/* chem */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className={lbl}>آنالیز شیمیایی</span>
                    <button
                      onClick={() => setProd("chem", [...(p.chem ?? []), ["", ""]])}
                      className="border border-graphite-600 px-2.5 py-1 text-[0.65rem] font-bold text-graphite-300 transition-colors hover:border-molten-500 hover:text-molten-400"
                    >
                      + ردیف جدید
                    </button>
                  </div>
                  <div className="space-y-2">
                    {(p.chem ?? []).map((row, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input
                          dir="ltr"
                          className={inp}
                          placeholder="Fe (total)"
                          value={row[0]}
                          onChange={(e) =>
                            setProd("chem", (p.chem ?? []).map((r, j) => (j === i ? [e.target.value, r[1]] : r)))
                          }
                        />
                        <input
                          dir="ltr"
                          className={inp}
                          placeholder="65–67%"
                          value={row[1]}
                          onChange={(e) =>
                            setProd("chem", (p.chem ?? []).map((r, j) => (j === i ? [r[0], e.target.value] : r)))
                          }
                        />
                        <button
                          onClick={() => setProd("chem", (p.chem ?? []).filter((_, j) => j !== i))}
                          className="shrink-0 border border-graphite-700 px-2.5 py-2 text-xs text-graphite-500 transition-colors hover:border-red-500 hover:text-red-400"
                          aria-label="حذف ردیف"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* mech */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className={lbl}>مشخصات ابعادی / مکانیکی</span>
                    <button
                      onClick={() => setProd("mech", [...(p.mech ?? []), { k: "size", v: "" }])}
                      className="border border-graphite-600 px-2.5 py-1 text-[0.65rem] font-bold text-graphite-300 transition-colors hover:border-molten-500 hover:text-molten-400"
                    >
                      + ردیف جدید
                    </button>
                  </div>
                  <div className="space-y-2">
                    {(p.mech ?? []).map((row, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input
                          dir="ltr"
                          list="mech-keys"
                          className={inp}
                          placeholder="size"
                          value={row.k}
                          onChange={(e) =>
                            setProd("mech", (p.mech ?? []).map((r, j) => (j === i ? { ...r, k: e.target.value } : r)))
                          }
                        />
                        <input
                          dir="ltr"
                          className={inp}
                          placeholder="100×100 mm"
                          value={row.v}
                          onChange={(e) =>
                            setProd("mech", (p.mech ?? []).map((r, j) => (j === i ? { ...r, v: e.target.value } : r)))
                          }
                        />
                        <button
                          onClick={() => setProd("mech", (p.mech ?? []).filter((_, j) => j !== i))}
                          className="shrink-0 border border-graphite-700 px-2.5 py-2 text-xs text-graphite-500 transition-colors hover:border-red-500 hover:text-red-400"
                          aria-label="حذف ردیف"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    <datalist id="mech-keys">
                      {MECH_KEYS.map((k) => (
                        <option key={k} value={k} />
                      ))}
                    </datalist>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <span className={lbl}>استانداردها (با کاما جدا کنید)</span>
                    <input
                      dir="ltr"
                      className={inp}
                      value={csv(p.standards)}
                      onChange={(e) => setProd("standards", fromCsv(e.target.value))}
                    />
                  </div>
                  <div>
                    <span className={lbl}>بنادر (با کاما)</span>
                    <input dir="ltr" className={inp} value={csv(p.ports)} onChange={(e) => setProd("ports", fromCsv(e.target.value))} />
                  </div>
                  <div>
                    <span className={lbl}>اینکوترمز (با کاما)</span>
                    <input
                      dir="ltr"
                      className={inp}
                      value={csv(p.incoterms)}
                      onChange={(e) => setProd("incoterms", fromCsv(e.target.value))}
                    />
                  </div>
                </div>

                {/* apps */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className={lbl}>کاربردها — ۳ زبان</span>
                    <button
                      onClick={() => setProd("apps", [...(p.apps ?? []), { en: "", ru: "", ar: "" }])}
                      className="border border-graphite-600 px-2.5 py-1 text-[0.65rem] font-bold text-graphite-300 transition-colors hover:border-molten-500 hover:text-molten-400"
                    >
                      + کاربرد جدید
                    </button>
                  </div>
                  <div className="space-y-3">
                    {(p.apps ?? []).map((a, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="flex-1">
                          <LocInput value={a as Loc} onChange={(v) => setProd("apps", (p.apps ?? []).map((x, j) => (j === i ? v : x)))} />
                        </div>
                        <button
                          onClick={() => setProd("apps", (p.apps ?? []).filter((_, j) => j !== i))}
                          className="mt-6 shrink-0 border border-graphite-700 px-2.5 py-2 text-xs text-graphite-500 transition-colors hover:border-red-500 hover:text-red-400"
                          aria-label="حذف کاربرد"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className={lbl}>مسئول فروش این محصول</span>
                  <select
                    className={inp}
                    value={p.rep ?? 0}
                    onChange={(e) => setProd("rep", Number(e.target.value))}
                  >
                    {TEAM.map((m, i) => (
                      <option key={m.id} value={i}>
                        {m.name} — {m.langs}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TEXTS ================= */}
        {tab === "texts" && (
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <input
                className={`${inp} max-w-sm`}
                placeholder="جستجو در کلید یا متن… (مثلاً hero یا price)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="text-xs text-graphite-500">
                فقط متن داخل کادرها را عوض کنید — نام کلیدها خودکار است.
              </span>
            </div>
            <div className="space-y-6">
              {filteredGroups.map((g) => (
                <section key={g.title} className="border border-graphite-800 bg-graphite-900">
                  <h3 className="border-b border-graphite-800 bg-graphite-850 px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-molten-400">
                    {g.title}
                    <span className="ms-2 text-[0.62rem] text-graphite-500">({g.keys.length})</span>
                  </h3>
                  <div className="divide-y divide-graphite-800">
                    {g.keys.map((key) => (
                      <div key={key} className="px-5 py-4">
                        <p className="mb-2 font-mono text-[0.68rem] tracking-wide text-steel-300" dir="ltr">
                          {key}
                        </p>
                        <LocInput
                          value={(c.texts?.[key] as Loc) ?? { en: "", ru: "", ar: "" }}
                          onChange={(v) =>
                            up((d) => {
                              if (!d.texts) d.texts = {};
                              d.texts[key] = v;
                            })
                          }
                          textarea={(key.startsWith("hero.sub") || key.startsWith("ab.p") || key.includes("desc") || key.includes("note") || key.includes("Sub"))}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              ))}
              {filteredGroups.length === 0 && (
                <p className="border border-dashed border-graphite-700 p-8 text-center text-sm text-graphite-500">
                  موردی با این عبارت پیدا نشد.
                </p>
              )}
            </div>
          </div>
        )}

        {/* ================= CONTACT & TEAM ================= */}
        {tab === "contact" && (
          <div className="grid gap-6 lg:grid-cols-2">
            <section className="h-fit border border-graphite-800 bg-graphite-900 p-6">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-molten-400">
                اطلاعات تماس
              </h3>
              {(
                [
                  ["phoneDisplay", "تلفن (نمایشی)"],
                  ["phoneRaw", "تلفن (بدون فاصله — برای کلیک)"],
                  ["salesEmail", "ایمیل فروش"],
                  ["infoEmail", "ایمیل عمومی"],
                  ["mainWa", "واتس‌اپ اصلی (کد کشور بدون +)"],
                ] as const
              ).map(([k, fa]) => (
                <div key={k} className="mb-3">
                  <span className={lbl}>{fa}</span>
                  <input
                    dir="ltr"
                    className={inp}
                    value={(c.contact?.[k] as string) ?? ""}
                    onChange={(e) => up((d) => {
                      if (!d.contact) d.contact = {};
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (d.contact as any)[k] = e.target.value;
                    })}
                  />
                </div>
              ))}
            </section>

            <div className="space-y-6">
              {TEAM.map((m) => (
                <section key={m.id} className="border border-graphite-800 bg-graphite-900 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <img src={m.img} alt={m.name} className="h-12 w-12 border border-graphite-700 object-cover grayscale" />
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-graphite-100">
                      {m.name}
                    </h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <span className={lbl}>نام</span>
                      <input
                        dir="ltr"
                        className={inp}
                        value={c.team?.[m.id]?.name ?? m.name}
                        onChange={(e) => up((d) => {
                          if (!d.team) d.team = {};
                          if (!d.team[m.id]) d.team[m.id] = {};
                          d.team[m.id]!.name = e.target.value;
                        })}
                      />
                    </div>
                    <div>
                      <span className={lbl}>زبان‌ها</span>
                      <input
                        dir="ltr"
                        className={inp}
                        value={c.team?.[m.id]?.langs ?? m.langs}
                        onChange={(e) => up((d) => {
                          if (!d.team) d.team = {};
                          if (!d.team[m.id]) d.team[m.id] = {};
                          d.team[m.id]!.langs = e.target.value;
                        })}
                      />
                    </div>
                    <div>
                      <span className={lbl}>واتس‌اپ مستقیم</span>
                      <input
                        dir="ltr"
                        className={inp}
                        value={c.team?.[m.id]?.wa ?? m.wa}
                        onChange={(e) => up((d) => {
                          if (!d.team) d.team = {};
                          if (!d.team[m.id]) d.team[m.id] = {};
                          d.team[m.id]!.wa = e.target.value;
                        })}
                      />
                    </div>
                    <div>
                      <span className={lbl}>ایمیل</span>
                      <input
                        dir="ltr"
                        className={inp}
                        value={c.team?.[m.id]?.email ?? m.email}
                        onChange={(e) => up((d) => {
                          if (!d.team) d.team = {};
                          if (!d.team[m.id]) d.team[m.id] = {};
                          d.team[m.id]!.email = e.target.value;
                        })}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-[0.68rem] leading-relaxed text-graphite-500">
                    عنوان شغلی و بازارهای هر نفر در تب «متن‌های صفحات» قابل ویرایش است
                    (کلیدهای team.role و team.m).
                  </p>
                </section>
              ))}
            </div>
          </div>
        )}

        {/* ================= IMAGES ================= */}
        {tab === "images" && (
          <section className="border border-graphite-800 bg-graphite-900 p-6">
            <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-[0.16em] text-molten-400">
              مسیر تصاویر
            </h3>
            <p className="mb-5 text-xs leading-relaxed text-graphite-500">
              مسیر هر تصویر را عوض کنید (مثلاً عکس واقعی محصولتان در{" "}
              <span dir="ltr" className="text-steel-300">/images/billets.png</span> یا یک آدرس اینترنتی کامل). تغییرات بعد از
              دانلود و آپلود content.json اعمال می‌شود.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {IMAGE_SLOTS.map((s) => {
                const val = c.images?.[s.key] ?? "";
                return (
                  <div key={s.key} className="flex items-center gap-3 border border-graphite-800 bg-graphite-950/60 p-3">
                    <img
                      src={val}
                      alt={s.label}
                      className="h-14 w-20 shrink-0 border border-graphite-700 object-cover"
                      onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.15")}
                    />
                    <div className="min-w-0 flex-1">
                      <span className={lbl}>{s.label}</span>
                      <input
                        dir="ltr"
                        className={inp}
                        value={val}
                        onChange={(e) =>
                          up((d) => {
                            if (!d.images) d.images = {};
                            d.images[s.key] = e.target.value;
                          })
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* workflow note */}
        <div className="mt-8 border border-dashed border-graphite-600 bg-graphite-900/50 p-5 text-center">
          <p className="text-xs leading-loose text-graphite-400">
            <b className="text-molten-400">گردش‌کار:</b> ویرایش کنید ← «پیش‌نمایش زنده» برای دیدن روی سایت ←
            «دانلود content.json» ← آپلود این <b className="text-graphite-100">یک فایل کوچک</b> در ریشه هاست (کنار
            index.html) ← سایت بدون نیاز به بیلد یا آپلود دوبارهٔ کل فایل‌ها به‌روز می‌شود.
          </p>
          <button onClick={reset} className="mt-3 text-[0.68rem] font-semibold text-graphite-500 underline-offset-4 transition-colors hover:text-red-400 hover:underline">
            بازگشت همه‌چیز به حالت کارخانه
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) importFile(f);
              e.target.value = "";
            }}
          />
          <button
            onClick={() => fileRef.current?.click()}
            className="mt-3 block w-full border border-graphite-600 px-3 py-2 font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-graphite-300 transition-colors hover:border-molten-500 hover:text-molten-400 sm:mt-0 sm:inline-block sm:w-auto"
          >
            وارد کردن فایل content.json موجود
          </button>
        </div>
      </main>

      {/* toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 border border-molten-500/60 bg-graphite-900 px-5 py-3.5 text-center text-sm font-medium text-graphite-100 shadow-2xl shadow-graphite-950/60">
          {toast}
        </div>
      )}
    </div>
  );
}
