import { ArrowUpRight, GitMerge, GitPullRequest } from "lucide-react"
import { GithubContributionGraph } from "@/components/github-contribution-graph"
import { coverage, mergedContributions, openContributions, ossStats } from "@/data/opensource"
import type { ContributionCalendarData } from "@/lib/github"
import { Reveal } from "@/components/reveal"

function repoOwner(repo: string) {
  return repo.split("/")[0] ?? repo
}

function RepoAvatar({ repo }: { repo: string }) {
  const owner = repoOwner(repo)
  return (
    <img
      src={`https://github.com/${owner}.png?size=64`}
      alt=""
      width={28}
      height={28}
      className="h-7 w-7 shrink-0 rounded border border-border object-cover"
      loading="lazy"
    />
  )
}

export function OssTable({ contributionCalendar }: { contributionCalendar?: ContributionCalendarData }) {
  return (
    <div>
      {contributionCalendar ? (
        <Reveal>
          <GithubContributionGraph calendar={contributionCalendar} />
        </Reveal>
      ) : null}

      <Reveal>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
          <div className="bg-background px-4 py-4">
            <p className="disp flex items-center gap-2 text-3xl font-semibold leading-none">
              <GitMerge className="h-6 w-6 text-primary" aria-hidden />
              {ossStats.merged}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              merged pull requests
            </p>
          </div>
          <div className="bg-background px-4 py-4">
            <p className="disp text-3xl font-semibold leading-none">{ossStats.repositories}</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              repositories
            </p>
          </div>
          <div className="bg-background px-4 py-4">
            <p className="disp text-3xl font-semibold leading-none">5</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              languages
            </p>
            <p className="mt-1 text-[11px] leading-4 text-muted-foreground/75">
              {ossStats.languages.join(" · ")}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 grid gap-3 border-y border-border py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_90px_120px]">
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
              <span className="flex min-w-0 items-center gap-2 font-mono text-xs text-foreground">
                <RepoAvatar repo={item.repo} />
                <span className="truncate">
                  {item.repo}
                  <span className="ml-2 text-muted-foreground">#{item.prNumber}</span>
                </span>
              </span>
              <span className="text-sm leading-6 text-muted-foreground">
                <span className="text-foreground">{item.title}.</span> {item.detail}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">{item.language}</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                {item.mergedAt}
                <GitMerge className="h-3 w-3 text-primary" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="kicker">Repository coverage</p>
            <a
              href={ossStats.profileHref}
              target="_blank"
              rel="noreferrer"
              className="quiet-link inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              All {ossStats.merged} on GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {coverage.map((repo) => (
              <a
                key={repo.repo}
                href={`https://github.com/${repo.repo}`}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 border border-border px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <RepoAvatar repo={repo.repo} />
                {repo.repo}
                <span className="text-primary">{repo.merged}</span>
              </a>
            ))}
            <span className="inline-flex items-baseline gap-2 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground/70">
              +{ossStats.repositories - coverage.length} more repositories
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 grid gap-6 border-t border-border pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
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
                  <GitPullRequest className="h-3.5 w-3.5 text-primary" aria-hidden />
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
