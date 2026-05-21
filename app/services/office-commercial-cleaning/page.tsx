import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Office & Commercial Cleaning Services Atlanta GA | Novaryn Cleaning",
  description:
    "Professional office and commercial cleaning services in Atlanta. Flexible scheduling for offices, retail, medical, gyms & more. Bonded, insured & reliable. Free quote today!",
  keywords: [
    "commercial cleaning services atlanta ga",
    "office cleaning atlanta",
    "office cleaners atlanta",
    "janitorial service atlanta",
    "business cleaning service atlanta",
    "medical office cleaning atlanta",
  ],
  openGraph: {
    title:
      "Office & Commercial Cleaning Services Atlanta GA | Novaryn Cleaning",
    description:
      "Reliable commercial cleaning for Atlanta businesses. Flexible after-hours scheduling. Bonded & Insured.",
    url: "https://novaryncleaning.online/services/office-commercial-cleaning",
    images: [{ url: "/og/commercial-cleaning.jpg" }],
    siteName: "Novaryn Cleaning",
    locale: "en_US",
    type: "website",
  },
};

const data: ServiceData = {
  slug: "office-commercial-cleaning",
  icon: "🏢",
  title: "Office & Commercial Cleaning",
  metaTitle:
    "Office & Commercial Cleaning Services Atlanta GA | Novaryn Cleaning",
  metaDesc:
    "Professional office and commercial cleaning services in Atlanta. Flexible scheduling for offices, retail, medical, gyms & more. Bonded, insured & reliable.",
  tagline: "A cleaner workspace means a more productive team.",
  heroDesc:
    "First impressions matter. From corporate offices and retail spaces to medical waiting rooms and co-working hubs, Novaryn Cleaning delivers reliable, professional commercial cleaning across Atlanta — on your schedule, without disruption.",
  color: "#1A6FD4",
  badge: undefined,
  whatIs:
    "Office and commercial cleaning encompasses professional cleaning services for businesses and commercial properties. We provide flexible scheduling — early mornings, evenings, or weekends — to minimize disruption to your operations.",
  whyChoose:
    "Novaryn Cleaning provides commercial clients with consistent, reliable service backed by a bonded and insured team. We offer flexible contracts and work around your business hours.",
  includes: [
    {
      icon: "🖥️",
      title: "Workstations & Desks",
      desc: "Wiping down desks, monitors, keyboards, phones, and work surfaces. Sanitizing high-touch areas.",
    },
    {
      icon: "🚻",
      title: "Restrooms",
      desc: "Full sanitization of all commercial restrooms — toilets, sinks, mirrors, floors, and restocking supplies.",
    },
    {
      icon: "🍽️",
      title: "Break Rooms & Kitchens",
      desc: "Cleaning countertops, sinks, appliance exteriors, and floors. Emptying trash and recycling.",
    },
    {
      icon: "🪟",
      title: "Glass & Entryways",
      desc: "Streak-free cleaning of glass doors, lobby windows, and reception surfaces.",
    },
    {
      icon: "🧹",
      title: "Floor Care",
      desc: "Vacuuming carpeted areas and mopping hard floors throughout the commercial space.",
    },
    {
      icon: "🗑️",
      title: "Trash & Recycling",
      desc: "Emptying all bins throughout the office and replacing liners.",
    },
    {
      icon: "💡",
      title: "Common Areas",
      desc: "Cleaning lobbies, hallways, conference rooms, and waiting areas.",
    },
    {
      icon: "🧴",
      title: "Sanitization",
      desc: "Disinfecting high-touch surfaces: door handles, elevator buttons, light switches, and shared equipment.",
    },
    {
      icon: "📋",
      title: "Custom Scope",
      desc: "We tailor our commercial cleaning checklist to fit your specific space and industry.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Site Assessment",
      desc: "We visit your space or gather details to understand your needs.",
    },
    {
      step: "2",
      title: "Custom Plan",
      desc: "We create a cleaning schedule and checklist tailored to your business.",
    },
    {
      step: "3",
      title: "Scheduled Cleaning",
      desc: "Our team cleans during your preferred hours.",
    },
    {
      step: "4",
      title: "Ongoing Service",
      desc: "Regular visits with consistent quality and reporting.",
    },
  ],
  faqs: [
    {
      q: "Can you clean after business hours?",
      a: "Yes. We specialize in flexible scheduling and can clean early mornings, evenings, and weekends.",
    },
    {
      q: "Do you offer contracts for regular commercial cleaning?",
      a: "Yes. We offer weekly, bi-weekly, and custom cleaning contracts for commercial clients.",
    },
    {
      q: "Are your commercial cleaning teams insured?",
      a: "Absolutely. All our staff are fully bonded and insured for commercial work.",
    },
    {
      q: "What types of commercial spaces do you clean?",
      a: "We clean offices, retail stores, medical offices, gyms, co-working spaces, and more.",
    },
  ],
};

export default function OfficeCommercialCleaning() {
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
            name: "Office and Commercial Cleaning Services Atlanta",
            description:
              "Professional commercial cleaning for offices, retail, medical facilities and more in Atlanta, GA.",
            provider: {
              "@type": "LocalBusiness",
              name: "Novaryn Cleaning",
              url: "https://novaryncleaning.online",
              telephone: "", // Add your real phone number here
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
            serviceType: "Commercial Cleaning",
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
