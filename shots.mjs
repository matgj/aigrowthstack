import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
const pages = [["home", "/"], ["detail", "/breakdowns/chatbase/"]];
for (const [vn, vp] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: vn === "mobile" ? 2 : 1 });
  for (const [n, u] of pages) {
    const p = await ctx.newPage(); await p.goto("http://localhost:4321" + u, { waitUntil: "networkidle" });
    for (let y = 0; y < 8000; y += 500) { await p.mouse.wheel(0, 500); await p.waitForTimeout(120); }
    await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(1600);
    await p.screenshot({ path: `shots/${n}-${vn}.png`, fullPage: true });
  }
}
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } }); const p = await ctx.newPage();
await p.goto("http://localhost:4321/", { waitUntil: "networkidle" }); await p.waitForTimeout(1200);
await p.keyboard.press("Control+k"); await p.waitForTimeout(500); await p.keyboard.type("seo"); await p.waitForTimeout(400);
await p.screenshot({ path: "shots/cmdk-desktop.png" });
await b.close();
const b2 = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
const m = await b2.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 }); const mp = await m.newPage();
await mp.goto("http://localhost:4321/", { waitUntil: "networkidle" }); await mp.waitForTimeout(1500);
await mp.screenshot({ path: "shots/home-mobile-top.png" });
await mp.evaluate(() => document.getElementById("breakdowns").scrollIntoView()); await mp.waitForTimeout(1500);
await mp.screenshot({ path: "shots/home-mobile-grid.png" });
await mp.goto("http://localhost:4321/breakdowns/postiz/", { waitUntil: "networkidle" }); await mp.waitForTimeout(1500);
await mp.screenshot({ path: "shots/detail-mobile-top.png" });
await b2.close();
