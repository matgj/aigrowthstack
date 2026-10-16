import type { Channel } from "@/data/breakdowns";
import { cn } from "@/lib/utils";
export const CH: Record<Channel, { cls: string; grad: string }> = {
  "X": { cls: "bg-neutral-900 text-white border-neutral-900", grad: "from-neutral-800 to-neutral-600" },
  "Launches": { cls: "bg-orange-50 text-orange-700 border-orange-200", grad: "from-orange-500 to-amber-400" },
  "Cold outreach": { cls: "bg-sky-50 text-sky-700 border-sky-200", grad: "from-sky-600 to-cyan-400" },
  "Reddit": { cls: "bg-red-50 text-red-700 border-red-200", grad: "from-red-500 to-orange-400" },
  "Open source": { cls: "bg-violet-50 text-violet-700 border-violet-200", grad: "from-violet-600 to-fuchsia-400" },
  "SEO": { cls: "bg-emerald-50 text-emerald-700 border-emerald-200", grad: "from-emerald-600 to-teal-400" },
  "AI search": { cls: "bg-indigo-50 text-indigo-700 border-indigo-200", grad: "from-indigo-600 to-blue-400" },
  "AI assistants (MCP)": { cls: "bg-lime-50 text-lime-700 border-lime-200", grad: "from-lime-600 to-green-400" },
  "YouTube": { cls: "bg-rose-50 text-rose-700 border-rose-200", grad: "from-rose-600 to-pink-400" },
  "Community": { cls: "bg-amber-50 text-amber-700 border-amber-200", grad: "from-amber-500 to-yellow-400" },
};
export function ChannelBadge({ c, className }: { c: Channel; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium leading-4", CH[c].cls, className)}>{c}</span>;
}
