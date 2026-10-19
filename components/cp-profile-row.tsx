"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cpProfiles } from "@/data/site"

type CpProfile = (typeof cpProfiles)[number]

function PlatformLogo({ logo, platform }: { logo: string; platform: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border/80 bg-muted font-mono text-xs font-semibold uppercase text-muted-foreground">
        {platform.slice(0, 1)}
      </span>
    )
  }

  return (
    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded border border-border/80 bg-background p-1.5">
      <img
        src={logo}
        alt=""
        width={28}
        height={28}
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </span>
  )
}

export function CpProfileRow({ profile }: { profile: CpProfile }) {
  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noreferrer"
      className="hover-row flex flex-wrap items-center gap-x-3 gap-y-2 border-l-[3px] py-4 pl-3 pr-2 sm:flex-nowrap"
      style={{ borderLeftColor: profile.accent }}
    >
      <PlatformLogo logo={profile.logo} platform={profile.platform} />
      <span
        className="w-full min-w-[6.5rem] font-mono text-xs uppercase tracking-[0.18em] sm:w-auto"
        style={{ color: profile.accent }}
      >
        {profile.platform}
      </span>
      <span className="min-w-0 flex-1 text-sm text-foreground">{profile.rating}</span>
      <span className="flex w-full items-center gap-1 font-mono text-[11px] text-muted-foreground sm:w-auto sm:shrink-0">
        {profile.detail}
        <ArrowUpRight className="h-3 w-3 shrink-0" />
      </span>
    </a>
  )
}
