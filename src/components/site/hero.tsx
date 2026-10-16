"use client";
import { motion } from "motion/react";
import Link from "next/link";
const MLink = motion.create(Link);
import { Search, ArrowRight } from "lucide-react";
import { breakdowns, fmtMoney } from "@/data/breakdowns";
import { CH } from "./channel";
import { openSearch } from "./header";
import { SignupForm } from "./signup";

const ease = [0.16, 1, 0.3, 1] as const;
export function Hero() {
  const stack = [...breakdowns].sort((a, b) => b.mrr - a.mrr).slice(0, 4);
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <div className="hero-panel relative overflow-hidden rounded-3xl px-6 py-12 text-white shadow-[0_30px_80px_-30px_rgba(37,56,180,.55)] sm:px-12 sm:py-16">
        <div className="grid-fade pointer-events-none absolute inset-0" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-300" /> New breakdown every week
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .05, ease }}
              className="text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-6xl">How AI startups got their users.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .12, ease }}
              className="mt-4 max-w-lg text-base text-white/80 sm:text-lg">Every startup here has verified revenue. Each breakdown shows the channels that worked, step by step. Every claim links to a source.</motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2, ease }} className="mt-7 max-w-md">
              <SignupForm dark />
              <button onClick={openSearch} className="mt-3 flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
                <Search className="size-3.5" /> Or search the breakdowns <kbd className="rounded border border-white/25 px-1 font-mono text-[10px]">⌘K</kbd>
              </button>
            </motion.div>
          </div>
          <div className="relative hidden grid-cols-2 gap-4 lg:grid">
            {stack.map((b, i) => (
              <MLink key={b.slug} href={`/breakdowns/${b.slug}/`}
                initial={{ opacity: 0, y: 40, rotate: 0 }} animate={{ opacity: 1, y: i % 2 ? 24 : 0, rotate: i % 2 ? 2 : -2 }}
                transition={{ duration: .9, delay: .25 + i * .08, ease }}
                whileHover={{ y: (i % 2 ? 24 : 0) - 8, rotate: 0, scale: 1.03 }}
                                className="block rounded-2xl bg-white p-3 text-neutral-900 shadow-2xl ring-1 ring-black/5">
                <div className={`flex h-20 items-end rounded-xl bg-gradient-to-br ${CH[b.channels[0]].grad} p-3`}>
                  <span className="text-3xl font-semibold tracking-tight text-white/95">{b.name[0]}</span>
                </div>
                <p className="mt-3 text-sm font-semibold">{b.name}</p>
                <p className="font-mono text-lg font-semibold tracking-tight">{fmtMoney(b.mrr)}<span className="text-xs font-normal text-neutral-500"> MRR</span></p>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-neutral-500">{b.channels.slice(0, 2).join(" · ")} <ArrowRight className="ml-auto size-3" /></p>
              </MLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
