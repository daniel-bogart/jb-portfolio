import type { Metadata } from "next";
import { Geist, Geist_Mono, Days_One } from "next/font/google";
import "./globals.css";
import ConditionalNav from "@/components/ConditionalNav";

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
        className={`${geistSans.variable} ${geistMono.variable} ${daysOne.variable} antialiased`}
      >
        {/* ConditionalNav handles showing Navigation on all pages except homepage */}
        <ConditionalNav />
        {children}
      </body>
    </html>
  );
}
