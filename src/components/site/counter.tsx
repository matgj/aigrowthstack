"use client";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { money } from "@/data/breakdowns";
export function Counter({ value, kind = "int", duration = 1.4 }: { value: number; kind?: "int" | "money"; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [v, setV] = useState(0);
  useEffect(() => { if (!inView) return; const c = animate(0, value, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: setV }); return () => c.stop(); }, [inView, value, duration]);
  return <span ref={ref} className="tabular-nums">{kind === "money" ? money(v) : Math.round(v).toLocaleString("en-US")}</span>;
}
export { money };
