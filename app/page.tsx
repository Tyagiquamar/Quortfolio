import { Hero } from "@/components/hero"
import { VoiceCase } from "@/components/voice-case"
import { Section } from "@/components/section"
import { ProjectBucket } from "@/components/project-rows"
import { OssTable } from "@/components/oss-table"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Signals } from "@/components/signals"
import { Contact, SiteFooter } from "@/components/contact"
import { getContributionCalendar } from "@/lib/github"

export default async function Home() {
  const contributionCalendar = await getContributionCalendar()

  return (
    <main>
      <Hero />
      <VoiceCase />

      <Section
        id="systems"
        kicker="Selected work · 01"
        title="Backend systems where the failure mode is the feature"
        note="Go engines built around leases, checkpoints and replay. Each one ships failure scenes that kill a worker or drop a delta and then prove the system stays correct, because a durability claim that has never been tested under a crash is a guess."
      >
        <ProjectBucket bucket="systems" />
      </Section>

      <Section
        id="markets"
        kicker="Selected work · 02"
        title="Market data treated as a correctness problem"
        note="Reconstructing an order book from an incremental feed is a state-machine problem, and execution simulation is worthless unless replay reproduces live results exactly. Everything here runs on public exchange data with simulated execution: no live-money trading, no profitability claims."
      >
        <ProjectBucket bucket="markets" />
      </Section>

      <Section
        id="product"
        kicker="Selected work · 03"
        title="Products where the model is not trusted with the truth"
        note="Full-stack work with the uncomfortable parts handled: provenance on every extracted field, approvals before any financial action, and realtime convergence proven with two clients rather than asserted."
      >
        <ProjectBucket bucket="product" />
      </Section>

      <Section
        id="open-source"
        kicker="Upstream"
        title="Merged work in other people's systems"
        note="193 merged pull requests across 64 repositories in Go, Rust, C++, TypeScript and Python: databases, storage, search, networking, observability and developer tooling. Top repositories are expanded inline with a line per merge."
      >
        <OssTable contributionCalendar={contributionCalendar} />
      </Section>

      <Section
        id="experience"
        kicker="History"
        title="Where the production habits came from"
        note="Now: CTO at AugmentPath Strategy. Before that: Nugget (Zomato) and earlier roles. Voice AI detail lives in the case study above."
      >
        <ExperienceTimeline />
      </Section>

      <Section
        id="signals"
        kicker="Signals"
        title="Contest discipline, toolkit, education"
        note="Competitive programming trained the instinct that carries into production systems; the toolkit is what I reach for when I build them."
      >
        <Signals />
      </Section>

      <Contact />
      <SiteFooter />
    </main>
  )
}
