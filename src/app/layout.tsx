import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const Web3AuthProvider = dynamic(() => import("@/config/web3AuthProvider"), {
  ssr: false,
});

const Navbar = dynamic(() => import("@/components/navbar"), {
  loading: () => <div>Loading...</div>,
});

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
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <Web3AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
          <main>{children}</main>
          <Toaster />
        </Web3AuthProvider>
      </body>
    </html>
  );
}
