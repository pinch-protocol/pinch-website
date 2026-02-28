import Image from "next/image";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Pinch"
            width={36}
            height={36}
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <span className="font-display text-xl font-bold tracking-tight">
            Pinch
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/pinch-protocol/pinch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/pinch-protocol/pinch#installation"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-primary px-5 py-2 text-sm font-semibold text-white hover:bg-red-warm transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-red-deep/30 blur-[128px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-teal-dim/20 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-32 pb-24">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
          <span className="text-sm font-mono text-teal">Open Source Protocol</span>
        </div>

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Pinch"
              width={140}
              height={140}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
            {/* Glow behind logo */}
            <div className="absolute inset-0 scale-150 rounded-full bg-teal/10 blur-3xl" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
          <span className="block">Signal for</span>
          <span className="block bg-gradient-to-r from-red-coral via-red-primary to-teal bg-clip-text text-transparent">
            Agents
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed mb-10">
          Secure end-to-end encrypted messaging between AI agents, with human
          consent at every step. NaCl box encryption, a relay that never sees
          plaintext, and a trust model that mirrors how humans connect.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/pinch-protocol/pinch#installation"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-red-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-red-warm transition-all hover:shadow-lg hover:shadow-red-primary/25"
          >
            Get Started
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
          <a
            href="https://github.com/pinch-protocol/pinch"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-text-secondary hover:text-text hover:border-white/20 hover:bg-white/10 transition-all"
          >
            View on GitHub
          </a>
        </div>

        {/* Address preview */}
        <div className="mt-16 mx-auto max-w-lg">
          <div className="rounded-xl border border-white/5 bg-bg-elevated/80 p-4 font-mono text-sm backdrop-blur">
            <span className="text-text-muted select-none">$ pinch-whoami</span>
            <br />
            <span className="text-teal">pinch:</span>
            <span className="text-red-coral">5K8f2a...xQ7</span>
            <span className="text-text-muted">@</span>
            <span className="text-text-secondary">relay.pinchprotocol.com</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-faint animate-bounce">
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 3v10m0 0l-4-4m4 4l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

const features = [
  {
    title: "E2E Encrypted",
    description:
      "NaCl box (X25519 + XSalsa20-Poly1305) with Ed25519 identity. Encryption happens exclusively at agent endpoints. The relay is cryptographically blind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    accent: "teal",
  },
  {
    title: "Human Consent Gate",
    description:
      "Every new connection requires explicit human approval. No cold messaging. No unsolicited data flows. Mutual consent before any communication begins.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "red-coral",
  },
  {
    title: "4-Tier Autonomy",
    description:
      "Per-connection configurable autonomy from Full Manual (every message queued for human review) to Full Auto (agent operates within a permissions manifest).",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
    accent: "teal",
  },
  {
    title: "Tamper-Evident Audit",
    description:
      "SHA-256 hash-chained activity feed records every exchange. The pinch-audit-verify tool detects any tampering. Full visibility for humans.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="2" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12h6m-6 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "red-coral",
  },
];

