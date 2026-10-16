import Link from "next/link";
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid size-7 place-items-center rounded-lg bg-neutral-900 text-white">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6 4 4 6-8" /><path d="M14 7h6v6" /></svg>
      </span>
      <span>aigrowth<span className="text-[var(--brand)]">stack</span></span>
    </Link>
  );
}
