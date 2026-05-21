import type { Metadata } from "next";
import LocationPage, { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "House Cleaning Service in Decatur, GA | Novaryn Cleaning",
  description:
    "Reliable house cleaning in Decatur, GA. Eco-friendly, bonded & insured. Serving ZIP codes 30030 & 30033. Book your free quote from Novaryn Cleaning today!",
};

const data: LocationData = {
  neighborhood: "Decatur",
  slug: "cleaning-service-decatur-ga",
  primaryKeyword: "house cleaning decatur ga",
  h1: "House Cleaning Service in Decatur, GA",
  titleTag: "House Cleaning Service in Decatur, GA | Novaryn Cleaning",
  metaDesc:
    "Reliable house cleaning in Decatur, GA. Eco-friendly, bonded & insured. Serving ZIP codes 30030 & 30033. Book your free quote from Novaryn Cleaning today!",
  zipCodes: ["30030", "30033"],
  county: "DeKalb",
  landmarks: ["Decatur Square", "Agnes Scott College"],
  intro:
    "Novaryn Cleaning offers trusted, professional home cleaning to Decatur, GA residents in ZIP codes 30030 and 30033. Whether you're in a craftsman bungalow near Decatur Square or a family home close to Agnes Scott College, our cleaning service brings reliable, eco-friendly results every visit. We serve Decatur with the same care and professionalism that Atlanta families have come to depend on — maid service, deep cleaning, move-out cleaning, and recurring plans all available.",
  whyUs:
    "Decatur is a close-knit community with families who care about what goes into their homes — and we feel the same way. Novaryn Cleaning uses only eco-friendly, non-toxic cleaning products that are safe for your children, pets, and the environment. Our Decatur cleaning team is background-checked, bonded, and insured, giving you complete peace of mind. We're a reliable cleaning company serving DeKalb County, and we pride ourselves on consistent, high-quality results with every single visit. Flexible scheduling available including weekends.",
  faqs: [
    {
      q: "Do you offer house cleaning in Decatur, GA near Decatur Square?",
      a: "Yes — we serve all of Decatur GA including areas near Decatur Square, Agnes Scott College, and surrounding neighborhoods in ZIP codes 30030 and 30033.",
    },
    {
      q: "Do you offer maid service in Decatur GA?",
      a: "Yes. Our maid service in Decatur includes regular housekeeping visits — weekly, bi-weekly, or monthly. We send the same team every visit so they know your home and preferences.",
    },
    {
      q: "Is your cleaning service eco-friendly in Decatur GA?",
      a: "Absolutely. We use non-toxic, eco-friendly, pet-safe cleaning products on every job in Decatur and throughout Atlanta. Great for families with children, pets, or sensitivities.",
    },
    {
      q: "Can you do a move-out cleaning in Decatur GA?",
      a: "Yes — our move-in/move-out cleaning is a popular service for Decatur renters and landlords. We leave the property inspection-ready, which helps tenants get their full security deposit back.",
    },
    {
      q: "How much does house cleaning cost in Decatur GA?",
      a: "Pricing depends on home size and service type. We provide free, no-obligation quotes. Fill out the form above and we'll respond within 2 hours with an accurate estimate.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Novaryn Cleaning",
    description:
      "Professional house cleaning and maid service in Decatur, GA. Eco-friendly, bonded, and insured.",
    url: "https://novaryncleaning.online/cleaning-service-decatur-ga",
    telephone: "(404) 555-0192",
    email: "Novaryncleaning@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "227 Mitchell St SW #3b",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      postalCode: "30303",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7748,
      longitude: -84.2963,
    },
    areaServed: [
      { "@type": "Place", name: "Decatur, GA 30030" },
      { "@type": "Place", name: "Decatur, GA 30033" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    image: "https://novaryncleaning.online/og-image.jpg",
    sameAs: ["https://www.google.com/maps"],
  },
};

export default function DecaturCleaning() {
  return <LocationPage data={data} />;
}
