import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Move In / Move Out Cleaning Atlanta | Novaryn Cleaning",
  description:
    "Professional move-in and move-out cleaning in Atlanta, GA. Get your full deposit back or move into a spotless home. Book your free quote today.",
};

const data: ServiceData = {
  slug: "move-in-move-out-cleaning",
  icon: "📦",
  title: "Move In / Move Out Cleaning",
  tagline: "Leave it spotless. Arrive to perfection.",
  heroDesc:
    "Moving is stressful enough — let us handle the cleaning. Whether you're vacating a property and need your deposit back, or moving into a new home and want a fresh start, Novaryn Cleaning delivers a thorough, inspection-ready clean.",
  color: "#7B4FD4",
  badge: undefined,
  whatIs:
    "Move-in and move-out cleaning is a specialized, comprehensive clean performed when a property is being vacated or occupied. It's more thorough than a standard clean because the goal is to leave the space in immaculate, inspection-ready condition. For move-outs, this means getting your full security deposit back. For move-ins, it means starting fresh in a truly clean home — not just surface-level wiped down. We service apartments, condos, single-family homes, and rental properties across Atlanta.",
  whyChoose:
    "We've helped hundreds of Atlanta renters and homeowners get their security deposits back in full. Our move-out cleaning checklist is built around landlord and property manager expectations. For move-ins, we ensure the space is sanitized, deodorized, and genuinely clean before your furniture and family arrive.",
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
    {
      step: "1",
      title: "Book in Advance",
      desc: "Schedule your clean before your move-out date or on your move-in day — we work around your timeline.",
    },
    {
      step: "2",
      title: "Empty the Space",
      desc: "The property should be empty of furniture and belongings for a complete clean.",
    },
    {
      step: "3",
      title: "Full Clean",
      desc: "We work top-to-bottom through every room using our move-in/out checklist.",
    },
    {
      step: "4",
      title: "Inspection Ready",
      desc: "The property is left in spotless condition — ready for your landlord walkthrough or your first night.",
    },
  ],
  faqs: [
    {
      q: "Will this help me get my security deposit back?",
      a: "Our move-out clean is specifically designed to meet landlord and property manager inspection standards. Many of our clients have successfully gotten their full deposit back after booking with us.",
    },
    {
      q: "Should the property be empty before you clean?",
      a: "Yes — the property should be empty of furniture for the best results. This lets us clean every surface, corner, and floor space without obstruction.",
    },
    {
      q: "Do you clean appliances that are staying with the unit?",
      a: "Yes. We clean inside and outside of all appliances that are part of the unit, including ovens, refrigerators, microwaves, and dishwashers.",
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 3–5 days before your move-out date to ensure availability, especially around end-of-month when demand is highest.",
    },
    {
      q: "Can you do a same-day move-in clean?",
      a: "In many cases, yes — subject to availability. Contact us directly for urgent or same-day requests and we'll do our best to accommodate.",
    },
  ],
  metaTitle: "Move In / Move Out Cleaning Atlanta | Novaryn Cleaning",
  metaDesc:
    "Get your deposit back or move into a spotless home. Professional move-in/move-out cleaning in Atlanta, GA. Book your free quote.",
};

export default function MoveInMoveOut() {
  return <ServicePage data={data} />;
}
