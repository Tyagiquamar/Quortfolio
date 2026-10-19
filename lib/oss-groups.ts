import type { RepoCoverage } from "@/data/opensource"
import { coverage } from "@/data/opensource"
import { ossRepoPulls } from "@/data/oss-repo-pulls"

export interface RepoPull {
  repo: string
  title: string
  detail: string
  prNumber: number
  href: string
  mergedAt?: string
}

export interface RepoMergeGroup {
  repo: string
  merged: number
  pulls: RepoPull[]
  summary: string
  githubSearchHref: string
}

function repoOwner(repo: string) {
  return repo.split("/")[0] ?? repo
}

function shortenClause(text: string, max = 72): string {
  const one = text.replace(/\s+/g, " ").trim().replace(/\.$/, "")
  const clause = one.split(/[,;]/)[0]?.trim() ?? one
  if (clause.length <= max) return clause
  return `${clause.slice(0, max - 1).trim()}…`
}

function summarizeRepoWork(pulls: RepoPull[], merged: number, repo: string): string {
  if (pulls.length === 0) {
    return `${merged} merged pull requests across production paths in ${repoOwner(repo)}.`
  }
  const clauses = pulls.map((p) => shortenClause(p.detail))
  const joined = clauses.join(" · ")
  const budget = 320
  if (joined.length <= budget) return joined
  let acc = ""
  let used = 0
  for (const clause of clauses) {
    const next = acc ? `${acc} · ${clause}` : clause
    if (next.length > budget && used > 0) break
    acc = next
    used += 1
  }
  const rest = pulls.length - used
  if (rest > 0) return `${acc} · +${rest} more`
  return acc
}

export function buildRepoMergeGroups(repos: RepoCoverage[] = coverage): RepoMergeGroup[] {
  return repos.map((entry) => {
    const pulls = ossRepoPulls[entry.repo] ?? []
    return {
      repo: entry.repo,
      merged: entry.merged,
      pulls,
      summary: summarizeRepoWork(pulls, entry.merged, entry.repo),
      githubSearchHref: `https://github.com/pulls?q=is%3Apr+author%3ATyagiquamar+is%3Amerged+repo%3A${encodeURIComponent(entry.repo)}`,
    }
  })
}
