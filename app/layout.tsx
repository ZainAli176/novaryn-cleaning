import type { Metadata } from "next";
import Script from "next/script"; // 🚀 Import the native Next.js Script optimizer
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Novaryn Cleaning | Professional Home & Office Cleaning in Atlanta, GA",
  description:
    "Atlanta's trusted cleaning service. Standard, deep, move-in/out, commercial, post-construction & recurring cleaning. Serving Atlanta, GA. Book your free quote today!",
  keywords:
    "cleaning service Atlanta, home cleaning Atlanta, deep cleaning Atlanta, move out cleaning Atlanta, office cleaning Atlanta, Novaryn Cleaning",
  openGraph: {
    title: "Novaryn Cleaning | Atlanta's Trusted Cleaning Service",
    description:
      "Professional home & office cleaning in Atlanta, GA. Eco-friendly, bonded & insured. Book your free quote today!",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 1. Load the main Google Analytics framework script asynchronously */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DEJ31QR59J"
          strategy="afterInteractive"
        />

        {/* 2. Configure and initialize the analytics data layer */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DEJ31QR59J');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
