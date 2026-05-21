import type { Metadata } from "next";
import LocationPage, { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "House Cleaning Services in Sandy Springs, GA | Novaryn Cleaning",
  description:
    "Professional house cleaning in Sandy Springs, GA. Bonded, insured & eco-friendly. Serving ZIP codes 30328 & 30350. Get your free quote from Novaryn Cleaning!",
};

const data: LocationData = {
  neighborhood: "Sandy Springs",
  slug: "cleaning-service-sandy-springs",
  primaryKeyword: "house cleaning services sandy springs ga",
  h1: "House Cleaning Services in Sandy Springs, GA",
  titleTag: "House Cleaning Services in Sandy Springs, GA | Novaryn Cleaning",
  metaDesc:
    "Professional house cleaning in Sandy Springs, GA. Bonded, insured & eco-friendly. Serving ZIP codes 30328 & 30350. Get your free quote from Novaryn Cleaning!",
  zipCodes: ["30328", "30350"],
  county: "Fulton",
  landmarks: ["City Springs", "Chattahoochee River National Recreation Area"],
  intro:
    "Novaryn Cleaning brings professional, eco-friendly house cleaning to Sandy Springs, GA residents in ZIP codes 30328 and 30350. From modern homes near City Springs to family neighborhoods along the Chattahoochee River National Recreation Area, our bonded and insured cleaning team delivers consistently excellent results. We offer standard cleaning, deep cleaning, move-in/move-out, recurring plans, and more — all backed by our 100% satisfaction guarantee.",
  whyUs:
    "Sandy Springs homeowners expect reliability, professionalism, and quality — and that's exactly what Novaryn Cleaning delivers. We've built our reputation by showing up on time, using the best eco-friendly cleaning products, and treating every Sandy Springs home with the same care we'd give our own. Our cleaning professionals are background-checked, bonded, and insured. We offer flexible scheduling for busy families, including evening and weekend availability. Whether you're looking for a trusted cleaning company for a one-time deep clean or a consistent weekly housekeeping plan, Novaryn Cleaning is the reliable choice in Sandy Springs.",
  faqs: [
    {
      q: "Do you offer house cleaning services in Sandy Springs GA?",
      a: "Yes — we serve all of Sandy Springs GA, including ZIP codes 30328 and 30350. We offer standard cleaning, deep cleaning, move-in/out, office cleaning, and recurring plans.",
    },
    {
      q: "Can I book a cleaning company in Sandy Springs Atlanta for a recurring plan?",
      a: "Absolutely. Our recurring cleaning plans — weekly, bi-weekly, or monthly — are very popular with Sandy Springs families. You'll save up to 20% and always get the same trusted team.",
    },
    {
      q: "Do you offer deep cleaning in Sandy Springs GA?",
      a: "Yes. Our deep cleaning service covers every corner of your Sandy Springs home — baseboards, inside appliances, tile grout, behind furniture, and all the areas a standard clean doesn't reach.",
    },
    {
      q: "Are you insured and background-checked for cleaning in Sandy Springs?",
      a: "Yes. Novaryn Cleaning is fully bonded and insured, and every team member passes a background check before working in any home. Your safety and peace of mind are our priority.",
    },
    {
      q: "How do I get a quote for house cleaning in Sandy Springs GA?",
      a: "Fill out the quick quote form above — we respond within 2 hours with a no-obligation estimate based on your home size and the service you need.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Novaryn Cleaning",
    description:
      "Professional house cleaning services in Sandy Springs, GA. Bonded, insured, and eco-friendly.",
    url: "https://novaryncleaning.online/cleaning-service-sandy-springs",
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
      latitude: 33.9304,
      longitude: -84.3733,
    },
    areaServed: [
      { "@type": "Place", name: "Sandy Springs, GA 30328" },
      { "@type": "Place", name: "Sandy Springs, GA 30350" },
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

export default function SandySpringsCleaning() {
  return <LocationPage data={data} />;
}
