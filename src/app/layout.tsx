import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camila Coelho | A Fashion, Beauty & Lifestyle Blog",
  description: "An online luxury destination for daily fashion, beauty and lifestyle tips by Camila Coelho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ibmPlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6F0] text-[#231C19] selection:bg-[#AE5238] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
