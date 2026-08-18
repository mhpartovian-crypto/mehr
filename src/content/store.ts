import { CATEGORIES, type Product } from "../data/products";
import { CONTACT, TEAM, IMAGES } from "../data/site";
import { D, type Loc } from "../i18n";

/* ------------------------------------------------------------------ */
/*  content.json — the single file the client uploads to change texts  */
/* ------------------------------------------------------------------ */

export type TeamOverride = {
  name?: string;
  wa?: string;
  email?: string;
  langs?: string;
  img?: string;
};

export type ProductOverride = Partial<
  Pick<
    Product,
    | "grade"
    | "moq"
    | "hs"
    | "rep"
    | "name"
    | "summary"
    | "packing"
    | "chem"
    | "mech"
    | "standards"
    | "ports"
    | "incoterms"
    | "apps"
  >
>;

export type ContentJSON = {
  v?: number;
  updatedAt?: string;
  contact?: Partial<typeof CONTACT>;
  images?: Record<string, string>;
  team?: Record<string, TeamOverride>;
  texts?: Record<string, Partial<Loc>>;
  products?: Record<string, ProductOverride>;
};

let serverContentLoaded = false;
export const wasServerContentLoaded = () => serverContentLoaded;
export const markServerContent = (v: boolean) => {
  serverContentLoaded = v;
};

const clone = <T,>(x: T): T => JSON.parse(JSON.stringify(x));

/* snapshot of factory defaults (before any override) */
const DEFAULTS = {
  texts: clone(D),
  contact: clone(CONTACT),
  team: clone(TEAM),
  images: clone(IMAGES),
  products: clone(CATEGORIES),
};

function findProduct(slug: string): Product | undefined {
  for (const c of CATEGORIES) {
    const p = c.products.find((x) => x.slug === slug);
    if (p) return p;
  }
  return undefined;
}

/** Apply a content.json object onto the live data modules. */
export function applyContent(json: ContentJSON) {
  if (!json || typeof json !== "object") return;

  if (json.texts) {
    for (const [key, loc] of Object.entries(json.texts)) {
      if (!D[key]) D[key] = { en: "", ru: "", ar: "" };
      if (loc.en !== undefined) D[key].en = String(loc.en);
      if (loc.ru !== undefined) D[key].ru = String(loc.ru);
      if (loc.ar !== undefined) D[key].ar = String(loc.ar);
    }
  }

  if (json.contact) Object.assign(CONTACT, json.contact);

  if (json.images) {
    for (const [key, path] of Object.entries(json.images)) {
      if (key.startsWith("team.")) {
        const m = TEAM.find((x) => x.id === key.slice(5));
        if (m && typeof path === "string") m.img = path;
      } else if (key in IMAGES && typeof path === "string") {
        (IMAGES as Record<string, string>)[key] = path;
      }
    }
  }

  if (json.team) {
    for (const [id, o] of Object.entries(json.team)) {
      const m = TEAM.find((x) => x.id === id);
      if (!m) continue;
      if (o.name) m.name = o.name;
      if (o.wa) m.wa = o.wa;
      if (o.email) m.email = o.email;
      if (o.langs) m.langs = o.langs;
      if (o.img) m.img = o.img;
    }
  }

  if (json.products) {
    for (const [slug, o] of Object.entries(json.products)) {
      const p = findProduct(slug);
      if (!p || !o) continue;
      if (o.grade !== undefined) p.grade = o.grade;
      if (o.moq !== undefined) p.moq = o.moq;
      if (o.hs !== undefined) p.hs = o.hs;
      if (o.rep !== undefined) p.rep = o.rep;
      if (o.name) p.name = { ...p.name, ...o.name };
      if (o.summary) p.summary = { ...p.summary, ...o.summary };
      if (o.packing) p.packing = { ...p.packing, ...o.packing };
      if (Array.isArray(o.chem)) p.chem = o.chem as [string, string][];
      if (Array.isArray(o.mech)) p.mech = o.mech;
      if (Array.isArray(o.standards)) p.standards = o.standards;
      if (Array.isArray(o.ports)) p.ports = o.ports;
      if (Array.isArray(o.incoterms)) p.incoterms = o.incoterms;
      if (Array.isArray(o.apps)) p.apps = o.apps as Loc[];
    }
  }
}

/** Restore everything to the factory state (in memory). */
export function resetToDefaults() {
  for (const k of Object.keys(D)) delete D[k];
  Object.assign(D, clone(DEFAULTS.texts));
  Object.assign(CONTACT, clone(DEFAULTS.contact));
  TEAM.splice(0, TEAM.length, ...clone(DEFAULTS.team));
  Object.assign(IMAGES, clone(DEFAULTS.images));
  CATEGORIES.splice(0, CATEGORIES.length, ...clone(DEFAULTS.products));
}

/* ------------------------------------------------------------------ */
/*  editable-text registry for the Content Studio                      */
/* ------------------------------------------------------------------ */

