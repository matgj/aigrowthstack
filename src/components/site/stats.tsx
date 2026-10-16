"use client";
import { motion } from "motion/react";
import { breakdowns, CHANNELS, SNAPSHOT } from "@/data/breakdowns";
import { Counter, money } from "./counter";
export function Stats() {
  const total = breakdowns.reduce((a, b) => a + b.mrr, 0);
  const sources = breakdowns.reduce((a, b) => a + b.sources.length, 0);
  const items = [
    { label: "Combined verified MRR", node: <Counter value={total} kind="money" /> },
    { label: "Startups broken down", node: <Counter value={breakdowns.length} /> },
    { label: "Sources cited", node: <Counter value={sources} /> },
    { label: "Growth channels tracked", node: <Counter value={CHANNELS.length} /> },
  ];
  return (
    <section className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div key={it.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06, duration: .5 }}
            className="bg-white px-5 py-5">
            <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{it.node}</p>
            <p className="mt-1 text-xs text-neutral-500">{it.label}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-2 text-right text-[11px] text-neutral-400">Revenue from TrustMRR, checked {SNAPSHOT}</p>
    </section>
  );
}
