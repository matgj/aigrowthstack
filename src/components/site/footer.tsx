import { Logo } from "./logo";
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo />
        <p>Made by <a className="text-neutral-900 underline-offset-4 hover:underline" href="https://x.com/mathisgrosjean" target="_blank" rel="noopener noreferrer">@mathisgrosjean</a>. Revenue data from <a className="text-neutral-900 underline-offset-4 hover:underline" href="https://trustmrr.com/category/ai">TrustMRR</a>. We are not part of TrustMRR.</p>
      </div>
    </footer>
  );
}
