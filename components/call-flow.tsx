/** Theme-aware diagram accent (readable on light + dark); not site primary neon. */
const ACCENT = "hsl(var(--flow-diagram-accent))"
const GRAY = "#8b8b93"
const FONT = "ui-monospace, SFMono-Regular, Menlo, monospace"

function Node({
  x,
  y,
  width,
  title,
  sub,
}: {
  x: number
  y: number
  width: number
  title: string
  sub: string
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={58} rx={3} fill="none" stroke={GRAY} strokeWidth={1} />
      <text x={x + width / 2} y={y + 26} textAnchor="middle" fontFamily={FONT} fontSize={12} fontWeight={600} fill={ACCENT}>
        {title}
      </text>
      <text x={x + width / 2} y={y + 43} textAnchor="middle" fontFamily={FONT} fontSize={9.5} fill={GRAY}>
        {sub}
      </text>
    </g>
  )
}

function Arrow({ from, to, dashed = false }: { from: [number, number]; to: [number, number]; dashed?: boolean }) {
  return (
    <line
      x1={from[0]}
      y1={from[1]}
      x2={to[0]}
      y2={to[1]}
      stroke={dashed ? GRAY : ACCENT}
      strokeWidth={1}
      strokeDasharray={dashed ? "3 3" : undefined}
      markerEnd={dashed ? "url(#ap-arrow-gray)" : "url(#ap-arrow)"}
    />
  )
}

function Elbow({ points, dashed = false }: { points: string; dashed?: boolean }) {
  return (
    <polyline
      points={points}
      fill="none"
      stroke={dashed ? GRAY : ACCENT}
      strokeWidth={1}
      strokeDasharray={dashed ? "3 3" : undefined}
      markerEnd={dashed ? "url(#ap-arrow-gray)" : "url(#ap-arrow)"}
    />
  )
}

function Label({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text x={x} y={y} fontFamily={FONT} fontSize={9} fill={GRAY}>
      {text}
    </text>
  )
}

export function CallFlow() {
  return (
    <svg
      viewBox="0 0 720 430"
      role="img"
      aria-label="AugmentPath Strategy call flow: an inbound Twilio number reaches a Retell voice agent driving a custom LLM WebSocket gateway; call-analysed events hit the NestJS webhook where spam and eligibility decide whether the lead is delivered to Tekmetric, alerted by SMS, booked through Cal.com, or billed in Stripe."
      className="h-auto w-full min-w-[620px]"
    >
      <defs>
        <marker id="ap-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9" stroke={ACCENT} strokeWidth={1.4} fill="none" />
        </marker>
        <marker
          id="ap-arrow-gray"
          viewBox="0 0 10 10"
          refX="8.5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 9 5 L 0 9" stroke={GRAY} strokeWidth={1.4} fill="none" />
        </marker>
      </defs>

      {/* Row A: the voice path */}
      <Node x={20} y={22} width={140} title="Inbound call" sub="managed number · Twilio" />
      <Arrow from={[162, 51]} to={[184, 51]} />
      <Node x={186} y={22} width={156} title="Retell agent" sub="realtime · web call" />
      <Arrow from={[344, 51]} to={[366, 51]} />
      <Node x={368} y={22} width={166} title="Custom LLM gateway" sub="wss · tenant context" />
      <Arrow from={[536, 51]} to={[558, 51]} />
      <Node x={560} y={22} width={140} title="Model + retrieval" sub="OpenAI · Anthropic · KB" />

      {/* Voice path down into the backend */}
      <Elbow points="264,80 264,112 90,112 90,150" />
      <Label x={272} y={106} text="call_analyzed" />

      {/* Row B: the backend */}
      <Node x={20} y={150} width={140} title="Call ingest" sub="POST /retell-webhook" />
      <Arrow from={[162, 179]} to={[184, 179]} />
      <Node x={186} y={150} width={156} title="Lead gate" sub="spam · eligibility" />
      <Arrow from={[344, 179]} to={[366, 179]} />
      <Node x={368} y={150} width={166} title="Call store" sub="transcript · analysis" />
      <Arrow from={[536, 179]} to={[558, 179]} />
      <Node x={560} y={150} width={140} title="Ops portal" sub="admin · customer" />

      {/* Row B down to delivery */}
      <Arrow from={[264, 208]} to={[264, 274]} />
      <Label x={272} y={248} text="qualified lead" />
      <Elbow points="250,232 90,232 90,274" dashed />
      <Label x={96} y={228} text="advisor alert" />
      <Arrow from={[451, 208]} to={[451, 274]} dashed />
      <Label x={459} y={248} text="booking tools" />
      <Elbow points="470,232 630,232 630,274" dashed />
      <Label x={556} y={228} text="usage" />

      {/* Row C: delivery and tooling */}
      <Node x={20} y={278} width={140} title="Twilio SMS" sub="advisor notifications" />
      <Node x={186} y={278} width={156} title="Tekmetric" sub="CRM delivery · mock" />
      <Node x={368} y={278} width={166} title="Cal.com" sub="availability · booking" />
      <Node x={560} y={278} width={140} title="Stripe" sub="wallet · usage billing" />

      <text x={360} y={392} textAnchor="middle" fontFamily={FONT} fontSize={10} fill={GRAY}>
        spam, eligibility and minimum lead details are decided before any CRM write, SMS or billing record
      </text>
      <text x={360} y={412} textAnchor="middle" fontFamily={FONT} fontSize={10} fill={GRAY}>
        every call keeps its record: transcript, classification, delivery status and cost, per tenant
      </text>
    </svg>
  )
}
