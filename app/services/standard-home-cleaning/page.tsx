import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Standard Home Cleaning | Novaryn Cleaning Atlanta",
  description:
    "Reliable, recurring standard home cleaning in Atlanta, GA. Dusting, vacuuming, mopping, bathrooms, kitchens & more. Book your free quote today.",
};

const data: ServiceData = {
  slug: "standard-home-cleaning",
  icon: "🧹",
  title: "Standard Home Cleaning",
  tagline: "Fresh, consistent, and done right — every single time.",
  heroDesc:
    "Our standard home cleaning is the perfect solution for busy Atlanta households who want a clean, comfortable space without the hassle. We handle all the essentials so you can focus on what matters most.",
  color: "#1A6FD4",
  badge: "Most Popular",
  whatIs:
    "Standard home cleaning is a routine maintenance clean covering the key areas of your home — living spaces, bedrooms, bathrooms, kitchen, and floors. It's designed to keep your home consistently clean and fresh on a regular schedule, whether weekly, bi-weekly, or monthly. Our trained professionals follow a detailed checklist to ensure nothing is missed, delivering the same high standard every visit.",
  whyChoose:
    "Novaryn Cleaning brings professional-grade results to every standard clean. Our team is background-checked, fully insured, and trained to work efficiently without cutting corners. We use eco-friendly, non-toxic products that are safe for your family and pets — and we show up on time, every time.",
  includes: [
    { icon: "🛋️", title: "Living & Common Areas", desc: "Dusting surfaces, ceiling fans, baseboards; vacuuming carpets & rugs; mopping hard floors; tidying visible clutter." },
    { icon: "🛏️", title: "Bedrooms", desc: "Dusting furniture and surfaces, making beds, vacuuming or mopping floors, emptying trash bins." },
    { icon: "🚿", title: "Bathrooms", desc: "Scrubbing toilets, sinks, and showers; cleaning mirrors; wiping counters; mopping floors; replacing trash liners." },
    { icon: "🍳", title: "Kitchen", desc: "Wiping countertops and stovetop, cleaning exterior of appliances, cleaning sink, mopping floor." },
    { icon: "🪟", title: "Windows & Mirrors", desc: "Cleaning interior glass surfaces, window sills, and mirrors throughout the home for a streak-free shine." },
    { icon: "🗑️", title: "Trash & Recycling", desc: "Emptying all interior trash cans and replacing liners throughout the home." },
  ],
  process: [
    { step: "1", title: "Book Online", desc: "Fill out our quick quote form and we'll confirm your appointment within 2 hours." },
    { step: "2", title: "We Arrive", desc: "Our team shows up on time with all supplies and equipment needed." },
    { step: "3", title: "We Clean", desc: "We follow our detailed checklist, room by room, top to bottom." },
    { step: "4", title: "You Inspect", desc: "Walk through your home — if anything isn't right, we'll fix it immediately." },
  ],
  faqs: [
    { q: "How long does a standard cleaning take?", a: "Most standard home cleanings take between 1.5 to 3 hours depending on the size of your home and its current condition. We'll give you an estimate when you book." },
    { q: "Do I need to be home during the cleaning?", a: "Not at all. Many of our regular clients provide a key or entry code. We're fully insured and background-checked, so you can trust us to take care of your home." },
    { q: "What's the difference between standard and deep cleaning?", a: "Standard cleaning covers routine maintenance of key areas. Deep cleaning goes further — inside appliances, grout scrubbing, behind furniture, and all the spots we don't hit in a regular visit." },
    { q: "Can I customize what gets cleaned?", a: "Absolutely. Just let us know when you book if you'd like to skip certain rooms or focus extra attention on specific areas." },
    { q: "Do you bring your own supplies?", a: "Yes! We bring everything we need including eco-friendly, pet-safe cleaning products. You don't need to supply anything." },
  ],
  metaTitle: "Standard Home Cleaning Atlanta | Novaryn Cleaning",
  metaDesc: "Reliable standard home cleaning in Atlanta, GA. Eco-friendly, bonded & insured. Book your free quote today.",
};

export default function StandardHomeCleaning() {
  return <ServicePage data={data} />;
}
