"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Logo } from "./logo";
import { breakdowns, fmtMoney } from "@/data/breakdowns";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Command } from "@/components/ui/command";

export function openSearch() { window.dispatchEvent(new Event("open-search")); }

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen(o => !o); } };
    const o = () => setOpen(true);
    window.addEventListener("keydown", k); window.addEventListener("open-search", o);
    return () => { window.removeEventListener("keydown", k); window.removeEventListener("open-search", o); };
  }, []);
  const go = (href: string) => { setOpen(false); router.push(href); };
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-5 text-sm text-neutral-600 md:flex">
          <Link href="/#breakdowns" className="hover:text-neutral-900">Breakdowns</Link>
          <Link href="/#trackers" className="flex items-center gap-1.5 hover:text-neutral-900">AI Visibility Trackers
            <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500">Week 2</span></Link>
          <Link href="/#newsletter" className="hover:text-neutral-900">Newsletter</Link>
          <Link href="/#submit" className="hover:text-neutral-900">Submit</Link>
        </nav>
        <button onClick={() => setOpen(true)} aria-label="Search" className="ml-auto flex h-9 w-9 items-center justify-center sm:w-full sm:max-w-64 sm:justify-start gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-sm text-neutral-500 transition hover:border-neutral-300 hover:bg-white">
          <Search className="size-4" /><span className="hidden truncate sm:inline">Search startups, tactics...</span>
          <kbd className="ml-auto hidden rounded border border-neutral-200 bg-white px-1.5 font-mono text-[10px] sm:block">⌘K</kbd>
        </button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search" description="Search breakdowns" className="sm:max-w-xl">
        <Command filter={(v, q) => (v.toLowerCase().includes(q.toLowerCase().trim()) ? 1 : 0)}>
          <CommandInput placeholder="Search by startup, founder or channel..." />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Breakdowns">
              {breakdowns.map(b => (
                <CommandItem key={b.slug} value={`${b.name} ${b.founder} ${b.channels.join(" ")} ${b.title}`} onSelect={() => go(`/breakdowns/${b.slug}/`)}>
                  <span className="font-medium">{b.name}</span>
                  <span className="truncate text-neutral-500">{b.title}</span>
                  <span className="ml-auto font-mono text-xs text-emerald-600">{fmtMoney(b.mrr)}/mo</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Pages">
              <CommandItem onSelect={() => go("/#newsletter")}>Get the weekly email</CommandItem>
              <CommandItem onSelect={() => go("/#submit")}>Submit your startup</CommandItem>
              <CommandItem onSelect={() => go("/#sponsor")}>Sponsor an issue</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </header>
  );
}
