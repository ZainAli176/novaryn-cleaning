import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServiceAreas from "@/components/Serviceareas";

export const metadata: Metadata = {
  title: "Home Cleaning Services Atlanta GA | Novaryn Cleaning",
  description:
    "Professional eco-friendly home cleaning services in Atlanta, GA. Deep cleaning, move-in/out, recurring, Airbnb & office cleaning. Bonded, insured & background-checked cleaners. Free quote today!",
  keywords: [
    "home cleaning atlanta",
    "cleaning services atlanta ga",
    "maid service atlanta",
    "house cleaners atlanta",
    "deep cleaning atlanta",
    "move out cleaning atlanta",
    "recurring cleaning atlanta",
  ],
  authors: [{ name: "Novaryn Cleaning" }],
  openGraph: {
    title: "Home Cleaning Services Atlanta GA | Novaryn Cleaning",
    description:
      "Professional & Reliable Eco-Friendly Cleaning Services in Atlanta. Book Today!",
    url: "https://novaryncleaning.online",
    siteName: "Novaryn Cleaning",
    images: [
      {
        url: "/og-image.jpg", // Replace with your actual image later
        width: 1200,
        height: 630,
        alt: "Novaryn Cleaning - Professional Home Cleaning Atlanta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Novaryn Cleaning",
            description:
              "Professional eco-friendly home and office cleaning services in Atlanta, GA",
            url: "https://novaryncleaning.online",
            telephone: "", // Add your phone number here
            address: {
              "@type": "PostalAddress",
              streetAddress: "227 Mitchell St SW #3b",
              addressLocality: "Atlanta",
              addressRegion: "GA",
              postalCode: "30303",
              addressCountry: "US",
            },
            areaServed: [
              "Atlanta",
              "Buckhead",
              "Midtown Atlanta",
              "Decatur",
              "Sandy Springs",
              "Alpharetta",
              "Marietta",
            ],
            serviceType: [
              "Home Cleaning",
              "Deep Cleaning",
              "Move In Move Out Cleaning",
              "Recurring Cleaning",
              "Airbnb Cleaning",
              "Office Cleaning",
            ],
            priceRange: "$$",
            openingHours: "Mo-Sa 07:00-19:00",
            sameAs: [
              "https://x.com/NovarynClean",
              "https://www.instagram.com/novaryncleaning",
              "https://www.facebook.com/share/1BByfVd2HH/",
              "https://www.pinterest.com/novarync/",
            ],
          }),
        }}
      />
    </>
  );
}
