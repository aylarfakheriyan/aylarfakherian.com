import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aylar Fakherian — Human-Centred Designer",
  description:
    "Portfolio of Aylar Fakherian — Research through Design, XR, AI, and Digital Cultural Heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}