import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang, type Lang } from "../i18n";
import { CONTACT } from "../data/site";
import Logo from "./Logo";
import { IconMail, IconMenu, IconPhone, IconWA, IconX } from "./Icons";
import { waLink } from "../i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "ar", label: "ع" },
];

function LangSwitch({ big = false }: { big?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex overflow-hidden border ${
        big
          ? "border-graphite-600"
          : "border-graphite-600/80"
      }`}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`font-display font-medium uppercase transition-colors duration-200 ${
            big ? "px-5 py-2.5 text-sm" : "px-2.5 py-1 text-[0.7rem]"
          } ${
            lang === l.code
              ? "bg-molten-500 text-graphite-950"
              : "text-graphite-300 hover:bg-graphite-700 hover:text-graphite-50"
          }`}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { to: "/", key: "nav.home", end: true },
    { to: "/products", key: "nav.products" },
    { to: "/blog", key: "nav.blog" },
    { to: "/about", key: "nav.about" },
    { to: "/contact", key: "nav.contact" },
  ];

  return (
    <>
      {/* top strip */}
      <div className="hidden border-b border-graphite-800 bg-graphite-950 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
          <div className="flex items-center gap-6 text-xs text-graphite-400">
            <a
              href={`mailto:${CONTACT.salesEmail}`}
              className="flex items-center gap-2 transition-colors hover:text-molten-400"
            >
              <IconMail className="h-3.5 w-3.5" />
              {CONTACT.salesEmail}
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-2 transition-colors hover:text-molten-400"
              dir="ltr"
            >
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
            ? "border-graphite-800 bg-graphite-950/95 backdrop-blur-md shadow-lg shadow-graphite-950/40"
            : "border-graphite-800/60 bg-graphite-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `nav-sweep font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive ? "active text-molten-400" : "text-graphite-200 hover:text-graphite-50"
                  }`
                }
              >
                {t(l.key)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/quote"
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
        className={`fixed inset-0 z-[70] flex flex-col bg-graphite-950 transition-all duration-400 lg:hidden ${
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

        <nav className="relative flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `group flex items-baseline gap-4 border-b border-graphite-800/70 py-4 font-display text-3xl font-semibold uppercase tracking-wide transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } ${isActive ? "text-molten-400" : "text-graphite-100 hover:ps-2 hover:text-molten-400"}`
              }
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="text-xs font-normal text-graphite-500">
                0{i + 1}
              </span>
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        <div className="relative flex flex-col gap-4 px-8 pb-10">
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
