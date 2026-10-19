import { ArrowUpRight, GitMerge, Mail, MapPin } from "lucide-react"
import { AugmentPathLogo } from "@/components/augment-path-logo"
import { HeroHighlights } from "@/components/hero-highlights"
import { augmentPath, hero, site, stats } from "@/data/site"
import { Reveal } from "@/components/reveal"

const githubMergedClass = "text-[#8957e5]"

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-12">
        <div>
          <Reveal>
            <p className="kicker flex items-center gap-2">
              <span className="dot-live" aria-hidden />
              {hero.kicker}
            </p>
          </Reveal>

          <Reveal delay={40}>
            <h1 className="disp mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {hero.lede}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <HeroHighlights />
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="focus-ring inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-3.5 w-3.5" />
                Email me
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="bg-background px-4 py-4">
                  <p className="disp flex items-center gap-2 text-2xl font-semibold leading-none">
                    {index === 0 ? (
                      <GitMerge className={`h-5 w-5 shrink-0 ${githubMergedClass}`} aria-hidden />
                    ) : null}
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </p>
                  {stat.detail ? (
                    <p className="mt-1 text-[11px] leading-4 text-muted-foreground/75">{stat.detail}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <aside className="space-y-6 border-y border-border py-5 lg:border-y-0 lg:border-l lg:pl-8">
            <div>
              <a
                href={augmentPath.url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-block"
              >
                <AugmentPathLogo variant="sidebar" />
              </a>
              <p className="kicker">Now</p>
              <p className="mt-3 text-sm text-foreground">{site.role}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                <a href={augmentPath.url} target="_blank" rel="noreferrer" className="quiet-link">
                  {augmentPath.url.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </p>
            </div>
            <div>
              <p className="kicker">Availability</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{site.availability}</p>
            </div>
            <div>
              <p className="kicker">Focus</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Voice AI · realtime backends · Go systems · merged open source
              </p>
            </div>
            <div>
              <p className="kicker">Based</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {site.location}
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
