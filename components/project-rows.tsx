import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { buckets, projectsByBucket, type Bucket, type Project } from "@/data/projects"
import { Reveal } from "@/components/reveal"

function Proof({ project }: { project: Project }) {
  return (
    <ul className="mt-4 space-y-2">
      {project.proof.map((line) => (
        <li key={line} className="flex gap-3 text-sm leading-6 text-muted-foreground">
          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-primary" />
          {line}
        </li>
      ))}
    </ul>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 30}>
      <article className="hover-row grid gap-6 border-b border-border px-1 py-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-10">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="disp text-xl font-semibold sm:text-2xl">{project.title}</h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
            {project.tagline}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px]">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="quiet-link focus-ring inline-flex items-center gap-1 text-muted-foreground"
            >
              Source
              <ArrowUpRight className="h-3 w-3" />
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="quiet-link focus-ring inline-flex items-center gap-1 text-muted-foreground"
              >
                {project.liveLabel ?? "Live"}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ) : null}
          </div>
          {project.image ? (
            <div className="relative mt-5 hidden aspect-[16/10] w-full overflow-hidden border border-border/70 bg-card/40 lg:block">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="object-cover object-top"
              />
            </div>
          ) : null}
        </div>

        <div>
          <p className="max-w-3xl text-sm leading-6 text-foreground/90">{project.summary}</p>
          <Proof project={project} />
          <p className="mt-4 font-mono text-[11px] leading-5 text-muted-foreground/80">
            {project.tech.join(" / ")}
          </p>
        </div>
      </article>
    </Reveal>
  )
}

export function ProjectBucket({ bucket }: { bucket: Bucket }) {
  const list = projectsByBucket(bucket)
  const meta = buckets[bucket]

  return (
    <div className="mt-2">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <h3 className="disp text-lg font-semibold">{meta.title}</h3>
        <p className="max-w-2xl text-xs leading-5 text-muted-foreground">{meta.blurb}</p>
      </div>
      <div className="mt-6 border-t border-border">
        {list.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
