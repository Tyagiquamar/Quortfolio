import { CpProfileRow } from "@/components/cp-profile-row"
import { ToolkitGrid } from "@/components/toolkit-chips"
import { cpProfiles } from "@/data/site"
import { Reveal } from "@/components/reveal"

export function Signals() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <Reveal>
        <div>
          <p className="kicker">Competitive programming</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Years of contest rounds are why I reason about invariants and edge cases before writing
            code. That habit is what makes sequence validation, replay parity and crash recovery
            tractable in production systems.
          </p>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {cpProfiles.map((profile) => (
              <CpProfileRow key={profile.platform} profile={profile} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div>
          <p className="kicker">Toolkit</p>
          <ToolkitGrid />
        </div>
      </Reveal>
    </div>
  )
}
