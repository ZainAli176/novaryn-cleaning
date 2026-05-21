import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Recurring House Cleaning Atlanta GA | Novaryn Cleaning",
  description:
    "Weekly, bi-weekly & monthly recurring cleaning services in Atlanta. Consistent professional cleaners, save up to 20%, no contracts. Set it and forget it. Free quote today!",
  keywords: [
    "recurring house cleaning atlanta",
    "weekly cleaning service atlanta ga",
    "bi weekly cleaning atlanta",
    "monthly cleaning service atlanta",
    "recurring cleaning atlanta",
    "regular maid service atlanta",
  ],
  openGraph: {
    title: "Recurring House Cleaning Atlanta GA | Novaryn Cleaning",
    description:
      "Weekly, bi-weekly & monthly recurring cleaning plans in Atlanta. Save up to 20% with consistent, trusted cleaners.",
    url: "https://novaryncleaning.online/services/recurring-cleaning",
    images: [{ url: "/og/recurring-cleaning.jpg" }],
    siteName: "Novaryn Cleaning",
    locale: "en_US",
    type: "website",
  },
};

const data: ServiceData = {
  slug: "recurring-cleaning",
  icon: "🔄",
  title: "Recurring Cleaning",
  metaTitle: "Recurring House Cleaning Atlanta GA | Novaryn Cleaning",
  metaDesc:
    "Weekly, bi-weekly & monthly recurring cleaning services in Atlanta. Consistent professional cleaners, save up to 20%, no contracts.",
  tagline: "Set it up once. Enjoy a clean home, always.",
  heroDesc:
    "Never think about cleaning again. Our recurring cleaning plans give you consistent, professional results on a schedule that fits your life — weekly, bi-weekly, or monthly.",
  color: "#10B36A",
  badge: "Save Up to 20%",
  whatIs:
    "Recurring cleaning is a scheduled, ongoing cleaning service where our team visits your home on a regular basis — weekly, every two weeks, or monthly. Each visit covers our complete standard cleaning checklist.",
  whyChoose:
    "Recurring clients get priority scheduling, the same trusted cleaners, consistent high-quality results, and significant discounts. We aim to send the same team every time so they know your home and preferences.",
  includes: [
    {
      icon: "🧹",
      title: "Full Standard Clean",
      desc: "Every recurring visit covers our complete standard cleaning checklist — all rooms, bathrooms, kitchen, and floors.",
    },
    {
      icon: "📅",
      title: "Your Chosen Schedule",
      desc: "Weekly, bi-weekly, or monthly — you choose the frequency that works for your lifestyle and budget.",
    },
    {
      icon: "👥",
      title: "Consistent Team",
      desc: "The same trusted cleaners visit every time.",
    },
    {
      icon: "💰",
      title: "Recurring Discounts",
      desc: "Save up to 20% compared to one-time booking rates.",
    },
    {
      icon: "📲",
      title: "Easy Rescheduling",
      desc: "Life happens. We make it easy to reschedule or skip visits with advance notice.",
    },
    {
      icon: "⭐",
      title: "Priority Booking",
      desc: "Recurring clients get priority on our schedule.",
    },
    {
      icon: "✅",
      title: "Quality Guarantee",
      desc: "Every visit is backed by our 100% satisfaction guarantee.",
    },
    {
      icon: "🏠",
      title: "Customizable Scope",
      desc: "Add extras like inside-fridge cleaning or laundry as needed.",
    },
    {
      icon: "🔒",
      title: "Trusted & Insured",
      desc: "All team members are background-checked, bonded, and insured.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Pick Your Plan",
      desc: "Choose weekly, bi-weekly, or monthly — and tell us your preferred day and time.",
    },
    {
      step: "2",
      title: "First Clean",
      desc: "Your first visit may be a deep clean to establish a baseline.",
    },
    {
      step: "3",
      title: "Regular Visits",
      desc: "Your dedicated team shows up as scheduled.",
    },
    {
      step: "4",
      title: "Easy Management",
      desc: "Adjust, skip, or update your plan anytime.",
    },
  ],
  faqs: [
    {
      q: "How much do I save with a recurring plan?",
      a: "Recurring clients save 10–20% compared to one-time rates, depending on frequency. Weekly plans offer the highest discount.",
    },
    {
      q: "Can I pause or cancel my recurring plan?",
      a: "Yes. We don't lock you into contracts. You can pause, adjust, or cancel with reasonable notice.",
    },
    {
      q: "Will I have the same cleaners every visit?",
      a: "We aim to send the same team every time so they become familiar with your home.",
    },
    {
      q: "Do I need to be home for recurring visits?",
      a: "No. Most recurring clients provide a key or entry code.",
    },
  ],
};

export default function RecurringCleaning() {
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
            name: "Recurring House Cleaning Atlanta",
            description:
              "Weekly, bi-weekly and monthly recurring cleaning services in Atlanta, GA.",
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
            serviceType: "Recurring Cleaning",
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
