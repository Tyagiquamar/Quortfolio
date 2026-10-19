import { ArrowUpRight } from "lucide-react"
import { mergedContributions, openContributions } from "@/data/opensource"
import { Reveal } from "@/components/reveal"

export function OssTable() {
  return (
    <div>
      <Reveal>
        <div className="grid gap-3 border-y border-border py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_90px_120px]">
          <span className="hidden md:block">Repository</span>
          <span className="hidden md:block">Change merged upstream</span>
          <span className="hidden md:block">Language</span>
          <span className="hidden md:block">Merged</span>
        </div>
      </Reveal>

      <div className="divide-y divide-border border-b border-border">
        {mergedContributions.map((item, index) => (
          <Reveal key={item.href} delay={index * 15}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover-row grid gap-2 px-1 py-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_90px_120px] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-xs text-foreground">
                {item.repo}
                <span className="ml-2 text-muted-foreground">#{item.prNumber}</span>
              </span>
              <span className="text-sm leading-6 text-muted-foreground">
                <span className="text-foreground">{item.title}.</span> {item.detail}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">{item.language}</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                {item.mergedAt}
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="kicker">Currently in review</p>
            <p className="mt-3 max-w-xs text-xs leading-5 text-muted-foreground">
              Four open proposals covering memory allocation, a query engine, a search engine and a
              provisioner deadlock.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {openContributions.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-row flex flex-wrap items-baseline gap-x-3 gap-y-1 px-1 py-3"
                >
                  <span className="font-mono text-xs text-foreground">
                    {item.repo}
                    <span className="ml-2 text-muted-foreground">#{item.prNumber}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">{item.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    {item.language}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}
