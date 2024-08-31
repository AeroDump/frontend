import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Web3AuthProvider from "@/config/web3AuthProvider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aerodump",
  description: "Seamless, Secure, and Automated Multi-Network Token Distribution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3AuthProvider>
          <Navbar />
          {children}
        </Web3AuthProvider>
      </body>
    </html>
  );
}
