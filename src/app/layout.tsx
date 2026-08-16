import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Haji Hassan Group — Building Bahrain, Building The Future",
  description:
    "Established in 1952, Haji Hassan Group is a leading Bahraini enterprise with diversified interests in construction, infrastructure, ready mix concrete, trading, manufacturing, and services. Over 70 years of engineering excellence and national development.",
  keywords: [
    "Haji Hassan Group",
    "Bahrain",
    "construction",
    "infrastructure",
    "engineering",
    "ready mix",
    "trading",
    "manufacturing",
    "Bahrain construction",
    "Bahrain infrastructure",
    "Haji Hassan",
  ],
  authors: [{ name: "Haji Hassan Group" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Haji Hassan Group — Building Bahrain, Building The Future",
    description:
      "Established in 1952, a leading Bahraini enterprise with over 70 years of engineering excellence in construction, infrastructure, and diversified industries.",
    siteName: "Haji Hassan Group",
    type: "website",
    locale: "en_BH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haji Hassan Group — Building Bahrain, Building The Future",
    description:
      "Established in 1952, a leading Bahraini enterprise with over 70 years of engineering excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
