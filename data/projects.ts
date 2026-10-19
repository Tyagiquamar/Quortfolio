export type Bucket = "systems" | "markets" | "product"

export const buckets: Record<Bucket, { title: string; blurb: string }> = {
  systems: {
    title: "Systems & infrastructure",
    blurb:
      "Go engines with failure scenes as the product: leases, checkpoints, reorg recovery and crash replay, each verified against a real database in a container.",
  },
  markets: {
    title: "Market systems",
    blurb:
      "Market-data correctness and simulated execution on public exchange data: sequence validation, fixed-point money, deterministic replay. No live-money trading.",
  },
  product: {
    title: "Product engineering",
    blurb:
      "Full-stack products with the hard parts handled: provenance, approvals, realtime convergence and access control.",
  },
}

export interface Project {
  slug: string
  title: string
  bucket: Bucket
  tagline: string
  summary: string
  proof: string[]
  tech: string[]
  github: string
  live?: string
  liveLabel?: string
  image?: { src: string; alt: string; fallbackSrc?: string }
}

export const projects: Project[] = [
  {
    slug: "durablego",
    title: "DurableGo",
    bucket: "systems",
    tagline: "Durable workflow engine in Go",
    summary:
      "Postgres-backed durable workflow engine with lease and fencing-token semantics plus idempotent starts. Failure scenes SIGKILL workers mid-execution and prove stale completions are rejected with a 409 at the API.",
    proof: [
      "Fencing tokens stop an older worker overwriting a newer claim after lease reclaim",
      "Idempotent starts: reusing a namespace and key returns the original workflow, never a duplicate",
      "Race detector runs on the full suite with testcontainers Postgres",
    ],
    tech: ["Go", "PostgreSQL", "testcontainers", "Next.js"],
    github: "https://github.com/Tyagiquamar/durablego",
    live: "https://durablego-dashboard.vercel.app",
    liveLabel: "Live dashboard",
    image: {
      src: "/images/durablego-dashboard.png",
      alt: "DurableGo operations dashboard showing execution totals, active leases and failure scenes",
    },
  },
  {
    slug: "relaydb",
    title: "RelayDB",
    bucket: "systems",
    tagline: "PostgreSQL change-data-capture platform",
    summary:
      "Change data capture straight off the Postgres WAL: pgoutput decoding with TOAST awareness, idempotent replay per source transaction, and fenced LSN checkpoints proven by crash-replay container suites.",
    proof: [
      "Capture persists events and advances the checkpoint in one transaction, then acks the flushed LSN",
      "A crash before acknowledgement replays the WAL without inventing a second durable event identity",
      "Lease generation fences consumers so an old owner cannot advance a newer owner's cursor",
    ],
    tech: ["Go", "pgoutput", "gRPC", "HMAC webhooks", "PostgreSQL"],
    github: "https://github.com/Tyagiquamar/relaydb",
    live: "https://relaydb-dashboard.vercel.app",
    liveLabel: "Live dashboard",
    image: {
      src: "/images/relaydb-architecture.png",
      alt: "RelayDB pipeline from source PostgreSQL WAL through capture and fenced checkpoints to API, control room and webhook delivery",
      fallbackSrc: "/images/relaydb-architecture.svg",
    },
  },
  {
    slug: "durablemcp",
    title: "DurableMCP",
    bucket: "systems",
    tagline: "Durable execution for MCP tool calls",
    summary:
      "An MCP server where every tool call is persisted before dispatch, executed under a fencing-token lease, and inspectable from Postgres. The hosted demo kills its own executor to generate genuine crash-recovery events.",
    proof: [
      "Persist-before-dispatch: resubmitting the same tool and idempotency key returns the original execution",
      "Immutable execution_events log makes the guarantee inspectable in SQL",
      "stdio and HTTP/SSE transports implement real MCP JSON-RPC",
    ],
    tech: ["Go", "MCP", "PostgreSQL", "Next.js"],
    github: "https://github.com/Tyagiquamar/durablemcp",
    live: "https://durablemcp-dashboard.vercel.app",
    liveLabel: "Live dashboard",
    image: {
      src: "/images/durablemcp-dashboard.png",
      alt: "DurableMCP dashboard with execution totals, crash-rate chart and recovery events",
    },
  },
  {
    slug: "chainforge",
    title: "ChainForge",
    bucket: "systems",
    tagline: "Reorg-safe Ethereum event indexing",
    summary:
      "Canonical-chain tracking with reorg detection, common-ancestor recovery and HMAC webhook delivery. Finalized blocks are never silently rewritten; a reorg that would rewrite finalized range halts instead.",
    proof: [
      "Typed event lifecycle: created, confirmed, finalized, and removed on an orphaned branch",
      "Postgres invariants hold one canonical block per height and continuous parent links",
      "Integration tests use an in-process fake RPC with a flagship depth-2 reorg scene",
    ],
    tech: ["Go", "PostgreSQL", "testcontainers", "Prometheus", "HMAC webhooks"],
    github: "https://github.com/Tyagiquamar/chainforge",
    image: {
      src: "/images/chainforge-dashboard.png",
      alt: "ChainForge operator dashboard showing a labeled demo snapshot of reorg-safe indexing",
    },
  },
  {
    slug: "apexbook",
    title: "ApexBook",
    bucket: "markets",
    tagline: "Crypto execution and market-data engine",
    summary:
      "Public Binance L2 data reconstructed with snapshot/delta reconciliation, feeding a deterministic per-symbol paper matching engine. Any gap invalidates the book and forces a fresh snapshot.",
    proof: [
      "Measured on Windows 11, i3-1315U, Go 1.26.5: ApplyLevel 28.3 ns/op with zero allocations",
      "End-to-end driver 34,761 commands/s at p99 997 microseconds",
      "All prices and quantities are int64 at scale 1e8; float64 never touches an economic value",
    ],
    tech: ["Go", "WebSocket", "PostgreSQL", "Prometheus", "fixed-point int64"],
    github: "https://github.com/Tyagiquamar/apexbook",
    image: {
      src: "/images/apexbook-overview.png",
      alt: "ApexBook operator dashboard showing feed health, paper orders and system status",
    },
  },
  {
    slug: "crossvenue",
    title: "CrossVenue",
    bucket: "markets",
    tagline: "Multi-venue market data and execution simulation",
    summary:
      "Binance, OKX and Bybit feeds normalised into local books, depth-aware VWAP opportunity pricing, and non-atomic two-leg simulated execution with inventory-aware risk.",
    proof: [
      "Replay parity verified on commit e9be5ea: two runs produced digest de7495fd8b25d9db...cfe87f33c",
      "Partial second-leg fills are first-class: residual directional exposure is journaled",
      "ApplyDelta benchmarked at 41.4 ns/op with zero allocations",
    ],
    tech: ["Go", "Binance", "OKX", "Bybit", "PostgreSQL", "Prometheus"],
    github: "https://github.com/Tyagiquamar/crossvenue",
    image: {
      src: "/images/crossvenue-architecture.png",
      alt: "CrossVenue pipeline from venue adapters into local books, opportunity engine, risk and simulated two-leg execution",
      fallbackSrc: "/images/crossvenue-architecture.svg",
    },
  },
  {
    slug: "quantxecute",
    title: "QuantXecute",
    bucket: "markets",
    tagline: "C++20 order-book and execution simulation",
    summary:
      "Reconstructs OKX L2 books under an explicit sequence-integrity policy and simulates execution against observed depth, with record/replay parity enforced as a build gate.",
    proof: [
      "Live and replay drive one code path; the parity test ships negative controls that must break it",
      "OKX deprecated its books checksum in 2026, so the engine never advertises CRC32 as a live guarantee",
      "Measured with GCC 12 -O2: applyDelta p50 122 ns across 200k ops; replay sustains ~239,656 events/s",
    ],
    tech: ["C++20", "CMake", "ASan + UBSan", "TSan", "clang-tidy"],
    github: "https://github.com/Tyagiquamar/QuantXecute",
    live: "https://quantxecute-dashboard.vercel.app",
    liveLabel: "Dashboard",
    image: {
      src: "/images/quantxecute-dashboard.png",
      alt: "QuantXecute engineering console in replay mode with depth ladder and simulated execution result",
    },
  },
  {
    slug: "parseflow",
    title: "ParseFlow AI",
    bucket: "product",
    tagline: "Document review and compliance workflow",
    summary:
      "Extracts invoices, purchase orders and receipts with per-field confidence and character-accurate provenance, evaluates them against versioned compliance rules, and routes to a human only when policy says so.",
    proof: [
      "Every extracted value carries a pointer into the source text, so a reviewer verifies a field in one glance",
      "Model-proposed rules stay inert until a human approves them and a set version is activated",
      "A 36-document synthetic corpus gates extraction quality in CI",
    ],
    tech: ["Next.js", "Fastify", "PostgreSQL", "Backblaze B2", "Gemini"],
    github: "https://github.com/Tyagiquamar/parseflow-ai",
    live: "https://parseflow-ai.vercel.app",
    liveLabel: "Live app",
    image: {
      src: "/images/parseflow-review-workspace.png",
      alt: "ParseFlow review workspace with source text provenance beside editable extracted fields",
    },
  },
  {
    slug: "supportpilot",
    title: "SupportPilot AI",
    bucket: "product",
    tagline: "Supervised AI support operations",
    summary:
      "A traced agent pipeline: injection scan, intent classification, grounded cited drafts, and financial write actions queued behind an explicit human approval gate.",
    proof: [
      "Drafts must cite evidence inline; a post-check flags any amount, date or code that is not traceable",
      "Write-tier tools cannot auto-run; approving computes a pure-math preview and records an audit event",
      "Deterministic eval harness scores task success, wrong-action rate and unsupported-claim rate offline",
    ],
    tech: ["Next.js", "PostgreSQL", "pgvector", "Gemini"],
    github: "https://github.com/Tyagiquamar/supportpilot",
    live: "https://supportpilot.vercel.app",
    liveLabel: "Live demo",
    image: {
      src: "/images/supportpilot-ticket-workspace.png",
      alt: "SupportPilot ticket workspace with a drafted cited reply and queued write-action proposals",
    },
  },
  {
    slug: "liveboard",
    title: "LiveBoard",
    bucket: "product",
    tagline: "Realtime collaborative workspace",
    summary:
      "Kanban collaboration over Socket.IO with presence, optimistic mutations keyed for idempotency, and reconnect replay from a per-workspace event log.",
    proof: [
      "A two-client consistency proof asserts both clients converge on byte-identical event streams",
      "Reconnect re-subscribes with sinceSeq and receives exactly the missed events in order",
      "Membership is re-checked on every room join and every request, not just at handshake",
    ],
    tech: ["Next.js", "Socket.IO", "MongoDB", "React Query"],
    github: "https://github.com/Tyagiquamar/liveboard",
    live: "https://liveboard-red.vercel.app",
    liveLabel: "Live demo",
    image: {
      src: "/images/liveboard-kanban.png",
      alt: "LiveBoard Kanban board with seeded issues across backlog, todo, in progress and done",
    },
  },
  {
    slug: "componentforge",
    title: "ComponentForge",
    bucket: "product",
    tagline: "Accessible React component system",
    summary:
      "Fifteen keyboard-first components with hand-rolled ARIA patterns, controlled and uncontrolled APIs, and token theming without a headless-UI dependency.",
    proof: ["Keyboard and screen-reader paths hand-built per component", "Design tokens drive every variant"],
    tech: ["React", "TypeScript", "ARIA", "Design tokens"],
    github: "https://github.com/Tyagiquamar/componentforge",
    live: "https://componentforge-kohl.vercel.app",
    liveLabel: "Live docs",
    image: {
      src: "/images/componentforge-docs.png",
      alt: "ComponentForge documentation showing button variants, states and code examples",
    },
  },
  {
    slug: "canvasflow",
    title: "CanvasFlow",
    bucket: "product",
    tagline: "Node-based workflow builder",
    summary:
      "Normalised graph state with structural sharing, coalesced undo/redo, cycle-safe connect-time validation and an inspectable execution simulator.",
    proof: [
      "Canonical-JSON serialisation makes graph state comparable byte for byte",
      "Cycles are rejected at connect time instead of surfacing mid-run",
    ],
    tech: ["React Flow", "Zustand", "TypeScript"],
    github: "https://github.com/Tyagiquamar/canvasflow",
    live: "https://canvasflow-nine.vercel.app",
    liveLabel: "Live demo",
    image: {
      src: "/images/canvasflow-canvas.png",
      alt: "CanvasFlow editor showing a webhook workflow as connected nodes with an execution inspector",
    },
  },
]

export function projectsByBucket(bucket: Bucket): Project[] {
  return projects.filter((project) => project.bucket === bucket)
}
