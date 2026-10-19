import { ArrowUpRight } from "lucide-react"
import { cpProfiles, skillGroups } from "@/data/site"
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
              <a
                key={profile.platform}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="hover-row flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2 py-4"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {profile.platform}
                </span>
                <span className="text-sm text-foreground">{profile.rating}</span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  {profile.detail}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div>
          <p className="kicker">Toolkit</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="border-t border-border pt-4">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/85">{group.skills.join(" / ")}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
