import { ImageResponse } from "next/og"
import { ben10Green } from "@/lib/brand"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  const bg = "#0a0a0a"
  const green = ben10Green

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bg,
        }}
      >
        <svg width="52" height="52" viewBox="0 0 52 52">
          <circle cx="26" cy="26" r="23" fill={bg} stroke={green} strokeWidth="2.5" />
          <circle cx="26" cy="26" r="19" fill="none" stroke={green} strokeWidth="1" opacity={0.35} />
          <polygon points="26,11 40,26 12,26" fill={green} />
          <polygon points="26,41 40,26 12,26" fill={green} />
        </svg>
      </div>
    ),
    size
  )
}
