import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"

export function Section({
  id,
  kicker,
  title,
  note,
  children,
  divided = true,
}: {
  id: string
  kicker: string
  title: string
  note?: string
  children: ReactNode
  divided?: boolean
}) {
  return (
    <section id={id} className={`scroll-mt-16 ${divided ? "border-t border-border" : ""}`}>
      <div className="band">
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
            <p className="kicker">{kicker}</p>
            <div>
              <h2 className="disp text-2xl font-semibold sm:text-4xl">{title}</h2>
              {note ? (
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">{note}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
