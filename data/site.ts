export const site = {
  name: "Mohd Quamar Tyagi",
  shortName: "MQT",
  role: "Founding Engineer · Voice AI & Backend Systems",
  title: "Mohd Quamar Tyagi · Voice AI & Backend Systems Engineer",
  description:
    "Founding engineer building production voice AI: inbound calls answered by a realtime agent, qualified, and written into the customer's own shop management system. Previously SDE-1 (Backend) at Zomato.",
  url: "https://quamar-voice.vercel.app",
  email: "mohdquamartyagi@gmail.com",
  location: "Remote · UTC+5:30",
  availability: "Open to founding-engineer and backend-systems roles. Replies within a day.",
} as const

export const nav = [
  { label: "Voice AI", href: "#voice" },
  { label: "Systems", href: "#systems" },
  { label: "Open Source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const

export const hero = {
  kicker: "Production voice AI · backend systems",
  headline: "I make phone calls work as software.",
  lede: "I build the backend and the realtime voice path behind an AI phone receptionist for automotive repair shops. A caller dials a shop's number, a realtime agent answers, captures the concern and the vehicle, and the qualified job lands in the shop's own management system. When the call ends, the record is there: transcript, classification, delivery status, billing.",
  context:
    "Before this: latency-sensitive Go services at Zomato, cloud-native open source with the Linux Foundation, and merged upstream pull requests across systems, storage, database and search projects.",
} as const

export interface Stat {
  value: string
  label: string
  detail?: string
}

export const stats: Stat[] = [
  {
    value: "84",
    label: "commits shipped",
    detail: "Backend + portal + E2E repos, Jun-Sep 2026",
  },
  {
    value: "6",
    label: "merged PRs in the platform",
    detail: "voice gateway, call flow, booking correctness",
  },
  {
    value: "15",
    label: "merged upstream OSS PRs",
    detail: "Go, Rust, C++ across 15 repositories",
  },
  {
    value: "2038",
    label: "Codeforces rating",
    detail: "Candidate Master · 2400+ LeetCode Guardian",
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
    skills: ["TypeScript", "Go", "C++", "Node.js", "Python", "SQL"],
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
    skills: ["NestJS", "Express", "REST", "Webhooks", "gRPC", "Multi-tenant auth"],
  },
  {
    title: "Data",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Weaviate", "MySQL"],
  },
  {
    title: "Integrations",
    skills: ["Twilio", "Tekmetric", "Cal.com", "Stripe", "SendGrid"],
  },
  {
    title: "Ops",
    skills: ["Docker", "Railway", "Cloudflare", "Vercel", "Selenium E2E", "GitHub Actions"],
  },
] as const
