import "./globals.css";
import "../styles/gradients.css";
import "../styles/typography.css";
import "../styles/shadows.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicho Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "bg-white_bg text-dark antialiased")}
      >
        {children}

        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js" ></script>
      </body>
    </html>
  );
}
