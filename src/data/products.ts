import type { Loc } from "../i18n";

export type IconKey =
  | "ore"
  | "pellet"
  | "dri"
  | "billet"
  | "slab"
  | "pigiron"
  | "rebar"
  | "wirerod"
  | "angle"
  | "channel"
  | "beam"
  | "coil"
  | "sheet"
  | "galvanized"
  | "cathode"
  | "cuwire"
  | "cusection"
  | "ingot"
  | "alubillet"
  | "aluslab"
  | "alusection"
  | "fesi"
  | "simn";

export type Product = {
  slug: string;
  icon: IconKey;
  grade: string;
  name: Loc;
  summary: Loc;
  packing: Loc;
  chem: [string, string][];
  mech: { k: string; v: string }[];
  standards: string[];
  moq: string;
  hs: string;
  ports: string[];
  incoterms: string[];
  apps: Loc[];
  rep: number; // index into TEAM
};

export type Category = {
  id: string;
  icon: IconKey;
  name: Loc;
  blurb: Loc;
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    id: "iron-ore",
    icon: "ore",
    name: {
      en: "Iron Ore & Primary Products",
      ru: "Железная руда и первичная продукция",
      ar: "خام الحديد والمنتجات الأولية",
    },
    blurb: {
      en: "Concentrate, pellet and DRI — the full reduction chain.",
      ru: "Концентрат, окатыши и ГБЖ — вся цепочка восстановления.",
      ar: "المركز والكريات والحديد الإسفنجي — سلسلة الاختزال الكاملة.",
    },
    products: [
      {
        slug: "iron-ore-concentrate",
        icon: "ore",
        grade: "Fe 65–67%",
        name: {
          en: "Iron Ore Concentrate",
          ru: "Железорудный концентрат",
          ar: "مركز خام الحديد",
        },
        summary: {
          en: "Fine-ground magnetite concentrate, the feedstock for pelletizing plants — high Fe, controlled silica, steady monthly volume.",
          ru: "Тонкомолотый магнетитовый концентрат — сырьё для окомковательных фабрик: высокое содержание Fe, контролируемый кремнезём, стабильный месячный объём.",
          ar: "مركز مغنتيت مطحون ناعم، المادة الخام لمصانع التكوير — حديد مرتفع وسيليكا مضبوطة وكميات شهرية مستقرة.",
        },
        packing: {
          en: "1–1.5 t big bags or bulk vessel",
          ru: "Биг-бэги 1–1,5 т или навалом",
          ar: "أكياس كبيرة ١–١٫٥ طن أو شحن صب",
        },
        chem: [
          ["Fe (total)", "65–67%"],
          ["SiO₂", "≤ 4.5%"],
          ["Al₂O₃", "≤ 2.2%"],
          ["S", "≤ 0.08%"],
          ["P", "≤ 0.05%"],
        ],
        mech: [
          { k: "mesh", v: "-325 mesh ≥ 85%" },
          { k: "moisture", v: "≤ 10%" },
          { k: "density", v: "2.1–2.4 t/m³" },
        ],
        standards: ["Buyer spec", "Typical Iranian magnetite"],
        moq: "5,000 t",
        hs: "2601.11",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Pelletizing plants", ru: "Окомковательные фабрики", ar: "مصانع التكوير" },
          { en: "Sinter feed", ru: "Агломерационная шихта", ar: "تغذية التلبيد" },
          { en: "Direct reduction", ru: "Прямое восстановление", ar: "الاختزال المباشر" },
        ],
        rep: 2,
      },
      {
        slug: "iron-ore-pellet",
        icon: "pellet",
        grade: "Fe 64–66%",
        name: {
          en: "Iron Ore Pellet",
          ru: "Железорудные окатыши",
          ar: "كريات خام الحديد",
        },
        summary: {
          en: "Fired pellets for direct-reduction furnaces and blast furnaces — uniform size, high crush strength, low fines.",
          ru: "Обожжённые окатыши для установок прямого восстановления и доменных печей — равномерная крупность, высокая прочность, минимум мелочи.",
          ar: "كريات محروقة لأفران الاختزال المباشر والأفران العالية — حجم منتظم ومتانة عالية ونسبة ناعم منخفضة.",
        },
        packing: {
          en: "Bulk vessel or 2 t bags on request",
          ru: "Навалом или мешки 2 т по запросу",
          ar: "شحن صب أو أكياس ٢ طن عند الطلب",
        },
        chem: [
          ["Fe (total)", "64–66%"],
          ["SiO₂", "≤ 3.2%"],
          ["Al₂O₃", "≤ 2.0%"],
          ["S", "≤ 0.06%"],
          ["P", "≤ 0.05%"],
        ],
        mech: [
          { k: "size", v: "9–16 mm" },
          { k: "strength", v: "≥ 250 kgf / pellet" },
          { k: "moisture", v: "≤ 1%" },
        ],
        standards: ["Golgohar spec", "Chadormalou spec"],
        moq: "10,000 t",
        hs: "2601.12",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "DRI plants", ru: "Установки прямого восстановления", ar: "مصانع الاختزال المباشر" },
          { en: "Blast furnace burden", ru: "Доменная шихта", ar: "شحنة الأفران العالية" },
          { en: "EAF charge", ru: "Шихта ЭДП", ar: "شحنة أفران القوس" },
        ],
        rep: 2,
      },
      {
        slug: "sponge-iron-dri",
        icon: "dri",
        grade: "Met. Fe ≥ 90%",
        name: {
          en: "Sponge Iron (DRI)",
          ru: "Губчатое железо (ГБЖ)",
          ar: "الحديد الإسفنجي (DRI)",
        },
        summary: {
          en: "Direct-reduced iron with high metallization — the clean scrap substitute for electric-arc furnaces.",
          ru: "Железо прямого восстановления с высокой степенью металлиации — чистый заменитель лома для электродуговых печей.",
          ar: "حديد مختزل مباشر بدرجة معدنة عالية — البديل النظيف للخردة في أفران القوس الكهربائي.",
        },
        packing: {
          en: "Bulk vessel, moisture-protected",
          ru: "Навалом, с защитой от влаги",
          ar: "شحن صب مع حماية من الرطوبة",
        },
        chem: [
          ["T.Fe", "88–92%"],
          ["Met. Fe", "≥ 90%"],
          ["C", "1.5–2.5%"],
          ["S", "≤ 0.03%"],
          ["P", "≤ 0.05%"],
        ],
        mech: [
          { k: "size", v: "3–12 mm fines · 9–12 mm lumps" },
          { k: "density", v: "1.4–1.8 t/m³" },
        ],
        standards: ["Typical Iranian DRI"],
        moq: "5,000 t",
        hs: "7203.10",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "EAF steelmaking", ru: "Электросталеплавильное производство", ar: "صناعة الصلب بالقوس الكهربائي" },
          { en: "Induction furnaces", ru: "Индукционные печи", ar: "الأفران الحثية" },
          { en: "Foundries", ru: "Литейные цеха", ar: "المسابك" },
        ],
        rep: 2,
      },
    ],
  },
  {
    id: "semi-finished",
    icon: "billet",
    name: {
      en: "Semi-Finished Steel",
      ru: "Полуфабрикаты из стали",
      ar: "منتجات الصلب نصف النهائية",
    },
    blurb: {
      en: "Billet, slab and pig iron — the raw shape of every long and flat product.",
      ru: "Заготовка, сляб и чугун — исходная форма всего сортового и плоского проката.",
      ar: "البليت والبليت المسطح وحديد التمساح — الشكل الخام لكل المنتجات الطويلة والمسطحة.",
    },
    products: [
      {
        slug: "billet-bloom",
        icon: "billet",
        grade: "3SP / 5SP / S235JR",
        name: { en: "Billet & Bloom", ru: "Заготовка и блюм", ar: "البليت والبلوم" },
        summary: {
          en: "Continuous-cast square billets and blooms — the rolling feed for rebar, wire rod and sections, with an MTC on every lot.",
          ru: "Непрерывнолитая квадратная заготовка и блюм — подкат для арматуры, катанки и профилей, с сертификатом на каждую партию.",
          ar: "بليت مربع وبلوم مصبوب مستمرًا — مادة الدرفلة لحديد التسليح ولفائف الأسلاك والمقاطع، مع شهادة فحص لكل دفعة.",
        },
        packing: {
          en: "Bundles 2–3 t, strapped; bulk or container",
          ru: "Пакеты 2–3 т, обвязка; навалом или в контейнере",
          ar: "حزم ٢–٣ طن مربوطة؛ صب أو حاويات",
        },
        chem: [
          ["C", "0.14–0.25%"],
          ["Mn", "0.40–0.70%"],
          ["Si", "≤ 0.15%"],
          ["S", "≤ 0.050%"],
          ["P", "≤ 0.040%"],
        ],
        mech: [
          { k: "size", v: "100×100 – 150×150 mm" },
          { k: "length", v: "6 / 12 m" },
          { k: "weight", v: "up to 2.5 t / pc" },
        ],
        standards: ["GOST 380-2005 (3SP, 5SP)", "S235JR"],
        moq: "1,000 t",
        hs: "7207.11 / 7207.20",
        ports: ["Bandar Abbas", "Amirabad (CIS)"],
        incoterms: ["FOB", "CFR", "CIF", "DAP"],
        apps: [
          { en: "Rebar rolling", ru: "Прокатка арматуры", ar: "درفلة حديد التسليح" },
          { en: "Wire rod mills", ru: "Катаные станы", ar: "مصانع لفائف الأسلاك" },
          { en: "Forging & sections", ru: "Ковка и профили", ar: "التشكيل والمقاطع" },
        ],
        rep: 0,
      },
      {
        slug: "steel-slab",
        icon: "slab",
        grade: "St37 / S235",
        name: { en: "Steel Slab", ru: "Стальной сляб", ar: "البليت المسطح (سلاب)" },
        summary: {
          en: "Wide continuous-cast slabs for hot rolling into plate and strip — clean surface, certified chemistry.",
          ru: "Широкие слябы непрерывной разливки под горячую прокатку листа и полосы — чистая поверхность, сертифицированная химия.",
          ar: "بليت مسطح عريض مصبوب مستمرًا للدرفلة على الساخن إلى ألواح وشرائط — سطح نظيف وتركيب كيميائي معتمد.",
        },
        packing: {
          en: "Unit loads, dunnaged; break-bulk vessel",
          ru: "Пакеты с прокладками; судно типа break-bulk",
          ar: "حمولات وحدة مع فواصل؛ سفينة بضائع عامة",
        },
        chem: [
          ["C", "≤ 0.17%"],
          ["Mn", "0.35–0.65%"],
          ["Si", "≤ 0.15%"],
          ["S", "≤ 0.035%"],
          ["P", "≤ 0.035%"],
        ],
        mech: [
          { k: "thickness", v: "200 / 250 mm" },
          { k: "width", v: "1,000–1,600 mm" },
          { k: "length", v: "6–12 m" },
        ],
        standards: ["St37", "S235JR"],
        moq: "2,000 t",
        hs: "7207.12",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Plate mills", ru: "Толстолистовые станы", ar: "مصانع الألواح" },
          { en: "Hot strip mills", ru: "Широкополосные станы", ar: "مصانع الشرائط الساخنة" },
          { en: "Pipe production", ru: "Трубное производство", ar: "إنتاج الأنابيب" },
        ],
        rep: 1,
      },
      {
        slug: "pig-iron",
        icon: "pigiron",
        grade: "Grade A / B",
        name: { en: "Pig Iron", ru: "Передельный чугун", ar: "حديد التمساح" },
        summary: {
          en: "Blast-furnace pig iron in casting pigs — a foundry and EAF chemistry booster with low residual elements.",
          ru: "Доменный передельный чугун в чушках — добавка для литейных и ЭДП с низкими примесями.",
          ar: "حديد تمساح من الفرن العالي على هيئة سبائك صب — معزز كيميائي للمسابك وأفران القوس بنسب شوائب منخفضة.",
        },
        packing: {
          en: "Pigs on pallets, container loaded",
          ru: "Чушки на паллетах, загрузка в контейнер",
          ar: "سبائك على منصات داخل حاويات",
        },
        chem: [
          ["C", "4.0–4.5%"],
          ["Si", "0.5–1.5%"],
          ["Mn", "≤ 1.0%"],
          ["S", "≤ 0.05%"],
          ["P", "≤ 0.15%"],
        ],
        mech: [{ k: "weight", v: "18–40 kg / pig" }],
        standards: ["GOST 805", "Foundry grade"],
        moq: "1,000 t",
        hs: "7201.10",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Foundries", ru: "Литейные цеха", ar: "المسابك" },
          { en: "EAF melt shops", ru: "Электросталеплавильные цеха", ar: "مصاهر القوس الكهربائي" },
          { en: "Ductile iron", ru: "Высокопрочный чугун", ar: "الحديد الزهر المرن" },
        ],
        rep: 1,
      },
    ],
  },
  {
    id: "long-structural",
    icon: "rebar",
    name: {
      en: "Long & Structural Steel",
      ru: "Сортовой и конструкционный прокат",
      ar: "حديد التسليح والمنتجات الإنشائية",
    },
    blurb: {
      en: "Rebar, wire rod and sections — the skeleton of every construction site.",
      ru: "Арматура, катанка и профили — каркас любой стройки.",
      ar: "حديد التسليح ولفائف الأسلاك والمقاطع — هيكل كل موقع بناء.",
    },
    products: [
      {
        slug: "rebar",
        icon: "rebar",
        grade: "A3 / A4 · B500",
        name: {
          en: "Reinforcing Bar (Rebar)",
          ru: "Арматурный прокат",
          ar: "حديد التسليح (الأسياخ)",
        },
        summary: {
          en: "Deformed reinforcement bar in A3/A4 and B500 grades — bendable, weldable, bundled and tagged for site delivery.",
          ru: "Арматура периодического профиля А3/А4 и B500 — гнётся, варится, пакетируется и маркируется под поставку на стройплощадку.",
          ar: "حديد تسليح مضلع بدرجتي A3/A4 وB500 — قابل للثني واللحام، مربوط بربطات ومعلّم للتسليم في الموقع.",
        },
        packing: {
          en: "Bundles 2 t, tagged; truck or container",
          ru: "Пакеты 2 т, бирки; автотранспорт или контейнер",
          ar: "حزم ٢ طن معلّمة؛ شاحنات أو حاويات",
        },
        chem: [
          ["C", "≤ 0.30%"],
          ["Mn", "0.50–1.20%"],
          ["Si", "≤ 0.35%"],
          ["S", "≤ 0.045%"],
          ["P", "≤ 0.045%"],
        ],
        mech: [
          { k: "diameter", v: "8–32 mm" },
          { k: "length", v: "12 m" },
          { k: "tensile", v: "≥ 600 MPa (A3)" },
          { k: "yield", v: "≥ 390 MPa (A3)" },
        ],
        standards: ["GOST 34028", "ASTM A615", "BS 4449"],
        moq: "500 t",
        hs: "7214.20",
        ports: ["Bandar Abbas", "Parvizkhan (land)", "Dogharoon (land)"],
        incoterms: ["FOB", "CFR", "DAP"],
        apps: [
          { en: "Construction", ru: "Строительство", ar: "الإنشاءات" },
          { en: "Bridges & infrastructure", ru: "Мосты и инфраструктура", ar: "الجسور والبنية التحتية" },
          { en: "Precast concrete", ru: "ЖБИ", ar: "الخرسانة الجاهزة" },
        ],
        rep: 0,
      },
      {
        slug: "steel-wire-rod",
        icon: "wirerod",
        grade: "SAE 1006 / 1008",
        name: { en: "Steel Wire Rod", ru: "Стальная катанка", ar: "لفائف الأسلاك الفولاذية" },
        summary: {
          en: "Low-carbon wire rod coils for nails, mesh, screws and cold heading — smooth drawability, tight tolerances.",
          ru: "Низкоуглеродистая катанка в бунтах для гвоздей, сетки, метизов и холодной высадки — стабильная волочимость.",
          ar: "لفائف أسلاك فولاذية منخفضة الكربون للمسامير والشبك والبراغي — قابلية سحب منتظمة وقيود قياس دقيقة.",
        },
        packing: {
          en: "Coils 1.8–2.4 t, strapped",
          ru: "Бунты 1,8–2,4 т, обвязка",
          ar: "لفات ١٫٨–٢٫٤ طن مربوطة",
        },
        chem: [
          ["C", "0.04–0.10%"],
          ["Mn", "0.25–0.50%"],
          ["Si", "≤ 0.05%"],
          ["S", "≤ 0.035%"],
          ["P", "≤ 0.030%"],
        ],
        mech: [
          { k: "diameter", v: "5.5–8 mm" },
          { k: "coilWeight", v: "1.8–2.4 t" },
          { k: "elongation", v: "≥ 30%" },
        ],
        standards: ["ASTM A510", "JIS G3505"],
        moq: "500 t",
        hs: "7213.91",
        ports: ["Bandar Abbas", "Parvizkhan (land)"],
        incoterms: ["FOB", "CFR", "CIF", "DAP"],
        apps: [
          { en: "Nails & screws", ru: "Гвозди и метизы", ar: "المسامير والبراغي" },
          { en: "Wire mesh", ru: "Сетка", ar: "الشبك السلكي" },
          { en: "Cold heading", ru: "Холодная высадка", ar: "التشكيل على البارد" },
        ],
        rep: 0,
      },
      {
        slug: "angle-bar",
        icon: "angle",
        grade: "A36 / St37",
        name: { en: "Angle Bar", ru: "Уголок", ar: "الزوايا الفولاذية" },
        summary: {
          en: "Equal-leg hot-rolled angles for frames, bracing and towers — straight, true, drillable.",
          ru: "Горячекатаный равнополочный уголок для каркасов, связей и башен — ровный, точный, сверлится без увода.",
          ar: "زوايا مدرفلة على الساخن متساوية الأضلاع للهياكل والدعامات والأبراج — مستقيمة ودقيقة وقابلة للحفر.",
        },
        packing: {
          en: "Bundles, strapped; truck or container",
          ru: "Пакеты, обвязка; автотранспорт или контейнер",
          ar: "حزم مربوطة؛ شاحنات أو حاويات",
        },
        chem: [
          ["C", "≤ 0.22%"],
          ["Mn", "0.30–0.65%"],
          ["Si", "≤ 0.30%"],
          ["S", "≤ 0.040%"],
          ["P", "≤ 0.040%"],
        ],
        mech: [
          { k: "size", v: "25×25 – 100×100 mm" },
          { k: "thickness", v: "3–10 mm" },
          { k: "length", v: "6 / 12 m" },
        ],
        standards: ["ASTM A36", "EN 10056"],
        moq: "300 t",
        hs: "7216.21",
        ports: ["Bandar Abbas", "Parvizkhan (land)"],
        incoterms: ["FOB", "CFR", "DAP"],
        apps: [
          { en: "Steel frames", ru: "Стальные каркасы", ar: "الهياكل الفولاذية" },
          { en: "Transmission towers", ru: "ЛЭП и башни", ar: "أبراج الكهرباء" },
          { en: "Machinery", ru: "Машиностроение", ar: "الآلات" },
        ],
        rep: 0,
      },
      {
        slug: "u-channel",
        icon: "channel",
        grade: "UPN 50–300 · St37",
        name: { en: "U Channel", ru: "Швеллер", ar: "قنوات U الفولاذية" },
        summary: {
          en: "Hot-rolled U channels for chassis, purlins and support frames — consistent leg geometry.",
          ru: "Горячекатаный швеллер для рам, прогонов и опор — стабильная геометрия полок.",
          ar: "قنوات U مدرفلة على الساخن للهياكل والمدادات والدعامات — هندسة أضلاع ثابتة.",
        },
        packing: {
          en: "Bundles, strapped",
          ru: "Пакеты, обвязка",
          ar: "حزم مربوطة",
        },
        chem: [
          ["C", "≤ 0.22%"],
          ["Mn", "0.30–0.65%"],
          ["Si", "≤ 0.30%"],
          ["S", "≤ 0.040%"],
          ["P", "≤ 0.040%"],
        ],
        mech: [
          { k: "size", v: "UPN 50 – UPN 300" },
          { k: "length", v: "6 / 12 m" },
        ],
        standards: ["EN 10279", "DIN 1026"],
        moq: "300 t",
        hs: "7216.31",
        ports: ["Bandar Abbas", "Parvizkhan (land)"],
        incoterms: ["FOB", "CFR", "DAP"],
        apps: [
          { en: "Purlins & framing", ru: "Прогоны и каркасы", ar: "المدادات والهياكل" },
          { en: "Truck chassis", ru: "Автомобильные рамы", ar: "هياكل الشاحنات" },
          { en: "Racking systems", ru: "Стеллажи", ar: "أنظمة الرفوف" },
        ],
        rep: 0,
      },
      {
        slug: "ipe-hea-beam",
        icon: "beam",
        grade: "IPE 120–600 · HEA 100–300",
        name: { en: "IPE / HEA Beam", ru: "Балка IPE / HEA", ar: "عتبات IPE / HEA" },
        summary: {
          en: "European-profile I-beams for spans and columns — certified chemistry, straightness within standard.",
          ru: "Двутавры европейского профиля для пролётов и колонн — сертифицированная химия, прямолинейность в пределах нормы.",
          ar: "عتبات I بالمواصفات الأوروبية للبحور والأعمدة — تركيب كيميائي معتمد واستقامة ضمن الحدود القياسية.",
        },
        packing: {
          en: "Bundles, dunnaged",
          ru: "Пакеты с прокладками",
          ar: "حزم مع فواصل",
        },
        chem: [
          ["C", "≤ 0.22%"],
          ["Mn", "0.40–1.00%"],
          ["Si", "≤ 0.35%"],
          ["S", "≤ 0.040%"],
          ["P", "≤ 0.040%"],
        ],
        mech: [
          { k: "size", v: "IPE 120 – 600" },
          { k: "length", v: "12 m" },
          { k: "yield", v: "≥ 235 MPa" },
        ],
        standards: ["EN 10025", "EN 10365"],
        moq: "300 t",
        hs: "7216.33",
        ports: ["Bandar Abbas", "Parvizkhan (land)"],
        incoterms: ["FOB", "CFR", "DAP"],
        apps: [
          { en: "Industrial buildings", ru: "Промышленные здания", ar: "المباني الصناعية" },
          { en: "Bridges", ru: "Мосты", ar: "الجسور" },
          { en: "Mezzanines", ru: "Мезонины", ar: "الأسقف المعلقة" },
        ],
        rep: 0,
      },
    ],
  },
  {
    id: "flat-steel",
    icon: "coil",
    name: {
      en: "Flat Steel Products",
      ru: "Плоский прокат",
      ar: "منتجات الصلب المسطحة",
    },
    blurb: {
      en: "Hot-rolled, cold-rolled and galvanized — the surface of modern industry.",
      ru: "Горячекатаный, холоднокатаный и оцинкованный лист — поверхность современной промышленности.",
      ar: "المدرفل على الساخن والبارد والمجلفن — سطح الصناعة الحديثة.",
    },
    products: [
      {
        slug: "hot-rolled-coil",
        icon: "coil",
        grade: "ST37-2 / ST44 / SS400",
        name: {
          en: "Hot-Rolled Coil (HRC)",
          ru: "Горячекатаный рулон",
          ar: "لفائف مدرفلة على الساخن",
        },
        summary: {
          en: "Pickled or black hot-rolled coil — the workhorse base for pipes, frames and cold re-rolling.",
          ru: "Горячекатаный рулон, травленый или чёрный — рабочая основа для труб, каркасов и холодного переката.",
          ar: "لفائف مدرفلة على الساخن مخللة أو سوداء — الأساس للأنابيب والهياكل والدرفلة الباردة.",
        },
        packing: {
          en: "Eye-to-sky coils, export wrapped",
          ru: "Рулоны «глазком вверх», экспортная упаковка",
          ar: "لفات بتغليف تصديري",
        },
        chem: [
          ["C", "≤ 0.17%"],
          ["Mn", "≤ 0.65%"],
          ["Si", "≤ 0.17%"],
          ["S", "≤ 0.035%"],
          ["P", "≤ 0.035%"],
        ],
        mech: [
          { k: "thickness", v: "1.5–12 mm" },
          { k: "width", v: "1,000–1,500 mm" },
          { k: "coilWeight", v: "8–22 t" },
        ],
        standards: ["DIN 17100", "JIS G3101", "ASTM A36"],
        moq: "500 t",
        hs: "7208",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Pipes & tubes", ru: "Трубы", ar: "الأنابيب" },
          { en: "Structural frames", ru: "Каркасы", ar: "الهياكل الإنشائية" },
          { en: "Re-rolling", ru: "Перекат", ar: "إعادة الدرفلة" },
        ],
        rep: 1,
      },
      {
        slug: "cold-rolled-coil",
        icon: "sheet",
        grade: "SPCC / DC01",
        name: {
          en: "Cold-Rolled Coil (CRC)",
          ru: "Холоднокатаный рулон",
          ar: "لفائف مدرفلة على البارد",
        },
        summary: {
          en: "Cold-rolled coil with a smooth, precise surface for stamping, panels and appliances.",
          ru: "Холоднокатаный рулон с гладкой точной поверхностью — для штамповки, панелей и бытовой техники.",
          ar: "لفائف مدرفلة على البارد بسطح أملس ودقيق للختم والألواح والأجهزة المنزلية.",
        },
        packing: {
          en: "Coils, export wrapped; sheets on pallets",
          ru: "Рулоны в экспортной упаковке; листы на паллетах",
          ar: "لفات بتغليف تصديري؛ ألواح على منصات",
        },
        chem: [
          ["C", "≤ 0.10%"],
          ["Mn", "≤ 0.45%"],
          ["Si", "≤ 0.03%"],
          ["S", "≤ 0.030%"],
          ["P", "≤ 0.025%"],
        ],
        mech: [
          { k: "thickness", v: "0.3–2.0 mm" },
          { k: "width", v: "850–1,250 mm" },
          { k: "coilWeight", v: "3–8 t" },
        ],
        standards: ["JIS G3141", "EN 10130", "ASTM A1008"],
        moq: "300 t",
        hs: "7209",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Automotive panels", ru: "Автокузовные панели", ar: "ألواح السيارات" },
          { en: "Appliances", ru: "Бытовая техника", ar: "الأجهزة المنزلية" },
          { en: "Furniture", ru: "Мебель", ar: "الأثاث" },
        ],
        rep: 1,
      },
      {
        slug: "galvanized-sheet",
        icon: "galvanized",
        grade: "DX51D + Z60–Z275",
        name: {
          en: "Galvanized Sheet",
          ru: "Оцинкованный лист",
          ar: "الألواح المجلفنة",
        },
        summary: {
          en: "Hot-dip galvanized coil and sheet — zinc-coated corrosion protection for roofing and ductwork.",
          ru: "Горячеоцинкованный рулон и лист — цинковая защита от коррозии для кровли и воздуховодов.",
          ar: "لفائف وألواح مجلفنة بالغمس الساخن — حماية زنك ضد الصدأ للأسقف وقنوات التهوية.",
        },
        packing: {
          en: "Coils or cut sheets, export wrapped",
          ru: "Рулоны или резаный лист, экспортная упаковка",
          ar: "لفات أو ألواح مقطعة بتغليف تصديري",
        },
        chem: [
          ["C", "≤ 0.12%"],
          ["Mn", "≤ 0.60%"],
          ["Si", "≤ 0.03%"],
          ["S", "≤ 0.035%"],
          ["P", "≤ 0.035%"],
        ],
        mech: [
          { k: "thickness", v: "0.25–3.0 mm" },
          { k: "zinc", v: "60–275 g/m²" },
          { k: "width", v: "900–1,250 mm" },
        ],
        standards: ["EN 10346", "JIS G3302", "ASTM A653"],
        moq: "300 t",
        hs: "7210.49",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Roofing & cladding", ru: "Кровля и облицовка", ar: "الأسقف والتكسيات" },
          { en: "HVAC ducts", ru: "Вентиляционные короба", ar: "قنوات التهوية" },
          { en: "Cabinets & profiles", ru: "Шкафы и профили", ar: "الخزائن والبروفيلات" },
        ],
        rep: 1,
      },
    ],
  },
  {
    id: "copper",
    icon: "cathode",
    name: {
      en: "Copper Products",
      ru: "Медная продукция",
      ar: "منتجات النحاس",
    },
    blurb: {
      en: "Cathode, wire rod and sections — high-purity copper most traders don't touch.",
      ru: "Катод, катанка и профили — высокочистая медь, за которую не берётся большинство трейдеров.",
      ar: "كاثود ولفائف أسلاك ومقاطع — نحاس عالي النقاء لا يتعامل به معظم التجار.",
    },
    products: [
      {
        slug: "copper-cathode",
        icon: "cathode",
        grade: "Grade A · 99.99%",
        name: { en: "Copper Cathode", ru: "Медный катод", ar: "كاثود النحاس" },
        summary: {
          en: "Electrolytic copper cathode, Grade A — 99.99% purity for the electrical and electronic industry.",
          ru: "Электролитический медный катод класса Grade A — чистота 99,99% для электротехники и электроники.",
          ar: "كاثود نحاس كهربائي بدرجة A — نقاء ٩٩٫٩٩٪ لصناعة الكهرباء والإلكترونيات.",
        },
        packing: {
          en: "Palletized bundles, container loaded",
          ru: "Пакеты на паллетах, контейнерная загрузка",
          ar: "حزم على منصات داخل حاويات",
        },
        chem: [
          ["Cu + Ag", "≥ 99.99%"],
          ["Pb", "≤ 5 ppm"],
          ["Fe", "≤ 2 ppm"],
          ["S", "≤ 4 ppm"],
        ],
        mech: [
          { k: "size", v: "914 × 914 × 12 mm" },
          { k: "weight", v: "100–125 kg / sheet" },
        ],
        standards: ["LME Grade A", "ASTM B115"],
        moq: "25 t (1 container)",
        hs: "7403.11",
        ports: ["Bandar Abbas"],
        incoterms: ["CIF", "CFR", "FOB"],
        apps: [
          { en: "Cables & wiring", ru: "Кабели и провода", ar: "الكابلات والأسلاك" },
          { en: "Electronics", ru: "Электроника", ar: "الإلكترونيات" },
          { en: "Brass mills", ru: "Латунные заводы", ar: "مصانع النحاس الأصفر" },
        ],
        rep: 2,
      },
      {
        slug: "copper-wire-rod",
        icon: "cuwire",
        grade: "ETP · 8 mm",
        name: { en: "Copper Wire Rod", ru: "Медная катанка", ar: "قضبان النحاس" },
        summary: {
          en: "Continuous-cast 8 mm copper wire rod — redrawn for wire, cable and magnet wire plants.",
          ru: "Медная катанка 8 мм непрерывного литья — под перетяжку для кабельных заводов.",
          ar: "قضبان نحاس ٨ ملم مصبوبة مستمرًا — لإعادة السحب لمصانع الأسلاك والكابلات.",
        },
        packing: {
          en: "Coils on wooden pallets",
          ru: "Бунты на деревянных паллетах",
          ar: "لفات على منصات خشبية",
        },
        chem: [
          ["Cu + Ag", "≥ 99.90%"],
          ["O₂", "0.02–0.04%"],
        ],
        mech: [
          { k: "diameter", v: "8 mm" },
          { k: "coilWeight", v: "3–5 t" },
          { k: "elongation", v: "≥ 35%" },
        ],
        standards: ["ASTM B49"],
        moq: "25 t",
        hs: "7408.11",
        ports: ["Bandar Abbas"],
        incoterms: ["CIF", "CFR", "FOB"],
        apps: [
          { en: "Power cables", ru: "Силовые кабели", ar: "كابلات الطاقة" },
          { en: "Winding wire", ru: "Обмоточный провод", ar: "أسلاك اللف" },
          { en: "Conductors", ru: "Проводники", ar: "الموصلات" },
        ],
        rep: 2,
      },
      {
        slug: "copper-sections",
        icon: "cusection",
        grade: "Busbar · Tube · Plate",
        name: {
          en: "Copper Sections & Shapes",
          ru: "Медные профили и полуфабрикаты",
          ar: "مقاطع وأشكال النحاس",
        },
        summary: {
          en: "Busbars, tubes, plates and custom copper profiles — cut and packed to drawing.",
          ru: "Шины, трубы, плиты и медные профили по чертежу — резка и упаковка под спецификацию.",
          ar: "قضبانات توزيع وأنابيب وألواح ومقاطع نحاس مخصصة — قص وتغليف حسب المخطط.",
        },
        packing: {
          en: "Wooden crates, export grade",
          ru: "Деревянные ящики, экспортное исполнение",
          ar: "صناديق خشبية بمواصفات تصديرية",
        },
        chem: [["Cu", "≥ 99.90%"]],
        mech: [
          { k: "thickness", v: "1–100 mm" },
          { k: "purity", v: "≥ 99.90%" },
        ],
        standards: ["ASTM B187", "ASTM B75"],
        moq: "5 t",
        hs: "7407",
        ports: ["Bandar Abbas"],
        incoterms: ["CIF", "CFR", "FOB"],
        apps: [
          { en: "Switchgear", ru: "Распредустройства", ar: "مفاتيح التوزيع" },
          { en: "Transformers", ru: "Трансформаторы", ar: "المحولات" },
          { en: "Heat exchangers", ru: "Теплообменники", ar: "المبادلات الحرارية" },
        ],
        rep: 2,
      },
    ],
  },
  {
    id: "aluminum",
    icon: "ingot",
    name: {
      en: "Aluminum Products",
      ru: "Алюминиевая продукция",
      ar: "منتجات الألمنيوم",
    },
    blurb: {
      en: "Ingot, billet, slab and sections — light metal, export-ready.",
      ru: "Слиток, заготовка, сляб и профили — лёгкий металл, готовый к экспорту.",
      ar: "سبائك وبليت وصفائح ومقاطع — المعدن الخفيف جاهز للتصدير.",
    },
    products: [
      {
        slug: "aluminum-ingot",
        icon: "ingot",
        grade: "A7 · 99.7% / 6061 · 6063",
        name: { en: "Aluminum Ingot", ru: "Алюминиевый слиток", ar: "سبائك الألمنيوم" },
        summary: {
          en: "Remelt A7 ingot and common alloys (6061/6063) — stacked, strapped, container-ready.",
          ru: "Чушки А7 для переплава и сплавы 6061/6063 — в пакетах, под стяжкой, готовы в контейнер.",
          ar: "سبائك A7 لإعادة الصهر وسبائك ٦٠٦١/٦٠٦٣ — مرزمة وجاهزة للحاويات.",
        },
        packing: {
          en: "Bundles 1–2 t, strapped",
          ru: "Пакеты 1–2 т, обвязка",
          ar: "حزم ١–٢ طن مربوطة",
        },
        chem: [
          ["Al", "≥ 99.7% (A7)"],
          ["Fe", "≤ 0.16%"],
          ["Si", "≤ 0.10%"],
        ],
        mech: [{ k: "weight", v: "18–25 kg / ingot" }],
        standards: ["GOST 11069", "ISO 115"],
        moq: "25 t",
        hs: "7601.10",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Foundries", ru: "Литейные цеха", ar: "المسابك" },
          { en: "Alloying", ru: "Легирование", ar: "صناعة السبائك" },
          { en: "Die casting", ru: "Литьё под давлением", ar: "الصب بالقوالب" },
        ],
        rep: 2,
      },
      {
        slug: "aluminum-billet",
        icon: "alubillet",
        grade: "6061 / 6063",
        name: { en: "Aluminum Billet", ru: "Алюминиевая заготовка", ar: "بليت الألمنيوم" },
        summary: {
          en: "Homogenized extrusion billets for profile presses — fine grain, clean surface, cut-to-length.",
          ru: "Гомогенизированная заготовка для прессования профилей — мелкое зерно, чистая поверхность, резка в размер.",
          ar: "بليت ألمنيوم متجانس لمكابس البروفيلات — حبيبات دقيقة وسطح نظيف وقص حسب الطول.",
        },
        packing: {
          en: "Bundles, strapped; container",
          ru: "Пакеты, обвязка; контейнер",
          ar: "حزم مربوطة داخل حاويات",
        },
        chem: [
          ["Si", "0.20–0.60%"],
          ["Mg", "0.45–0.90%"],
          ["Fe", "≤ 0.35%"],
          ["Al", "balance"],
        ],
        mech: [
          { k: "diameter", v: '7" / 9"' },
          { k: "length", v: "480–6,400 mm" },
        ],
        standards: ["ASTM B247", "EN AW-6063"],
        moq: "25 t",
        hs: "7604.21",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Extrusion profiles", ru: "Экструзионные профили", ar: "بروفيلات التشكيل" },
          { en: "Doors & windows", ru: "Двери и окна", ar: "الأبواب والنوافذ" },
          { en: "Automotive", ru: "Автопром", ar: "صناعة السيارات" },
        ],
        rep: 2,
      },
      {
        slug: "aluminum-slab",
        icon: "aluslab",
        grade: "1xxx / 3xxx / 5xxx",
        name: { en: "Aluminum Slab", ru: "Алюминиевый сляб", ar: "صفائح الألمنيوم" },
        summary: {
          en: "Rolling slabs for sheet and foil stock — scalped, ultrasonic-tested, mill-edge quality.",
          ru: "Слябы для прокатки листа и фольги — фрезерованные, с УЗ-контролем.",
          ar: "صفائح ألمنيوم للدرفلة إلى ألواح ورقائق — مقشوطة ومفحوصة بالموجات فوق الصوتية.",
        },
        packing: {
          en: "Unit loads, dunnaged",
          ru: "Пакеты с прокладками",
          ar: "حمولات وحدة مع فواصل",
        },
        chem: [
          ["Alloy", "1050 / 3003 / 5052"],
          ["Fe + Si", "per alloy"],
        ],
        mech: [
          { k: "thickness", v: "300–600 mm" },
          { k: "width", v: "900–1,800 mm" },
        ],
        standards: ["EN AW", "ASTM B209 feed"],
        moq: "50 t",
        hs: "7606.91",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Sheet mills", ru: "Листопрокатные станы", ar: "مصانع الألواح" },
          { en: "Foil stock", ru: "Фольговая заготовка", ar: "خام رقائق الألمنيوم" },
          { en: "Plate", ru: "Плиты", ar: "الصفائح السميكة" },
        ],
        rep: 2,
      },
      {
        slug: "aluminum-sections-sheets",
        icon: "alusection",
        grade: "6063-T5 · 5052 sheet",
        name: {
          en: "Aluminum Sections & Sheets",
          ru: "Алюминиевые профили и листы",
          ar: "بروفيلات وألواح الألمنيوم",
        },
        summary: {
          en: "Extruded profiles and rolled sheets — painted, anodized or mill finish, packed export-grade.",
          ru: "Экструзионные профили и прокатный лист — окрашенные, анодированные или без покрытия, экспортная упаковка.",
          ar: "بروفيلات مشكولة وألواح مدرفلة — مطلية أو مؤكسدة أو بتشطيب المصنع، بتغليف تصديري.",
        },
        packing: {
          en: "Shrink-wrapped bundles, crates",
          ru: "Пакеты в плёнке, ящики",
          ar: "حزم مغلفة وصناديق",
        },
        chem: [
          ["Alloy", "6063 / 5052"],
          ["Temper", "T5 / H32"],
        ],
        mech: [
          { k: "thickness", v: "0.5–6 mm (sheet)" },
          { k: "length", v: "up to 6.5 m (profile)" },
        ],
        standards: ["EN 755", "EN 485"],
        moq: "10 t",
        hs: "7604 / 7606",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Facades", ru: "Фасады", ar: "الواجهات" },
          { en: "Windows & doors", ru: "Окна и двери", ar: "النوافذ والأبواب" },
          { en: "General industry", ru: "Общая промышленность", ar: "الصناعات العامة" },
        ],
        rep: 2,
      },
    ],
  },
  {
    id: "ferroalloys",
    icon: "fesi",
    name: {
      en: "Ferroalloys",
      ru: "Ферросплавы",
      ar: "السبائك الحديدية",
    },
    blurb: {
      en: "Deoxidizers and alloying additions for the melt shop.",
      ru: "Раскислители и легирующие добавки для сталеплавильного передела.",
      ar: "مزيلات الأكسدة وسبائك الإضافة لمحاليل الصلب.",
    },
    products: [
      {
        slug: "ferro-silicon-75",
        icon: "fesi",
        grade: "FeSi75-A",
        name: { en: "Ferro Silicon 75%", ru: "Ферросилиций 75%", ar: "فيرو سيليكون ٧٥٪" },
        summary: {
          en: "Ferro silicon 75% for deoxidation and alloying — 10–100 mm lump or 0–3 mm grain, big-bag packed.",
          ru: "Ферросилиций 75% для раскисления и легирования — фракции 10–100 мм и 0–3 мм, в биг-бэгах.",
          ar: "فيرو سيليكون ٧٥٪ لإزالة الأكسدة وصناعة السبائك — حبيبات ١٠–١٠٠ ملم أو ٠–٣ ملم بأكياس كبيرة.",
        },
        packing: {
          en: "1 t big bags on pallets",
          ru: "Биг-бэги 1 т на паллетах",
          ar: "أكياس كبيرة ١ طن على منصات",
        },
        chem: [
          ["Si", "74–80%"],
          ["Al", "≤ 1.5%"],
          ["C", "≤ 0.10%"],
          ["S", "≤ 0.02%"],
          ["P", "≤ 0.04%"],
        ],
        mech: [
          { k: "size", v: "10–100 mm (lump)" },
          { k: "density", v: "2.5 t/m³" },
        ],
        standards: ["ISO 5445", "GB 2272"],
        moq: "25 t",
        hs: "7202.21",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "EAF deoxidation", ru: "Раскисление в ЭДП", ar: "إزالة الأكسدة في أفران القوس" },
          { en: "Inoculation", ru: "Модифицирование", ar: "التلقيح" },
          { en: "Steelmaking", ru: "Сталеплавильное производство", ar: "صناعة الصلب" },
        ],
        rep: 1,
      },
      {
        slug: "silico-manganese-65",
        icon: "simn",
        grade: "SiMn65",
        name: { en: "Silico Manganese 65%", ru: "Силикомарганец 65%", ar: "سيليكو منغنيز ٦٥٪" },
        summary: {
          en: "Silico manganese for simultaneous deoxidation and alloying — the melt-shop essential.",
          ru: "Силикомарганец для одновременного раскисления и легирования — необходимое в каждом сталеплавильном цехе.",
          ar: "سيليكو منغنيز لإزالة الأكسدة والسبائك معًا — أساسي في كل مصنع صهر.",
        },
        packing: {
          en: "1–1.25 t big bags",
          ru: "Биг-бэги 1–1,25 т",
          ar: "أكياس كبيرة ١–١٫٢٥ طن",
        },
        chem: [
          ["Mn", "60–65%"],
          ["Si", "14–20%"],
          ["C", "≤ 2.0%"],
          ["P", "≤ 0.25%"],
          ["S", "≤ 0.05%"],
        ],
        mech: [{ k: "size", v: "10–50 mm" }],
        standards: ["ISO 5447"],
        moq: "25 t",
        hs: "7202.30",
        ports: ["Bandar Abbas"],
        incoterms: ["FOB", "CFR", "CIF"],
        apps: [
          { en: "Steelmaking", ru: "Сталеплавильное производство", ar: "صناعة الصلب" },
          { en: "Foundry", ru: "Литейное производство", ar: "المسابك" },
        ],
        rep: 1,
      },
    ],
  },
];

export const ALL_PRODUCTS = CATEGORIES.flatMap((c) =>
  c.products.map((p) => ({ ...p, catId: c.id }))
);

export function findProduct(slug: string) {
  for (const c of CATEGORIES) {
    const p = c.products.find((x) => x.slug === slug);
    if (p) return { product: p, category: c };
  }
  return null;
}

export const PRODUCT_COUNT = ALL_PRODUCTS.length;
