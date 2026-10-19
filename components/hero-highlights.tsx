import { GitMerge } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cpProfiles } from "@/data/site"

const mergedPurple = "text-[#8957e5] font-semibold"
const repoAccent = "text-foreground font-semibold"

function Lang({
  name,
  color,
  suffix,
  suffixColor,
}: {
  name: string
  color: string
  suffix?: string
  suffixColor?: string
}) {
  return (
    <span className="font-medium" style={{ color }}>
      {name}
      {suffix ? (
        <span style={{ color: suffixColor ?? color }}> ({suffix})</span>
      ) : null}
    </span>
  )
}

function CpIcon({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={16}
      height={16}
      className="inline-block h-4 w-4 shrink-0 object-contain"
      aria-hidden
    />
  )
}

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
        <Lang name="Go" color="#00ADD8" suffix="🐹" />
        {", "}
        <Lang name="Rust" color="#CE422B" suffix="🦀" />
        {", "}
        <Lang name="C++" color="#00599C" suffix="++" suffixColor="#659AD2" />
        {", "}
        <Lang name="TypeScript" color="#3178C6" suffix="TS" suffixColor="#235A97" />
        {" and "}
        <Lang name="Python" color="#3776AB" suffix="🐍" suffixColor="#FFD43B" />
        : databases, storage, search, networking, observability and developer tooling.
      </p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        <Link
          href={cf.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80"
          style={{ color: cf.accent }}
        >
          <CpIcon src={cf.logo} />
          Codeforces Master at 2202
        </Link>
        <span className="text-muted-foreground/70"> · </span>
        <Link
          href={lc.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80"
          style={{ color: lc.accent }}
        >
          <CpIcon src={lc.logo} />
          LeetCode 2400
        </Link>
        <span className="text-muted-foreground"> (Guardian)</span>
      </p>
    </div>
  )
}
