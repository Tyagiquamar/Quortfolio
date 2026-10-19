import { ImageResponse } from "next/og"
import { site } from "@/data/site"

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#0c0d0c",
          color: "#f4f4ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: "#a3e635", fontFamily: "monospace" }}>
          founding engineer · voice AI · backend systems
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 18 }}>{site.name}</div>
        <div style={{ fontSize: 24, marginTop: 14, color: "#a3e635", fontFamily: "monospace" }}>
          Founding Engineer @ AugmentPath Strategy
        </div>
        <div style={{ fontSize: 24, color: "#a1a1a8", marginTop: 22, maxWidth: 980 }}>
          AI phone receptionist for auto repair shops · SDE-1 at Nugget (Zomato) · 193 merged OSS PRs across 64 repositories
        </div>
      </div>
    ),
    size
  )
}
