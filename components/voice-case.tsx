import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AugmentPathLogo } from "@/components/augment-path-logo"
import { CollapsibleSection } from "@/components/collapsible-section"
import { augmentPath } from "@/data/site"
import { voiceCase } from "@/data/voice"
import { CallFlow } from "@/components/call-flow"
import { Reveal } from "@/components/reveal"

export function VoiceCase() {
  return (
    <CollapsibleSection
      id="voice"
      kicker={voiceCase.kicker}
      title={voiceCase.title}
      collapsedHint="Voice AI case study · tap to expand"
      titleClassName="disp text-3xl font-semibold sm:text-5xl"
      headerExtra={
        <>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a href={augmentPath.url} target="_blank" rel="noreferrer" className="focus-ring">
              <AugmentPathLogo variant="inline" />
            </a>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {voiceCase.subtitle}
            </p>
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {voiceCase.role} ·{" "}
            <span className="inline-flex items-center gap-2 text-primary">
              <span className="dot-live" aria-hidden />
              {voiceCase.period}
            </span>
          </p>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="min-w-0">
          <Reveal>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{voiceCase.lede}</p>
          </Reveal>

          <Reveal delay={60} className="min-w-0">
            <div className="panel-quiet mt-8 w-full min-w-0 overflow-x-auto p-3 sm:p-5">
              <CallFlow />
            </div>
          </Reveal>
        </div>

        <div className="min-w-0 space-y-8">
          <Reveal>
            <div>
              <p className="kicker">What I owned</p>
              <ul className="mt-4 space-y-3">
                {voiceCase.ownership.map((item) => (
                  <li key={item.label} className="border-b border-border/60 pb-3 last:border-b-0">
                    <p className="text-sm text-foreground">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div>
              <p className="kicker">Stack</p>
              <p className="mt-3 font-mono text-xs leading-5 text-muted-foreground">
                {voiceCase.stack.join(" / ")}
              </p>
              <Link
                href="/work/augmentpath"
                className="focus-ring group mt-6 inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Read the full case study
                <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </CollapsibleSection>
  )
}
