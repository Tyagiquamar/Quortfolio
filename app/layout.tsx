import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import { site } from "@/data/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Mohd Quamar Tyagi",
    "voice AI engineer",
    "realtime voice agents",
    "founding engineer",
    "backend engineer",
    "NestJS",
    "Go",
    "AugmentPath Strategy",
    "Zomato",
    "competitive programming",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Founding Engineer",
  description: site.description,
  worksFor: { "@type": "Organization", name: "AugmentPath Strategy" },
  sameAs: [
    "https://github.com/Tyagiquamar",
    "https://linkedin.com/in/mohd-quamar-tyagi",
    "https://codeforces.com/profile/altair_45",
    "https://leetcode.com/u/Altair_4/",
  ],
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" })
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" })

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${grotesk.variable}`}
    >
      <body>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