export const EDITABLE_GROUPS: { title: string; keys: string[] }[] = [
  {
    title: "صفحه اول — معرفی (Hero)",
    keys: [
      "hero.kicker", "hero.t1", "hero.t2", "hero.sub",
      "hero.ctaWa", "hero.ctaQuote", "hero.reply",
      "hero.chip1", "hero.chip2", "hero.chip3",
      "hero.stockT", "hero.stockS", "hero.browse", "hero.view",
    ],
  },
  {
    title: "منو و هدر",
    keys: [
      "header.tag", "nav.home", "nav.products", "nav.blog",
      "nav.about", "nav.contact", "nav.quote", "ticker.label",
    ],
  },
  {
    title: "آمار",
    keys: ["stats.kicker", "stats.t1", "stats.t2", "stats.t3", "stats.t4"],
  },
  {
    title: "دسته‌بندی محصولات",
    keys: ["cat.kicker", "cat.title", "cat.sub", "cat.open", "cat.products", "pr.details"],
  },
  {
    title: "مزیت رقابتی",
    keys: ["adv.kicker", "adv.c1", "adv.c2", "adv.c3", "adv.c4"],
  },
  {
    title: "رسانه و بازارها",
    keys: [
      "media.kicker", "media.title", "media.sub",
      "mkt.kicker", "mkt.title", "mkt.sub", "mkt.days", "mkt.route",
      "mkt.iraq", "mkt.iraqD", "mkt.afghan", "mkt.afghanD",
      "mkt.cis", "mkt.cisD", "mkt.china", "mkt.chinaD",
      "mkt.russia", "mkt.russiaD",
    ],
  },
  {
    title: "تیم فروش",
    keys: [
      "team.kicker", "team.title", "team.sub", "team.wa",
      "team.role1", "team.role2", "team.role3",
      "team.m1", "team.m2", "team.m3",
    ],
  },
  {
    title: "مراحل کار و دعوت به اقدام",
    keys: [
      "proc.kicker", "proc.title",
      "proc.s1t", "proc.s2t", "proc.s3t", "proc.s4t", "proc.s5t",
      "cta.title", "cta.sub", "cta.btnWa", "cta.btnQuote",
    ],
  },
  {
    title: "صفحه محصول",
    keys: [
      "p.overview", "p.tech", "p.chem", "p.mech", "p.standards",
      "p.packing", "p.port", "p.incoterms", "p.moq", "p.hs", "p.origin",
      "p.apps", "p.salesTitle", "p.salesSub", "p.chat", "p.call",
      "p.analysisTitle", "p.analysisSub", "p.aSend", "p.aSuccess",
      "p.related", "p.back",
    ],
  },
  {
    title: "فرم استعلام قیمت",
    keys: [
      "q.title", "q.sub", "q.modeLabel", "q.modeWa", "q.modeEmail",
      "q.send", "q.sendEmail", "q.success", "q.successEmail",
      "q.benefits", "q.b1", "q.b2", "q.b3",
    ],
  },
  {
    title: "درباره ما و تماس",
    keys: [
      "ab.kicker", "ab.title", "ab.p1", "ab.p2",
      "ab.netK", "ab.netT", "ab.netSub", "ab.whyT",
      "contact.kicker", "contact.title", "contact.sub",
      "contact.hq", "contact.port", "contact.deskK",
    ],
  },
  {
    title: "بلاگ",
    keys: [
      "blog.kicker", "blog.title", "blog.sub", "blog.soon",
      "blog.mediaKicker", "blog.mediaTitle", "blog.mediaSub",
      "blog.m1", "blog.m2", "blog.m3", "blog.m4", "blog.m5",
    ],
  },
  {
    title: "فوتر و سئو",
    keys: [
      "footer.desc", "footer.links", "footer.cats", "footer.contact",
      "footer.wa", "footer.rights", "footer.note",
      "seo.home", "seo.products", "seo.about", "seo.contact",
    ],
  },
];

export const MECH_KEYS = [
  "size", "length", "weight", "diameter", "thickness", "width",
  "coilWeight", "moisture", "density", "strength", "zinc",
  "purity", "temper", "alloy", "elongation", "tensile", "yield", "mesh",
];

export const IMAGE_SLOTS: { key: string; label: string }[] = [
  { key: "hero", label: "اسلایدر — بیلت (صفحه اول و اسلایدر)" },
  { key: "pellet", label: "اسلایدر — گندله سنگ‌آهن" },
  { key: "coil", label: "اسلایدر — کویل نورد گرم" },
  { key: "nonferrous", label: "اسلایدر — مس و آلومینیوم" },
  { key: "warehouse", label: "انبار (رسانه و درباره ما)" },
  { key: "loading", label: "بارگیری بندر (رسانه و بلاگ)" },
  { key: "port", label: "بندر کانتینری (درباره ما)" },
  { key: "team.amir", label: "عکس — امیررضا حسینی" },
  { key: "team.reza", label: "عکس — رضا کریمی" },
  { key: "team.sara", label: "عکس — سارا محمدی" },
];

/* ------------------------------------------------------------------ */
/*  snapshot of the CURRENT merged state → ContentJSON (for export)    */
/* ------------------------------------------------------------------ */

export function snapshotContent(): ContentJSON {
  const texts: Record<string, Loc> = {};
  for (const g of EDITABLE_GROUPS) {
    for (const key of g.keys) {
      if (D[key]) texts[key] = clone(D[key]);
    }
  }

  const team: Record<string, TeamOverride> = {};
  for (const m of TEAM) {
    team[m.id] = { name: m.name, wa: m.wa, email: m.email, langs: m.langs, img: m.img };
  }

  const images: Record<string, string> = { ...clone(IMAGES) };
  for (const m of TEAM) images[`team.${m.id}`] = m.img;

  const products: Record<string, ProductOverride> = {};
  for (const c of CATEGORIES) {
    for (const p of c.products) {
      products[p.slug] = {
        grade: p.grade,
        moq: p.moq,
        hs: p.hs,
        rep: p.rep,
        name: clone(p.name),
        summary: clone(p.summary),
        packing: clone(p.packing),
        chem: clone(p.chem),
        mech: clone(p.mech),
        standards: clone(p.standards),
        ports: clone(p.ports),
        incoterms: clone(p.incoterms),
        apps: clone(p.apps),
      };
    }
  }

  return {
    v: 1,
    updatedAt: new Date().toISOString(),
    contact: { ...CONTACT },
    images,
    team,
    texts,
    products,
  };
}
