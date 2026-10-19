import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { education, experience } from "@/data/experience"
import { Reveal } from "@/components/reveal"

function CompanyMark({
  company,
  logo,
  mark,
}: {
  company: string
  logo?: string
  mark?: string
}) {
  return (
    <span
      className="relative mb-3 inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-border bg-background font-mono text-xs font-medium"
      aria-hidden
    >
      {logo ? (
        <Image src={logo} alt="" fill sizes="40px" className="object-contain p-1" />
      ) : (
        mark ?? company.slice(0, 2)
      )}
    </span>
  )
}

export function ExperienceTimeline() {
  return (
    <div className="border-t border-border">
      {experience.map((role, index) => (
        <Reveal key={`${role.company}-${role.dates}`} delay={index * 30}>
          <article className="hover-row grid gap-5 border-b border-border px-1 py-8 lg:grid-cols-[220px_minmax(0,1fr)_210px] lg:items-start lg:gap-10">
            <div>
              <CompanyMark company={role.company} logo={role.logo} mark={role.mark} />
              <p className="disp text-lg font-semibold">
                {role.company}
                {role.current ? (
                  <span className="ml-2 inline-flex items-center gap-1 align-middle font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    <span className="dot-live" aria-hidden />
                    Now
                  </span>
                ) : null}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {role.dates}
              </p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground/80">{role.location}</p>
            </div>

            <div>
              <p className="text-sm text-foreground">{role.role}</p>
              <ul className="mt-4 space-y-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
              {role.href ? (
                <Link
                  href={role.href}
                  className="quiet-link group mt-4 inline-flex items-center gap-2 text-sm text-foreground"
                >
                  Read the full case study
                  <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ) : null}
            </div>

            <p className="font-mono text-[11px] leading-5 text-muted-foreground/80 lg:border-l lg:border-border lg:pl-5">
              {role.tech.join(" / ")}
            </p>
          </article>
        </Reveal>
      ))}

      <Reveal>
        <div className="grid gap-3 border-b border-border px-1 py-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <p className="kicker">Education</p>
          <div>
            <p className="text-sm text-foreground">
              {education.degree} · {education.institution}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {education.dates} · {education.score}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
