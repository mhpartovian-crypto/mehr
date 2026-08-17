import { useLang } from "../i18n";
import { Reveal } from "./Reveal";
import { IconPlay } from "./Icons";

export type MediaItem =
  | { kind: "img"; src: string; captionKey: string }
  | { kind: "slot"; captionKey: string };

const Perforation = () => (
  <div className="flex justify-between px-2" aria-hidden="true">
    {Array.from({ length: 24 }).map((_, i) => (
      <span key={i} className="h-2.5 w-3.5 shrink-0 bg-graphite-950" />
    ))}
  </div>
);

/**
 * Film-strip media reel: real photos + clearly marked slots where the
 * client will later drop loading videos / GIFs / site-visit footage.
 */
export default function MediaStrip({ items }: { items: MediaItem[] }) {
  const { t } = useLang();
  return (
    <Reveal className="relative">
      <div className="overflow-hidden border-y border-graphite-700 bg-graphite-850 py-3">
        <Perforation />
        <div className="mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-3 pt-1 [scrollbar-width:thin]">
          {items.map((item, i) => (
            <figure
              key={i}
              className={`group relative w-[260px] shrink-0 snap-start overflow-hidden border sm:w-[300px] ${
                item.kind === "img"
                  ? "border-graphite-700"
                  : "border-dashed border-molten-500/60 bg-graphite-900"
              }`}
            >
              {item.kind === "img" ? (
                <>
                  <img
                    src={item.src}
                    alt={t(item.captionKey)}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-graphite-950/95 to-transparent px-3.5 pb-2.5 pt-8">
                    <span className="truncate text-xs font-medium text-graphite-100">{t(item.captionKey)}</span>
                    <span className="shrink-0 bg-molten-500 px-1.5 py-0.5 font-display text-[0.58rem] font-bold uppercase tracking-[0.14em] text-graphite-950">
                      {t("media.tagPhoto")}
                    </span>
                  </figcaption>
                </>
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 px-5 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-molten-500/60 text-molten-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-molten-500 group-hover:text-graphite-950">
                    <IconPlay className="ms-0.5 h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium leading-relaxed text-graphite-300">{t(item.captionKey)}</span>
                  <span className="border border-graphite-600 px-2 py-0.5 font-display text-[0.58rem] font-bold uppercase tracking-[0.14em] text-graphite-400">
                    {t("media.tagSlot")}
                  </span>
                </div>
              )}
            </figure>
          ))}
        </div>
        <Perforation />
      </div>
      <p className="mt-3 text-center font-display text-[0.62rem] uppercase tracking-[0.3em] text-graphite-600">
        ◂ ─ ─ ─ ─ ─ ─ ─ ─ ▸
      </p>
    </Reveal>
  );
}
