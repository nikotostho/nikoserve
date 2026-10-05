import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "@/styles/fonts.css";
import "@/styles/style.css";
import "@/styles/components.css";
import "@/styles/dashboard.css";
import PrototypeInteractions from "@/components/shared/prototype-interactions";

export const metadata: Metadata = {
  title: "HaatBazar — Shop & Services",
  description:
    "Shop products from verified sellers and book trusted local services on HaatBazar.",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas">
        {children}
        <PrototypeInteractions />
      </body>
    </html>
  );
}
