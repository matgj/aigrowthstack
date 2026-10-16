import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, TriangleAlert, Lightbulb } from "lucide-react";
import { breakdowns, SNAPSHOT } from "@/data/breakdowns";
import { ChannelBadge, CH } from "@/components/site/channel";
import { Counter } from "@/components/site/counter";
import { money } from "@/data/breakdowns";
import { Reveal } from "@/components/site/reveal";
import { SignupForm } from "@/components/site/signup";

export const dynamicParams = false;
export function generateStaticParams() { return breakdowns.map(b => ({ slug: b.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = breakdowns.find(x => x.slug === slug);
  return b ? { title: `${b.name}: ${b.title} | AIGrowthStack`, description: b.summary } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = breakdowns.find(x => x.slug === slug); if (!b) notFound();
  const others = breakdowns.filter(x => x.slug !== b.slug).slice(0, 3);
  return (
    <article className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Link href="/#breakdowns" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900"><ArrowLeft className="size-4" />All breakdowns</Link>
      <Reveal className={`relative mt-4 overflow-hidden rounded-3xl bg-gradient-to-br ${CH[b.channels[0]].grad} p-6 text-white sm:p-12`}>
        <div className="grid-fade absolute inset-0" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-medium text-white/80">{b.name} · {b.what}</p>
            <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">{b.title}</h1>
            <div className="mt-5 flex flex-wrap gap-1.5">{b.channels.map(c => <span key={c} className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium backdrop-blur">{c}</span>)}</div>
          </div>
          <div className="rounded-2xl bg-white/12 p-5 ring-1 ring-white/20 backdrop-blur">
            <p className="text-[11px] uppercase tracking-wider text-white/70">Verified MRR</p>
            <p className="font-mono text-4xl font-semibold tracking-tight"><Counter value={b.mrr} kind="money" /></p>
            <p className="mt-1 text-[11px] text-white/60">TrustMRR, {SNAPSHOT}</p>
          </div>
        </div>
      </Reveal>
      {b.status && <div role="note" className="mt-4 rounded-2xl border border-neutral-300 bg-neutral-50 px-5 py-4 text-sm text-neutral-700"><span className="mr-2 rounded-full bg-neutral-900 px-2 py-0.5 text-[11px] font-semibold text-white">Shut down</span>{b.status.replace(/^Shut down: /, "")}</div>}

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <Reveal><p className="text-lg leading-relaxed text-neutral-700">{b.summary}</p></Reveal>
          <Reveal className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight">What they did</h2>
            <ol className="mt-5 space-y-0">
              {b.steps.map((s, i) => (
                <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < b.steps.length - 1 && <span className="absolute left-[13px] top-8 h-[calc(100%-28px)] w-px bg-neutral-200" />}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-neutral-200 bg-neutral-50 font-mono text-xs font-medium">{i + 1}</span>
                  <p className="pt-0.5 text-[15px] leading-relaxed text-neutral-700">{s}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-emerald-800"><Lightbulb className="size-4" />The lesson</p>
              <p className="mt-2 text-[15px] leading-relaxed text-emerald-950">{b.lesson}</p>
            </Reveal>
            <Reveal delay={.06} className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-amber-800"><TriangleAlert className="size-4" />Not verified</p>
              <p className="mt-2 text-[15px] leading-relaxed text-amber-950">{b.unverified}</p>
            </Reveal>
          </div>
        </div>
        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-3xl border border-neutral-200 bg-white p-5">
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between"><dt className="text-neutral-500">Founder</dt><dd className="font-medium">{b.founder}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-neutral-500">Product</dt><dd className="text-right font-medium">{b.what}</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-neutral-500">Channels</dt><dd className="flex flex-wrap justify-end gap-1">{b.channels.map(c => <ChannelBadge key={c} c={c} />)}</dd></div>
            </dl>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-semibold">Sources</h2>
            <ul className="mt-3 space-y-1">
              {b.sources.map(([n, u]) => (
                <li key={u}><a href={u} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-900">
                  <span className="truncate">{n}</span><ExternalLink className="size-3.5 shrink-0 text-neutral-400 group-hover:text-neutral-700" /></a></li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-neutral-900 p-5 text-white">
            <p className="font-semibold">Get one of these every week</p>
            <p className="mt-1 text-sm text-white/60">Free. One email a week.</p>
            <div className="mt-4"><SignupForm dark /></div>
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="text-lg font-semibold tracking-tight">More breakdowns</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {others.map(o => (
            <Link key={o.slug} href={`/breakdowns/${o.slug}/`} className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between"><span className="text-sm font-semibold">{o.name}</span><span className="font-mono text-sm text-emerald-600">{money(o.mrr)}</span></div>
              <p className="mt-2 text-[15px] font-medium leading-snug tracking-tight text-neutral-800">{o.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
