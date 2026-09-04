import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sebastian Lazarte — AI Software Engineer",
  description:
    "Sebastian Lazarte is an AI software engineer building intelligent products — from LLM-powered systems to the infrastructure that scales them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} ${spaceMono.variable}`}
    >
      <body className="bg-ink text-paper font-sans antialiased selection:bg-signal/25 selection:text-paper">
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
