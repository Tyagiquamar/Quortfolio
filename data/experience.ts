export interface Role {
  company: string
  role: string
  location: string
  dates: string
  current?: boolean
  bullets: string[]
  tech: string[]
  href?: string
}

export const experience: Role[] = [
  {
    company: "AugmentPath Strategy",
    role: "Founding Engineer · Voice AI & Backend Systems",
    location: "Remote",
    dates: "Jun 2026 - Present",
    current: true,
    bullets: [
      "Built the production backend for a multi-tenant voice-agent platform that answers inbound calls for automotive repair shops and hands qualified work to their shop management system.",
      "Worked on the realtime voice path: a custom-LLM WebSocket gateway that resolves the tenant from call metadata and assembles business profile, hours, service catalog and schedule context before the first token.",
      "Worked on a diagnostics-first call flow that captures the customer concern and vehicle context before a call is qualified or handed off.",
      "Designed spam detection and call classification so unwanted calls stop before CRM delivery, advisor alerts or billing.",
      "Implemented Tekmetric delivery for structured call and service records, with per-tenant delivery logging and a mock CRM for pilot testing.",
      "Shipped operational visibility: call records, transcripts, recent-call reporting, audit trails and call diagnostics.",
      "Owned pilot delivery: managed phone-number provisioning, instant-demo onboarding, a Selenium pilot voice-call suite, deployment and a written codebase handoff.",
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
    company: "Zomato",
    role: "SDE-1 (Backend)",
    location: "Gurgaon, India",
    dates: "Jul 2025 - Dec 2025",
    bullets: [
      "Worked on production backend services for the customer-experience and support platform using Go and gRPC.",
      "Improved backend and API performance, landing an approximately 5x improvement in p90 latency on relevant customer-support flows.",
      "Automated support and ticket workflows, cutting manual operational effort by approximately 80% and overall support load by 35%.",
      "Worked on live-status API behaviour and reduced redundant initialisations by approximately 60%.",
      "Built and maintained functionality across MySQL- and MongoDB-backed services.",
    ],
    tech: ["Go", "gRPC", "MySQL", "MongoDB"],
  },
  {
    company: "The Linux Foundation (Cloudforet)",
    role: "Open Source / Cloud-Native Engineering Mentee",
    location: "Remote",
    dates: "Nov 2023 - Mar 2024",
    bullets: [
      "Contributed to Cloudforet cloud-native engineering through the Linux Foundation mentorship program.",
      "Migrated service communication to gRPC, improving service-to-service data-transfer performance by approximately 60%.",
      "Built containerised development environments supporting 50+ microservices using Docker, Nginx and Minikube.",
    ],
    tech: ["Docker", "Nginx", "gRPC", "Kubernetes", "Minikube", "Linux"],
  },
  {
    company: "Caudal AI",
    role: "RLHF Trainer (contract)",
    location: "Remote",
    dates: "Contract",
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
    bullets: [
      "Built and updated frontend functionality with React.js and integrated components against backend REST APIs.",
      "Implemented backend API logic and database queries with Node.js and MongoDB in a collaborative Git workflow.",
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
