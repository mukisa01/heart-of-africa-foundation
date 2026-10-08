import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title:
    "Heart of Africa Foundation | Supporting Children in Uganda & Africa",

  description:
    "Heart of Africa Foundation supports orphans, vulnerable children and children with disabilities in Uganda and across Africa through care, support and community initiatives.",

  keywords: [
    "Heart of Africa Foundation",
    "Heart of Africa Foundation Uganda",
    "orphans support Uganda",
    "disabled children Uganda",
    "vulnerable children Uganda",
    "children's charity Uganda",
    "children support Africa",
    "charity foundation Uganda",
  ],

  authors: [{ name: "Heart of Africa Foundation" }],

  openGraph: {
    title:
      "Heart of Africa Foundation | Supporting Children in Uganda & Africa",
    description:
      "Supporting orphans, vulnerable children and children with disabilities in Uganda and across Africa.",
    type: "website",
    siteName: "Heart of Africa Foundation",
    url: "https://heart-of-africa-foundation.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="_RU8rcNYi7nZvtLiNcH1wjjAijB4QEw4tmz9Tmwma-I"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

      <GoogleAnalytics gaId="G-VN6R6N0XMP" />
    </html>
  );
}