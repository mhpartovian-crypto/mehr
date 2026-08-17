import { Link } from "react-router-dom";
import { useLang, waLink } from "../i18n";
import { CATEGORIES } from "../data/products";
import { CONTACT } from "../data/site";
import Logo, { LogoMark } from "./Logo";
import { IconClock, IconMail, IconPhone, IconPin, IconWA } from "./Icons";

export default function Footer() {
  const { t, L } = useLang();

  const siteLinks = [
    { to: "/", key: "nav.home" },
    { to: "/products", key: "nav.products" },
    { to: "/about", key: "nav.about" },
    { to: "/blog", key: "nav.blog" },
    { to: "/contact", key: "nav.contact" },
    { to: "/quote", key: "nav.quote" },
  ];

  return (
    <footer className="border-t border-graphite-800 bg-graphite-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-graphite-400">
            {t("footer.desc")}
          </p>
          <a
            href={waLink(CONTACT.mainWa, "Hello Persis Metal — I would like a price offer.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 border border-wa/50 px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-wa transition-all duration-300 hover:bg-wa hover:text-graphite-950"
          >
            <IconWA className="h-4 w-4" />
            {t("footer.wa")}
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-graphite-100">
            {t("footer.links")}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {siteLinks.map((l) => (
              <li key={l.to + l.key}>
                <Link
                  to={l.to}
                  className="text-sm text-graphite-400 transition-colors duration-200 hover:text-molten-400"
                >
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-graphite-100">
            {t("footer.cats")}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.id}>
                <Link
                  to={`/products?cat=${c.id}`}
                  className="text-sm text-graphite-400 transition-colors duration-200 hover:text-molten-400"
                >
                  {L(c.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-graphite-100">
            {t("footer.contact")}
          </h3>
          <ul className="mt-5 space-y-3.5 text-sm text-graphite-400">
            <li className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-molten-500" />
              {t("contact.addr1")}
            </li>
            <li className="flex items-center gap-3">
              <IconPhone className="h-4 w-4 shrink-0 text-molten-500" />
              <a href={`tel:${CONTACT.phoneRaw}`} dir="ltr" className="transition-colors hover:text-molten-400">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="h-4 w-4 shrink-0 text-molten-500" />
              <a href={`mailto:${CONTACT.salesEmail}`} className="transition-colors hover:text-molten-400">
                {CONTACT.salesEmail}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconClock className="h-4 w-4 shrink-0 text-molten-500" />
              {t("contact.hoursV")}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-graphite-500 sm:flex-row sm:px-8">
          <p>
            © 2026 Persis Metal — {t("footer.rights")}
          </p>
          <p className="font-display uppercase tracking-[0.2em]">{t("footer.tag")}</p>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-6 sm:px-8">
          <p className="border-t border-dashed border-graphite-700 pt-4 text-[0.7rem] leading-relaxed text-graphite-600">
            {t("footer.note")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FooterMark() {
  return <LogoMark size={28} />;
}
