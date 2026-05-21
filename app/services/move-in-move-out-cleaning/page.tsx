import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Move Out Cleaning Atlanta GA | Novaryn Cleaning",
  description:
    "Professional move-in and move-out cleaning services in Atlanta. Get your full security deposit back or move into a spotless home. Fast, reliable & inspection-ready. Free quote today!",
  keywords: [
    "move out cleaning atlanta",
    "move in cleaning atlanta",
    "move out cleaning service atlanta ga",
    "end of lease cleaning atlanta",
    "apartment cleaning atlanta",
    "security deposit cleaning atlanta",
  ],
  openGraph: {
    title: "Move Out Cleaning Atlanta GA | Novaryn Cleaning",
    description:
      "Get your full security deposit back with our professional move-out cleaning. Move-in cleaning also available. Serving all Atlanta areas.",
    url: "https://novaryncleaning.online/services/move-in-move-out-cleaning",
    images: [{ url: "/og/move-out-cleaning.jpg" }],
    siteName: "Novaryn Cleaning",
    locale: "en_US",
    type: "website",
  },
};

const data: ServiceData = {
  slug: "move-in-move-out-cleaning",
  icon: "📦",
  title: "Move In / Move Out Cleaning",
  metaTitle: "Move Out Cleaning Atlanta GA | Novaryn Cleaning",
  metaDesc:
    "Professional move-in and move-out cleaning services in Atlanta. Get your full security deposit back or move into a spotless home.",
  tagline: "Leave it spotless. Arrive to perfection.",
  heroDesc:
    "Moving is stressful enough — let us handle the cleaning. Whether you're vacating a property and need your deposit back, or moving into a new home and want a fresh start, Novaryn Cleaning delivers a thorough, inspection-ready clean.",
  color: "#7B4FD4",
  badge: undefined,
  whatIs:
    "Move-in and move-out cleaning is a specialized, comprehensive clean performed when a property is being vacated or occupied. It's more thorough than a standard clean because the goal is to leave the space in immaculate, inspection-ready condition.",
  whyChoose:
    "We've helped hundreds of Atlanta renters and homeowners get their security deposits back in full. Our move-out cleaning checklist is built around landlord and property manager expectations.",
  includes: [
    {
      icon: "🏠",
      title: "Every Room Cleaned",
      desc: "Full clean of all bedrooms, living areas, dining rooms, and hallways — walls wiped, floors cleaned, surfaces sanitized.",
    },
    {
      icon: "🚿",
      title: "Bathrooms Scrubbed",
      desc: "Deep clean of toilets, showers, tubs, sinks, mirrors, tiles, grout, and floors. Mold and mildew treated.",
    },
    {
      icon: "🍳",
      title: "Kitchen Full Clean",
      desc: "Inside and outside of all appliances, scrubbing stovetop and oven, cleaning sink, wiping cabinets inside and out.",
    },
    {
      icon: "🪟",
      title: "Windows & Tracks",
      desc: "Cleaning interior glass, window sills, and tracks. Streak-free results throughout.",
    },
    {
      icon: "🪜",
      title: "Baseboards & Trim",
      desc: "Hand-wiping all baseboards, molding, door frames, and light switches — the details landlords check.",
    },
    {
      icon: "🗄️",
      title: "Inside All Cabinets",
      desc: "Interior cleaning of all kitchen, bathroom, and closet cabinets and drawers.",
    },
    {
      icon: "💡",
      title: "Light Fixtures & Fans",
      desc: "Dusting and wiping ceiling fans, light covers, and vents throughout the property.",
    },
    {
      icon: "🧲",
      title: "Walls & Switches",
      desc: "Spot cleaning wall scuffs, fingerprints, and marks. Wiping all light switches and outlet covers.",
    },
    {
      icon: "🗑️",
      title: "Trash & Debris Removal",
      desc: "Removing all trash from inside the property, leaving it empty and ready for inspection or move-in.",
    },
  ],
  process: [
    /* ... your existing process ... */
  ],
  faqs: [
    /* ... your existing faqs ... */
  ],
};

export default function MoveInMoveOut() {
  return (
    <>
      <ServicePage data={data} />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Move Out & Move In Cleaning Service Atlanta",
            description:
              "Professional move-out and move-in cleaning services in Atlanta, GA. Inspection-ready cleaning to help you get your full security deposit back.",
            provider: {
              "@type": "LocalBusiness",
              name: "Novaryn Cleaning",
              url: "https://novaryncleaning.online",
              telephone: "", // ← Add your phone number
              address: {
                "@type": "PostalAddress",
                streetAddress: "227 Mitchell St SW #3b",
                addressLocality: "Atlanta",
                addressRegion: "GA",
                postalCode: "30303",
              },
            },
            areaServed: [
              "Atlanta",
              "Buckhead",
              "Midtown",
              "Decatur",
              "Sandy Springs",
            ],
            serviceType: "Move Out Cleaning",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  );
}
