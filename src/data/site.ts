import type { Loc } from "../i18n";

export const CONTACT = {
  phoneDisplay: "+98 21 9100 4510",
  phoneRaw: "+982191004510",
  salesEmail: "sales@persismetal.com",
  infoEmail: "info@persismetal.com",
  mainWa: "989120004510",
};

export type TeamMember = {
  id: string;
  name: string;
  roleKey: string;
  langs: string;
  marketsKey: string;
  img: string;
  wa: string;
  email: string;
};

export const TEAM: TeamMember[] = [
  {
    id: "amir",
    name: "Amir Reza Hosseini",
    roleKey: "team.role1",
    langs: "EN · AR · FA",
    marketsKey: "team.m1",
    img: "/images/team-amir.png",
    wa: "989121004511",
    email: "a.hosseini@persismetal.com",
  },
  {
    id: "reza",
    name: "Reza Karimi",
    roleKey: "team.role2",
    langs: "RU · EN",
    marketsKey: "team.m2",
    img: "/images/team-reza.png",
    wa: "989121004512",
    email: "r.karimi@persismetal.com",
  },
  {
    id: "sara",
    name: "Sara Mohammadi",
    roleKey: "team.role3",
    langs: "EN",
    marketsKey: "team.m3",
    img: "/images/team-sara.png",
    wa: "989121004513",
    email: "s.mohammadi@persismetal.com",
  },
];

/**
 * All photography is self-hosted from the /images folder on the web server.
 * Upload the 10 originals (links in public/images/README.txt) with these exact names.
 */
export const IMAGES = {
  hero: "/images/billets.png",
  warehouse: "/images/warehouse.png",
  port: "/images/port.png",
  nonferrous: "/images/nonferrous.png",
  loading: "/images/loading.png",
  pellet: "/images/pellets.png",
  coil: "/images/coils.png",
};

/**
 * Automatic fallback: if a local /images/* file is missing on the host
 * (e.g. the client has not uploaded the photos yet), the image is served
 * from the original source instead — so the site never shows broken images.
 */
const REMOTE_IMAGES: Record<string, string> = {
  "/images/billets.png":
    "https://image.qwenlm.ai/generated-images/4989573f-7074-47f7-84d7-2188ef41f670/_result.png",
  "/images/pellets.png":
    "https://image.qwenlm.ai/generated-images/d1117b0c-ac19-4a56-964f-d25cc4fd5729/_result.png",
  "/images/coils.png":
    "https://image.qwenlm.ai/generated-images/b78a5f58-22a3-4022-abe1-b0dfd2584f2b/_result.png",
  "/images/nonferrous.png":
    "https://image.qwenlm.ai/generated-images/814cfd1f-2dc0-4210-9e4c-5b71ced3f424/_result.png",
  "/images/warehouse.png":
    "https://image.qwenlm.ai/generated-images/96969773-b607-4ff9-8c29-42810c7c5710/_result.png",
  "/images/loading.png":
    "https://image.qwenlm.ai/generated-images/41dec6d2-1d0f-4b16-a56b-16e320c130f8/_result.png",
  "/images/port.png":
    "https://image.qwenlm.ai/generated-images/3b892691-6840-44ec-8bd9-3af2d6f064c7/_result.png",
  "/images/team-amir.png":
    "https://image.qwenlm.ai/generated-images/3dd21f7b-93dd-43a4-836f-3a13798ab000/_result.png",
  "/images/team-reza.png":
    "https://image.qwenlm.ai/generated-images/fa47d1a7-edcf-48c4-8c08-5be11c0b1e96/_result.png",
  "/images/team-sara.png":
    "https://image.qwenlm.ai/generated-images/23e05da4-5994-47ff-87fd-6fd905ae211b/_result.png",
};

export const imageFallback = (src: string): string | null =>
  REMOTE_IMAGES[src] ?? null;

export const CAT_IMAGE: Record<string, string> = {
  "iron-ore": IMAGES.pellet,
  "semi-finished": IMAGES.hero,
  "long-structural": IMAGES.loading,
  "flat-steel": IMAGES.coil,
  copper: IMAGES.nonferrous,
  aluminum: IMAGES.nonferrous,
  ferroalloys: IMAGES.warehouse,
};

/** Per-product real photography (falls back to the category image). */
export const PRODUCT_IMAGE: Record<string, string> = {
  "iron-ore-concentrate": IMAGES.pellet,
  "iron-ore-pellet": IMAGES.pellet,
  "sponge-iron-dri": IMAGES.pellet,
  "billet-bloom": IMAGES.hero,
  "steel-slab": IMAGES.hero,
  "pig-iron": IMAGES.warehouse,
  rebar: IMAGES.loading,
  "steel-wire-rod": IMAGES.loading,
  "angle-bar": IMAGES.loading,
  "u-channel": IMAGES.loading,
  "ipe-hea-beam": IMAGES.loading,
  "hot-rolled-coil": IMAGES.coil,
  "cold-rolled-coil": IMAGES.coil,
  "galvanized-sheet": IMAGES.coil,
  "copper-cathode": IMAGES.nonferrous,
  "copper-wire-rod": IMAGES.nonferrous,
  "copper-sections": IMAGES.nonferrous,
  "aluminum-ingot": IMAGES.nonferrous,
  "aluminum-billet": IMAGES.nonferrous,
  "aluminum-slab": IMAGES.nonferrous,
  "aluminum-sections-sheets": IMAGES.nonferrous,
  "ferro-silicon-75": IMAGES.warehouse,
  "silico-manganese-65": IMAGES.warehouse,
};

