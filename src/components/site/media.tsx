import type { Breakdown } from "@/data/breakdowns";
import { IMAGES } from "@/data/images";
import { CH } from "./channel";
import { cn } from "@/lib/utils";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const img = (slug: string, f: "cover" | "logo") => `${BASE}/images/${slug}/${f}.webp`;

export function LogoChip({ b, size = "md", className }: { b: Breakdown; size?: "md" | "lg"; className?: string }) {
  const has = IMAGES[b.slug]?.logo;
  const s = size === "lg" ? "size-14 rounded-2xl p-2" : "size-10 rounded-xl p-1.5";
  return (
    <span className={cn("grid shrink-0 place-items-center", IMAGES[b.slug]?.dark ? "bg-neutral-900" : "bg-white", " shadow-[0_4px_14px_-4px_rgba(0,0,0,.35)] ring-1 ring-black/5", s, className)}>
      {has
        // eslint-disable-next-line @next/next/no-img-element
        ? <img src={img(b.slug, "logo")} alt={`${b.name} logo`} className="size-full rounded-md object-contain" loading="lazy" />
        : <span className={cn("font-semibold text-neutral-800", size === "lg" ? "text-xl" : "text-sm")}>{b.name.slice(0, 1)}</span>}
    </span>
  );
}

/** Image header: the company's own OG image or homepage screenshot, or a tinted channel gradient fallback. */
export function Cover({ b, className, children }: { b: Breakdown; className?: string; children?: React.ReactNode }) {
  const has = IMAGES[b.slug]?.cover;
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {has ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(b.slug, "cover")} alt={`${b.name} website`} loading="lazy"
            className="absolute inset-0 size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </>
      ) : (
        <div className={cn("absolute inset-0 bg-gradient-to-br", CH[b.channels[0]].grad)}>
          <div className="grid-fade absolute inset-0 opacity-70" />
          <div className="absolute inset-0 grid place-items-center">
            <LogoChip b={b} size="lg" className="scale-110 transition-transform duration-500 group-hover:scale-125" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        </div>
      )}
      {children}
    </div>
  );
}
