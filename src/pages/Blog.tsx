import { Link } from "react-router-dom";
import { useLang, waLink } from "../i18n";
import { CONTACT } from "../data/site";
import { Reveal } from "../components/Reveal";
import { IconWA, IconArrow } from "../components/Icons";

export default function Blog() {
  const { t } = useLang();
  return (
    <section className="blueprint relative flex min-h-[70vh] items-center border-b border-graphite-800 bg-graphite-950 py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mx-auto flex items-center justify-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-molten-400">
            <span className="inline-block h-px w-10 bg-molten-500" />
            {t("nav.blog")}
            <span className="inline-block h-px w-10 bg-molten-500" />
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold uppercase leading-[1.06] tracking-tight text-graphite-50 sm:text-5xl lg:text-6xl">
            {t("blog.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-graphite-300">{t("blog.sub")}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={waLink(CONTACT.mainWa, "Hello Persis Metal — please send me today's steel and metals price list.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-wa px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-300 hover:-translate-y-0.5"
            >
              <IconWA className="h-5 w-5 transition-transform group-hover:scale-110" />
              {t("blog.cta")}
            </a>
            <Link
              to="/products"
              className="group flex items-center justify-center gap-3 border border-graphite-500/60 px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-100 transition-all duration-300 hover:border-molten-500 hover:text-molten-400"
            >
              {t("blog.back")}
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* blinking cursor — signature of "coming soon" */}
        <p className="mt-14 font-display text-sm uppercase tracking-[0.3em] text-graphite-600">
          persismetal.com/blog<span className="blink text-molten-500">_</span>
        </p>
      </div>
    </section>
  );
}
