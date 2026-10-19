"use client"

import { useState } from "react"
import { skillGroups, skillIconUrl, type ToolkitSkill } from "@/data/toolkit"

function SkillChip({ skill }: { skill: ToolkitSkill }) {
  const [hideIcon, setHideIcon] = useState(false)
  const iconUrl = skillIconUrl(skill)

  return (
    <span
      className="inline-flex items-center gap-2 border border-border/80 bg-background/80 px-2.5 py-1.5 text-[13px] leading-none text-foreground/90"
      title={skill.name}
    >
      {iconUrl && !hideIcon ? (
        <img
          src={iconUrl}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 shrink-0 object-contain dark:invert-[0.02]"
          loading="lazy"
          onError={() => setHideIcon(true)}
        />
      ) : (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-muted font-mono text-[9px] font-semibold uppercase text-muted-foreground">
          {skill.name.slice(0, 1)}
        </span>
      )}
      {skill.name}
    </span>
  )
}

export function ToolkitGrid() {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title} className="border-t border-border pt-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {group.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <SkillChip key={`${group.title}-${skill.name}`} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
