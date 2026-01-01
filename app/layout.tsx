import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Product Feedback App",
  description: "Frontend Mentor Challenge - Product Feedback App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
