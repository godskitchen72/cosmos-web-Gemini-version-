import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmos Medical Technologies | Smart Billing. Better Care.",
  description: "Navigate Healthcare With Intelligence. Transforming patient care, documentation, billing, and revenue cycle management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-cosmos-navy min-h-screen text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
