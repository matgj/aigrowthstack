"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, TriangleAlert } from "lucide-react";
import type { Breakdown } from "@/data/breakdowns";
import { ChannelBadge, CH } from "./channel";
import { Counter, money } from "./counter";
import { Cover, LogoChip } from "./media";
import { IMAGES } from "@/data/images";

export function BreakdownCard({ b, rank }: { b: Breakdown; rank: number }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: .96, transition: { duration: .18 } }}
      transition={{ type: "spring", stiffness: 260, damping: 28, delay: (rank % 12) * .05 }} whileHover={{ y: -6 }} className="group relative">
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${CH[b.channels[0]].grad} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-25`} />
      <Link href={`/breakdowns/${b.slug}/`} className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,.04)] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,.25)]">
        <Cover b={b} className="h-44 rounded-xl bg-neutral-100 ring-1 ring-black/5 text-white">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
            <span className="rounded-md bg-black/35 px-1.5 py-0.5 font-mono text-[10px] backdrop-blur">#{rank + 1}</span>
            <span className="grid size-7 place-items-center rounded-full bg-white/90 text-neutral-900 opacity-0 transition group-hover:opacity-100"><ArrowUpRight className="size-4" /></span>
          </div>
          {IMAGES[b.slug]?.cover && <div className="absolute bottom-3 left-3"><LogoChip b={b} /></div>}
        </Cover>
        <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
          <div className="flex items-baseline justify-between gap-3"><p className="flex items-center gap-2 text-sm font-semibold">{b.name}{b.status && <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">Shut down</span>}</p><p className="font-mono text-lg font-semibold tracking-tight text-emerald-600"><Counter value={b.mrr} kind="money" /><span className="ml-1 font-sans text-[10px] font-normal text-neutral-400">MRR</span></p></div>
          <p className="mt-0.5 line-clamp-2 text-[15px] font-medium leading-snug tracking-tight text-neutral-800">{b.title}</p>
          <dl className="mt-3 space-y-1.5 text-xs">
            <div className="flex justify-between gap-3"><dt className="text-neutral-500">Founder</dt><dd className="text-right font-medium">{b.founder}</dd></div>
            <div className="flex justify-between gap-3"><dt className="text-neutral-500">Product</dt><dd className="truncate text-right font-medium">{b.what}</dd></div>
            <div className="flex justify-between gap-3"><dt className="text-neutral-500">Steps</dt><dd className="font-medium">{b.steps.length}</dd></div>
          </dl>
          <div className="mt-auto flex flex-wrap items-center gap-1 pt-4">
            {b.channels.map(c => <ChannelBadge key={c} c={c} />)}
            <span title="Has unverified claims" className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700"><TriangleAlert className="size-3" />Flags</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
