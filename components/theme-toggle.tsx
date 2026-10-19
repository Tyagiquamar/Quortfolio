"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"

const order = ["dark", "light", "system"] as const

const labels: Record<(typeof order)[number], string> = {
  dark: "Dark",
  light: "Light",
  system: "System",
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const current = (mounted && (theme as (typeof order)[number])) || "dark"
  const next = order[(order.indexOf(current) + 1) % order.length]
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Theme: ${labels[current]}. Switch to ${labels[next]}.`}
      className="focus-ring inline-flex h-8 items-center gap-2 border border-border/70 px-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
    >
      <Icon className="h-3.5 w-3.5" />
      {mounted ? labels[current] : "Theme"}
    </button>
  )
}
