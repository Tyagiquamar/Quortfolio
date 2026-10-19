"use client"

import { ChevronDown } from "lucide-react"
import { buckets, projectsByBucket, type Bucket } from "@/data/projects"
import { ProjectBucket } from "@/components/project-rows"

const ORDER: Bucket[] = ["systems", "markets", "product"]

export function ProjectBucketsAccordion() {
  return (
    <div className="mt-2 divide-y divide-border border-y border-border">
      {ORDER.map((bucket, index) => {
        const meta = buckets[bucket]
        const count = projectsByBucket(bucket).length
        return (
          <details key={bucket} className="group px-1" open={index === 0}>
            <summary
              className="hover-row flex cursor-pointer list-none flex-wrap items-center gap-x-4 gap-y-2 py-5 [&::-webkit-details-marker]:hidden"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="disp min-w-0 flex-1 text-lg font-semibold">{meta.title}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">
                {count} project{count === 1 ? "" : "s"}
              </span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <div className="border-t border-border/60 pb-6 pt-4">
              <p className="max-w-2xl text-xs leading-5 text-muted-foreground">{meta.blurb}</p>
              <ProjectBucket bucket={bucket} embedded />
            </div>
          </details>
        )
      })}
    </div>
  )
}
