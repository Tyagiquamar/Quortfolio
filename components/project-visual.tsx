"use client"

import { useState } from "react"
import type { Project } from "@/data/projects"

export function ProjectVisual({ project }: { project: Project }) {
  const image = project.image
  const [src, setSrc] = useState(image?.src ?? "")

  if (!image) return null

  const onError = () => {
    if (image.fallbackSrc && src !== image.fallbackSrc) {
      setSrc(image.fallbackSrc)
    }
  }

  const isDiagram = src.toLowerCase().endsWith(".svg")

  return (
    <figure
      className={`mb-1 w-full overflow-hidden border border-border ${
        isDiagram ? "bg-muted/25" : "bg-neutral-950"
      }`}
    >
      <div className={isDiagram ? "aspect-[16/10] sm:aspect-[8/5]" : "aspect-[8/5]"}>
        <img
          src={src}
          alt={image.alt}
          className={`h-full w-full transition duration-500 motion-reduce:transform-none ${
            isDiagram
              ? "object-contain object-center p-5 sm:p-8"
              : "object-contain object-center grayscale-[18%] hover:grayscale-0"
          }`}
          loading="eager"
          decoding="async"
          onError={onError}
        />
      </div>
    </figure>
  )
}
