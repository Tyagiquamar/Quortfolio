export interface Contribution {
  repo: string
  title: string
  detail: string
  language: string
  domain: string
  prNumber: number
  href: string
  mergedAt?: string
}

export interface RepoCoverage {
  repo: string
  merged: number
}

export const ossStats = {
  merged: 193,
  repositories: 64,
  languages: ["Go", "Rust", "C++", "TypeScript", "Python"],
  profileHref: "https://github.com/pulls?q=is%3Apr+author%3ATyagiquamar+is%3Amerged",
} as const

export const coverage: RepoCoverage[] = [
  { repo: "seaweedfs/seaweedfs", merged: 8 },
  { repo: "c9s/bbgo", merged: 5 },
  { repo: "HelixDB/helix-db", merged: 5 },
  { repo: "svix/svix-webhooks", merged: 4 },
  { repo: "seladb/PcapPlusPlus", merged: 4 },
  { repo: "LadybugDB/ladybug", merged: 4 },
  { repo: "qdrant/go-client", merged: 3 },
  { repo: "moonrepo/moon", merged: 3 },
  { repo: "go-vikunja/vikunja", merged: 3 },
  { repo: "fosrl/pangolin", merged: 3 },
  { repo: "fastly/cli", merged: 3 },
  { repo: "boostsecurityio/poutine", merged: 3 },
  { repo: "GreptimeTeam/greptimedb", merged: 3 },
  { repo: "weaviate/weaviate-go-client", merged: 2 },
  { repo: "upstash/ratelimit-js", merged: 2 },
  { repo: "tinacms/tinacms", merged: 2 },
  { repo: "thrasher-corp/gocryptotrader", merged: 2 },
  { repo: "spacelift-io/terraform-provider-spacelift", merged: 2 },
  { repo: "rilldata/rill", merged: 2 },
  { repo: "railwayapp/railpack", merged: 2 },
]

