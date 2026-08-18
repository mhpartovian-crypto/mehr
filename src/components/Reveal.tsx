import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (reduced) {
            setDisplay(value.toLocaleString("en-US"));
            return;
          }
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased).toLocaleString("en-US"));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
  tone = "dark",
  align = "start",
}: {
  kicker: string;
  title: string;
  sub?: string;
  tone?: "dark" | "light" | "molten";
  align?: "start" | "center";
}) {
  const toneKicker =
    tone === "molten"
      ? "text-graphite-950/80"
      : tone === "light"
      ? "text-molten-600"
      : "text-molten-400";
  const toneTitle =
    tone === "molten"
      ? "text-graphite-950"
      : tone === "light"
      ? "text-ink-900"
      : "text-graphite-50";
  const toneSub =
    tone === "molten"
      ? "text-graphite-800"
      : tone === "light"
      ? "text-ink-500"
      : "text-graphite-300";

  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] ${toneKicker} ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className={`inline-block h-px w-8 ${tone === "molten" ? "bg-graphite-950/60" : "bg-molten-500"}`} />
        {kicker}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem] ${toneTitle}`}
      >
        {title}
      </h2>
      {sub && <p className={`mt-4 text-base leading-relaxed ${toneSub}`}>{sub}</p>}
    </Reveal>
  );
}
