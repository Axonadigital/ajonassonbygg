import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://jonassonbyggservice.se";
const TITLE = "A Jonasson Byggservice AB – Snickare i Östersund";
const DESCRIPTION =
  "Professionell byggservice i Östersundsområdet. Tak, fönster, kök, renovering och snickeri med hög kvalitet.";

export const viewport: Viewport = {
  themeColor: "#c6b08e",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["snickare", "byggservice", "Östersund", "renovering", "tak", "fönster", "kök"],
  authors: [{ name: "A Jonasson Byggservice AB" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "A Jonasson Byggservice AB",
    url: `${SITE_URL}/`,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
