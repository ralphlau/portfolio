import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ralph Laurenz Timbol | Computer Engineering & QA Engineer",
  description:
    "Computer Engineering graduate with experience in IoT systems, and software quality assurance. Skilled in Python, C++, JavaScript, and embedded systems.",
  keywords: [
    "Ralph Timbol",
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
    title: "Ralph Laurenz Timbol | Computer Engineering & QA Engineer",
    description:
      "Building reliable systems and testing quality software. Computer Engineering graduate from the Philippines.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph Laurenz Timbol | Portfolio",
    description: "Computer Engineering & QA Engineer from the Philippines.",
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
