import { useEffect, useRef, useState } from "react";
import { imageFallback } from "../data/site";

/**
 * IntersectionObserver-based lazy image.
 * The <img> tag is only mounted once the wrapper approaches the viewport,
 * then fades in when decoding finishes — keeps first paint light.
 */
export default function LazyImg({
  src,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(eager);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setReady(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "340px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-graphite-800 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="h-2 w-2 animate-pulse bg-molten-500/70" />
        </div>
      )}
      {ready && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fb) return; // already retried
            const fb = imageFallback(src);
            if (fb) {
              img.dataset.fb = "1";
              img.src = fb;
            }
          }}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
