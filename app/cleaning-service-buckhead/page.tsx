import type { Metadata } from "next";
import LocationPage, { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "House Cleaning Service in Buckhead, Atlanta GA | Novaryn Cleaning",
  description:
    "Top-rated house cleaning in Buckhead, Atlanta GA. Bonded, insured & background-checked. Serving ZIP codes 30305 & 30306. Book your free quote today!",
};

const data: LocationData = {
  neighborhood: "Buckhead",
  slug: "cleaning-service-buckhead",
  primaryKeyword: "house cleaning buckhead atlanta",
  h1: "House Cleaning Service in Buckhead, Atlanta GA",
  titleTag: "House Cleaning Service in Buckhead, Atlanta GA | Novaryn Cleaning",
  metaDesc:
    "Top-rated house cleaning in Buckhead, Atlanta GA. Bonded, insured & background-checked. Serving ZIP codes 30305 & 30306. Book your free quote today!",
  zipCodes: ["30305", "30306"],
  county: "Fulton",
  landmarks: ["Lenox Square", "Phipps Plaza"],
  intro:
    "Novaryn Cleaning delivers premium home and maid service to Buckhead residents in ZIP codes 30305 and 30306. From luxury condos near Lenox Square to single-family homes close to Phipps Plaza, our professional cleaning team brings bonded, insured, and eco-friendly cleaning right to your door. We're a trusted cleaning company in Buckhead, Atlanta — serving families who expect nothing but the best.",
  whyUs:
    "Buckhead residents have high standards — and so do we. Novaryn Cleaning brings the same level of care and attention to detail that Buckhead homeowners expect. Our cleaning professionals are background-checked, bonded, and fully insured, arriving on time with all the tools and eco-friendly products needed for a flawless clean. Whether you need a reliable weekly maid service in Buckhead or a one-time deep clean before hosting guests, we've got you covered. We offer flexible scheduling, consistent quality, and a 100% satisfaction guarantee on every visit.",
  faqs: [
    {
      q: "Do you offer maid service in Buckhead, Atlanta?",
      a: "Yes — we provide full maid and housekeeping service throughout Buckhead, including ZIP codes 30305 and 30306. Our team handles everything from dusting and vacuuming to kitchen and bathroom deep cleaning.",
    },
    {
      q: "Can you clean luxury condos and apartments in Buckhead?",
      a: "Absolutely. We have extensive experience cleaning condos, apartments, and high-rise units throughout Buckhead. We bring all our own supplies and work around building access requirements.",
    },
    {
      q: "Do you offer weekly cleaning service in Buckhead GA?",
      a: "Yes. Our recurring cleaning plans — weekly, bi-weekly, or monthly — are popular with Buckhead residents. You'll get the same trusted team every visit and save up to 20% compared to one-time rates.",
    },
    {
      q: "Are you a licensed and insured cleaning company in Buckhead?",
      a: "Yes. Novaryn Cleaning is fully bonded and insured. All of our cleaners are background-checked before being placed in any home. You can trust us with a key or entry code.",
    },
    {
      q: "How do I book a cleaning service in Buckhead Atlanta?",
      a: "Just fill out the quote form on this page or call us directly. We respond within 2 hours and can typically schedule your first cleaning within 24-48 hours.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Novaryn Cleaning",
    description:
      "Professional house cleaning and maid service in Buckhead, Atlanta GA. Bonded, insured, and eco-friendly.",
    url: "https://novaryncleaning.online/cleaning-service-buckhead",
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
      latitude: 33.8365,
      longitude: -84.3676,
    },
    areaServed: [
      { "@type": "Place", name: "Buckhead, Atlanta GA 30305" },
      { "@type": "Place", name: "Buckhead, Atlanta GA 30306" },
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

export default function BuckheadCleaning() {
  return <LocationPage data={data} />;
}