export const mergedContributions: Contribution[] = [
  {
    repo: "railwayapp/railpack",
    title: "Turborepo install context",
    detail:
      "Included turbo.json in the install file set so Turborepo projects keep their workspace detection during image builds.",
    language: "TypeScript",
    domain: "Build tooling",
    prNumber: 770,
    href: "https://github.com/railwayapp/railpack/pull/770",
    mergedAt: "2026-10-14",
  },
  {
    repo: "dbos-inc/dbos-transact-ts",
    title: "Conductor-owned recovery",
    detail:
      "Skipped executor self-recovery when a conductor is enabled, so one recovery path owns workflow state instead of two racing.",
    language: "TypeScript",
    domain: "Durable execution",
    prNumber: 1407,
    href: "https://github.com/dbos-inc/dbos-transact-ts/pull/1407",
    mergedAt: "2026-10-14",
  },
  {
    repo: "traefik/traefik",
    title: "Gateway API backend scheme",
    detail:
      "Defaulted the HTTPRoute backend scheme to HTTP when appProtocol is absent, instead of leaving the route without a scheme.",
    language: "Go",
    domain: "Edge proxy",
    prNumber: 13935,
    href: "https://github.com/traefik/traefik/pull/13935",
    mergedAt: "2026-10-12",
  },
  {
    repo: "seladb/PcapPlusPlus",
    title: "GRE layer serialization",
    detail:
      "Added GRE layer serialization to Packet++, so encapsulated packets round-trip through the writer instead of being dropped.",
    language: "C++",
    domain: "Packet parsing",
    prNumber: 2297,
    href: "https://github.com/seladb/PcapPlusPlus/pull/2297",
    mergedAt: "2026-10-11",
  },
  {
    repo: "open-telemetry/opentelemetry-cpp",
    title: "ETW property string length",
    detail:
      "Fixed PropertyValue string conversions that doubled the length and ignored string_view size in the ETW exporter.",
    language: "C++",
    domain: "Observability",
    prNumber: 4656,
    href: "https://github.com/open-telemetry/opentelemetry-cpp/pull/4656",
    mergedAt: "2026-10-10",
  },
  {
    repo: "LadybugDB/ladybug",
    title: "Plan-optimizer segfault",
    detail:
      "Resolved a segfault in mapExpressionsScan when the plan optimizer is disabled, a crash that only appeared on the non-optimized path.",
    language: "C++",
    domain: "Graph database",
    prNumber: 1148,
    href: "https://github.com/LadybugDB/ladybug/pull/1148",
    mergedAt: "2026-10-09",
  },
  {
    repo: "temporalio/sdk-go",
    title: "Legacy query failure cause",
    detail:
      "Set WorkflowTaskFailedCause on legacy query failure responses, so callers see why the task failed instead of an empty cause.",
    language: "Go",
    domain: "Durable execution",
    prNumber: 2663,
    href: "https://github.com/temporalio/sdk-go/pull/2663",
    mergedAt: "2026-09-30",
  },
  {
    repo: "svix/svix-webhooks",
    title: "Expired message cleaner configuration",
    detail:
      "Added the expired_message_cleaner_enabled option that controls background purge tasks in high-throughput webhook delivery.",
    language: "Rust",
    domain: "Webhook infrastructure",
    prNumber: 2644,
    href: "https://github.com/svix/svix-webhooks/pull/2644",
    mergedAt: "2026-09-22",
  },
  {
    repo: "fastly/cli",
    title: "Environment fallback in service validation",
    detail:
      "Made service version validation fall back to FASTLY_SERVICE_ID when the flag is omitted, so CI pipelines stop failing on a missing argument.",
    language: "Go",
    domain: "Edge cloud infrastructure",
    prNumber: 1907,
    href: "https://github.com/fastly/cli/pull/1907",
    mergedAt: "2026-09-21",
  },
  {
    repo: "GreptimeTeam/greptimedb",
    title: "Prometheus remote-read timeseries deduplication",
    detail:
      "Merged duplicate timeseries across streaming RecordBatches in the Prometheus remote-read server path to prevent corrupted responses.",
    language: "Rust",
    domain: "Time-series database",
    prNumber: 9032,
    href: "https://github.com/GreptimeTeam/greptimedb/pull/9032",
    mergedAt: "2026-09-19",
  },
  {
    repo: "upstash/ratelimit-js",
    title: "Duration parser units",
    detail:
      "Extended duration parsing to decimal values and the week unit in the TypeScript rate-limit client, instead of rejecting valid windows.",
    language: "TypeScript",
    domain: "Rate limiting",
    prNumber: 158,
    href: "https://github.com/upstash/ratelimit-js/pull/158",
    mergedAt: "2026-09-18",
  },
  {
    repo: "dragonflydb/dragonfly",
    title: "Cluster node health config parser",
    detail:
      "Hardened the cluster configuration parser in C++ to reject invalid node health states instead of accepting corrupted topology.",
    language: "C++",
    domain: "In-memory database",
    prNumber: 8306,
    href: "https://github.com/dragonflydb/dragonfly/pull/8306",
    mergedAt: "2026-09-16",
  },
  {
    repo: "moonrepo/moon",
    title: "CI-aware affected task tracking",
    detail:
      "Made affected task and project tracking honour CI environment semantics so build decisions match outside a developer machine.",
    language: "Rust",
    domain: "Build tooling",
    prNumber: 2707,
    href: "https://github.com/moonrepo/moon/pull/2707",
    mergedAt: "2026-09-15",
  },
  {
    repo: "c9s/bbgo",
    title: "Twin orderbook recovery order filtering",
    detail:
      "Filtered market and non-pinned orders out of twin orderbook recovery to prevent corrupted grid-trading state restoration.",
    language: "Go",
    domain: "Quantitative trading",
    prNumber: 2645,
    href: "https://github.com/c9s/bbgo/pull/2645",
    mergedAt: "2026-09-15",
  },
  {
    repo: "paradedb/paradedb",
    title: "Safe empty phrase-prefix queries",
    detail:
      "Returned EmptyQuery from the phrase_prefix query builder when search terms are empty, avoiding invalid search execution in PostgreSQL.",
    language: "Rust",
    domain: "Search · PostgreSQL",
    prNumber: 6308,
    href: "https://github.com/paradedb/paradedb/pull/6308",
    mergedAt: "2026-09-14",
  },
  {
    repo: "netbirdio/netbird",
    title: "Network budget group deletion guards",
    detail:
      "Guarded group deletion in the management server so groups referenced by active network budget rules cannot be removed.",
    language: "Go",
    domain: "Zero-trust networking",
    prNumber: 7450,
    href: "https://github.com/netbirdio/netbird/pull/7450",
    mergedAt: "2026-09-12",
  },
  {
    repo: "OpenHands/OpenHands",
    title: "Safe runtime config injection",
    detail:
      "HTML-escaped injected runtime configuration and disabled caching on credential-bearing responses in the static server.",
    language: "TypeScript",
    domain: "AI agents · security",
    prNumber: 17175,
    href: "https://github.com/OpenHands/OpenHands/pull/17175",
    mergedAt: "2026-09-12",
  },
  {
    repo: "PrefectHQ/prefect",
    title: "Local storage under PREFECT_HOME",
    detail:
      "Defaulted local_storage_path to PREFECT_HOME/storage so local runs and server runs read and write the same place.",
    language: "Python",
    domain: "Workflow orchestration",
    prNumber: 23070,
    href: "https://github.com/PrefectHQ/prefect/pull/23070",
    mergedAt: "2026-09-11",
  },
  {
    repo: "seaweedfs/seaweedfs",
    title: "Metadata subscription lifecycle",
    detail:
      "Ended local-only metadata subscriptions when remote peers appear, so the filer cannot keep an invalid subscription mode alive.",
    language: "Go",
    domain: "Distributed storage",
    prNumber: 11251,
    href: "https://github.com/seaweedfs/seaweedfs/pull/11251",
    mergedAt: "2026-09-10",
  },
  {
    repo: "ArkLabsHQ/enclave",
    title: "Nitro enclave attestation validation",
    detail:
      "Enforced strict attestation certificate verification for AWS Nitro Enclaves, rejecting invalid or unsigned chains at the client boundary.",
    language: "Go",
    domain: "Enclave security",
    prNumber: 178,
    href: "https://github.com/ArkLabsHQ/enclave/pull/178",
    mergedAt: "2026-09-09",
  },
  {
    repo: "feldera/feldera",
    title: "NATS replay and control ordering",
    detail:
      "Kept an in-flight NATS replay intact when control commands arrive, preserving checkpoint alignment with the pipeline controller.",
    language: "Rust",
    domain: "Streaming systems",
    prNumber: 7011,
    href: "https://github.com/feldera/feldera/pull/7011",
    mergedAt: "2026-09-09",
  },
  {
    repo: "makeplane/plane",
    title: "Issue-link recrawl guard",
    detail:
      "Stopped issue-link updates from re-crawling when the URL is unchanged, and from overwriting user metadata in the process.",
    language: "Python",
    domain: "Project tooling",
    prNumber: 9763,
    href: "https://github.com/makeplane/plane/pull/9763",
    mergedAt: "2026-09-07",
  },
  {
    repo: "qdrant/go-client",
    title: "Caller-owned gRPC configuration",
    detail:
      "Stopped NewGrpcClient from mutating Config.GrpcOptions so reused configs no longer accumulate internal dial options.",
    language: "Go",
    domain: "Vector search SDK",
    prNumber: 151,
    href: "https://github.com/qdrant/go-client/pull/151",
    mergedAt: "2026-09-05",
  },
  {
    repo: "thrasher-corp/gocryptotrader",
    title: "Order remaining amount calculation",
    detail:
      "Fixed UpdateOrderFromDetail recalculating RemainingAmount from executed trades when the caller-supplied remaining quantity is already authoritative.",
    language: "Go",
    domain: "Trading infrastructure",
    prNumber: 2357,
    href: "https://github.com/thrasher-corp/gocryptotrader/pull/2357",
    mergedAt: "2026-09-04",
  },
  {
    repo: "HelixDB/helix-db",
    title: "Typed datetime parameter validation",
    detail:
      "Accepted every value type in typed datetime parameters at the Go SDK boundary instead of rejecting valid widths.",
    language: "Go",
    domain: "Database SDK",
    prNumber: 1058,
    href: "https://github.com/HelixDB/helix-db/pull/1058",
    mergedAt: "2026-09-04",
  },
]

