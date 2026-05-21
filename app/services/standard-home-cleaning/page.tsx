import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Standard Home Cleaning Atlanta GA | Novaryn Cleaning",
  description:
    "Professional standard home cleaning services in Atlanta, GA. Regular dusting, vacuuming, mopping, kitchen & bathroom cleaning. Reliable, eco-friendly & affordable. Book your free quote today!",
  keywords: [
    "standard home cleaning atlanta ga",
    "regular house cleaning atlanta",
    "weekly cleaning service atlanta",
    "routine cleaning service atlanta",
    "maid service atlanta ga",
    "house cleaning atlanta",
  ],
  openGraph: {
    title: "Standard Home Cleaning Atlanta GA | Novaryn Cleaning",
    description:
      "Consistent, reliable standard home cleaning in Atlanta. Weekly, bi-weekly & monthly options available. Eco-friendly products.",
    url: "https://novaryncleaning.online/services/standard-home-cleaning",
    images: [{ url: "/og/standard-cleaning.jpg" }],
    siteName: "Novaryn Cleaning",
    locale: "en_US",
    type: "website",
  },
};

const data: ServiceData = {
  slug: "standard-home-cleaning",
  icon: "🧹",
  title: "Standard Home Cleaning",
  metaTitle: "Standard Home Cleaning Atlanta GA | Novaryn Cleaning",
  metaDesc:
    "Professional standard home cleaning services in Atlanta, GA. Regular dusting, vacuuming, mopping, kitchen & bathroom cleaning. Reliable, eco-friendly & affordable.",
  tagline: "Fresh, consistent, and done right — every single time.",
  heroDesc:
    "Our standard home cleaning is the perfect solution for busy Atlanta households who want a clean, comfortable space without the hassle. We handle all the essentials so you can focus on what matters most.",
  color: "#1A6FD4",
  badge: "Most Popular",
  whatIs:
    "Standard home cleaning is a routine maintenance clean covering the key areas of your home — living spaces, bedrooms, bathrooms, kitchen, and floors. It's designed to keep your home consistently clean and fresh on a regular schedule.",
  whyChoose:
    "Novaryn Cleaning brings professional-grade results to every standard clean. Our team is background-checked, fully insured, and trained to work efficiently. We use eco-friendly, non-toxic products safe for your family and pets.",
  includes: [
    {
      icon: "🛋️",
      title: "Living & Common Areas",
      desc: "Dusting surfaces, ceiling fans, baseboards; vacuuming carpets & rugs; mopping hard floors; tidying visible clutter.",
    },
    {
      icon: "🛏️",
      title: "Bedrooms",
      desc: "Dusting furniture and surfaces, making beds, vacuuming or mopping floors, emptying trash bins.",
    },
    {
      icon: "🚿",
      title: "Bathrooms",
      desc: "Scrubbing toilets, sinks, and showers; cleaning mirrors; wiping counters; mopping floors; replacing trash liners.",
    },
    {
      icon: "🍳",
      title: "Kitchen",
      desc: "Wiping countertops and stovetop, cleaning exterior of appliances, cleaning sink, mopping floor.",
    },
    {
      icon: "🪟",
      title: "Windows & Mirrors",
      desc: "Cleaning interior glass surfaces, window sills, and mirrors throughout the home.",
    },
    {
      icon: "🗑️",
      title: "Trash & Recycling",
      desc: "Emptying all interior trash cans and replacing liners throughout the home.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Book Online",
      desc: "Fill out our quick quote form and we'll confirm your appointment within 2 hours.",
    },
    {
      step: "2",
      title: "We Arrive",
      desc: "Our team shows up on time with all supplies and equipment needed.",
    },
    {
      step: "3",
      title: "We Clean",
      desc: "We follow our detailed checklist, room by room, top to bottom.",
    },
    {
      step: "4",
      title: "You Inspect",
      desc: "Walk through your home — if anything isn't right, we'll fix it immediately.",
    },
  ],
  faqs: [
    {
      q: "How long does a standard cleaning take?",
      a: "Most standard home cleanings take between 1.5 to 3 hours depending on the size of your home.",
    },
    {
      q: "Do I need to be home during the cleaning?",
      a: "Not at all. Many of our clients provide a key or entry code.",
    },
    {
      q: "What's the difference between standard and deep cleaning?",
      a: "Standard cleaning covers routine maintenance. Deep cleaning goes further — inside appliances, grout scrubbing, behind furniture, etc.",
    },
    {
      q: "Can I customize what gets cleaned?",
      a: "Absolutely. Just let us know your preferences when you book.",
    },
    {
      q: "Do you bring your own supplies?",
      a: "Yes! We bring everything including eco-friendly, pet-safe cleaning products.",
    },
  ],
};

export default function StandardHomeCleaning() {
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
            name: "Standard Home Cleaning Atlanta",
            description:
              "Regular standard home cleaning services in Atlanta, GA. Weekly, bi-weekly and monthly options available.",
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
            serviceType: "Standard House Cleaning",
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
