export interface ToolkitSkill {
  name: string
  /** simpleicons slug or devicon folder name */
  icon?: string
  source?: "simple" | "devicon" | "local"
  color?: string
}

export interface ToolkitGroup {
  title: string
  skills: ToolkitSkill[]
}

function label(name: string, icon: string, source: "simple" | "devicon" | "local" = "simple", color?: string): ToolkitSkill {
  return { name, icon, source, color }
}

export const skillGroups: ToolkitGroup[] = [
  {
    title: "Languages",
    skills: [
      label("TypeScript", "typescript", "simple", "3178C6"),
      label("Go", "go", "simple", "00ADD8"),
      label("C++", "cplusplus", "simple", "00599C"),
      label("Rust", "rust", "simple", "000000"),
      label("Python", "python", "simple", "3776AB"),
      label("SQL", "postgresql", "simple", "4169E1"),
    ],
  },
  {
    title: "Voice & AI",
    skills: [
      label("Realtime voice", "twilio", "simple", "F22F46"),
      label("WebSocket gateways", "socketdotio", "simple", "010101"),
      label("OpenAI", "openai", "simple", "412991"),
      label("Anthropic", "anthropic", "simple", "191919"),
      label("Gemini", "google", "simple", "4285F4"),
      label("RAG / vectors", "weaviate"),
      label("Guardrails", "openai", "simple", "412991"),
    ],
  },
  {
    title: "Backend",
    skills: [
      label("NestJS", "nestjs", "simple", "E0234E"),
      label("Node.js", "nodedotjs", "simple", "339933"),
      label("REST", "openapiinitiative", "simple", "6BA539"),
      label("Webhooks", "postman", "simple", "FF6C37"),
      label("gRPC", "grpc", "simple", "244C5A"),
      label("Multi-tenant auth", "auth0", "simple", "EB5424"),
    ],
  },
  {
    title: "Data",
    skills: [
      label("PostgreSQL", "postgresql", "simple", "4169E1"),
      label("MongoDB", "mongodb", "simple", "47A248"),
      label("Supabase", "supabase", "simple", "3FCF8E"),
      label("Redis", "redis", "simple", "FF4438"),
      label("MySQL", "mysql", "simple", "4479A1"),
      label("Weaviate", "weaviate"),
    ],
  },
  {
    title: "Voice plumbing",
    skills: [
      label("Twilio", "twilio", "simple", "F22F46"),
      label("Transcription", "googlecloud", "simple", "4285F4"),
      label("Spam filters", "cloudflare", "simple", "F38020"),
      label("CRM delivery", "salesforce", "simple", "00A1E0"),
      label("Usage billing", "stripe", "simple", "635BFF"),
    ],
  },
  {
    title: "Ops",
    skills: [
      label("Docker", "docker", "simple", "2496ED"),
      label("Railway", "railway", "simple", "0B0D0E"),
      label("Cloudflare", "cloudflare", "simple", "F38020"),
      label("Vercel", "vercel", "simple", "000000"),
      label("Selenium E2E", "selenium", "simple", "43B02A"),
      label("GitHub Actions", "githubactions", "simple", "2088FF"),
    ],
  },
]

export function skillIconUrl(skill: ToolkitSkill): string | null {
  if (!skill.icon) return null
  if (skill.source === "local") return null
  if (skill.source === "devicon") {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`
  }
  const color = skill.color?.replace("#", "") ?? ""
  return color
    ? `https://cdn.simpleicons.org/${skill.icon}/${color}`
    : `https://cdn.simpleicons.org/${skill.icon}`
}
