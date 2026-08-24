import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang, waLink, type Lang } from "../i18n";
import { CONTACT } from "../data/site";
import { CATEGORIES } from "../data/products";
import Logo from "./Logo";
import { ProductGlyph } from "./Icons";
import { IconMail, IconMenu, IconPhone, IconWA, IconX } from "./Icons";

/* ---------- language flags ---------- */

function FlagGB() {
  return (
    <svg viewBox="0 0 24 16" className="h-3 w-[18px] shrink-0" aria-hidden="true">
      <rect width="24" height="16" fill="#22387c" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#f4f6f8" strokeWidth="3.4" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#cf3b32" strokeWidth="1.5" />
      <path d="M12 0v16M0 8h24" stroke="#f4f6f8" strokeWidth="5.4" />
      <path d="M12 0v16M0 8h24" stroke="#cf3b32" strokeWidth="3.2" />
    </svg>
  );
}
function FlagRU() {
  return (
    <svg viewBox="0 0 24 16" className="h-3 w-[18px] shrink-0" aria-hidden="true">
      <rect width="24" height="5.4" fill="#f4f6f8" />
      <rect y="5.3" width="24" height="5.4" fill="#2c4a9a" />
      <rect y="10.6" width="24" height="5.4" fill="#cf3b32" />
    </svg>
  );
}
function FlagAR() {
  return (
    <svg viewBox="0 0 24 16" className="h-3 w-[18px] shrink-0" aria-hidden="true">
      <rect width="24" height="16" fill="#1d7a4a" />
      <text x="12" y="12.4" textAnchor="middle" fontSize="11" fontFamily="Cairo, serif" fill="#f4f6f8" fontWeight="700">
        ع
      </text>
    </svg>
  );
}

const LANGS: { code: Lang; label: string; flag: () => React.ReactNode }[] = [
  { code: "en", label: "EN", flag: FlagGB },
  { code: "ru", label: "RU", flag: FlagRU },
  { code: "ar", label: "AR", flag: FlagAR },
];

