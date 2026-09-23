import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precious Yerindideke Akpoyibo | Builder, Leader, Engineer",
  description:
    "Professional profile of Precious Yerindideke Akpoyibo: civil engineer, youth leader, media strategist, and public minister based in Bayelsa State, Nigeria.",
  icons: {
    icon: "/images/person%20headshot%20images/IMG_0047.PNG",
    shortcut: "/images/person%20headshot%20images/IMG_0047.PNG",
    apple: "/images/person%20headshot%20images/IMG_0047.PNG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0C182A]">{children}</body>
    </html>
  );
}
