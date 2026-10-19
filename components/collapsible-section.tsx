"use client"

import { ChevronDown } from "lucide-react"
import type { ReactNode } from "react"

export function CollapsibleSection({
  id,
  kicker,
  title,
  note,
  children,
  defaultOpen = true,
  collapsedHint,
  headerExtra,
  titleClassName = "disp text-2xl font-semibold sm:text-4xl",
}: {
  id: string
  kicker: string
  title: string
  note?: string
  children: ReactNode
  defaultOpen?: boolean
  collapsedHint?: string
  headerExtra?: ReactNode
  titleClassName?: string
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-border">
      <details className="band group" open={defaultOpen}>
        <summary
          className="hover-row -mx-1 list-none cursor-pointer rounded-sm px-1 py-1 [&::-webkit-details-marker]:hidden"
        >
          <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
            <p className="kicker">{kicker}</p>
            <div className="min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <h2 className={titleClassName}>{title}</h2>
                <span
                  className="inline-flex shrink-0 items-center gap-1.5 rounded border border-border/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                  aria-hidden
                >
                  <span className="group-open:hidden">Expand</span>
                  <span className="hidden group-open:inline">Collapse</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
                </span>
              </div>

              <div className="hidden group-open:block">{headerExtra}</div>

              {note ? (
                <p className="mt-4 hidden max-w-2xl text-sm leading-6 text-muted-foreground group-open:block">
                  {note}
                </p>
              ) : null}

              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/75 group-open:hidden">
                {collapsedHint ?? "Tap heading to expand"}
              </p>
            </div>
          </div>
        </summary>

        <div className="mt-8 border-t border-border/50 pt-8">{children}</div>
      </details>
    </section>
  )
}
