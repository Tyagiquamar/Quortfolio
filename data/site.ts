export const site = {
  name: "Mohd Quamar Tyagi",
  shortName: "MQT",
  role: "CTO · AugmentPath",
  title: "Mohd Quamar Tyagi · CTO, AugmentPath",
  description:
    "CTO at AugmentPath: production voice AI for automotive repair shops. Realtime agents, qualification gates, and Tekmetric delivery. Previously Go/gRPC at Nugget (Zomato), and merged open-source work across 64 repositories.",
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
  kicker: "CTO · AugmentPath",
  headline: "I build backends that have to be right, and stay right.",
  lede: "At AugmentPath I run production voice AI for auto repair shops: realtime agents, qualification before billing, and structured writes into the shop's own CRM. Before that, latency-sensitive Go and gRPC at Nugget (Zomato). The thread is correctness under production: calls delivered once, work that survives a crash, and a record you can reconstruct after the fact.",
  context:
    "Also 193 merged pull requests across 64 open-source repositories, in Go, Rust, C++, TypeScript and Python: databases, storage, search, networking, observability and developer tooling. Codeforces Candidate Master at 2038.",
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
    value: "84",
    label: "commits shipped",
    detail: "voice backend, portal, E2E",
  },
  {
    value: "5x",
    label: "p90 latency improvement",
    detail: "Go/gRPC paths at Nugget (Zomato)",
  },
  {
    value: "2038",
    label: "Codeforces rating",
    detail: "Candidate Master · LeetCode Guardian 2400+",
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
      value: "linkedin.com/in/mohd-quamar-tyagi",
      href: "https://linkedin.com/in/mohd-quamar-tyagi",
    },
  ],
} as const

export const cpProfiles = [
  {
    platform: "Codeforces",
    rating: "Candidate Master · 2038",
    detail: "top 1% globally",
    href: "https://codeforces.com/profile/altair_45",
  },
  {
    platform: "LeetCode",
    rating: "Guardian · 2400+",
    detail: "top 0.6% · 1000+ solved",
    href: "https://leetcode.com/u/Altair_4/",
  },
  {
    platform: "CodeChef",
    rating: "5★ · 2017 peak",
    detail: "competitive programming",
    href: "https://www.codechef.com/users/tyagiquamar",
  },
] as const

export const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "Go", "C++", "Rust", "Python", "SQL"],
  },
  {
    title: "Voice & AI",
    skills: [
      "Realtime voice agents",
      "WebSocket LLM gateways",
      "OpenAI / Anthropic / Gemini",
      "RAG + vector fallback",
      "Prompt guardrails",
    ],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "REST", "Webhooks", "gRPC", "Multi-tenant auth"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "MySQL", "Weaviate"],
  },
  {
    title: "Voice plumbing",
    skills: [
      "Twilio numbers",
      "Call transcription",
      "Spam classification",
      "CRM delivery",
      "Usage billing",
    ],
  },
  {
    title: "Ops",
    skills: ["Docker", "Railway", "Cloudflare", "Vercel", "Selenium E2E", "GitHub Actions"],
  },
] as const
