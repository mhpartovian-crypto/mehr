import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ru" | "ar";
export type Loc = { en: string; ru: string; ar: string };

type Dict = Record<string, Loc>;

const D: Dict = {
  /* header / nav */
  "header.tag": {
    en: "Export trading house — metals & minerals, Tehran",
    ru: "Экспортный торговый дом — металлы и минералы, Тегеран",
    ar: "دار تجارة التصدير — معادن وفلزات، طهران",
  },
  "nav.home": { en: "Home", ru: "Главная", ar: "الرئيسية" },
  "nav.products": { en: "Products", ru: "Продукция", ar: "المنتجات" },
  "nav.blog": { en: "Blog", ru: "Блог", ar: "المدونة" },
  "nav.about": { en: "About Us", ru: "О компании", ar: "من نحن" },
  "nav.contact": { en: "Contact", ru: "Контакты", ar: "اتصل بنا" },
  "nav.quote": { en: "Request a Quote", ru: "Запросить цену", ar: "طلب عرض سعر" },

  "ticker.label": { en: "Catalogue", ru: "Каталог", ar: "الكتالوج" },

  /* home — hero */
  "hero.kicker": {
    en: "Iranian metals & minerals · export desk",
    ru: "Иранские металлы и минералы · отдел экспорта",
    ar: "معادن وفلزات إيرانية · مكتب التصدير",
  },
  "hero.t1": {
    en: "Iranian metals,",
    ru: "Иранский металл,",
    ar: "معادن إيران،",
  },
  "hero.t2": {
    en: "delivered to your market.",
    ru: "с доставкой на ваш рынок.",
    ar: "تصل إلى سوقكم.",
  },
  "hero.sub": {
    en: "From iron ore to copper cathode — 20+ product lines sourced directly from Iranian mills and mines, exported with integrated logistics and full documentation.",
    ru: "От железной руды до медного катода — более 20 позиций напрямую от иранских комбинатов и рудников, с комплексной логистикой и полным пакетом документов.",
    ar: "من خام الحديد إلى كاثود النحاس — أكثر من ٢٠ منتجًا مباشرة من المصانع والمناجم الإيرانية، مع لوجستيات متكاملة ووثائق كاملة.",
  },
  "hero.ctaWa": { en: "Chat on WhatsApp", ru: "Написать в WhatsApp", ar: "تواصل عبر واتساب" },
  "hero.ctaQuote": { en: "Request a price", ru: "Запросить цену", ar: "طلب عرض سعر" },
  "hero.chip1": { en: "Origin: Iran", ru: "Происхождение: Иран", ar: "المنشأ: إيران" },
  "hero.chip2": { en: "MTC EN 10204 3.1", ru: "Сертификат EN 10204 3.1", ar: "شهادة فحص EN 10204 3.1" },
  "hero.chip3": { en: "Fe · Cu · Al certified", ru: "Сертификаты Fe · Cu · Al", ar: "شهادات الحديد · النحاس · الألمنيوم" },
  "hero.imgCap": {
    en: "Billet 5SP — ready for loading, Bandar Abbas",
    ru: "Заготовка 5SP — готова к погрузке, Бендер-Аббас",
    ar: "بليت 5SP — جاهز للتحميل، بندر عباس",
  },
  "hero.reply": {
    en: "Average reply time",
    ru: "Среднее время ответа",
    ar: "متوسط زمن الرد",
  },

  /* stats */
  "stats.kicker": { en: "Persis Metal in numbers", ru: "Persis Metal в цифрах", ar: "برسيس متال بالأرقام" },
  "stats.t1": { en: "annual export capacity, t", ru: "годовой объём экспорта, т", ar: "طاقة التصدير السنوية، طن" },
  "stats.t2": { en: "active export markets", ru: "активных рынков экспорта", ar: "سوقًا نشطًا للتصدير" },
  "stats.t3": { en: "average reply time", ru: "среднее время ответа", ar: "متوسط زمن الرد" },
  "stats.t4": { en: "shipments with MTC & full docs", ru: "поставок с MTC и документами", ar: "شحنات مع شهادة فحص ووثائق كاملة" },

  /* catalogue — boxes */
  "cat.kicker": { en: "Catalogue", ru: "Каталог", ar: "الكتالوج" },
  "cat.title": { en: "Product range", ru: "Продуктовый ряд", ar: "تشكيلة المنتجات" },
  "cat.sub": {
    en: "Seven families, 23 export-ready specifications — every box below opens a full technical page with chemistry, dimensions and packing.",
    ru: "Семь семейств, 23 экспортные спецификации — каждая карточка открывает полную техническую страницу с химией, размерами и упаковкой.",
    ar: "سبع عائلات و٢٣ مواصفة جاهزة للتصدير — كل بطاقة تفتح صفحة فنية كاملة بالتركيب الكيميائي والأبعاد والتغليف.",
  },
  "cat.products": { en: "products", ru: "продукта", ar: "منتجات" },
  "cat.open": { en: "Open family", ru: "Открыть семейство", ar: "افتح العائلة" },

  /* advantage — compact strip */
  "adv.kicker": { en: "Why Persis Metal", ru: "Почему Persis Metal", ar: "لماذا برسيس متال" },
  "adv.c1": {
    en: "Quote in under 4 hours",
    ru: "Предложение за 4 часа",
    ar: "عرض سعر خلال أقل من ٤ ساعات",
  },
  "adv.c2": {
    en: "FOB → DAP, with real borders & transit days",
    ru: "FOB → DAP: реальные переходы и сроки",
    ar: "من FOB إلى DAP مع المعابر وأيام النقل الفعلية",
  },
  "adv.c3": {
    en: "MTC + CoO + packing list with every lot",
    ru: "MTC + CoO + упаковочный лист на каждую партию",
    ar: "شهادة فحص ومنشأ وقائمة تعبئة مع كل دفعة",
  },
  "adv.c4": {
    en: "EN · RU · AR sales desks",
    ru: "Отделы продаж EN · RU · AR",
    ar: "مكاتب مبيعات بالإنجليزية والروسية والعربية",
  },

  /* media film strip */
  "media.kicker": { en: "From the field", ru: "С площадок", ar: "من الميدان" },
  "media.title": {
    en: "Loading, mill visits & handovers — real footage",
    ru: "Погрузка, визиты на комбинаты, передачи — реальные кадры",
    ar: "تحميل وزيارات المصانع وتسليمات — لقطات حقيقية",
  },
  "media.sub": {
    en: "Every shipment leaves with photo and video proof. This strip is updated after each loading.",
    ru: "Каждая отгрузка сопровождается фото- и видеоподтверждением. Лента обновляется после каждой погрузки.",
    ar: "كل شحنة تخرج بإثبات مصوّر. يتم تحديث هذا الشريط بعد كل عملية تحميل.",
  },
  "media.tagPhoto": { en: "Photo", ru: "Фото", ar: "صورة" },
  "media.tagSlot": { en: "MP4 / GIF slot", ru: "Слот MP4 / GIF", ar: "مكان فيديو / GIF" },
  "media.s1": { en: "Coil warehouse — Mobarakeh line", ru: "Склад рулонов — линия Мобараке", ar: "مستودع اللفائف — خط مباركه" },
  "media.s2": { en: "Loading clip — your product here", ru: "Клип погрузки — здесь будет ваш ролик", ar: "مقطع التحميل — فيديو منتجكم هنا" },
  "media.s3": { en: "Port dispatch — Bandar Abbas", ru: "Отправка из порта — Бендер-Аббас", ar: "إرسال الميناء — بندر عباس" },
  "media.s4": { en: "Mill visit — GIF slot", ru: "Визит на комбинат — слот GIF", ar: "زيارة المصنع — مكان GIF" },
  "media.s5": { en: "Non-ferrous line — Cu & Al", ru: "Линия цветных металлов — Cu и Al", ar: "خط المعادن غير الحديدية — نحاس وألمنيوم" },
  "media.s6": { en: "Customer handover — slot", ru: "Передача клиенту — слот", ar: "تسليم للعميل — مكان مخصص" },

  /* markets */
  "mkt.kicker": { en: "Export corridors", ru: "Экспортные коридоры", ar: "ممرات التصدير" },
  "mkt.title": {
    en: "Where we already deliver",
    ru: "Куда мы уже поставляем",
    ar: "إلى أين نصدّر اليوم",
  },
  "mkt.sub": {
    en: "Each corridor has a dedicated desk, a working payment route and known transit times.",
    ru: "У каждого коридора — свой отдел, рабочий платёжный маршрут и известные сроки доставки.",
    ar: "لكل ممر مكتب مخصص وطريق دفع فعّال وأزمنة نقل معروفة.",
  },
  "mkt.iraq": { en: "Iraq", ru: "Ирак", ar: "العراق" },
  "mkt.iraqD": {
    en: "Reconstruction demand for rebar, sections and wire rod.",
    ru: "Восстановительный спрос на арматуру, профили и катанку.",
    ar: "طلب إعادة الإعمار على حديد التسليح والمقاطع ولفائف الأسلاك.",
  },
  "mkt.afghan": { en: "Afghanistan", ru: "Афганистан", ar: "أفغانستان" },
  "mkt.afghanD": {
    en: "Urgent need for rebar and beams; easy land borders from the east.",
    ru: "Острая потребность в арматуре и балках; удобные восточные автопереходы.",
    ar: "حاجة ماسّة إلى حديد التسليح والعتبات؛ معابر برية سهلة من الشرق.",
  },
  "mkt.cis": { en: "CIS & Central Asia", ru: "СНГ и Центральная Азия", ar: "رابط الدول المستقلة وآسيا الوسطى" },
  "mkt.cisD": {
    en: "Uzbekistan, Kazakhstan, Turkmenistan — large construction programs prefer nearby supply.",
    ru: "Узбекистан, Казахстан, Туркменистан — крупные стройки предпочитают ближние поставки.",
    ar: "أوزبكستان وكازاخستان وتركمانستان — مشاريع عمرانية ضخمة تفضل التوريد القريب.",
  },
  "mkt.china": { en: "China", ru: "Китай", ar: "الصين" },
  "mkt.chinaD": {
    en: "A traditional buyer of Iranian iron ore and pellet at sea-freight scale.",
    ru: "Традиционный покупатель иранской руды и окатышей в морских объёмах.",
    ar: "مشترٍ تقليدي لخام الحديد والكريات الإيرانية بكميات الشحن البحري.",
  },
  "mkt.russia": { en: "Russia", ru: "Россия", ar: "روسيا" },
  "mkt.russiaD": {
    en: "Billet, flats and ferroalloys via Caspian sea and rail — a native-language desk in Moscow hours.",
    ru: "Заготовка, плоский прокат и ферросплавы через Каспий и ж/д — отдел продаж на русском языке.",
    ar: "بليت ومنتجات مسطحة وسبائك حديدية عبر بحر قزوين والسكك — مكتب مبيعات ناطق بالروسية.",
  },
  "mkt.days": { en: "days transit", ru: "дней в пути", ar: "يومًا للنقل" },
  "mkt.route": { en: "Route", ru: "Маршрут", ar: "المسار" },

  /* team */
  "team.kicker": { en: "Sales desk", ru: "Отдел продаж", ar: "مكتب المبيعات" },
  "team.title": {
    en: "Talk to the person who knows your market",
    ru: "Говорите с тем, кто знает ваш рынок",
    ar: "تحدث مع من يعرف سوقك",
  },
  "team.sub": {
    en: "Each desk answers on its own WhatsApp line in your language — no call centers, no ticket queues.",
    ru: "У каждого отдела своя линия WhatsApp на вашем языке — без колл-центра и очередей заявок.",
    ar: "لكل مكتب خط واتساب خاص بلغتكم — بدون مراكز اتصال أو طوابير تذاكر.",
  },
  "team.role1": {
    en: "Head of Export Sales · Iraq & Gulf",
    ru: "Руководитель экспортных продаж · Ирак и Залив",
    ar: "مدير مبيعات التصدير · العراق والخليج",
  },
  "team.role2": {
    en: "CIS & Russia Desk · Russian speaking",
    ru: "Отдел СНГ и России · русский язык",
    ar: "مكتب رابطة الدول المستقلة وروسيا · بالروسية",
  },
  "team.role3": {
    en: "Non-Ferrous Desk · Copper & Aluminum",
    ru: "Отдел цветных металлов · медь и алюминий",
    ar: "مكتب المعادن غير الحديدية · النحاس والألمنيوم",
  },
  "team.m1": { en: "Iraq · Gulf · Levant", ru: "Ирак · Залив · Левант", ar: "العراق · الخليج · بلاد الشام" },
  "team.m2": { en: "Russia · Uzbekistan · Kazakhstan", ru: "Россия · Узбекистан · Казахстан", ar: "روسيا · أوزبكستان · كازاخستان" },
  "team.m3": { en: "China · Africa · Global", ru: "Китай · Африка · мир", ar: "الصين · أفريقيا · العالم" },
  "team.wa": { en: "Direct WhatsApp", ru: "Прямой WhatsApp", ar: "واتساب مباشر" },

  /* process */
  "proc.kicker": { en: "How we work", ru: "Как мы работаем", ar: "كيف نعمل" },
  "proc.title": {
    en: "From inquiry to the loading photo",
    ru: "От запроса до фото погрузки",
    ar: "من الاستفسار إلى صورة التحميل",
  },
  "proc.s1t": { en: "Send your spec", ru: "Отправьте спецификацию", ar: "أرسل المواصفات" },
  "proc.s1d": {
    en: "Product, grade, tonnage, destination — via WhatsApp or the RFQ form.",
    ru: "Продукт, марка, тоннаж, назначение — через WhatsApp или форму запроса.",
    ar: "المنتج والدرجة والكمية والوجهة — عبر واتساب أو نموذج الطلب.",
  },
  "proc.s2t": { en: "Offer in < 4 hours", ru: "Предложение за 4 часа", ar: "عرض خلال أقل من ٤ ساعات" },
  "proc.s2d": {
    en: "Price, incoterm, transit days and the required document set.",
    ru: "Цена, инкотермс, дни в пути и состав документов.",
    ar: "السعر وشروط التسليم وأيام النقل وقائمة الوثائق.",
  },
  "proc.s3t": { en: "Contract & payment", ru: "Контракт и оплата", ar: "العقد والدفع" },
  "proc.s3d": {
    en: "LC, TT or local currency through trusted channels, per corridor.",
    ru: "Аккредитив, TT или местная валюта через проверенные каналы коридора.",
    ar: "اعتماد مستندي أو حوالة أو عملة محلية عبر قنوات موثوقة.",
  },
  "proc.s4t": { en: "Loading with proof", ru: "Погрузка с подтверждением", ar: "تحميل مع إثبات" },
  "proc.s4d": {
    en: "Real photos and video from the warehouse or port before dispatch.",
    ru: "Реальные фото и видео со склада или порта до отправки.",
    ar: "صور وفيديو حقيقي من المستودع أو الميناء قبل الإرسال.",
  },
  "proc.s5t": { en: "Documents & tracking", ru: "Документы и отслеживание", ar: "الوثائق والمتابعة" },
  "proc.s5d": {
    en: "MTC, CoO, packing list, B/L — plus shipment tracking to your door.",
    ru: "MTC, CoO, упаковочный лист, коносамент — и отслеживание до двери.",
    ar: "شهادة فحص ومنشأ وقائمة تعبئة وبوليصة — مع متابعة حتى بابكم.",
  },

  /* cta band */
  "cta.title": {
    en: "Tell us the product and the port. We do the rest.",
    ru: "Назовите продукт и порт. Остальное — мы.",
    ar: "أخبرنا بالمنتج والميناء، والباقي علينا.",
  },
  "cta.sub": {
    en: "An offer with price, transit days and documents — in under 4 working hours.",
    ru: "Предложение с ценой, сроками и документами — менее чем за 4 рабочих часа.",
    ar: "عرض مع السعر وأيام النقل والوثائق — خلال أقل من ٤ ساعات عمل.",
  },
  "cta.btnWa": { en: "WhatsApp the export desk", ru: "WhatsApp отделу экспорта", ar: "واتساب مكتب التصدير" },
  "cta.btnQuote": { en: "Open the RFQ form", ru: "Открыть форму запроса", ar: "افتح نموذج الطلب" },

  /* footer */
  "footer.desc": {
    en: "B2B export trading house for Iranian steel, copper, aluminum and mineral products — from mill gate to your market.",
    ru: "Экспортный торговый дом иранского стального, медного и алюминиевого проката — от ворот комбината до вашего рынка.",
    ar: "دار تجارة تصدير B2B للمنتجات الفولاذية والنحاسية والألمنيومية الإيرانية — من بوابة المصنع إلى سوقكم.",
  },
  "footer.links": { en: "Site", ru: "Сайт", ar: "الموقع" },
  "footer.cats": { en: "Products", ru: "Продукция", ar: "المنتجات" },
  "footer.contact": { en: "Contact", ru: "Контакты", ar: "التواصل" },
  "footer.wa": { en: "WhatsApp desk", ru: "Отдел WhatsApp", ar: "مكتب واتساب" },
  "footer.rights": { en: "All rights reserved.", ru: "Все права защищены.", ar: "جميع الحقوق محفوظة." },
  "footer.tag": { en: "Tehran · Bandar Abbas · Moscow desk", ru: "Тегеран · Бендер-Аббас · отдел Москва", ar: "طهران · بندر عباس · مكتب موسكو" },
  "footer.logoOpt": {
    en: "Logo proposals",
    ru: "Варианты логотипا",
    ar: "اقتراحات الشعار",
  },
  "footer.note": {
    en: "Persis Metal is an independent export trading house. Product photos on this site are illustrative of Iranian-origin material; exact specification is confirmed by MTC per lot.",
    ru: "Persis Metal — независимый экспортный торговый дом. Фотографии носят иллюстративный характер; точная спецификация подтверждается MTC на партию.",
    ar: "برسيس متال دار تجارة تصدير مستقلة. الصور توضيحية لمواد إيرانية المنشأ؛ وتُؤكد المواصفات الدقيقة بشهادة فحص لكل دفعة.",
  },

  /* products list */
  "pr.kicker": { en: "Export catalogue", ru: "Экспортный каталог", ar: "كتالوج التصدير" },
  "pr.title": { en: "Products", ru: "Продукция", ar: "المنتجات" },
  "pr.sub": {
    en: "23 specifications across seven families. Filter by family or search by name and grade.",
    ru: "23 спецификации в семи семействах. Фильтруйте по семейству или ищите по названию и марке.",
    ar: "٢٣ مواصفة في سبع عائلات. صفِّ حسب العائلة أو ابحث بالاسم والدرجة.",
  },
  "pr.all": { en: "All families", ru: "Все семейства", ar: "كل العائلات" },
  "pr.search": { en: "Search product, grade, HS code…", ru: "Поиск: продукт, марка, код ТН ВЭД…", ar: "ابحث عن منتج أو درجة أو رمز جمركي…" },
  "pr.details": { en: "Technical page", ru: "Техническая страница", ar: "الصفحة الفنية" },
  "pr.none": {
    en: "Nothing found — send us the spec on WhatsApp, we source it.",
    ru: "Ничего не найдено — пришлите спецификацию в WhatsApp, найдём.",
    ar: "لا نتائج — أرسلوا المواصفات عبر واتساب وسنوفرها.",
  },

  /* product detail */
  "origin.iran": { en: "Iran", ru: "Иран", ar: "إيران" },
  "p.moq": { en: "MOQ", ru: "Мин. партия", ar: "أدنى كمية" },
  "p.hs": { en: "HS code", ru: "Код ТН ВЭД", ar: "الرمز الجمركي" },
  "p.origin": { en: "Origin", ru: "Происхождение", ar: "المنشأ" },
  "p.port": { en: "Loading port", ru: "Порт погрузки", ar: "ميناء التحميل" },
  "p.incoterms": { en: "Incoterms", ru: "Инкотермс", ar: "شروط التسليم" },
  "p.overview": { en: "Technical data sheet", ru: "Технический лист", ar: "ورقة البيانات الفنية" },
  "p.tech": { en: "Specifications", ru: "Характеристики", ar: "المواصفات" },
  "p.chem": { en: "Chemical composition", ru: "Химический состав", ar: "التركيب الكيميائي" },
  "p.mech": { en: "Dimensions & mechanical", ru: "Размеры и механика", ar: "الأبعاد والخصائص الميكانيكية" },
  "k.size": { en: "Size range", ru: "Диапазон размеров", ar: "نطاق الأبعاد" },
  "k.length": { en: "Length", ru: "Длина", ar: "الطول" },
  "k.width": { en: "Width", ru: "Ширина", ar: "العرض" },
  "k.thickness": { en: "Thickness", ru: "Толщина", ar: "السماكة" },
  "k.diameter": { en: "Diameter", ru: "Диаметр", ar: "القطر" },
  "k.weight": { en: "Weight", ru: "Вес", ar: "الوزن" },
  "k.coilWeight": { en: "Coil weight", ru: "Вес рулона", ar: "وزن اللفة" },
  "k.moisture": { en: "Moisture", ru: "Влажность", ar: "الرطوبة" },
  "k.density": { en: "Bulk density", ru: "Насыпная плотность", ar: "الكثافة الظاهرية" },
  "k.strength": { en: "Crush strength", ru: "Прочность на сжатие", ar: "متانة السحق" },
  "k.mesh": { en: "Grinding fineness", ru: "Тонкость помола", ar: "نعومة الطحن" },
  "k.tensile": { en: "Tensile strength", ru: "Предел прочности", ar: "قوة الشد" },
  "k.yield": { en: "Yield strength", ru: "Предел текучести", ar: "حد الخضوع" },
  "k.elongation": { en: "Elongation", ru: "Относительное удлинение", ar: "الاستطالة" },
  "k.zinc": { en: "Zinc coating", ru: "Цинковое покрытие", ar: "طلاء الزنك" },
  "k.purity": { en: "Purity", ru: "Чистота", ar: "النقاء" },
  "p.standards": { en: "Standards & grades", ru: "Стандарты и марки", ar: "المعايير والدرجات" },
  "p.packing": { en: "Packing", ru: "Упаковка", ar: "التغليف" },
  "p.apps": { en: "Applications", ru: "Применение", ar: "الاستخدامات" },
  "p.chat": { en: "Ask sales on WhatsApp", ru: "Спросить отдел продаж в WhatsApp", ar: "اسأل المبيعات عبر واتساب" },
  "p.call": { en: "Call", ru: "Позвонить", ar: "اتصال" },
  "p.analysisTitle": { en: "Request analysis & MTC", ru: "Запросить анализ и MTC", ar: "طلب التحليل وشهادة الفحص" },
  "p.analysisSub": {
    en: "Leave a contact — we reply with the chemical analysis and mill test certificate of an actual lot, free of charge.",
    ru: "Оставьте контакт — бесплатно пришлём химанализ и сертификат заводских испытаний реальной партии.",
    ar: "اترك وسيلة تواصل — نرسل لكم مجانًا التحليل الكيميائي وشهادة فحص المصنع لدفعة فعلية.",
  },
  "p.aName": { en: "Your name *", ru: "Ваше имя *", ar: "الاسم *" },
  "p.aCompany": { en: "Company", ru: "Компания", ar: "الشركة" },
  "p.aContact": { en: "Email or WhatsApp *", ru: "Email или WhatsApp *", ar: "البريد أو واتساب *" },
  "p.aDoc": { en: "Document", ru: "Документ", ar: "الوثيقة" },
  "p.aSend": { en: "Send request", ru: "Отправить запрос", ar: "أرسل الطلب" },
  "p.aSuccess": {
    en: "Request received — a WhatsApp chat was opened with our documents desk. If it didn't open, write to sales@persismetal.com.",
    ru: "Запрос принят — открыт чат WhatsApp с отделом документов. Если не открылся, пишите на sales@persismetal.com.",
    ar: "تم استلام الطلب — فُتحت محادثة واتساب مع قسم الوثائق. إن لم تُفتح راسلونا على sales@persismetal.com.",
  },
  "p.salesTitle": { en: "Direct line to sales", ru: "Прямая линия отдела продаж", ar: "خط مباشر إلى المبيعات" },
  "p.salesSub": {
    en: "This product is handled by a dedicated desk — one message, and you get today's price.",
    ru: "Этот продукт ведёт профильный отдел — одно сообщение, и у вас сегодняшняя цена.",
    ar: "هذا المنتج بيد مكتب مخصص — رسالة واحدة وتصلكم أسعار اليوم.",
  },
  "p.related": { en: "Same family", ru: "Из того же семейства", ar: "من العائلة نفسها" },
  "p.back": { en: "All products", ru: "Вся продукция", ar: "كل المنتجات" },
  "p.mediaCap": {
    en: "Reference footage — stock & dispatch of this family",
    ru: "Справочные кадры — склад и отгрузка этого семейства",
    ar: "لقطات مرجعية — مخزون وشحن هذه العائلة",
  },

  /* about */
  "ab.kicker": { en: "About Persis Metal", ru: "О компании", ar: "عن برسيس متال" },
  "ab.title": {
    en: "A trading house built around one promise: the metal arrives.",
    ru: "Торговый дом, построенный вокруг одного обещания: металл прибудет.",
    ar: "دار تجارة قامت على وعد واحد: المعدن يصل.",
  },
  "ab.p1": {
    en: "Persis Metal is a B2B foreign-trade marketing company focused on exporting Iranian metals and minerals. We stand between Iran's mills and mines and the buyers of the region — and we take responsibility for everything in between: sourcing, quality papers, payment route, loading and delivery.",
    ru: "Persis Metal — компания внешнеторгового маркетинга B2B, специализирующаяся на экспорте иранских металлов и минералов. Мы стоим между комбинатами и рудниками Ирана и покупателями региона — и берём на себя всё, что между: sourcing, документы качества, платёжный маршрут, погрузку и доставку.",
    ar: "برسيس متال شركة تسويق تجاري خارجي B2B متخصصة في تصدير المعادن والخامات الإيرانية. نقف بين المصانع والمناجم الإيرانية ومشتري المنطقة — ونتحمل مسؤولية كل ما بينهما: التوريد ووثائق الجودة وطريق الدفع والتحميل والتسليم.",
  },
  "ab.p2": {
    en: "Our competitive edge is agility: direct allocation at producing mills, integrated logistics from FOB to DAP, and export desks that speak your language. Where traditional traders quote in days, we quote in hours.",
    ru: "Наше преимущество — гибкость: прямые квоты у комбинатов, комплексная логистика от FOB до DAP и отделы экспорта на вашем языке. Там, где традиционные трейдеры считают днями, мы отвечаем за часы.",
    ar: "ميزتنا التنافسية هي المرونة: حصص مباشرة من المصانع، ولوجستيات متكاملة من FOB إلى DAP، ومكاتب تصدير تتحدث لغتكم. حيث يستغرق التجار التقليديون أيامًا، نرد نحن في ساعات.",
  },
  "ab.whyK": { en: "Where we win", ru: "В чём мы сильнее", ar: "أين نتفوق" },
  "ab.whyT": {
    en: "Speed, logistics depth and a non-ferrous range most traders don't have",
    ru: "Скорость, глубина логистики и цветная линейка, которой нет у большинства",
    ar: "السرعة وعمق اللوجستيات وتشكيلة معادن غير حديدية لا يملكها معظم التجار",
  },
  "ab.netK": { en: "Supply network", ru: "Сеть поставок", ar: "شبكة التوريد" },
  "ab.netT": {
    en: "Direct from Iran's producers",
    ru: "Напрямую от производителей Ирана",
    ar: "مباشرة من المنتجين الإيرانيين",
  },
  "ab.netSub": {
    en: "Allocation and offtake agreements with the mills and mines behind every lot we ship.",
    ru: "Квоты и оффтейк-соглашения с комбинатами и рудниками, стоящими за каждой партией.",
    ar: "حصص واتفاقيات شراء مع المصانع والمناجم وراء كل شحنة.",
  },
  "ab.values": { en: "How we operate", ru: "Наши принципы", ar: "كيف نعمل" },
  "ab.v1t": { en: "Docs before promises", ru: "Документы раньше обещаний", ar: "الوثائق قبل الوعود" },
  "ab.v1d": {
    en: "Every lot ships with MTC, certificate of origin and packing list — agreed before the contract.",
    ru: "Каждая партия идёт с MTC, сертификатом происхождения и упаковочным листом — согласованными до контракта.",
    ar: "كل دفعة تُشحن مع شهادة فحص ومنشأ وقائمة تعبئة — متفق عليها قبل العقد.",
  },
  "ab.v2t": { en: "Logistics is our product", ru: "Логистика — наш продукт", ar: "اللوجستيات منتجنا" },
  "ab.v2d": {
    en: "Sea, road and rail from Iranian gates to your warehouse, with transit days named in the offer.",
    ru: "Море, авто и ж/д от иранских ворот до вашего склада, с днями транзита прямо в предложении.",
    ar: "بحرًا وبرًا وسكة من البوابات الإيرانية إلى مستودعكم، مع أيام النقل في العرض.",
  },
  "ab.v3t": { en: "One desk, your language", ru: "Один отдел — ваш язык", ar: "مكتب واحد بلغتكم" },
  "ab.v3d": {
    en: "EN, RU and AR desks with direct WhatsApp lines to the person handling your order.",
    ru: "Отделы EN, RU и AR с прямыми линиями WhatsApp к человеку, ведущему ваш заказ.",
    ar: "مكاتب بالإنجليزية والروسية والعربية مع خطوط واتساب مباشرة لمن يدير طلبكم.",
  },

  /* contact */
  "contact.kicker": { en: "Contact us", ru: "Свяжитесь с нами", ar: "تواصلوا معنا" },
  "contact.title": {
    en: "Every market has its own desk",
    ru: "У каждого рынка — свой отдел",
    ar: "لكل سوق مكتبه الخاص",
  },
  "contact.sub": {
    en: "Pick the desk for your region — each one answers on WhatsApp in its own language.",
    ru: "Выберите отдел своего региона — каждый отвечает в WhatsApp на своём языке.",
    ar: "اختر مكتب منطقتكم — كل مكتب يرد عبر واتساب بلغته.",
  },
  "contact.hq": { en: "Head office — Tehran", ru: "Головной офис — Тегеран", ar: "المكتب الرئيسي — طهران" },
  "contact.port": { en: "Port office — Bandar Abbas", ru: "Портовый офис — Бендер-Аббас", ar: "مكتب الميناء — بندر عباس" },
  "contact.addr1": {
    en: "Unit 12, No. 48, Africa Blvd, Tehran, Iran",
    ru: "Офис 12, д. 48, бул. Африка, Тегеран, Иран",
    ar: "وحدة ١٢، رقم ٤٨، شارع أفريقيا، طهران، إيران",
  },
  "contact.addr2": {
    en: "Shahid Rajaee Port, Container terminal area, Bandar Abbas, Iran",
    ru: "Порт Шахид Раджаи, зона контейнерного терминала, Бендер-Аббас, Иран",
    ar: "ميناء الشهيد رجائي، منطقة محطة الحاويات، بندر عباس، إيران",
  },
  "contact.hoursV": {
    en: "Sat–Thu · 8:30–17:30 (Tehran) — WhatsApp 24/7",
    ru: "Сб–Чт · 8:30–17:30 (Тегеран) — WhatsApp 24/7",
    ar: "السبت–الخميس · ٨:٣٠–١٧:٣٠ (طهران) — واتساب على مدار الساعة",
  },
  "contact.deskK": { en: "Write to the export desk", ru: "Написать в отдел экспорта", ar: "راسل مكتب التصدير" },
  "contact.fName": { en: "Your name *", ru: "Ваше имя *", ar: "الاسم *" },
  "contact.fEmail": { en: "Email or WhatsApp *", ru: "Email или WhatsApp *", ar: "البريد أو واتساب *" },
  "contact.fSubject": { en: "Subject", ru: "Тема", ar: "الموضوع" },
  "contact.fMsg": { en: "Your message *", ru: "Ваше сообщение *", ar: "رسالتكم *" },
  "contact.fSend": { en: "Send via WhatsApp", ru: "Отправить через WhatsApp", ar: "أرسل عبر واتساب" },
  "contact.fAlt": { en: "Prefer classic email?", ru: "Предпочитаете почту?", ar: "تفضل البريد الإلكتروني؟" },
  "contact.fSuccess": {
    en: "Message prepared — WhatsApp opened with your text. Press send there, and we'll reply within 4 working hours.",
    ru: "Сообщение готово — WhatsApp открыт с вашим текстом. Нажмите «отправить», ответим в течение 4 рабочих часов.",
    ar: "الرسالة جاهزة — فُتح واتساب بنصكم. اضغطوا إرسال وسنرد خلال ٤ ساعات عمل.",
  },

  /* quote */
  "q.title": { en: "Request a quotation", ru: "Запрос коммерческого предложения", ar: "طلب عرض سعر" },
  "q.sub": {
    en: "Product, tonnage, destination — and in under 4 working hours you get price, incoterm, transit days and the document list.",
    ru: "Продукт, тоннаж, назначение — и менее чем за 4 рабочих часа вы получите цену, инкотермс, дни транзита и список документов.",
    ar: "المنتج والكمية والوجهة — وخلال أقل من ٤ ساعات عمل تصلكم الأسعار وشروط التسليم وأيام النقل وقائمة الوثائق.",
  },
  "q.name": { en: "Your name *", ru: "Ваше имя *", ar: "الاسم *" },
  "q.company": { en: "Company", ru: "Компания", ar: "الشركة" },
  "q.country": { en: "Country *", ru: "Страна *", ar: "الدولة *" },
  "q.wa": { en: "WhatsApp number *", ru: "Номер WhatsApp *", ar: "رقم واتساب *" },
  "q.email": { en: "Email", ru: "Email", ar: "البريد الإلكتروني" },
  "q.product": { en: "Product *", ru: "Продукт *", ar: "المنتج *" },
  "q.selectProduct": { en: "— choose from catalogue —", ru: "— выберите из каталога —", ar: "— اختر من الكتالوج —" },
  "q.grade": { en: "Grade / specification", ru: "Марка / спецификация", ar: "الدرجة / المواصفة" },
  "q.gradePh": { en: "e.g. 5SP, SAE 1008, DX51D +Z120", ru: "напр. 5SP, SAE 1008, DX51D +Z120", ar: "مثال: 5SP أو SAE 1008" },
  "q.qty": { en: "Quantity (tonnes) *", ru: "Количество (тонны) *", ar: "الكمية (طن) *" },
  "q.incoterm": { en: "Incoterm", ru: "Инкотермс", ar: "شرط التسليم" },
  "q.dest": { en: "Destination port / city *", ru: "Порт / город назначения *", ar: "ميناء / مدينة الوصول *" },
  "q.msg": { en: "Notes", ru: "Примечания", ar: "ملاحظات" },
  "q.msgPh": {
    en: "Payment preference, timeline, target price…",
    ru: "Предпочтения по оплате, сроки, целевая цена…",
    ar: "تفضيلات الدفع والمواعيد والسعر المستهدف…",
  },
  "q.modeLabel": { en: "How should we receive it?", ru: "Как нам получить запрос?", ar: "كيف يصلنا الطلب؟" },
  "q.modeWa": { en: "WhatsApp — fastest", ru: "WhatsApp — быстрее всего", ar: "واتساب — الأسرع" },
  "q.modeEmail": { en: "Form / email only", ru: "Только форма / email", ar: "النموذج / البريد فقط" },
  "q.send": { en: "Send RFQ via WhatsApp", ru: "Отправить запрос в WhatsApp", ar: "أرسل الطلب عبر واتساب" },
  "q.sendEmail": { en: "Send RFQ by email", ru: "Отправить запрос по email", ar: "أرسل الطلب بالبريد" },
  "q.success": {
    en: "Your RFQ is ready in the WhatsApp chat — press send there and the export desk will answer in under 4 working hours.",
    ru: "Ваш запрос готов в чате WhatsApp — нажмите «отправить», и отдел экспорта ответит в течение 4 рабочих часов.",
    ar: "طلبكم جاهز في محادثة واتساب — اضغطوا إرسال وسيرد مكتب التصدير خلال أقل من ٤ ساعات عمل.",
  },
  "q.successEmail": {
    en: "Your RFQ was opened in your email app addressed to sales@persismetal.com — press send there. No WhatsApp needed.",
    ru: "Запрос открыт в вашем почтовом приложении на адрес sales@persismetal.com — нажмите «отправить». WhatsApp не требуется.",
    ar: "فُتح طلبكم في تطبيق البريد موجهًا إلى sales@persismetal.com — اضغطوا إرسال. لا حاجة لواتساب.",
  },
  "q.again": { en: "Send another request", ru: "Отправить ещё запрос", ar: "أرسل طلبًا آخر" },
  "q.benefits": { en: "What you get back", ru: "Что вы получите", ar: "ماذا يصلكم" },
  "q.b1": {
    en: "Price on your incoterm with validity date",
    ru: "Цена по вашему инкотермс со сроком действия",
    ar: "السعر حسب شرط التسليم مع تاريخ الصلاحية",
  },
  "q.b2": {
    en: "Transit days and the exact border / port route",
    ru: "Дни транзита и точный маршрут через переход / порт",
    ar: "أيام النقل والمسار الدقيق عبر المعبر / الميناء",
  },
  "q.b3": {
    en: "Document list: MTC, CoO, packing list, B/L",
    ru: "Список документов: MTC, CoO, упаковочный лист, коносамент",
    ar: "قائمة الوثائق: شهادة فحص ومنشأ وتعبئة وبوليصة",
  },
  "q.alt": { en: "Or email us directly:", ru: "Или напишите напрямую:", ar: "أو راسلونا مباشرة:",
  },

  /* blog */
  "blog.kicker": { en: "Persis Journal", ru: "Журнал Persis", ar: "مجلة برسيس" },
  "blog.title": { en: "The blog launches soon", ru: "Блог скоро откроется", ar: "المدونة تنطلق قريبًا" },
  "blog.sub": {
    en: "Market notes, export guides and price logic from our desks. While we finish the first issues, here is a taste of what's being written.",
    ru: "Заметки о рынках, экспортные гиды и логика цен от наших отделов. Пока готовятся первые выпуски — вот что мы пишем.",
    ar: "ملاحظات السوق وأدلة التصدير ومنطق الأسعار من مكاتبنا. ريثما تجهز الأعداد الأولى، إليكم لمحة مما يُكتب.",
  },
  "blog.soon": { en: "Coming soon", ru: "Скоро", ar: "قريبًا" },
  "blog.readSoon": {
    en: "Full text available at launch",
    ru: "Полный текст — на запуске",
    ar: "النص الكامل عند الإطلاق",
  },
  "blog.t1": { en: "Market insights", ru: "Аналитика рынка", ar: "رؤى السوق" },
  "blog.p1t": {
    en: "Buying Iranian billet for Iraq: the 6 checks before you pay",
    ru: "Закупка иранской заготовки для Ирака: 6 проверок до оплаты",
    ar: "شراء البليت الإيراني للعراق: ٦ فحوصات قبل الدفع",
  },
  "blog.p1x": {
    en: "Grade stamps, bend tests, MTC serials and loading photos — a buyer's checklist that filters out every bad lot.",
    ru: "Маркировка марок, испытания на изгиб, номера MTC и фото погрузки — чек-лист покупателя, отсеивающий брак.",
    ar: "أختام الدرجات واختبارات الثني وأرقام الشهادات وصور التحميل — قائمة تحقق للمشتري تنقي كل دفعة رديئة.",
  },
  "blog.t2": { en: "Technical", ru: "Техника", ar: "تقني" },
  "blog.p2t": {
    en: "Copper cathode 99.99%: how to read an assay certificate",
    ru: "Медный катод 99.99%: как читать сертификат анализа",
    ar: "كاثود النحاس ٩٩٫٩٩٪: كيف تقرأ شهادة التحليل",
  },
  "blog.p2x": {
    en: "Ppm limits that matter, LME Grade A requirements, and the red flags in a too-perfect assay.",
    ru: "Важные пределы ppm, требования LME Grade A и красные флаги слишком идеального анализа.",
    ar: "حدود ppm المهمة ومتطلبات LME Grade A وعلامات الخطر في التحليل المثالي أكثر من اللازم.",
  },
  "blog.t3": { en: "Logistics", ru: "Логистика", ar: "لوجستيات" },
  "blog.p3t": {
    en: "Rail vs. sea to the CIS: choosing the right route for steel",
    ru: "Ж/д против моря в СНГ: выбор маршрута для металла",
    ar: "السكة أم البحر إلى رابطة الدول المستقلة: اختيار المسار الأنسب للصلب",
  },
  "blog.p3x": {
    en: "Sarakhs and Incheh Borun in numbers — when rail beats Bandar Abbas, and when it doesn't.",
    ru: "Серахс и Инче-Борун в цифрах — когда железная дорога выгоднее Бендер-Аббаса, а когда нет.",
    ar: "سرخس وإينجه برون بالأرقام — متى تتفوق السكة على بندر عباس ومتى لا.",
  },
  "blog.cta": { en: "Get today's prices on WhatsApp", ru: "Получить цены дня в WhatsApp", ar: "احصل على أسعار اليوم عبر واتساب" },
  "blog.back": { en: "Browse products meanwhile", ru: "Пока посмотрите продукцию", ar: "تصفح المنتجات في الأثناء" },

  /* logo proposals */
  "logo.kicker": { en: "Brand identity", ru: "Фирменный стиль", ar: "الهوية البصرية" },
  "logo.title": { en: "Logo proposals", ru: "Варианты логотипа", ar: "مقترحات الشعار" },
  "logo.sub": {
    en: "Four directions for the Persis Metal mark. Option 1 is currently live across the site; pick a favourite and it goes everywhere — header, footer, favicon.",
    ru: "Четыре направления знака Persis Metal. Вариант 1 сейчас действует по всему сайту; выберите любимый — он встанет в шапку, подвал и favicon.",
    ar: "أربعة اتجاهات لشعار برسيس متال. الخيار ١ فعّال حاليًا في الموقع؛ اختر المفضل وسيعتمد في الترويسة والتذييل وأيقونة المتصفح.",
  },
  "logo.active": { en: "Currently active", ru: "Сейчас активен", ar: "فعّال حاليًا" },
  "logo.onDark": { en: "On graphite", ru: "На графите", ar: "على الغرافيت" },
  "logo.onLight": { en: "On paper", ru: "На светлом", ar: "على الفاتح" },
  "logo.n1": { en: "Slab Stack", ru: "Пакет слябов", ar: "رزمة الصفائح" },
  "logo.d1": {
    en: "Three offset slabs — the company's core: layered supply, steel + non-ferrous + trade. Molten orange on top.",
    ru: "Три сляба со сдвигом — суть компании: сталь + цветные металлы + торговля. Сверху — расплавленный оранжевый.",
    ar: "ثلاث صفائح منزاحة — جوهر الشركة: فولاذ + معادن غير حديدية + تجارة. برتقالي مصهور في الأعلى.",
  },
  "logo.n2": { en: "Export Arrow P", ru: "Стрела экспорта P", ar: "سهم التصدير P" },
  "logo.d2": {
    en: "A bold P whose bowl becomes an arrow pointing up-right — Persis, export, growth. One gesture, one color pair.",
    ru: "Жирная P, чаша которой становится стрелой вверх-вправо — Persis, экспорт, рост. Один жест, одна пара цветов.",
    ar: "حرف P عريض يتحول جوفه إلى سهم نحو الأعلى يمينًا — برسيس وتصدير ونمو. حركة واحدة وازدواج لوني واحد.",
  },
  "logo.n3": { en: "Hex Forge", ru: "Шестигранник кузницы", ar: "سداسي الحدادة" },
  "logo.d3": {
    en: "A steel hexagon — the nut, the bolt, the industry — with a forged P cut inside and a molten spark at the corner.",
    ru: "Стальной шестигранник — гайка, болт, индустрия — с кованой P внутри и раскалённой искрой в углу.",
    ar: "سداسي فولاذي — الصامولة والبرغي والصناعة — بداخله حرف P مطروق وشرارة مصهورة في الزاوية.",
  },
  "logo.n4": { en: "Rising Ingots", ru: "Растущие слитки", ar: "سبائك صاعدة" },
  "logo.d4": {
    en: "Three ingots climbing like a chart — raw material at the base, molten value at the peak. Reads well at 16 px.",
    ru: "Три слитка растут, как график — сырьё в основании, расплавленная стоимость на вершине. Хорошо читается в 16 px.",
    ar: "ثلاث سبائك تصاعدية كرسم بياني — المادة الخام في القاعدة والقيمة المصهورة في القمة. مقروء حتى في ١٦ بكسل.",
  },
  "logo.note": {
    en: "Tell us which option to activate — it will replace the mark in the header, footer, favicon and documents.",
    ru: "Скажите, какой вариант активировать — он заменит знак в шапке, подвале, favicon и документах.",
    ar: "أخبرونا أي خيار نعتمده — سيحل محل الشعار في الترويسة والتذييل والأيقونة والوثائق.",
  },

  /* seo titles */
  "seo.home": {
    en: "Persis Metal — Iranian Steel, Copper & Aluminum Exporter",
    ru: "Persis Metal — экспорт иранского стального, медного и алюминиевого проката",
    ar: "برسيس متال — مُصدِّر الفولاذ والنحاس والألمنيوم الإيراني",
  },
  "seo.products": {
    en: "Products — Steel, Iron Ore, Copper & Aluminum | Persis Metal",
    ru: "Продукция — сталь, железная руда, медь и алюминий | Persis Metal",
    ar: "المنتجات — فولاذ وخام حديد ونحاس وألمنيوم | برسيس متال",
  },
  "seo.about": {
    en: "About Us — Export Trading House | Persis Metal",
    ru: "О компании — экспортный торговый дом | Persis Metal",
    ar: "من نحن — دار تجارة التصدير | برسيس متال",
  },
  "seo.contact": {
    en: "Contact — Export Desks EN · RU · AR | Persis Metal",
    ru: "Контакты — отделы экспорта EN · RU · AR | Persis Metal",
    ar: "اتصل بنا — مكاتب التصدير | برسيس متال",
  },
  "seo.quote": {
    en: "Request a Quotation | Persis Metal",
    ru: "Запрос коммерческого предложения | Persis Metal",
    ar: "طلب عرض سعر | برسيس متال",
  },
  "seo.blog": {
    en: "Blog — Coming Soon | Persis Metal",
    ru: "Блог — скоро | Persis Metal",
    ar: "المدونة — قريبًا | برسيس متال",
  },
};

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  L: (loc: Loc) => string;
};

const Ctx = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  L: (l) => l.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("pm-lang");
    return saved === "ru" || saved === "ar" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("pm-lang", lang);
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  const t = (key: string) => D[key]?.[lang] ?? D[key]?.en ?? key;
  const L = (loc: Loc) => loc[lang] || loc.en;

  return (
    <Ctx.Provider value={{ lang, setLang: setLangState, t, L }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  return useContext(Ctx);
}

export function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