function LangSwitch({ big = false }: { big?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex overflow-hidden border ${big ? "border-graphite-600" : "border-graphite-600/80"}`} role="group" aria-label="Language">
      {LANGS.map((l) => {
        const Flag = l.flag;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`flex items-center gap-1.5 font-display font-medium uppercase transition-colors duration-200 ${
              big ? "px-5 py-2.5 text-sm" : "px-2.5 py-1 text-[0.7rem]"
            } ${
              lang === l.code
                ? "bg-molten-500 text-graphite-950"
                : "text-graphite-300 hover:bg-graphite-700 hover:text-graphite-50"
            }`}
            aria-pressed={lang === l.code}
          >
            <Flag />
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Header() {
  const { t, L } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileCats, setMobileCats] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileCats(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* top strip */}
      <div className="hidden border-b border-graphite-800 bg-graphite-950 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
          <div className="flex items-center gap-6 text-xs text-graphite-400">
            <a href={`mailto:${CONTACT.salesEmail}`} className="flex items-center gap-2 transition-colors hover:text-molten-400">
              <IconMail className="h-3.5 w-3.5" />
              {CONTACT.salesEmail}
            </a>
            <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 transition-colors hover:text-molten-400" dir="ltr">
              <IconPhone className="h-3.5 w-3.5" />
              {CONTACT.phoneDisplay}
            </a>
            <span className="hidden tracking-wide lg:inline">{t("header.tag")}</span>
          </div>
          <LangSwitch />
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-graphite-800 bg-graphite-950/95 shadow-lg shadow-graphite-950/40 backdrop-blur-md"
            : "border-graphite-800/60 bg-graphite-950/85 backdrop-blur-sm"
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Logo />

          {/* desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `nav-sweep font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive ? "active text-molten-400" : "text-graphite-200 hover:text-graphite-50"
                }`
              }
            >
              {t("nav.home")}
            </NavLink>

            {/* products — mega dropdown */}
            <div className="group relative">
              <NavLink
                to="products"
                className={({ isActive }) =>
                  `nav-sweep flex items-center gap-1.5 font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive ? "active text-molten-400" : "text-graphite-200 group-hover:text-molten-400"
                  }`
                }
              >
                {t("nav.products")}
                <Chevron className="transition-transform duration-300 group-hover:rotate-180" />
              </NavLink>

              <div className="invisible absolute left-1/2 top-full w-[min(92vw,880px)] -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="blueprint border border-graphite-700 bg-graphite-900 p-6 shadow-2xl shadow-graphite-950/60">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
                    {CATEGORIES.map((c) => (
                      <div key={c.id} className="border-s-2 border-graphite-700 ps-4 transition-colors duration-200 hover:border-molten-500">
                        <Link to={`products?cat=${c.id}`} className="flex items-center gap-2.5">
                          <span className="text-molten-400">
                            <ProductGlyph k={c.icon} className="h-8 w-8" />
                          </span>
                          <span className="font-display text-[0.78rem] font-semibold uppercase leading-tight tracking-[0.1em] text-graphite-50 transition-colors hover:text-molten-400">
                            {L(c.name)}
                          </span>
                        </Link>
                        <ul className="mt-2.5 space-y-1.5">
                          {c.products.slice(0, 3).map((p) => (
                            <li key={p.slug}>
                              <Link
                                to={`products/${p.slug}`}
                                className="text-[0.78rem] text-graphite-400 transition-colors duration-200 hover:text-molten-400"
                              >
                                {L(p.name)}
                              </Link>
                            </li>
                          ))}
                          {c.products.length > 3 && (
                            <li>
                              <Link
                                to={`products?cat=${c.id}`}
                                className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-steel-300 transition-colors hover:text-molten-400"
                              >
                                +{c.products.length - 3} …
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="blog"
              className={({ isActive }) =>
                `nav-sweep font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive ? "active text-molten-400" : "text-graphite-200 hover:text-graphite-50"
                }`
              }
            >
              {t("nav.blog")}
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `nav-sweep font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive ? "active text-molten-400" : "text-graphite-200 hover:text-graphite-50"
                }`
              }
            >
              {t("nav.about")}
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `nav-sweep font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive ? "active text-molten-400" : "text-graphite-200 hover:text-graphite-50"
                }`
              }
            >
              {t("nav.contact")}
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="quote"
              className="group hidden items-center gap-2 bg-molten-500 px-5 py-2.5 font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-graphite-950 transition-all duration-300 hover:bg-molten-400 sm:flex"
            >
              {t("nav.quote")}
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center border border-graphite-600 text-graphite-100 transition-colors hover:border-molten-500 hover:text-molten-400 lg:hidden"
              aria-label="Open menu"
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-graphite-950 transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="blueprint absolute inset-0" aria-hidden="true" />
        <div className="relative flex items-center justify-between border-b border-graphite-800 px-5 py-4">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center border border-graphite-600 text-graphite-100 transition-colors hover:border-molten-500 hover:text-molten-400"
            aria-label="Close menu"
          >
            <IconX />
          </button>
        </div>

        <div className="relative flex-1 overflow-y-auto px-7 py-6">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `flex items-baseline gap-4 border-b border-graphite-800/70 py-3.5 font-display text-2xl font-semibold uppercase tracking-wide transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } ${isActive ? "text-molten-400" : "text-graphite-100"}`
              }
              style={{ transitionDelay: open ? "120ms" : "0ms" }}
            >
              <span className="text-xs font-normal text-graphite-500">01</span>
              {t("nav.home")}
            </NavLink>

            {/* products accordion */}
            <button
              onClick={() => setMobileCats((v) => !v)}
              className={`flex items-baseline justify-between border-b border-graphite-800/70 py-3.5 font-display text-2xl font-semibold uppercase tracking-wide text-graphite-100 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: open ? "180ms" : "0ms" }}
              aria-expanded={mobileCats}
            >
              <span className="flex items-baseline gap-4">
                <span className="text-xs font-normal text-graphite-500">02</span>
                {t("nav.products")}
              </span>
              <Chevron className={`self-center transition-transform duration-300 ${mobileCats ? "rotate-180 text-molten-400" : ""}`} />
            </button>

            <div className={`grid transition-all duration-500 ${mobileCats ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="space-y-3 py-4 ps-8">
                  {CATEGORIES.map((c) => (
                    <div key={c.id}>
                      <Link to={`products?cat=${c.id}`} className="flex items-center gap-2.5">
                        <span className="text-molten-400">
                          <ProductGlyph k={c.icon} className="h-7 w-7" />
                        </span>
                        <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-graphite-100">
                          {L(c.name)}
                        </span>
                      </Link>
                      <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 border-s border-graphite-700 ps-4">
                        {c.products.map((p) => (
                          <Link key={p.slug} to={`products/${p.slug}`} className="text-xs text-graphite-400 transition-colors hover:text-molten-400">
                            {L(p.name)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {[
              { to: "blog", key: "nav.blog", n: "03" },
              { to: "about", key: "nav.about", n: "04" },
              { to: "contact", key: "nav.contact", n: "05" },
            ].map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 border-b border-graphite-800/70 py-3.5 font-display text-2xl font-semibold uppercase tracking-wide transition-all duration-500 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  } ${isActive ? "text-molten-400" : "text-graphite-100"}`
                }
                style={{ transitionDelay: open ? `${240 + i * 60}ms` : "0ms" }}
              >
                <span className="text-xs font-normal text-graphite-500">{l.n}</span>
                {t(l.key)}
              </NavLink>
            ))}

            <Link
              to="quote"
              className={`mt-5 flex items-center justify-center bg-molten-500 px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-graphite-950 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: open ? "420ms" : "0ms" }}
            >
              {t("nav.quote")}
            </Link>
          </nav>
        </div>

        <div className="relative flex flex-col gap-4 border-t border-graphite-800 px-7 py-6">
          <LangSwitch big />
          <a
            href={waLink(CONTACT.mainWa, "Hello Persis Metal — I would like a price offer.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-wa px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950"
          >
            <IconWA className="h-5 w-5" />
            {t("hero.ctaWa")}
          </a>
        </div>
      </div>
    </>
  );
}
