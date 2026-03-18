import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nithik | Superhero Comic Portfolio",
  description:
    "Full Stack Developer & UI/UX Designer portfolio — interactive, comic-themed, and packed with power. Explore Nithik's origin story, superpowers, and missions.",
  keywords: [
    "Nithik",
    "Portfolio",
    "Full Stack Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "Comic Portfolio",
  ],
  authors: [{ name: "Nithik" }],
  openGraph: {
    title: "Nithik | Superhero Comic Portfolio",
    description:
      "Interactive Superhero Comic-themed developer portfolio by Nithik.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Oswald:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
