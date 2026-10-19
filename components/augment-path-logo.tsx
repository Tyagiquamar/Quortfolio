import Image from "next/image"
import { augmentPath } from "@/data/site"

const pad = "bg-neutral-950"

type Variant = "sidebar" | "inline" | "mark"

const shells: Record<Variant, string> = {
  sidebar:
    "mb-4 inline-flex h-16 w-full max-w-[200px] items-center justify-center overflow-hidden border border-border/80 px-4 py-3",
  inline:
    "inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-border/80 p-1.5",
  mark:
    "mb-3 inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-border p-1.5",
}

export function AugmentPathLogo({
  variant = "inline",
  className,
}: {
  variant?: Variant
  className?: string
}) {
  const isSidebar = variant === "sidebar"
  return (
    <span className={`${shells[variant]} ${pad} ${className ?? ""}`}>
      {isSidebar ? (
        <Image
          src={augmentPath.logo}
          alt={augmentPath.name}
          width={160}
          height={48}
          className="h-auto max-h-10 w-auto object-contain"
        />
      ) : (
        <img
          src={augmentPath.logo}
          alt=""
          width={28}
          height={28}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      )}
    </span>
  )
}
