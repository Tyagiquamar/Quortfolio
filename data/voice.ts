export interface FlowStep {
  step: string
  detail: string
}

export interface Block {
  title: string
  detail: string
  ref?: string
}

export const voiceCase = {
  slug: "augmentpath",
  title: "AugmentPath",
  subtitle: "AI phone receptionist for automotive repair shops",
  role: "Founding Engineer · Voice AI & Backend Systems",
  period: "Jun 2026 - Sep 2026",
  kicker: "Production voice AI",
  lede: "An inbound call to an auto repair shop is answered by a realtime voice agent, diagnosed before it is qualified, and written into the shop's own management system as structured work. I built the backend and the voice path that make that happen, and the operational trail that proves what happened on every call.",

  metrics: [
    { value: "84", label: "commits", detail: "backend, portal, E2E" },
    { value: "6", label: "merged PRs", detail: "voice gateway + call flow" },
    { value: "4", label: "pilots", detail: "auto shop, contractor, restaurant, demo" },
    { value: "8", label: "call stages", detail: "inbound call to audit trail" },
  ],

  stack: [
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
    "SendGrid",
    "Railway",
  ],

  problem:
    "A repair shop's phone is its intake funnel. Calls arrive while advisors are under a car, so the caller either waits, gets a voicemail nobody returns, or books elsewhere. Dropping a generic chatbot on the line makes it worse: a shop needs the customer's concern, the vehicle, a callback number, and then that work needs to reach Tekmetric, the system the shop already runs on. Everything upstream of that write has to be trustworthy, because a call that is answered but never delivered is a lost job, and a call that is delivered twice is a corrupted shop record.",

  flow: [
    {
      step: "Inbound call",
      detail:
        "A caller dials the shop's managed number, or a web call starts the same flow. The session binds to exactly one agent and one tenant.",
    },
    {
      step: "Per-call context built",
      detail:
        "The custom-LLM WebSocket gateway resolves the tenant from call metadata, then assembles the business profile, hours, emergency availability, service catalog, service area and the next seven days of schedule before the first token is generated.",
    },
    {
      step: "Diagnostics-first conversation",
      detail:
        "The agent collects the customer's concern and vehicle context first, so the lead carries a diagnosis-shaped summary instead of a name and a phone number.",
    },
    {
      step: "Spam and eligibility gate",
      detail:
        "Retell call_analyzed events are classified. Spam, ineligible and unbillable calls stop here, before any CRM write, advisor alert or billing record.",
    },
    {
      step: "Minimum lead validation",
      detail:
        "A record may only be delivered when the callback phone, vehicle issue and available customer context are captured, so a half-finished call never becomes a shop ticket.",
    },
    {
      step: "CRM delivery",
      detail:
        "Eligible records go through TekmetricService (webhook path or REST path), with delivery status logged per tenant in pilot_lead_logs. A mock CRM covers pilot and test traffic without touching the customer's live system.",
    },
    {
      step: "Advisor handoff and billing",
      detail:
        "Configured advisor numbers get Twilio SMS alerts, SendGrid email covers account paths, and Stripe wallet plus usage billing records the call against the tenant.",
    },
    {
      step: "Operations trail",
      detail:
        "Call records, transcripts, analysis, lead conversion, delivery status and billing read back through the admin and customer portals, so any call can be reconstructed after the fact.",
    },
  ] satisfies FlowStep[],

  built: [
    {
      title: "Custom-LLM voice gateway",
      detail:
        "A WebSocket gateway that lets the voice platform drive our own model path. It resolves the tenant from call metadata, builds the full per-call prompt, streams tokens back, and keeps one business context per call instead of a shared global prompt.",
    },
    {
      title: "Context builder",
      detail:
        "One service assembles what the agent is allowed to know: business profile, hours and emergency availability, service catalog with pricing, service area, and available slots calculated from the next seven days of schedule plus the RAG knowledge base.",
    },
    {
      title: "Lead intelligence and delivery",
      detail:
        "Call analysis feeds a pipeline that classifies spam, applies tenant pilot rules, validates minimum lead details, delivers to Tekmetric or a webhook CRM, logs per-tenant delivery status, and only then records billing and notifications.",
    },
    {
      title: "Booking tools",
      detail:
        "Cal.com scheduling wired into the agent loop: availability is offered from real slots, and a booking is only confirmed after the backend has verified it, which killed double bookings and meetings booked from a misheard detail.",
    },
    {
      title: "Tenant flows and provisioning",
      detail:
        "Instant-demo signup end to end, agent templates and routing per tenant, managed phone-number purchase during provisioning, tenant-level SMS destinations, feature controls, and soft-delete semantics for leads and businesses.",
    },
    {
      title: "Operator surfaces",
      detail:
        "Admin and customer portals split by role: call history with unseen-call notifications, transcripts, call-to-lead conversion, delivery status, agent and voice configuration with preview, wallet and usage billing.",
    },
  ] satisfies Block[],

  decisions: [
    {
      title: "The model never owns the facts",
      detail:
        "Availability, pricing, hours and existing records come from the backend. The model is given a context block and tool calls; it is not asked to remember a schedule or infer a price, so a bad turn cannot invent business policy.",
    },
    {
      title: "Qualify before you deliver",
      detail:
        "Spam classification and minimum lead validation run before CRM delivery, SMS or billing. Unwanted and incomplete calls are filtered at the edge of our own system rather than cleaned up in the customer's shop software.",
    },
    {
      title: "Confirm only what is verified",
      detail:
        "The agent may not tell a caller a booking is confirmed until the backend confirms it. That rule came out of real pilot calls, and it costs a sentence of latency in exchange for not lying to a customer.",
    },
    {
      title: "Idempotent by default",
      detail:
        "Webhook ingestion, lead delivery, phone-number provisioning and booking actions are written to tolerate retries, because third-party callbacks and WebSocket reconnects both redeliver.",
    },
    {
      title: "Retrieval with a floor",
      detail:
        "The knowledge base runs through the vector store with a MongoDB fallback, so a call degrades in answer quality when retrieval is unavailable rather than failing to connect.",
    },
    {
      title: "Every failure is inspectable",
      detail:
        "Structured call logging, normalized phone numbers, stored transcripts and per-tenant delivery status mean a bad call is diagnosable from the record, not from memory.",
    },
  ] satisfies Block[],

  evidence: [
    {
      title: "Custom LLM begin greeting on WebSocket connect",
      detail:
        "Fixed the greeting path so a call does not open in silence, and resolved the WebSocket URL from the deployed public domain instead of a hardcoded host.",
      ref: "Backend PR #3 · merged",
    },
    {
      title: "Per-call business context and RAG in the prompt",
      detail:
        "Injected tenant context and retrieved knowledge into the custom LLM prompt, with a MongoDB knowledge-base fallback when the vector store is unavailable.",
    },
    {
      title: "Pilot web calls book and close reliably",
      detail:
        "Made the call flow terminate cleanly and record its outcome, so a finished call always leaves a complete record.",
      ref: "Backend PR #4 · merged",
    },
    {
      title: "Spoken meeting details booked once",
      detail:
        "Stopped a single spoken booking from creating duplicate or misaddressed calendar entries.",
      ref: "Backend PR #5 · merged",
    },
    {
      title: "Auto-shop prompt and guardrails",
      detail:
        "Simplified the realtime prompt for the auto-shop agent, tightened chatbot guardrails, and blocked SMS delivery when lead details are missing.",
    },
    {
      title: "LLM provider repair",
      detail:
        "Repaired the Anthropic provider and embedding model for voice calls, then moved the text path to an active model version after the previous one was retired.",
    },
    {
      title: "Provider-agnostic model routing",
      detail:
        "The gateway runs OpenAI, Anthropic and Gemini paths behind one interface, so a single model outage is a routing change rather than an outage.",
    },
    {
      title: "E2E pilot proof",
      detail:
        "A Selenium pilot voice-call suite plus a Tekmetric mock exercise the real pilot flow without touching the customer's live shop system.",
    },
  ] satisfies Block[],

  testing: {
    heading: "Verification",
    body:
      "The pilot flow is exercised end to end rather than asserted in a unit test: a Selenium suite drives a real pilot voice call, a mock call demo script reproduces the pipeline offline, and preflight plus live-integration scripts check credentials, webhooks and CRM reachability before go-live. A dedicated phone-number migration test guards the agent payload shape, and the deployment is confirmed by a passing build and a health endpoint that returns 200 on the deployed revision.",
  },

  ownership: [
    { label: "Backend platform", value: "NestJS modules, multi-tenant isolation, auth, webhooks" },
    { label: "Voice path", value: "custom-LLM gateway, context, booking tools, prompts" },
    { label: "Integrations", value: "Tekmetric, mock CRM, Cal.com, Twilio, Stripe, SendGrid" },
    { label: "Portals", value: "admin + customer surfaces, call history, settings" },
    { label: "Pilot delivery", value: "go-live checklist, E2E suite, handoff documentation" },
  ],
}
