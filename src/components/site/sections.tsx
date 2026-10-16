"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Radar, Mail, Megaphone, Send, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { SignupForm } from "./signup";

const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="text-xs font-medium uppercase tracking-wider text-[var(--brand)]">{children}</p>;

export function Trackers() {
  const engines = ["ChatGPT", "Gemini", "Perplexity", "Claude", "Google AI Overviews"];
  return (
    <section id="trackers" className="mx-auto mt-16 max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <Reveal className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700"><Radar className="size-3.5" /> Coming in week 2</span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">AI Visibility Trackers</h2>
            <p className="mt-2 text-neutral-600">Some tools check if AI assistants mention your brand. We will compare them side by side. We will check each price ourselves.</p>
          </div>
          <div className="space-y-2">
            {engines.map((e, i) => (
              <motion.div key={e} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 text-sm">
                <span className="font-medium">{e}</span>
                <span className="ml-auto h-1.5 w-24 overflow-hidden rounded-full bg-neutral-200"><span className="block h-full w-1/3 animate-pulse rounded-full bg-indigo-300" /></span>
                <span className="text-xs text-neutral-400">Soon</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function NewsletterSponsor() {
  return (
    <section className="mx-auto mt-6 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr]">
      <Reveal className="scroll-mt-20 rounded-3xl bg-neutral-900 p-6 text-white sm:p-10" >
        <div id="newsletter" className="scroll-mt-24" />
        <Mail className="size-5 text-white/60" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">One breakdown a week. Free.</h2>
        <p className="mt-2 max-w-md text-white/70">You get one email each week. It shows how one AI startup got its users. Each step has a source.</p>
        <div className="mt-6 max-w-md"><SignupForm dark /></div>
      </Reveal>
      <Reveal delay={.08} className="flex flex-col rounded-3xl border border-dashed border-neutral-300 bg-white p-6 sm:p-8">
        <div id="sponsor" className="scroll-mt-24" />
        <span className="w-fit rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-500">Sponsor slot</span>
        <Megaphone className="mt-5 size-5 text-neutral-400" />
        <h3 className="mt-3 text-lg font-semibold tracking-tight">Your growth tool here</h3>
        <p className="mt-1 text-sm text-neutral-600">Our readers build AI products and want more users. One sponsor per issue.</p>
        <a href="mailto:SPONSOR_EMAIL_PLACEHOLDER" className="mt-auto pt-6 text-sm font-medium text-[var(--brand)] hover:underline">Ask for rates →</a>
      </Reveal>
    </section>
  );
}

// Placeholder: not connected to a form tool. Nothing is sent.
export function Submit() {
  const [done, setDone] = useState(false);
  const field = "h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-sm outline-none transition focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100";
  return (
    <section id="submit" className="mx-auto mt-16 max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <Reveal className="grid gap-8 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 md:grid-cols-2">
        <div>
          <Eyebrow>Submit your startup</Eyebrow>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Share how you got your users</h2>
          <p className="mt-2 text-neutral-600">You need verified revenue, such as a TrustMRR listing. Tell us what worked. We check every claim before we publish.</p>
          <ul className="mt-5 space-y-2 text-sm text-neutral-600">
            {["Verified revenue link", "The channel that worked best", "Public posts or interviews we can cite"].map(t => <li key={t} className="flex items-center gap-2"><Check className="size-4 text-emerald-600" />{t}</li>)}
          </ul>
        </div>
        {done ? (
          <div className="grid place-items-center rounded-2xl bg-neutral-50 p-8 text-center text-sm text-neutral-600"><div><Check className="mx-auto mb-2 size-6 text-emerald-600" />Thanks. Submissions open soon.</div></div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setDone(true); }} className="space-y-3">
            <input required placeholder="Startup name" className={field} />
            <input required type="url" placeholder="TrustMRR or verified revenue link" className={field} />
            <input required type="email" placeholder="Your email" className={field} />
            <textarea rows={3} placeholder="Which channel got you your first 100 customers?" className={field + " h-auto py-3"} />
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 text-sm font-medium text-white transition hover:bg-neutral-700 active:scale-[.99]"><Send className="size-4" />Send for review</button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
