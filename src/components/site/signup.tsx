"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
// Placeholder: not connected to a newsletter tool yet. Nothing is sent or stored.
export function SignupForm({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.p key="d" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={cn("flex h-12 items-center gap-2 text-sm", dark ? "text-white" : "text-neutral-700")}>
          <Check className="size-4 text-emerald-400" /> Thanks. The newsletter opens soon.
        </motion.p>
      ) : (
        <motion.form key="f" exit={{ opacity: 0, y: -6 }} onSubmit={e => { e.preventDefault(); setDone(true); }}
          className={cn("flex h-12 items-center gap-1 rounded-xl p-1 pl-4 shadow-sm ring-1", dark ? "bg-white ring-white/30" : "bg-white ring-neutral-200")}>
          <input type="email" required placeholder="you@startup.com" aria-label="Email" className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400" />
          <button className="h-10 shrink-0 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition hover:bg-neutral-700 active:scale-[.98]">Get it free</button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
