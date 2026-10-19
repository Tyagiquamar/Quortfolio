import { Hero } from "@/components/hero"
import { VoiceCase } from "@/components/voice-case"
import { CollapsibleSection } from "@/components/collapsible-section"
import { ProjectBucketsAccordion } from "@/components/project-buckets-accordion"
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

      <CollapsibleSection
        id="experience"
        kicker="History"
        title="Experience"
        collapsedHint="Work history · tap to expand"
        note="Now: CTO at AugmentPath Strategy. Before that: Nugget (Zomato) and earlier roles. Voice AI detail lives in the case study above."
      >
        <ExperienceTimeline />
      </CollapsibleSection>

      <CollapsibleSection
        id="open-source"
        kicker="Upstream"
        title="Open source"
        collapsedHint="193 merged PRs · tap to expand"
        note="193 merged pull requests across 64 repositories in Go, Rust, C++, TypeScript and Python: databases, storage, search, networking, observability and developer tooling. Top repositories are expanded inline with a line per merge."
      >
        <OssTable contributionCalendar={contributionCalendar} />
      </CollapsibleSection>

      <CollapsibleSection
        id="work"
        kicker="Selected work"
        title="Projects"
        collapsedHint="Engines, markets, products · tap to expand"
        note="Grouped by theme. Expand a bucket for screenshots and proof; systems opens by default."
      >
        <ProjectBucketsAccordion />
      </CollapsibleSection>

      <CollapsibleSection
        id="signals"
        kicker="Signals"
        title="Contest discipline, toolkit, education"
        collapsedHint="CP ratings and toolkit · tap to expand"
        note="Competitive programming trained the instinct that carries into production systems; the toolkit is what I reach for when I build them."
      >
        <Signals />
      </CollapsibleSection>

      <Contact />
      <SiteFooter />
    </main>
  )
}
