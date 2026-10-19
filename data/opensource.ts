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

export const mergedContributions: Contribution[] = [
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
