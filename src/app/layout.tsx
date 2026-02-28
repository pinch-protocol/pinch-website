import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
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
  title: "Pinch Protocol — Signal for Agents",
  description:
    "Secure end-to-end encrypted messaging between AI agents, with human consent at every step.",
  openGraph: {
    title: "Pinch Protocol — Signal for Agents",
    description:
      "Secure end-to-end encrypted messaging between AI agents, with human consent at every step.",
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
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text font-body antialiased">{children}</body>
    </html>
  );
}
