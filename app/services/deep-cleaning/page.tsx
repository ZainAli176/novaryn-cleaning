import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Deep Cleaning Service Atlanta GA | Novaryn Cleaning",
  description:
    "Professional deep cleaning services in Atlanta, GA. We clean baseboards, grout, inside appliances, behind furniture & more. Thorough, eco-friendly deep house cleaning. Book today!",
  keywords: [
    "deep cleaning service atlanta",
    "deep cleaning atlanta ga",
    "whole house deep clean atlanta",
    "kitchen deep cleaning atlanta",
    "bathroom deep cleaning atlanta",
    "spring cleaning service atlanta",
  ],
  openGraph: {
    title: "Deep Cleaning Service Atlanta GA | Novaryn Cleaning",
    description:
      "Intensive deep cleaning that reaches every corner. Baseboards, grout, appliances & more. Professional & eco-friendly.",
    url: "https://novaryncleaning.online/services/deep-cleaning",
    images: [{ url: "/og/deep-cleaning.jpg" }],
    siteName: "Novaryn Cleaning",
    locale: "en_US",
    type: "website",
  },
};

const data: ServiceData = {
  slug: "deep-cleaning",
  icon: "🧼",
  title: "Deep Cleaning",
  metaTitle: "Deep Cleaning Service Atlanta GA | Novaryn Cleaning",
  metaDesc:
    "Professional deep cleaning services in Atlanta, GA. We clean baseboards, grout, inside appliances, behind furniture & more. Thorough, eco-friendly deep house cleaning. Book today!",
  tagline: "Every corner, every crevice — nothing gets missed.",
  heroDesc:
    "A deep clean goes far beyond the surface. Our Atlanta deep cleaning service tackles the built-up grime, hidden dust, and neglected areas that a standard clean can't reach. Perfect for first-time customers, seasonal resets, or homes that need serious attention.",
  color: "#0D9B8A",
  badge: undefined,
  whatIs:
    "Deep cleaning is an intensive, top-to-bottom clean of your entire home. Unlike standard cleaning, it covers areas that are normally skipped — inside ovens and refrigerators, behind appliances, grout lines, light fixtures, window tracks, inside cabinets, and more. It typically takes 2–3x longer than a standard clean and leaves your home feeling brand new.",
  whyChoose:
    "Our deep cleaning team brings professional-grade tools, commercial-strength (but eco-safe) products, and meticulous attention to detail. We work methodically through every room with a comprehensive deep-clean checklist so nothing is overlooked. Every deep clean is backed by our 100% satisfaction guarantee.",
  includes: [
    {
      icon: "🔧",
      title: "Inside Appliances",
      desc: "Deep cleaning inside the oven, refrigerator, microwave, and dishwasher — removing built-up grease and residue.",
    },
    {
      icon: "🪣",
      title: "Grout & Tile Scrubbing",
      desc: "Hand-scrubbing bathroom and kitchen tile grout to remove mold, mildew, and soap scum buildup.",
    },
    {
      icon: "🪑",
      title: "Behind & Under Furniture",
      desc: "Moving light furniture to vacuum and mop underneath — catching dust bunnies and allergens that hide out of sight.",
    },
    {
      icon: "💡",
      title: "Light Fixtures & Vents",
      desc: "Wiping down ceiling fans, light fixtures, and air vents to remove accumulated dust.",
    },
    {
      icon: "🪟",
      title: "Window Tracks & Sills",
      desc: "Cleaning window frames, tracks, and sills that collect dirt, insects, and debris over time.",
    },
    {
      icon: "🗄️",
      title: "Inside Cabinets & Drawers",
      desc: "Wiping down the interior of kitchen and bathroom cabinets and drawers on request.",
    },
    {
      icon: "🚪",
      title: "Doors & Door Frames",
      desc: "Cleaning door handles, frames, and edges — high-touch areas often overlooked in routine cleaning.",
    },
    {
      icon: "🪜",
      title: "Baseboards & Trim",
      desc: "Hand-wiping all baseboards, crown molding, and trim throughout the home.",
    },
    {
      icon: "🛁",
      title: "Full Bathroom Deep Clean",
      desc: "Scrubbing showers, tubs, and toilets thoroughly including drains, faucets, and caulking lines.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Assessment",
      desc: "We note the size and condition of your home to give an accurate time and price estimate.",
    },
    {
      step: "2",
      title: "Top-Down Approach",
      desc: "We start at the ceiling and work down — so any dislodged dust gets cleaned up as we go.",
    },
    {
      step: "3",
      title: "Room by Room",
      desc: "Each room gets completed in full before moving to the next, using our deep-clean checklist.",
    },
    {
      step: "4",
      title: "Final Walkthrough",
      desc: "We go room by room with you to confirm everything meets your expectations before we leave.",
    },
  ],
  faqs: [
    {
      q: "How long does a deep clean take?",
      a: "Depending on home size and condition, deep cleans typically take 4–8 hours. We'll provide a more specific estimate when you book.",
    },
    {
      q: "How often should I get a deep clean?",
      a: "Most clients do a deep clean once or twice a year, often in spring and fall. If you're new to professional cleaning, we recommend starting with a deep clean before switching to regular maintenance visits.",
    },
    {
      q: "Is deep cleaning more expensive than standard cleaning?",
      a: "Yes, because it's significantly more thorough and time-intensive. However, many clients find it worth every penny.",
    },
    {
      q: "Do I need to do anything to prepare?",
      a: "Ideally, clear countertops and pick up larger items off the floor so we can clean those surfaces fully. We'll handle the rest.",
    },
    {
      q: "Is your deep cleaning safe for kids and pets?",
      a: "Yes. We use eco-friendly, non-toxic products for all of our services.",
    },
  ],
};

export default function DeepCleaning() {
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
            name: "Deep Cleaning Service Atlanta",
            description:
              "Professional deep house cleaning service in Atlanta GA including baseboards, grout, appliances, and more.",
            provider: {
              "@type": "LocalBusiness",
              name: "Novaryn Cleaning",
              url: "https://novaryncleaning.online",
              telephone: "", // Add your phone
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
            serviceType: "Deep Cleaning",
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
