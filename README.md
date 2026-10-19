# Mohd Quamar Tyagi · Voice AI portfolio

The second of two portfolios, run as an experiment: this one leads with production voice AI and
backend systems instead of a broad full-stack narrative, so the two can be compared on the only
metric that matters, whether founders and hiring managers reply.

**Stack:** Next.js 15 (App Router) + React 19, TypeScript, Tailwind CSS, dark-first.

## What makes this one different

- **The lead is a production system, not a project list.** The first thing on the page is the AI
  phone receptionist built at AugmentPath Strategy: realtime voice, spam classification, Tekmetric
  delivery, and the operational trail behind every call.
- **Evidence over adjectives.** Commit counts, merged pull requests, benchmark numbers and failure
  scenarios, all traceable to a repository or a merge.
- **A console aesthetic.** Space Grotesk headings, JetBrains Mono labels, thin rules, and a lime
  signal colour on near-black, rather than the editorial serif look of the other site.

## Structure

| Path | Contents |
|---|---|
| `data/site.ts` | identity, hero copy, headline stats, toolkit, contact |
| `data/voice.ts` | the AugmentPath case study: lifecycle, decisions, evidence |
| `data/experience.ts` | work history and education |
| `data/projects.ts` | systems, market-systems and product projects |
| `data/opensource.ts` | merged and in-review upstream contributions |
| `app/page.tsx` | the single-page composition |
| `app/work/augmentpath/page.tsx` | the full case study |

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm run lint
```

## Honest notes

- The AugmentPath product is a private system; this site describes architecture and shipped work,
  not customer data. The pilot customer is not named.
- Project metrics (benchmarks, digests, replay parity) are the numbers recorded in those
  repositories.
- The current resume PDF is not linked from this site yet.
