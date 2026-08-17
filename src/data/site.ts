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
    img: "https://image.qwenlm.ai/generated-images/3dd21f7b-93dd-43a4-836f-3a13798ab000/_result.png",
    wa: "989121004511",
    email: "a.hosseini@persismetal.com",
  },
  {
    id: "reza",
    name: "Reza Karimi",
    roleKey: "team.role2",
    langs: "RU · EN",
    marketsKey: "team.m2",
    img: "https://image.qwenlm.ai/generated-images/fa47d1a7-edcf-48c4-8c08-5be11c0b1e96/_result.png",
    wa: "989121004512",
    email: "r.karimi@persismetal.com",
  },
  {
    id: "sara",
    name: "Sara Mohammadi",
    roleKey: "team.role3",
    langs: "EN",
    marketsKey: "team.m3",
    img: "https://image.qwenlm.ai/generated-images/23e05da4-5994-47ff-87fd-6fd905ae211b/_result.png",
    wa: "989121004513",
    email: "s.mohammadi@persismetal.com",
  },
];

export const IMAGES = {
  hero: "https://image.qwenlm.ai/generated-images/4989573f-7074-47f7-84d7-2188ef41f670/_result.png",
  warehouse:
    "https://image.qwenlm.ai/generated-images/96969773-b607-4ff9-8c29-42810c7c5710/_result.png",
  port: "https://image.qwenlm.ai/generated-images/3b892691-6840-44ec-8bd9-3af2d6f064c7/_result.png",
};

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
