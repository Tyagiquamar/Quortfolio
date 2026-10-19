export interface ContributionCell {
  date: string
  count: number
  level: number
}

export interface ContributionCalendarData {
  total: number
  cells: ContributionCell[]
  isFallback: boolean
}

const USERNAME = "Tyagiquamar"

function levelFromCount(count: number): number {
  if (count <= 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 9) return 3
  return 4
}

export async function getContributionCalendar(): Promise<ContributionCalendarData> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 6000)

    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
      {
        signal: controller.signal,
        next: { revalidate: 3600 },
      },
    )

    clearTimeout(timeoutId)

    if (!res.ok) {
      return { total: 0, cells: [], isFallback: true }
    }

    const data = (await res.json()) as {
      total?: Record<string, number>
      contributions?: { date: string; count: number }[]
    }

    const contributions = data.contributions ?? []
    const total =
      contributions.reduce((sum, day) => sum + (day.count ?? 0), 0) ||
      Object.values(data.total ?? {}).reduce((a, b) => a + b, 0)

    const cells: ContributionCell[] = contributions.map((day) => ({
      date: day.date,
      count: day.count ?? 0,
      level: levelFromCount(day.count ?? 0),
    }))

    if (cells.length === 0) {
      return { total: 0, cells: [], isFallback: true }
    }

    return { total, cells, isFallback: false }
  } catch {
    return { total: 0, cells: [], isFallback: true }
  }
}

export async function getMergedPrCount(): Promise<string> {
  const FALLBACK = "193"
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 4000)

    const headers: Record<string, string> = {
      "User-Agent": "quortfolio",
      Accept: "application/vnd.github+json",
    }
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch(
      `https://api.github.com/search/issues?q=type:pr+author:Tyagiquamar+is:merged`,
      { headers, signal: controller.signal, next: { revalidate: 3600 } },
    )
    clearTimeout(timeoutId)

    if (!res.ok) return FALLBACK
    const data = (await res.json()) as { total_count?: number }
    if (typeof data.total_count === "number" && data.total_count > 0) {
      return String(data.total_count)
    }
    return FALLBACK
  } catch {
    return FALLBACK
  }
}
