import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leoul Solomon - Art Director",
  description: "Portfolio of Leoul Solomon, Art Director specializing in KV, Branding, TVC, Motion Graphics, 3D, and Presentation Design",
  keywords: "art director, graphic design, branding, motion graphics, 3d design, key visuals, tv commercials",
  authors: [{ name: "Leoul Solomon" }],
  openGraph: {
    title: "Leoul Solomon - Art Director",
    description: "Portfolio showcasing creative work in branding, motion graphics, and visual design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${raleway.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Navigation />
        <main className="pt-16 lg:pt-20">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
