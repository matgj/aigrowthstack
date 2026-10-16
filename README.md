# AIGrowthStack (Next.js static site)
- `npm run build` writes the static site to `out/` (next export, with .nojekyll).
- GitHub Pages project site: `NEXT_PUBLIC_BASE_PATH=/<repo> npm run build`.
- Content: `src/data/breakdowns.ts` (sourced; revenue from TrustMRR, 16 Oct 2026).
- Placeholders: the newsletter signup, the submit form and the sponsor email (`SPONSOR_EMAIL_PLACEHOLDER`) are not connected.
- Screenshots: `npx serve out -l 4321` then `npm run shots`.
