import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Office & Commercial Cleaning Atlanta | Novaryn Cleaning",
  description:
    "Professional office and commercial cleaning in Atlanta, GA. Flexible scheduling, bonded & insured teams. Keep your workspace spotless. Book a free quote.",
};

const data: ServiceData = {
  slug: "office-commercial-cleaning",
  icon: "🏢",
  title: "Office & Commercial Cleaning",
  tagline: "A cleaner workspace means a more productive team.",
  heroDesc:
    "First impressions matter. From corporate offices and retail spaces to medical waiting rooms and co-working hubs, Novaryn Cleaning delivers reliable, professional commercial cleaning across Atlanta — on your schedule, without disruption.",
  color: "#1A6FD4",
  badge: undefined,
  whatIs:
    "Office and commercial cleaning encompasses professional cleaning services for businesses and commercial properties. Unlike residential cleaning, commercial cleaning is typically scheduled around business hours — early morning, evenings, or weekends — to avoid disrupting operations. We serve a wide range of commercial clients in Atlanta including corporate offices, small businesses, retail storefronts, medical offices, real estate offices, gyms, and co-working spaces.",
  whyChoose:
    "Novaryn Cleaning provides commercial clients with consistent, reliable service backed by a bonded and insured team. We offer flexible contracts — one-time, weekly, or custom — and we work around your business hours so your operations are never interrupted. Our commercial cleaning standards meet and exceed what you'd expect from a national service, at a local price.",
  includes: [
    { icon: "🖥️", title: "Workstations & Desks", desc: "Wiping down desks, monitors, keyboards, phones, and work surfaces. Sanitizing high-touch areas." },
    { icon: "🚻", title: "Restrooms", desc: "Full sanitization of all commercial restrooms — toilets, sinks, mirrors, floors, and restocking supplies." },
    { icon: "🍽️", title: "Break Rooms & Kitchens", desc: "Cleaning countertops, sinks, appliance exteriors, and floors. Emptying trash and recycling." },
    { icon: "🪟", title: "Glass & Entryways", desc: "Streak-free cleaning of glass doors, lobby windows, and reception surfaces — making great first impressions." },
    { icon: "🧹", title: "Floor Care", desc: "Vacuuming carpeted areas and mopping hard floors throughout the commercial space." },
    { icon: "🗑️", title: "Trash & Recycling", desc: "Emptying all bins throughout the office and replacing liners. Managing recycling stations." },
    { icon: "💡", title: "Common Areas", desc: "Cleaning lobbies, hallways, conference rooms, and waiting areas to keep shared spaces presentable." },
    { icon: "🧴", title: "Sanitization", desc: "Disinfecting high-touch surfaces: door handles, elevator buttons, light switches, and shared equipment." },
    { icon: "📋", title: "Custom Scope", desc: "We tailor our commercial cleaning checklist to fit your specific space, industry, and requirements." },
  ],
  process: [
    { step: "1", title: "Site Assessment", desc: "We visit your space or gather details to understand the scope, size, and requirements." },
    { step: "2", title: "Custom Plan", desc: "We create a cleaning schedule and checklist tailored to your business and preferred hours." },
    { step: "3", title: "Scheduled Cleaning", desc: "Our team arrives as scheduled — early morning, evening, or weekend — and gets to work." },
    { step: "4", title: "Ongoing Service", desc: "Regular visits keep your space consistently clean. We check in regularly to make sure you're satisfied." },
  ],
  faqs: [
    { q: "Can you clean after business hours?", a: "Yes. We specialize in flexible scheduling and can clean early mornings, evenings, and weekends to work around your business operations." },
    { q: "Do you offer contracts for regular commercial cleaning?", a: "Yes. We offer weekly, bi-weekly, and custom cleaning contracts for commercial clients. Regular service clients receive priority scheduling and consistent pricing." },
    { q: "Are your commercial cleaning teams insured?", a: "Absolutely. All Novaryn Cleaning staff are fully bonded and insured for commercial work. We can provide certificates of insurance upon request." },
    { q: "What types of commercial spaces do you clean?", a: "We clean offices, retail stores, medical waiting rooms, gyms, co-working spaces, real estate offices, showrooms, and more. Contact us to discuss your specific space." },
    { q: "Can you handle large office buildings?", a: "We scale to fit your needs. Contact us for larger commercial properties and we'll put together a custom plan and quote." },
  ],
  metaTitle: "Office & Commercial Cleaning Atlanta | Novaryn Cleaning",
  metaDesc: "Professional commercial cleaning for Atlanta businesses. Flexible scheduling, bonded & insured. Get your free quote today.",
};

export default function OfficeCommercialCleaning() {
  return <ServicePage data={data} />;
}
