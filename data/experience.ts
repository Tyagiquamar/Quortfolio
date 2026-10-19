export interface Role {
  company: string
  role: string
  location: string
  dates: string
  current?: boolean
  logo?: string
  mark?: string
  bullets: string[]
  tech: string[]
  href?: string
}

export const experience: Role[] = [
  {
    company: "AugmentPath Strategy",
    role: "CTO",
    location: "Remote",
    dates: "May 2026 - Present",
    current: true,
    logo: "/logos/augmentpath-strategy-logo.png",
    href: "/work/augmentpath",
    bullets: [
      "Realtime voice agent for inbound shop calls: diagnose, qualify, and write structured work into Tekmetric.",
      "Full stack and voice path are in the case study above (gateway, gates, portals, per-call audit trail).",
    ],
    tech: [
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
      "Retell",
      "OpenAI Realtime",
      "Twilio",
      "Tekmetric",
      "Cal.com",
      "Stripe",
      "Railway",
    ],
  },
  {
    company: "Nugget (Zomato)",
    role: "SDE-1 (Backend)",
    location: "Gurgaon, India",
    dates: "Jul 2025 - Dec 2025",
    logo: "/logos/zomato-logo.png",
    bullets: [
      "Production Go/gRPC services for customer experience and support; ~5x p90 latency improvement on key flows.",
      "Automated ticket workflows (~80% less manual ops, ~35% less support load); Zendesk/Freshdesk integrations.",
    ],
    tech: ["Go", "gRPC", "MySQL", "MongoDB"],
  },
  {
    company: "Caudal AI",
    role: "RLHF Trainer (contract)",
    location: "Remote",
    dates: "Contract",
    mark: "CA",
    bullets: [
      "Trained and evaluated model outputs as a contract RLHF trainer, ranking and rewriting responses against written guidelines.",
    ],
    tech: ["RLHF", "Prompt evaluation", "Technical writing"],
  },
  {
    company: "ITJOBS",
    role: "Software Engineering Intern",
    location: "Remote",
    dates: "Jul 2023 - Sep 2023",
    logo: "/logos/itjobs-logo.jpg",
    bullets: [
      "React.js UI and Node.js REST APIs with MongoDB in a collaborative Git workflow.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],
  },
]

export const education = {
  institution: "Chandigarh Engineering College",
  degree: "B.Tech, Computer Science and Engineering",
  dates: "2021 - 2025",
  score: "7.9 CGPA",
} as const
