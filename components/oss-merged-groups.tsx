"use client"

import { ChevronDown, ExternalLink, GitMerge } from "lucide-react"
import type { RepoMergeGroup } from "@/lib/oss-groups"

const mergedPurple = "text-[#8957e5]"

function RepoAvatar({ repo }: { repo: string }) {
  const owner = repo.split("/")[0] ?? repo
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

export function OssMergedGroups({ groups }: { groups: RepoMergeGroup[] }) {
  return (
    <div className="divide-y divide-border border-b border-border">
      {groups.map((group) => (
        <details key={group.repo} className="group px-1 py-1">
          <summary
            className="hover-row flex cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-2 py-5 [&::-webkit-details-marker]:hidden"
          >
            <RepoAvatar repo={group.repo} />
            <span className="min-w-0 flex-1 font-mono text-xs text-foreground">
              {group.repo}
              <span className={`ml-2 inline-flex items-center gap-1 ${mergedPurple}`}>
                <GitMerge className="h-3.5 w-3.5" aria-hidden />
                {group.merged} merged
              </span>
            </span>
            <span className="w-full text-sm leading-6 text-muted-foreground md:max-w-3xl md:flex-1">
              {group.summary}
            </span>
            <ChevronDown
              className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>

          <div className="border-t border-border/60 pb-5 pl-9 pr-2 pt-3">
            {group.pulls.length > 0 ? (
              <ol className="divide-y divide-border/50 border-y border-border/50">
                {group.pulls.map((item) => (
                  <li
                    key={item.href}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 sm:flex-nowrap"
                  >
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] tabular-nums ${mergedPurple}`}
                    >
                      <GitMerge className="h-3.5 w-3.5" aria-hidden />
                      #{item.prNumber}
                    </span>
                    <p className="min-w-0 flex-1 text-sm leading-6 text-foreground">
                      {item.detail}
                    </p>
                    {item.mergedAt ? (
                      <span className="shrink-0 font-mono text-[10px] text-muted-foreground/80">
                        {item.mergedAt}
                      </span>
                    ) : null}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring shrink-0 text-muted-foreground transition-colors hover:text-[#8957e5]"
                      aria-label={`Open PR #${item.prNumber} on GitHub`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-muted-foreground">
                Merged pull requests for this repository are listed on GitHub.
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  )
}
