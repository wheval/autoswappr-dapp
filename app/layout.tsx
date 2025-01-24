import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { StarknetProvider } from "./components/starknet-provider";
import Footer from "./components/footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@auto_swappr",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StarknetProvider>
        {/* NEW BG COLOR: #02060D */}
        {/* OLD BG COLOR: #08001F */}
        <body className="relative w-full bg-[#02060D]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </StarknetProvider>
    </html>
  );
}
