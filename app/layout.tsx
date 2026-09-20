import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile, dict } from "@/lib/data";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.fullName} — ${dict.en.hero.role}`,
  description: dict.en.hero.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={inter.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
