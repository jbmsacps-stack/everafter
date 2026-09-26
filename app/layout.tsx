import type { Metadata } from "next";

import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

export const metadata: Metadata = {
  title: "EverAfter — A Celebration of Love",
  description:
    "A beautifully crafted wedding experience celebrating two people, their families, and their story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}