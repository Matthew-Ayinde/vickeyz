import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VickeyZ - World-Class Virtuoso Keyboardist | Luxury Event Entertainment",
  description: "Experience the pinnacle of musical excellence. VickeyZ brings decades of keyboard mastery to your most prestigious events. Trusted by dignitaries worldwide.",
  keywords: ["luxury event entertainment", "virtuoso keyboardist", "wedding pianist", "corporate event music", "live band", "premium entertainment"],
  authors: [{ name: "VickeyZ" }],
  openGraph: {
    title: "VickeyZ - World-Class Virtuoso Keyboardist",
    description: "Trusted by Dignitaries | Global Performance History",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
