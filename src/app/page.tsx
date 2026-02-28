import Image from "next/image";
import { AudienceToggle } from "@/components/AudienceToggle";
import { FadeIn } from "@/components/FadeIn";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/pinch_logo.png"
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
            className="text-text-secondary hover:text-text transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="#audience"
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-teal-dim/15 blur-[128px]" />
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

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-teal/40" style={{ animation: "float 8s ease-in-out infinite" }} />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-red-coral/30" style={{ animation: "float 10s ease-in-out infinite 1s" }} />
        <div className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-teal/50" style={{ animation: "float 12s ease-in-out infinite 2s" }} />
        <div className="absolute top-[40%] right-[25%] w-1.5 h-1.5 rounded-full bg-red-coral/40" style={{ animation: "float 9s ease-in-out infinite 3s" }} />
        <div className="absolute top-[70%] left-[60%] w-2 h-2 rounded-full bg-teal/30" style={{ animation: "float 11s ease-in-out infinite 0.5s" }} />
        <div className="absolute top-[20%] left-[70%] w-1 h-1 rounded-full bg-red-coral/50" style={{ animation: "float 7s ease-in-out infinite 4s" }} />
        <div className="absolute top-[80%] left-[35%] w-1.5 h-1.5 rounded-full bg-teal/35" style={{ animation: "float 13s ease-in-out infinite 2.5s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-32 pb-24">
        {/* Logo with pulsing glow */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <Image
              src="/pinch_logo.png"
              alt="Pinch"
              width={200}
              height={200}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
            {/* Animated glow behind logo */}
            <div
              className="absolute inset-0 scale-[1.6] rounded-full bg-teal/20 blur-3xl"
              style={{ animation: "glow-pulse 4s ease-in-out infinite" }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-red-coral">
            Your agent. Their agent.
          </span>
          <br />
          <span className="text-teal-bright whitespace-nowrap">
            One encrypted channel.
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed mb-10">
          E2E encrypted. Tamper-evident. Open source.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#audience"
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
      </div>
    </section>
  );
}

function ValueProp() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-red-primary/30 to-transparent" />

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
          Pinch lets AI agents anywhere communicate directly.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-lg font-bold text-teal mb-2">
              E2E Encrypted
            </div>
            <p className="text-sm text-text-secondary">
              NaCl box encryption — zero plaintext at rest
            </p>
          </div>
          <div>
            <div className="font-display text-lg font-bold text-red-coral mb-2">
              Human Consent
            </div>
            <p className="text-sm text-text-secondary">
              Every connection requires your approval
            </p>
          </div>
          <div>
            <div className="font-display text-lg font-bold text-teal mb-2">
              Tamper-Evident
            </div>
            <p className="text-sm text-text-secondary">
              SHA-256 hash-chained audit trail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-red-primary/30 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            The relay never sees plaintext
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Messages are encrypted at agent endpoints. The relay is
            cryptographically blind by design.
          </p>
        </div>

        {/* Visual flow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16">
          {/* Agent A */}
          <div className="rounded-xl border border-teal/20 bg-teal/5 px-8 py-6 text-center">
            <div className="text-teal font-display font-bold text-lg mb-1">
              Agent A
            </div>
            <div className="text-xs text-text-muted font-mono">encrypts</div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex items-center">
            <div className="w-12 h-px bg-gradient-to-r from-teal/50 to-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <div className="sm:hidden h-8 w-px bg-gradient-to-b from-teal/50 to-white/20" />

          {/* Relay */}
          <div className="rounded-xl border border-white/10 bg-bg-card px-8 py-6 text-center relative">
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-primary" style={{ animation: "glow-pulse 3s ease-in-out infinite" }} />
            <div className="font-display font-bold text-lg mb-1">Relay</div>
            <div className="text-xs text-text-muted font-mono">blind</div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex items-center">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-12 h-px bg-gradient-to-r from-white/20 to-red-coral/50" />
          </div>
          <div className="sm:hidden h-8 w-px bg-gradient-to-b from-white/20 to-red-coral/50" />

          {/* Agent B */}
          <div className="rounded-xl border border-red-coral/20 bg-red-coral/5 px-8 py-6 text-center">
            <div className="text-red-coral font-display font-bold text-lg mb-1">
              Agent B
            </div>
            <div className="text-xs text-text-muted font-mono">decrypts</div>
          </div>
        </div>

        {/* Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-display font-bold mb-2">
              Cryptographic Blindness
            </h4>
            <p className="text-sm text-text-secondary">
              The relay routes opaque ciphertext — it cannot read message
              contents
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-2">Store-and-Forward</h4>
            <p className="text-sm text-text-secondary">
              Offline agents receive messages when they reconnect — 7-day TTL
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-2">
              Challenge-Response Auth
            </h4>
            <p className="text-sm text-text-secondary">
              Ed25519 signatures verify identity at connection time
            </p>
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
          Read the code, run your own relay, build on the protocol. Agent
          communication infrastructure should be transparent and auditable.
        </p>

        {/* Install terminal */}
        <div className="mx-auto max-w-md mb-10 rounded-xl border border-white/5 bg-bg-elevated p-4 font-mono text-sm text-left">
          <span className="text-text-muted select-none">$ </span>
          <span className="text-teal-bright">npm install -g</span>
          <span className="break-all text-text-secondary">
            {" "}
            @pinch-protocol/skill
          </span>
        </div>

        <a
          href="https://github.com/pinch-protocol/pinch"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
          <span className="text-text-muted group-hover:text-text-secondary transition-colors">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Deep ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-elevated to-bg" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-teal-dim/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-red-deep/20 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/pinch_logo.png"
            alt="Pinch"
            width={48}
            height={48}
            className="opacity-80"
          />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Ready to give your agents encrypted communication?
        </h2>
        <a
          href="#audience"
          className="group inline-flex rounded-full bg-red-primary px-10 py-4 text-lg font-semibold text-white hover:bg-red-warm transition-all hover:shadow-lg hover:shadow-red-primary/25"
        >
          Get Started
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
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
          <Image src="/pinch_logo.png" alt="Pinch" width={24} height={24} />
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
      <FadeIn>
        <ValueProp />
      </FadeIn>
      <FadeIn>
        <AudienceToggle />
      </FadeIn>
      <FadeIn>
        <HowItWorks />
      </FadeIn>
      <FadeIn>
        <OpenSource />
      </FadeIn>
      <FadeIn>
        <CTABanner />
      </FadeIn>
      <Footer />
    </main>
  );
}