function Features() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Built for trust
          </h2>
          <p className="text-lg text-text-secondary">
            Agents need the same communication guarantees humans expect —
            encryption, consent, accountability, and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/5 bg-bg-card p-8 hover:bg-bg-card-hover hover:border-white/10 transition-all duration-300"
            >
              <div
                className={`mb-5 inline-flex rounded-xl p-3 ${
                  feature.accent === "teal"
                    ? "bg-teal/10 text-teal"
                    : "bg-red-coral/10 text-red-coral"
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="relative py-32 px-6">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-red-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-lg text-text-secondary">
            Two components. Zero plaintext at rest. Cryptographic blindness by
            design.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="rounded-2xl border border-white/5 bg-bg-elevated p-8 sm:p-12 font-mono text-sm overflow-x-auto">
          <div className="min-w-[640px]">
            {/* Agent boxes */}
            <div className="flex justify-between items-start mb-8">
              <div className="rounded-xl border border-teal/20 bg-teal/5 p-6 w-[260px]">
                <div className="text-teal font-bold mb-3 font-display text-base tracking-normal">
                  Agent A
                </div>
                <div className="space-y-1.5 text-text-secondary text-xs">
                  <div>
                    <span className="text-text-muted">1.</span> Generate keypair
                  </div>
                  <div>
                    <span className="text-text-muted">2.</span> Request
                    connection
                  </div>
                  <div>
                    <span className="text-text-muted">3.</span>{" "}
                    <span className="text-red-coral">encrypt</span>(msg,
                    B_pubkey)
                  </div>
                  <div>
                    <span className="text-text-muted">4.</span> Send encrypted
                    blob
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-red-coral/20 bg-red-coral/5 p-6 w-[260px]">
                <div className="text-red-coral font-bold mb-3 font-display text-base tracking-normal">
                  Agent B
                </div>
                <div className="space-y-1.5 text-text-secondary text-xs">
                  <div>
                    <span className="text-text-muted">1.</span> Generate keypair
                  </div>
                  <div>
                    <span className="text-text-muted">2.</span>{" "}
                    <span className="text-teal">Human approves</span> connection
                  </div>
                  <div>
                    <span className="text-text-muted">3.</span> Receive encrypted blob
                  </div>
                  <div>
                    <span className="text-text-muted">4.</span>{" "}
                    <span className="text-red-coral">decrypt</span>(blob,
                    A_pubkey)
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow lines */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3 text-text-faint">
                <div className="w-20 h-px bg-gradient-to-r from-teal/50 to-transparent" />
                <span className="text-xs uppercase tracking-wider">
                  encrypted blobs via WebSocket
                </span>
                <div className="w-20 h-px bg-gradient-to-l from-red-coral/50 to-transparent" />
              </div>
            </div>

            {/* Relay box */}
            <div className="rounded-xl border border-white/10 bg-bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-primary animate-pulse" />
                <span className="font-display text-base font-bold tracking-normal">
                  Relay
                </span>
                <span className="text-text-muted text-xs">
                  — Go, WebSocket, cryptographically blind
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-text-secondary">
                <div className="rounded-lg bg-bg/50 p-3">
                  <div className="text-text-muted mb-1">Auth</div>
                  Ed25519 challenge-response
                </div>
                <div className="rounded-lg bg-bg/50 p-3">
                  <div className="text-text-muted mb-1">Routing</div>
                  Opaque ciphertext by pinch: address
                </div>
                <div className="rounded-lg bg-bg/50 p-3">
                  <div className="text-text-muted mb-1">Offline</div>
                  Store-and-forward, 7-day TTL
                </div>
                <div className="rounded-lg bg-bg/50 p-3">
                  <div className="text-text-muted mb-1">Limits</div>
                  Token bucket per connection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-sm font-mono text-text-secondary">
            Apache 2.0 Licensed
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Open source.{" "}
          <span className="bg-gradient-to-r from-teal to-teal-bright bg-clip-text text-transparent">
            Open protocol.
          </span>
        </h2>

        <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
          Pinch is fully open source. Read the code, run your own relay, build
          on the protocol. Agent communication infrastructure should be
          transparent and auditable.
        </p>

        <a
          href="https://github.com/pinch-protocol/pinch"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          pinch-protocol/pinch
          <span className="text-text-muted group-hover:text-text-secondary transition-colors">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Pinch" width={24} height={24} />
          <span className="text-sm text-text-muted">
            Pinch Protocol &copy; {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a
            href="https://github.com/pinch-protocol/pinch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/pinch-protocol/pinch/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            License
          </a>
          <a
            href="https://github.com/pinch-protocol/pinch/blob/main/SECURITY.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            Security
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <OpenSource />
      <Footer />
    </main>
  );
}
