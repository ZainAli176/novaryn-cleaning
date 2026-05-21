import type { Metadata } from "next";
import LocationPage, { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "House Cleaning Service in Midtown Atlanta, GA | Novaryn Cleaning",
  description:
    "Professional residential cleaning in Midtown Atlanta, GA. Bonded, insured & eco-friendly. Serving ZIP codes 30308 & 30309. Get your free quote today!",
};

const data: LocationData = {
  neighborhood: "Midtown Atlanta",
  slug: "cleaning-service-midtown-atlanta",
  primaryKeyword: "residential cleaning midtown ga",
  h1: "House Cleaning Service in Midtown Atlanta, GA",
  titleTag: "House Cleaning Service in Midtown Atlanta, GA | Novaryn Cleaning",
  metaDesc:
    "Professional residential cleaning in Midtown Atlanta, GA. Bonded, insured & eco-friendly. Serving ZIP codes 30308 & 30309. Get your free quote today!",
  zipCodes: ["30308", "30309"],
  county: "Fulton",
  landmarks: ["Piedmont Park", "The Fox Theatre"],
  intro:
    "Novaryn Cleaning provides professional, reliable home cleaning for Midtown Atlanta residents in ZIP codes 30308 and 30309. Whether you live near Piedmont Park or The Fox Theatre, our background-checked, bonded, and insured team delivers a spotless home every time — using eco-friendly, non-toxic products safe for your family and pets. From routine house cleaning to move-in/move-out and deep cleaning, we handle it all so you can enjoy everything Midtown has to offer.",
  whyUs:
    "Midtown Atlanta is one of the most vibrant, fast-paced neighborhoods in the city — and keeping up with home cleaning while living here isn't easy. Novaryn Cleaning was built for busy Midtown residents who demand quality and reliability. We show up on time, follow a detailed cleaning checklist every visit, and use professional-grade eco-friendly products that are safe for children, pets, and the environment. Our team is fully background-checked, bonded, and insured — so you can hand us a key with complete confidence. We also offer flexible scheduling including evenings and weekends to fit your Midtown lifestyle.",
  faqs: [
    {
      q: "Do you offer residential cleaning near Piedmont Park in Midtown Atlanta?",
      a: "Yes — we serve all of Midtown Atlanta including neighborhoods near Piedmont Park, The Fox Theatre, and Ponce City Market. We cover ZIP codes 30308 and 30309.",
    },
    {
      q: "Can I book a move in / move out clean in Midtown Atlanta?",
      a: "Absolutely. Our move-in/move-out cleaning service is one of our most popular in Midtown — perfect for renters, landlords, and real estate transactions. We'll leave the property inspection-ready.",
    },
    {
      q: "Do you offer recurring home cleaning in Midtown GA?",
      a: "Yes. We offer weekly, bi-weekly, and monthly recurring cleaning plans for Midtown residents. Recurring clients save up to 20% and get the same trusted team every visit.",
    },
    {
      q: "How quickly can you schedule a cleaning in Midtown Atlanta?",
      a: "We typically confirm bookings within 2 hours and can often schedule within 24-48 hours depending on availability. Contact us for urgent or same-day requests.",
    },
    {
      q: "Are your cleaning products safe for pets and children?",
      a: "Yes — we use eco-friendly, non-toxic, pet-safe cleaning products on every job. If you have specific allergies or preferences, just let us know when booking.",
    },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Novaryn Cleaning",
    description:
      "Professional home cleaning service in Midtown Atlanta, GA. Bonded, insured, and eco-friendly.",
    url: "https://novaryncleaning.online/cleaning-service-midtown-atlanta",
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
      latitude: 33.7812,
      longitude: -84.386,
    },
    areaServed: [
      { "@type": "Place", name: "Midtown Atlanta, GA 30308" },
      { "@type": "Place", name: "Midtown Atlanta, GA 30309" },
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

export default function MidtownAtlantaCleaning() {
  return <LocationPage data={data} />;
}
