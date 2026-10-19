"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { nav, site } from "@/data/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em]"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center border border-primary/50 text-[10px] text-primary">
            {site.shortName}
          </span>
          <span className="hidden text-muted-foreground sm:inline">Voice AI · Backend</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex h-8 w-8 items-center justify-center border border-border/70 text-muted-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-border/70 md:hidden">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-border/50 py-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
