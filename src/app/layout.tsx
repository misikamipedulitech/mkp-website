import type { Metadata } from "next";
import { Dancing_Script, Inter, Libre_Baskerville } from "next/font/google";
import { ContactDialogProvider } from "@/components/contact/contact-dialog-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContactDialogProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollReveal />
        </ContactDialogProvider>
      </body>
    </html>
  );
}
