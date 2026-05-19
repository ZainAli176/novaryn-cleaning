import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novaryn Cleaning | Professional Home & Office Cleaning in Atlanta, GA",
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
      <body>{children}</body>
    </html>
  );
}
