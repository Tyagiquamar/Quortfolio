import type { MetadataRoute } from "next"
import { site } from "@/data/site"
import { voiceCase } from "@/data/voice"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-19")

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/work/${voiceCase.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
