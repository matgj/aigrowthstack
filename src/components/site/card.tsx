"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, TriangleAlert } from "lucide-react";
import type { Breakdown } from "@/data/breakdowns";
import { ChannelBadge, CH } from "./channel";
import { Counter, money } from "./counter";

export function BreakdownCard({ b, rank }: { b: Breakdown; rank: number }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: .96, transition: { duration: .18 } }}
      transition={{ type: "spring", stiffness: 260, damping: 28, delay: rank * .06 }} whileHover={{ y: -6 }} className="group relative">
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${CH[b.channels[0]].grad} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-25`} />
      <Link href={`/breakdowns/${b.slug}/`} className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,.04)] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,.25)]">
        <div className={`relative flex h-36 flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br ${CH[b.channels[0]].grad} p-4 text-white`}>
          <div className="grid-fade absolute inset-0 opacity-70" />
          <div className="relative flex items-center justify-between">
            <span className="rounded-md bg-white/15 px-1.5 py-0.5 font-mono text-[10px] backdrop-blur">#{rank + 1}</span>
            <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
          </div>
          <div className="relative">
            <p className="text-[11px] uppercase tracking-wider text-white/70">Verified MRR</p>
            <p className="font-mono text-3xl font-semibold tracking-tight"><Counter value={b.mrr} kind="money" /></p>
          </div>
        </div>
        <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
          <p className="text-sm font-semibold">{b.name}</p>
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
