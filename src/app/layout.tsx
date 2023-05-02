import "./globals.css";
import { Inter } from "next/font/google";

import piri from "./piri.webp";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Pirivi Time Converter";
const description = "Next Gen UTC to Pirivi Time Converter, powered by AI";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    url: "https://pirivi-time-converter.oscarinadev.com/",
    type: "website",
    title,
    description,
    images: piri.src,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: piri.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} flex justify-center bg-slate-50 font-inter`}>
        {children}
      </body>
    </html>
  );
}