export const openContributions: Contribution[] = [
  {
    repo: "microsoft/mimalloc",
    title: "Intel assembler dialect in thread pointer asm",
    detail:
      "Added Intel-dialect support in thread pointer inline assembly across MSVC and GCC-compatible toolchains.",
    language: "C++ / ASM",
    domain: "Memory allocator",
    prNumber: 1415,
    href: "https://github.com/microsoft/mimalloc/pull/1415",
  },
  {
    repo: "facebookincubator/velox",
    title: "Negative size check in HashStringAllocator",
    detail:
      "Added a negative size check in the HashStringAllocator InputStream to prevent integer underflow and memory corruption.",
    language: "C++",
    domain: "Query engine",
    prNumber: 19177,
    href: "https://github.com/facebookincubator/velox/pull/19177",
  },
  {
    repo: "typesense/typesense",
    title: "Prevent facet ID sentinel collision",
    detail:
      "Prevented collision between the int32 -1 sentinel facet_id and valid facet IDs during inverted index evaluation.",
    language: "C++",
    domain: "Search engine",
    prNumber: 3075,
    href: "https://github.com/typesense/typesense/pull/3075",
  },
  {
    repo: "coder/coder",
    title: "Terraform provisioner 64 KiB log line deadlock",
    detail:
      "Prevented deadlock in the terraform provisioner by safely buffering and chunking log lines that exceed 64 KiB.",
    language: "Go",
    domain: "Developer infrastructure",
    prNumber: 28824,
    href: "https://github.com/coder/coder/pull/28824",
  },
]
