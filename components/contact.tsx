import { ArrowUpRight } from "lucide-react"
import { contact, site } from "@/data/site"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <p className="kicker">Contact</p>
          <div>
            <h2 className="disp max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{contact.body}</p>

            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
              {contact.channels.map((channel) => (
                <a
                  key={channel.href}
                  href={channel.href}
                  target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={channel.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="hover-row flex items-baseline justify-between gap-3 bg-background px-4 py-4"
                >
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {channel.label}
                    </span>
                    <span className="mt-1 block text-sm text-foreground">{channel.value}</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:px-8 lg:px-12">
        <p>
          {site.name} · {site.location}
        </p>
        <p className="flex items-center gap-4">
          <a href="https://github.com/Tyagiquamar" target="_blank" rel="noreferrer" className="quiet-link">
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="quiet-link">
            Email
          </a>
        </p>
      </div>
    </footer>
  )
}
