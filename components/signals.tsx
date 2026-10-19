import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
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
              <a
                key={profile.platform}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="hover-row flex flex-wrap items-center gap-x-4 gap-y-2 border-l-[3px] py-4 pl-3 pr-2"
                style={{ borderLeftColor: profile.accent }}
              >
                <span
                  className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded border border-border/80 bg-background"
                >
                  <Image
                    src={profile.logo}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-contain p-1"
                  />
                </span>
                <span className="min-w-[7rem] font-mono text-xs uppercase tracking-[0.18em]" style={{ color: profile.accent }}>
                  {profile.platform}
                </span>
                <span className="flex-1 text-sm text-foreground">{profile.rating}</span>
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
          <ToolkitGrid />
        </div>
      </Reveal>
    </div>
  )
}
