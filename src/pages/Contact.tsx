import { useState, type FormEvent } from "react";
import { useLang, waLink } from "../i18n";
import { CONTACT, TEAM } from "../data/site";
import { Reveal, SectionHead } from "../components/Reveal";
import { IconCheck, IconClock, IconMail, IconPhone, IconPin, IconWA } from "../components/Icons";

const inputCls =
  "w-full border border-line bg-card px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-all duration-200";

export default function Contact() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Message from persismetal.com\nName: ${name}\nContact: ${contact}${subject ? `\nSubject: ${subject}` : ""}\n\n${msg}`;
    window.open(waLink(CONTACT.mainWa, text), "_blank", "noopener");
    setSent(true);
  };

  return (
    <>
      <section className="blueprint border-b border-graphite-800 bg-graphite-950 pb-14 pt-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead kicker={t("contact.kicker")} title={t("contact.title")} sub={t("contact.sub")} />

          {/* desks */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.id} delay={i * 90}>
                <a
                  href={waLink(m.wa, `Hello ${m.name} — I found Persis Metal online and would like to talk.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full items-center gap-4 border border-graphite-800 bg-graphite-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-wa/70"
                >
                  <img src={m.img} alt={m.name} loading="lazy" className="h-16 w-16 shrink-0 border border-graphite-700 object-cover grayscale transition-all duration-300 group-hover:grayscale-0" />
                  <span>
                    <span className="block font-display text-base font-semibold uppercase tracking-wide text-graphite-100 group-hover:text-wa">
                      {m.name}
                    </span>
                    <span className="mt-0.5 block text-xs text-graphite-400">{t(m.roleKey)}</span>
                    <span className="mt-1 block font-display text-[0.65rem] uppercase tracking-[0.16em] text-molten-400">{m.langs}</span>
                  </span>
                  <IconWA className="ms-auto h-6 w-6 shrink-0 text-graphite-600 transition-colors group-hover:text-wa" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint-light border-b border-line bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          {/* offices */}
          <div className="space-y-6">
            <Reveal className="border border-line bg-card p-7">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-molten-600">{t("contact.hq")}</p>
              <ul className="mt-4 space-y-3.5 text-sm text-ink-700">
                <li className="flex items-start gap-3"><IconPin className="mt-0.5 h-4 w-4 shrink-0 text-molten-600" />{t("contact.addr1")}</li>
                <li className="flex items-center gap-3"><IconPhone className="h-4 w-4 shrink-0 text-molten-600" /><a href={`tel:${CONTACT.phoneRaw}`} dir="ltr" className="transition-colors hover:text-molten-600">{CONTACT.phoneDisplay}</a></li>
                <li className="flex items-center gap-3"><IconMail className="h-4 w-4 shrink-0 text-molten-600" /><a href={`mailto:${CONTACT.salesEmail}`} className="transition-colors hover:text-molten-600">{CONTACT.salesEmail}</a></li>
                <li className="flex items-center gap-3"><IconClock className="h-4 w-4 shrink-0 text-molten-600" />{t("contact.hoursV")}</li>
              </ul>
            </Reveal>

            <Reveal delay={110} className="border border-line bg-card p-7">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-molten-600">{t("contact.port")}</p>
              <ul className="mt-4 space-y-3.5 text-sm text-ink-700">
                <li className="flex items-start gap-3"><IconPin className="mt-0.5 h-4 w-4 shrink-0 text-molten-600" />{t("contact.addr2")}</li>
                <li className="flex items-center gap-3"><IconMail className="h-4 w-4 shrink-0 text-molten-600" /><a href={`mailto:${CONTACT.infoEmail}`} className="transition-colors hover:text-molten-600">{CONTACT.infoEmail}</a></li>
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <a
                href={waLink(CONTACT.mainWa, "Hello Persis Metal — I have a question.")}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-wa px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-950 transition-all duration-300 hover:-translate-y-0.5"
              >
                <IconWA className="h-5 w-5 transition-transform group-hover:scale-110" />
                {t("hero.ctaWa")}
              </a>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={150} className="border border-line bg-card p-7 shadow-sm sm:p-9">
            <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink-900">{t("contact.deskK")}</h3>
            {sent ? (
              <div className="mt-8 border border-wa/40 bg-wa/10 p-8 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-wa text-graphite-950">
                  <IconCheck className="h-6 w-6" />
                </span>
                <p className="mt-4 text-sm font-medium leading-relaxed text-ink-700">{t("contact.fSuccess")}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={t("contact.fName")} className={inputCls} />
                  <input required value={contact} onChange={(e) => setContact(e.target.value)} placeholder={t("contact.fEmail")} className={inputCls} />
                </div>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={t("contact.fSubject")} className={inputCls} />
                <textarea required value={msg} onChange={(e) => setMsg(e.target.value)} placeholder={t("contact.fMsg")} rows={5} className={`${inputCls} resize-none`} />
                <button type="submit" className="flex w-full items-center justify-center gap-3 bg-graphite-950 px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite-50 transition-colors duration-300 hover:bg-molten-600">
                  <IconWA className="h-5 w-5" />
                  {t("contact.fSend")}
                </button>
                <p className="text-center text-xs text-ink-500">
                  {t("contact.fAlt")}{" "}
                  <a href={`mailto:${CONTACT.salesEmail}`} className="font-semibold text-molten-600 hover:underline">{CONTACT.salesEmail}</a>
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