export const productImage = (slug: string, catId: string): string =>
  PRODUCT_IMAGE[slug] ?? CAT_IMAGE[catId] ?? IMAGES.warehouse;

type Shipment = {
  product: string;
  qty: string;
  route: Loc;
  terms: string;
  status: "loading" | "transit" | "booked";
};

export const MANIFEST: Shipment[] = [
  {
    product: "Billet 5SP · 120×120",
    qty: "2,500 t",
    route: {
      en: "Bandar Abbas → Jebel Ali",
      ru: "Бендер-Аббас → Джебель-Али",
      ar: "بندر عباس ← جبل علي",
    },
    terms: "CFR · LC",
    status: "loading",
  },
  {
    product: "Pellet Fe 65%",
    qty: "25,000 t",
    route: {
      en: "Bandar Abbas → Qingdao",
      ru: "Бендер-Аббас → Циндао",
      ar: "بندر عباس ← تشينغداو",
    },
    terms: "CIF · TT",
    status: "booked",
  },
  {
    product: "Rebar A3 Ø16",
    qty: "1,800 t",
    route: {
      en: "Kermanshah → Parvizkhan → Baghdad",
      ru: "Керманшах → Парвизхан → Багдад",
      ar: "كرمانشاه ← برويزخان ← بغداد",
    },
    terms: "DAP · IQD",
    status: "transit",
  },
  {
    product: "Copper Cathode 99.99%",
    qty: "500 t",
    route: {
      en: "Bandar Abbas → Shanghai",
      ru: "Бендер-Аббас → Шанхай",
      ar: "بندر عباس ← شنغهاي",
    },
    terms: "CIF · LC",
    status: "loading",
  },
  {
    product: "Billet 3SP",
    qty: "3,000 t",
    route: {
      en: "Sarakhs rail → Tashkent",
      ru: "Серахс (ж/д) → Ташкент",
      ar: "سرخس بالسكك ← طشقند",
    },
    terms: "DAP · USD",
    status: "transit",
  },
];

export const MARKETS = [
  {
    code: "IQ",
    nameKey: "mkt.iraq",
    demandKey: "mkt.iraqD",
    mode: { en: "Road & sea", ru: "Авто и море", ar: "برًا وبحرًا" },
    transit: "7–12",
    gate: {
      en: "Parvizkhan · Umm Qasr",
      ru: "Парвизхан · Умм-Каср",
      ar: "برويزخان · أم قصر",
    },
  },
  {
    code: "AF",
    nameKey: "mkt.afghan",
    demandKey: "mkt.afghanD",
    mode: { en: "Road", ru: "Авто", ar: "برًا" },
    transit: "5–9",
    gate: {
      en: "Dogharoon · Islam Qala",
      ru: "Догарун · Ислам-Кала",
      ar: "دوغارون · إسلام قلعة",
    },
  },
  {
    code: "CIS",
    nameKey: "mkt.cis",
    demandKey: "mkt.cisD",
    mode: { en: "Rail", ru: "Ж/д", ar: "سكك حديدية" },
    transit: "10–16",
    gate: {
      en: "Sarakhs · Incheh Borun",
      ru: "Серахс · Инче-Борун",
      ar: "سرخس · إينجه برون",
    },
  },
  {
    code: "CN",
    nameKey: "mkt.china",
    demandKey: "mkt.chinaD",
    mode: { en: "Sea", ru: "Море", ar: "بحرًا" },
    transit: "18–25",
    gate: {
      en: "Bandar Abbas → Qingdao",
      ru: "Бендер-Аббас → Циндао",
      ar: "بندر عباس ← تشينغداو",
    },
  },
] as const;

export const MILLS = [
  "Mobarakeh Steel",
  "Khuzestan Steel",
  "Esfahan Steel",
  "Golgohar Mining",
  "Chadormalou Mining",
  "Sarcheshmeh Copper",
  "IRALCO Arak",
  "Hormozgan Steel",
];

export const TICKER_ITEMS = [
  "IRON ORE CONCENTRATE Fe 67%",
  "PELLET Fe 65%",
  "SPONGE IRON DRI",
  "BILLET 3SP / 5SP",
  "REBAR A3 · B500",
  "WIRE ROD SAE 1008",
  "HRC ST37-2",
  "CRC SPCC",
  "GI DX51D +Z120",
  "COPPER CATHODE 99.99%",
  "CU WIRE ROD 8 MM",
  "AL INGOT A7",
  "AL BILLET 6063",
  "FERRO SILICON 75%",
  "IPE / HEA BEAMS",
  "STEEL SLAB St37",
];
