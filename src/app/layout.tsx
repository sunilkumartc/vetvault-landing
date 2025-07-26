import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VetVault - All-in-One Veterinary Practice Management Software",
  description:
    "Cutting-edge veterinary software for simpler operations, improved pet care, and getting home on time. Trusted by 1000+ practices.",
  keywords:
    "veterinary software, practice management, PIMS, veterinary records, appointment scheduling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
