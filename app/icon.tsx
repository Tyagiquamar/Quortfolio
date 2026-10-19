import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0d0c",
          color: "#a3e635",
          fontFamily: "monospace",
          fontSize: 30,
          letterSpacing: -1,
        }}
      >
        MQ
      </div>
    ),
    size
  )
}
