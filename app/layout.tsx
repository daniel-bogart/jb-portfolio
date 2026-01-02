import type { Metadata } from "next";
import { Geist, Geist_Mono, Days_One, Kay_Pho_Du } from "next/font/google";
import "./globals.css";
import ConditionalNav from "@/components/ConditionalNav";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const daysOne = Days_One({
  weight: "400",
  variable: "--font-days-one",
  subsets: ["latin"],
});

const kayPhoDu = Kay_Pho_Du({
  weight: ["400", "700"],
  variable: "--font-kay-pho-du",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John 'JB' Packer - Production Designer",
  description: "Film production design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${daysOne.variable} ${kayPhoDu.variable} antialiased`}
      >
        <SmoothScroll />
        {/* ConditionalNav handles showing Navigation on all pages except homepage */}
        <ConditionalNav />
        {children}
      </body>
    </html>
  );
}
