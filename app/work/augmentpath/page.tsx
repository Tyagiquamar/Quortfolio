import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CallFlow } from "@/components/call-flow"
import { Contact, SiteFooter } from "@/components/contact"
import { Reveal } from "@/components/reveal"
import { site } from "@/data/site"
import { voiceCase } from "@/data/voice"

export const metadata: Metadata = {
  title: `${voiceCase.title} · voice AI case study`,
  description: `${voiceCase.subtitle}. ${voiceCase.lede}`,
  alternates: { canonical: `/work/${voiceCase.slug}` },
  openGraph: {
    title: `${voiceCase.title} · voice AI case study`,
    description: voiceCase.subtitle,
    url: `${site.url}/work/${voiceCase.slug}`,
  },
}

function Blocks({
  kicker,
  note,
  items,
  numbered = false,
}: {
  kicker: string
  note?: string
  items: readonly { title: string; detail: string; ref?: string }[]
  numbered?: boolean
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
      <div>
        <p className="kicker">{kicker}</p>
        {note ? <p className="mt-3 max-w-xs text-xs leading-5 text-muted-foreground">{note}</p> : null}
      </div>
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`bg-background px-5 py-5 ${
              items.length % 2 === 1 && index === items.length - 1 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex items-baseline gap-3">
              {numbered ? (
                <span className="font-mono text-[11px] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
              <h3 className="disp text-lg font-semibold leading-tight">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            {item.ref ? (
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                {item.ref}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AugmentPathCaseStudy() {
  return (
    <main>
      <article className="shell pt-12 sm:pt-16">
        <Link
          href="/"
          className="quiet-link focus-ring inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Home
        </Link>

        <header className="mt-10">
          <p className="kicker flex items-center gap-2">
            <span className="dot-live" aria-hidden />
            {voiceCase.kicker} · case study
          </p>
          <h1 className="disp mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl">
            {voiceCase.title}
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {voiceCase.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span>{voiceCase.role}</span>
            <span>{voiceCase.period}</span>
            <span>Private production system</span>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{voiceCase.lede}</p>
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {voiceCase.metrics.map((metric) => (
              <div key={metric.label} className="bg-background px-4 py-4">
                <p className="disp text-xl font-semibold leading-tight">{metric.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 font-mono text-[10px] leading-4 text-muted-foreground/70">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="panel-quiet mt-12 overflow-x-auto p-3 sm:p-5">
            <CallFlow />
          </div>
        </Reveal>
      </article>

      <div className="band">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <p className="kicker">The problem</p>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">{voiceCase.problem}</p>
        </div>
      </div>

      <div className="band border-t border-border">
        <Blocks
          kicker="Call lifecycle"
          note="Eight stages from the ring to the audit trail. Each one is a place a call can be lost, so each one is a place the system has to make a decision."
          items={voiceCase.flow.map((step) => ({ title: step.step, detail: step.detail }))}
          numbered
        />
      </div>

      <div className="band border-t border-border">
        <Blocks kicker="What I built" items={voiceCase.built} />
      </div>

      <div className="band border-t border-border">
        <Blocks kicker="Engineering decisions" items={voiceCase.decisions} />
      </div>

      <div className="band border-t border-border">
        <Blocks
          kicker="Evidence"
          note="The merge record behind the claims on this page: the fixes that came out of real pilot calls, and the model-path work that keeps the agent answerable."
          items={voiceCase.evidence}
        />
      </div>

      <div className="band border-t border-border">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="kicker">{voiceCase.testing.heading}</p>
            <p className="mt-3 max-w-xs text-xs leading-5 text-muted-foreground">
              Local gates are not the interesting part. The pilot flow is what has to hold.
            </p>
          </div>
          <div className="max-w-3xl">
            <p className="text-sm leading-6 text-muted-foreground">{voiceCase.testing.body}</p>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {voiceCase.ownership.map((item) => (
                <div key={item.label} className="flex flex-wrap gap-x-6 gap-y-1 px-1 py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-foreground/90">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-mono text-[11px] leading-5 text-muted-foreground/80">
              {voiceCase.stack.join(" / ")}
            </p>
          </div>
        </div>
      </div>

      <Contact />
      <SiteFooter />
    </main>
  )
}
