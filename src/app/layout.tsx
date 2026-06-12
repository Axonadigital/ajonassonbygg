import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Jonasson Byggservice AB – Snickare i Östersund",
  description:
    "Professionell byggservice i Östersundsområdet. Tak, fönster, kök, renovering och snickeri med hög kvalitet.",
  keywords: ["snickare", "byggservice", "Östersund", "renovering", "tak", "fönster", "kök"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${playfair.variable} ${inter.variable} ${cinzel.variable}`}>
      <body className="bg-light text-ink font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
