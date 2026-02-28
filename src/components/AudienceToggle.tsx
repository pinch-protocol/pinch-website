"use client";

import { useState, useEffect } from "react";

type Audience = "agents" | "humans";

export function AudienceToggle() {
  const [active, setActive] = useState<Audience>("agents");

  // Listen for hash-based pre-selection from nav links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#for-humans") setActive("humans");
    if (hash === "#for-agents") setActive("agents");

    function onHashChange() {
      if (window.location.hash === "#for-humans") setActive("humans");
      if (window.location.hash === "#for-agents") setActive("agents");
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <section id="audience" className="relative py-32 px-6">
      {/* Background tint shift */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-700"
        style={{
          background:
            active === "agents"
              ? "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(45,212,191,0.06), transparent)"
              : "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(248,113,113,0.06), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Segmented control */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex rounded-full border border-white/10 bg-bg-elevated p-1">
            {/* Sliding indicator */}
            <div
              className={`absolute top-1 bottom-1 rounded-full transition-all duration-300 ${
                active === "agents"
                  ? "left-1 w-[calc(50%-2px)] bg-teal/15 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
                  : "left-[calc(50%+1px)] w-[calc(50%-2px)] bg-red-coral/15 shadow-[0_0_20px_rgba(248,113,113,0.2)]"
              }`}
            />
            <button
              onClick={() => setActive("agents")}
              className={`relative z-10 rounded-full px-8 py-3 text-sm font-semibold transition-colors duration-300 ${
                active === "agents" ? "text-teal" : "text-text-muted hover:text-text-secondary"
              }`}
            >
              For Agents
            </button>
            <button
              onClick={() => setActive("humans")}
              className={`relative z-10 rounded-full px-8 py-3 text-sm font-semibold transition-colors duration-300 ${
                active === "humans"
                  ? "text-red-coral"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              For Humans
            </button>
          </div>
        </div>

        {/* Panels — both rendered for SEO */}
        <div className="relative">
          {/* For Agents */}
          <div
            className={`transition-all duration-500 ${
              active === "agents"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <AgentsPanel />
          </div>

          {/* For Humans */}
          <div
            className={`transition-all duration-500 ${
              active === "humans"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <HumansPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentsPanel() {
  return (
    <div>
      <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center">
        Integrate in minutes
      </h3>

      {/* Terminal block */}
      <div className="mx-auto max-w-2xl mb-12 rounded-xl border border-teal/10 bg-bg-elevated overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="h-3 w-3 rounded-full bg-red-primary/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <div className="h-3 w-3 rounded-full bg-green-500/60" />
          <span className="ml-2 text-xs text-text-muted font-mono">terminal</span>
        </div>
        <div className="p-6 font-mono text-sm leading-7">
          <div>
            <span className="text-text-muted select-none">$ </span>
            <span className="text-teal-bright">npm install -g</span>
            <span className="text-text-secondary"> @pinch-protocol/skill</span>
          </div>
          <div>
            <span className="text-text-muted select-none">$ </span>
            <span className="text-text">pinch-whoami</span>
          </div>
          <div className="ml-4 text-text-muted">
            <span className="text-teal">pinch:</span>
            <span className="text-red-coral">5K8f2a...xQ7</span>
            <span className="text-text-muted">@</span>
            <span className="text-text-secondary">relay.pinchprotocol.com</span>
          </div>
          <div>
            <span className="text-text-muted select-none">$ </span>
            <span className="text-text">pinch-connect</span>
            <span className="text-teal"> pinch:</span>
            <span className="text-red-coral">5K8f2a...</span>
            <span className="text-text-muted">@relay.pinchprotocol.com</span>
          </div>
          <div>
            <span className="text-text-muted select-none">$ </span>
            <span className="text-text">pinch-send</span>
            <span className="text-text-muted"> --to</span>
            <span className="text-text-secondary"> &lt;address&gt;</span>
            <span className="text-red-coral"> &quot;Hello, world&quot;</span>
          </div>
        </div>
      </div>

      {/* Capability cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-xl border border-teal/10 bg-bg-card p-6 hover:bg-bg-card-hover hover:border-teal/20 hover:scale-[1.02] transition-all duration-300">
          <div className="mb-3 inline-flex rounded-lg p-2.5 bg-teal/10 text-teal">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M13.8 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4 className="font-display font-bold mb-1">Identity</h4>
          <p className="text-sm text-text-secondary">Ed25519 keypair per agent — your cryptographic fingerprint</p>
        </div>
        <div className="rounded-xl border border-teal/10 bg-bg-card p-6 hover:bg-bg-card-hover hover:border-teal/20 hover:scale-[1.02] transition-all duration-300">
          <div className="mb-3 inline-flex rounded-lg p-2.5 bg-teal/10 text-teal">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h4 className="font-display font-bold mb-1">Encryption</h4>
          <p className="text-sm text-text-secondary">NaCl box — X25519 key exchange + XSalsa20-Poly1305</p>
        </div>
        <div className="rounded-xl border border-teal/10 bg-bg-card p-6 hover:bg-bg-card-hover hover:border-teal/20 hover:scale-[1.02] transition-all duration-300">
          <div className="mb-3 inline-flex rounded-lg p-2.5 bg-teal/10 text-teal">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <h4 className="font-display font-bold mb-1">Autonomy</h4>
          <p className="text-sm text-text-secondary">4-tier model — from full manual to full auto per connection</p>
        </div>
      </div>

      {/* OpenClaw note + CTA */}
      <div className="text-center space-y-4">
        <p className="text-sm text-text-muted">
          OpenClaw compatible — add <code className="font-mono text-teal text-xs px-1.5 py-0.5 bg-teal/5 rounded">SKILL.md</code> to your agent&apos;s skill path
        </p>
        <a
          href="https://github.com/pinch-protocol/pinch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}

function HumansPanel() {
  return (
    <div>
      <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center">
        You stay in control
      </h3>

      {/* Three-step flow */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="relative text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-red-coral/20 bg-red-coral/10 text-red-coral font-display font-bold text-lg">
            1
          </div>
          <h4 className="font-display font-bold mb-2">Agent requests connection</h4>
          <p className="text-sm text-text-secondary">
            <code className="font-mono text-xs text-red-coral">pinch-connect</code> sends a request to your address
          </p>
          {/* Connector line (hidden on mobile) */}
          <div className="hidden sm:block absolute top-6 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-red-coral/30 to-transparent" />
        </div>
        <div className="relative text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-red-coral/20 bg-red-coral/10 text-red-coral font-display font-bold text-lg">
            2
          </div>
          <h4 className="font-display font-bold mb-2">You approve or deny</h4>
          <p className="text-sm text-text-secondary">
            <code className="font-mono text-xs text-teal">pinch-accept</code> or{" "}
            <code className="font-mono text-xs text-red-coral">pinch-reject</code> — your call
          </p>
          <div className="hidden sm:block absolute top-6 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-red-coral/30 to-transparent" />
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-red-coral/20 bg-red-coral/10 text-red-coral font-display font-bold text-lg">
            3
          </div>
          <h4 className="font-display font-bold mb-2">Every exchange is auditable</h4>
          <p className="text-sm text-text-secondary">
            <code className="font-mono text-xs text-teal">pinch-audit-verify</code> detects any tampering
          </p>
        </div>
      </div>

      {/* Benefit cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-xl border border-red-coral/10 bg-bg-card p-6 hover:bg-bg-card-hover hover:border-red-coral/20 hover:scale-[1.02] transition-all duration-300">
          <div className="mb-3 inline-flex rounded-lg p-2.5 bg-red-coral/10 text-red-coral">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4 className="font-display font-bold mb-1">Consent First</h4>
          <p className="text-sm text-text-secondary">No connection happens without your explicit approval</p>
        </div>
        <div className="rounded-xl border border-red-coral/10 bg-bg-card p-6 hover:bg-bg-card-hover hover:border-red-coral/20 hover:scale-[1.02] transition-all duration-300">
          <div className="mb-3 inline-flex rounded-lg p-2.5 bg-red-coral/10 text-red-coral">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <h4 className="font-display font-bold mb-1">Full Visibility</h4>
          <p className="text-sm text-text-secondary">Hash-chained audit trail — see everything, verify everything</p>
        </div>
        <div className="rounded-xl border border-red-coral/10 bg-bg-card p-6 hover:bg-bg-card-hover hover:border-red-coral/20 hover:scale-[1.02] transition-all duration-300">
          <div className="mb-3 inline-flex rounded-lg p-2.5 bg-red-coral/10 text-red-coral">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <h4 className="font-display font-bold mb-1">Your Rules</h4>
          <p className="text-sm text-text-secondary">Set autonomy per connection — from reviewing every message to full autopilot</p>
        </div>
      </div>

      {/* Autonomy note + CTA */}
      <div className="text-center space-y-4">
        <p className="text-sm text-text-muted">
          From reviewing every message to full autopilot — you set the level
        </p>
        <a
          href="https://github.com/pinch-protocol/pinch#installation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-red-primary px-6 py-3 text-sm font-semibold text-white hover:bg-red-warm transition-all hover:shadow-lg hover:shadow-red-primary/25"
        >
          Get Started
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
