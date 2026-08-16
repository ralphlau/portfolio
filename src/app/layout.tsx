import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ralph Laurenz Timbol | Full-Stack Developer & QA Engineer",
  description:
    "Computer Engineering graduate building full-stack web applications with Next.js and PostgreSQL, with experience in software quality assurance and embedded IoT systems. Skilled in Python, TypeScript, JavaScript, and Playwright test automation.",
  keywords: [
    "Ralph Timbol",
    "Full-Stack Developer",
    "Next.js Developer",
    "QA Engineer",
    "Computer Engineering",
    "Playwright",
    "Software Testing",
    "Philippines",
    "Embedded Systems",
    "IoT",
  ],
  authors: [{ name: "Ralph Laurenz Timbol" }],
  openGraph: {
    title: "Ralph Laurenz Timbol | Full-Stack Developer & QA Engineer",
    description:
      "Building full-stack web applications and testing quality software. Computer Engineering graduate from the Philippines.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph Laurenz Timbol | Portfolio",
    description: "Full-Stack Developer & QA Engineer from the Philippines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
