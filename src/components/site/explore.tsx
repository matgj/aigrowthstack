"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import { Search, X } from "lucide-react";
import { breakdowns, CHANNELS, type Channel } from "@/data/breakdowns";
import { BreakdownCard } from "./card";
import { cn } from "@/lib/utils";

type Sort = "mrr" | "name";
export function Explore() {
  const [ch, setCh] = useState<Channel | "All">("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<Sort>("mrr");
  const list = useMemo(() => {
    const t = q.toLowerCase().trim();
    return breakdowns
      .filter(b => (ch === "All" || b.channels.includes(ch)) && (!t || JSON.stringify(b).toLowerCase().includes(t)))
      .sort((a, b) => sort === "mrr" ? b.mrr - a.mrr : a.name.localeCompare(b.name));
  }, [ch, q, sort]);
  const count = (c: Channel | "All") => c === "All" ? breakdowns.length : breakdowns.filter(b => b.channels.includes(c)).length;
  return (
    <section id="breakdowns" className="mx-auto mt-12 max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <div className="rounded-3xl border border-neutral-200 bg-white">
        <div className="flex flex-col gap-3 border-b border-neutral-100 px-5 pb-0 pt-5 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Explore breakdowns</h2>
              <p className="text-sm text-neutral-500">Filter by the channel that brought the users.</p>
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <label className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg border border-neutral-200 px-3 text-sm focus-within:border-neutral-400 sm:w-64">
                <Search className="size-4 text-neutral-400" />
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Filter by keyword" className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-neutral-400" />
                {q && <button onClick={() => setQ("")} aria-label="Clear"><X className="size-3.5 text-neutral-400" /></button>}
              </label>
              <select value={sort} onChange={e => setSort(e.target.value as Sort)} aria-label="Sort" className="h-9 shrink-0 rounded-lg border border-neutral-200 bg-white px-2 text-sm">
                <option value="mrr">Top MRR</option><option value="name">A to Z</option>
              </select>
            </div>
          </div>
          <LayoutGroup>
            <div className="-mx-1 flex gap-1 overflow-x-auto pb-px [scrollbar-width:none]">
              {(["All", ...CHANNELS] as const).map(c => (
                <button key={c} onClick={() => setCh(c)} className={cn("relative shrink-0 px-3 py-2.5 text-sm transition-colors", ch === c ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-800")}>
                  {c} <span className="ml-0.5 text-xs text-neutral-400">{count(c)}</span>
                  {ch === c && <motion.span layoutId="tab" className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-neutral-900" transition={{ type: "spring", stiffness: 500, damping: 40 }} />}
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>
        <div className="p-4 sm:p-6">
          <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((b, i) => <BreakdownCard key={b.slug} b={b} rank={i} />)}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && <p className="py-16 text-center text-sm text-neutral-500">No breakdowns match. Try another channel or keyword.</p>}
        </div>
      </div>
    </section>
  );
}
