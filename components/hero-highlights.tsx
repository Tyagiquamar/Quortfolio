import { GitMerge } from "lucide-react"
import Link from "next/link"
import { cpProfiles } from "@/data/site"

const mergedPurple = "text-[#8957e5] font-semibold"
const repoAccent = "text-foreground font-semibold"
const langAccent = "text-primary font-medium"

export function HeroHighlights() {
  const cf = cpProfiles[0]
  const lc = cpProfiles[1]

  return (
    <div className="mt-5 max-w-2xl border border-border/80 bg-card/30 px-4 py-4 sm:px-5">
      <p className="text-sm leading-7 text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 align-middle">
          <GitMerge className={`h-4 w-4 ${mergedPurple}`} aria-hidden />
          <span className={mergedPurple}>193 merged pull requests</span>
        </span>
        {" "}
        across{" "}
        <span className={repoAccent}>64 open-source repositories</span>
        , in{" "}
        <span className={langAccent}>Go</span>
        {", "}
        <span className={langAccent}>Rust</span>
        {", "}
        <span className={langAccent}>C++</span>
        {", "}
        <span className={langAccent}>TypeScript</span>
        {" and "}
        <span className={langAccent}>Python</span>
        : databases, storage, search, networking, observability and developer tooling.
      </p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        <Link
          href={cf.href}
          target="_blank"
          rel="noreferrer"
          className="font-semibold transition-opacity hover:opacity-80"
          style={{ color: cf.accent }}
        >
          Codeforces Master at 2202
        </Link>
        <span className="text-muted-foreground/70"> · </span>
        <Link
          href={lc.href}
          target="_blank"
          rel="noreferrer"
          className="font-semibold transition-opacity hover:opacity-80"
          style={{ color: lc.accent }}
        >
          LeetCode 2400
        </Link>
        <span className="text-muted-foreground"> (Guardian)</span>
      </p>
    </div>
  )
}
