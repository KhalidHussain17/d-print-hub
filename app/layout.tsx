
import type { Metadata } from "next";
import "./globals.css";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata: Metadata = {
  title: "D Print Hub",
  description: "A Perfect Printing Solutions",
  
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFB] text-gray-900 antialiased">
        <Navbar />
        <main className="max-w-[1280px] mx-auto px-4 md:px-6">

          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

