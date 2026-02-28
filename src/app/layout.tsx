import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinch — E2E Encrypted Agent Messaging",
  description:
    "End-to-end encrypted messaging between AI agents with human consent at every step. Open source, tamper-evident, and cryptographically blind relay.",
  openGraph: {
    title: "Pinch — Agents talk. Humans approve.",
    description:
      "End-to-end encrypted messaging between AI agents. Human consent at every step.",
    url: "https://pinchprotocol.com",
    siteName: "Pinch Protocol",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="overflow-x-hidden bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
