export const augmentPath = {
  name: "AugmentPath Strategy",
  url: "https://www.augmentpathstrategy.com/",
  logo: "/logos/augmentpath-strategy-logo.png",
} as const

export const site = {
  name: "Mohd Quamar Tyagi",
  profileImage: "/images/profile-github.png",
  github: "https://github.com/Tyagiquamar",
  linkedin: "https://www.linkedin.com/in/quamartyagi/",
  role: `CTO · ${augmentPath.name}`,
  title: `Mohd Quamar Tyagi · CTO, ${augmentPath.name}`,
  description:
    "CTO at AugmentPath Strategy: production voice AI for service businesses and automotive repair shops. Realtime agents, qualification gates, and CRM delivery. Previously Go/gRPC at Nugget (Zomato), and merged open-source work across 64 repositories.",
  url: "https://quamar-voice.vercel.app",
  email: "mohdquamartyagi@gmail.com",
  location: "Remote · UTC+5:30",
  availability: "Open to the right founding and backend leadership roles. Replies within a day.",
} as const

export const nav = [
  { label: "Case study", href: "#voice" },
  { label: "Work", href: "#systems" },
  { label: "Open source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const

export const hero = {
  kicker: `CTO · ${augmentPath.name}`,
  headline: "I build backends that have to be right, and stay right.",
  lede: `At ${augmentPath.name} I run production voice AI for service businesses: realtime agents, qualification before billing, and structured writes into the shop's own CRM. Before that, latency-sensitive Go and gRPC at Nugget (Zomato). The thread is correctness under production: calls delivered once, work that survives a crash, and a record you can reconstruct after the fact.`,
} as const

export interface Stat {
  value: string
  label: string
  detail?: string
}

export const stats: Stat[] = [
  {
    value: "193",
    label: "merged OSS PRs",
    detail: "64 repositories · 5 languages",
  },
  {
    value: "5x",
    label: "p90 latency improvement",
    detail: "Go/gRPC paths at Nugget (Zomato)",
  },
  {
    value: "2038",
    label: "Codeforces rating",
    detail: "Candidate Master · top 1%",
  },
  {
    value: "RLHF",
    label: "LLM eval & training",
    detail: "Contract RLHF (Caudal AI) · voice guardrails & eval",
  },
]

export const contact = {
  heading: "Let's talk about the role you're hiring for.",
  body: "If you are building voice AI, realtime systems, or a backend that has to stay correct under production traffic, I would like to hear about it. Send a note with what the team is building and who the customer is.",
  channels: [
    { label: "Email", value: "mohdquamartyagi@gmail.com", href: "mailto:mohdquamartyagi@gmail.com" },
    { label: "GitHub", value: "github.com/Tyagiquamar", href: "https://github.com/Tyagiquamar" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/quamartyagi",
      href: "https://www.linkedin.com/in/quamartyagi/",
    },
  ],
} as const

export const cpProfiles = [
  {
    platform: "Codeforces",
    rating: "Candidate Master · 2038",
    detail: "top 1% globally",
    href: "https://codeforces.com/profile/altair_45",
    logo: "/logos/codeforces-logo.png",
    accent: "#a855f7",
  },
  {
    platform: "LeetCode",
    rating: "Guardian · 2400+",
    detail: "top 0.6% · 1000+ solved",
    href: "https://leetcode.com/u/Altair_4/",
    logo: "/logos/leetcode-logo.png",
    accent: "#ef4444",
  },
  {
    platform: "CodeChef",
    rating: "5★ · 2017 peak",
    detail: "competitive programming",
    href: "https://www.codechef.com/users/tyagiquamar",
    logo: "/logos/codechef-logo.svg",
    accent: "#f97316",
  },
] as const

