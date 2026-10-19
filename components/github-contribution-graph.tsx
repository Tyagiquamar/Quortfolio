import Link from "next/link"
import { Github } from "lucide-react"
import type { ContributionCalendarData, ContributionCell } from "@/lib/github"

const levelClass: Record<number, string> = {
  0: "bg-muted",
  1: "bg-primary/25",
  2: "bg-primary/45",
  3: "bg-primary/70",
  4: "bg-primary",
}

function cellsToWeeks(cells: ContributionCalendarData["cells"]) {
  if (cells.length === 0) return [] as ContributionCell[][]

  const sorted = [...cells].sort((a, b) => a.date.localeCompare(b.date))
  const first = new Date(`${sorted[0].date}T12:00:00Z`)
  const pad = first.getUTCDay()
  const padded: ContributionCell[] = []

  for (let i = 0; i < pad; i++) {
    padded.push({ date: "", count: 0, level: 0 })
  }
  padded.push(...sorted)

  const weeks: ContributionCell[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }
  return weeks
}

export function GithubContributionGraph({
  calendar,
  username = "Tyagiquamar",
}: {
  calendar: ContributionCalendarData
  username?: string
}) {
  const weeks = cellsToWeeks(calendar.cells)

  return (
    <div className="border border-border bg-background px-4 py-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="kicker">GitHub activity</p>
          <p className="mt-2 text-sm text-foreground">
            {calendar.isFallback ? (
              <span className="text-muted-foreground">Contribution graph unavailable right now.</span>
            ) : (
              <>
                <span className="disp text-2xl font-semibold">{calendar.total.toLocaleString()}</span>
                <span className="text-muted-foreground"> contributions · last year</span>
              </>
            )}
          </p>
        </div>
        <Link
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="quiet-link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em]"
        >
          <Github className="h-4 w-4" />
          @{username}
        </Link>
      </div>

      {weeks.length > 0 ? (
        <div className="mt-4 overflow-x-auto pb-1" role="img" aria-label={`GitHub contributions for ${username}`}>
          <div className="flex gap-[3px]">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {week.map((day, dayIndex) => (
                  <span
                    key={`${weekIndex}-${dayIndex}-${day.date}`}
                    title={day.date ? `${day.date}: ${day.count}` : undefined}
                    className={`h-[11px] w-[11px] shrink-0 rounded-[2px] ${levelClass[day.level] ?? levelClass[0]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
