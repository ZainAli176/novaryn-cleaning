import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Deep Cleaning Service | Novaryn Cleaning Atlanta",
  description:
    "Professional deep cleaning in Atlanta, GA. We tackle every corner — baseboards, grout, inside appliances, behind furniture & more. Book your free quote.",
};

const data: ServiceData = {
  slug: "deep-cleaning",
  icon: "🧼",
  title: "Deep Cleaning",
  tagline: "Every corner, every crevice — nothing gets missed.",
  heroDesc:
    "A deep clean goes far beyond the surface. Our Atlanta deep cleaning service tackles the built-up grime, hidden dust, and neglected areas that a standard clean can't reach. Perfect for first-time customers, seasonal resets, or homes that need serious attention.",
  color: "#0D9B8A",
  badge: undefined,
  whatIs:
    "Deep cleaning is an intensive, top-to-bottom clean of your entire home. Unlike standard cleaning, it covers areas that are normally skipped — inside ovens and refrigerators, behind appliances, grout lines, light fixtures, window tracks, inside cabinets, and more. It typically takes 2–3x longer than a standard clean and leaves your home feeling brand new. Most clients book a deep clean as their first service with us, then switch to regular maintenance cleaning.",
  whyChoose:
    "Our deep cleaning team brings professional-grade tools, commercial-strength (but eco-safe) products, and meticulous attention to detail. We work methodically through every room with a comprehensive deep-clean checklist so nothing is overlooked. Every deep clean is backed by our 100% satisfaction guarantee — if we missed something, we come back.",
  includes: [
    { icon: "🔧", title: "Inside Appliances", desc: "Deep cleaning inside the oven, refrigerator, microwave, and dishwasher — removing built-up grease and residue." },
    { icon: "🪣", title: "Grout & Tile Scrubbing", desc: "Hand-scrubbing bathroom and kitchen tile grout to remove mold, mildew, and soap scum buildup." },
    { icon: "🪑", title: "Behind & Under Furniture", desc: "Moving light furniture to vacuum and mop underneath — catching dust bunnies and allergens that hide out of sight." },
    { icon: "💡", title: "Light Fixtures & Vents", desc: "Wiping down ceiling fans, light fixtures, and air vents to remove accumulated dust." },
    { icon: "🪟", title: "Window Tracks & Sills", desc: "Cleaning window frames, tracks, and sills that collect dirt, insects, and debris over time." },
    { icon: "🗄️", title: "Inside Cabinets & Drawers", desc: "Wiping down the interior of kitchen and bathroom cabinets and drawers on request." },
    { icon: "🚪", title: "Doors & Door Frames", desc: "Cleaning door handles, frames, and edges — high-touch areas often overlooked in routine cleaning." },
    { icon: "🪜", title: "Baseboards & Trim", desc: "Hand-wiping all baseboards, crown molding, and trim throughout the home." },
    { icon: "🛁", title: "Full Bathroom Deep Clean", desc: "Scrubbing showers, tubs, and toilets thoroughly including drains, faucets, and caulking lines." },
  ],
  process: [
    { step: "1", title: "Assessment", desc: "We note the size and condition of your home to give an accurate time and price estimate." },
    { step: "2", title: "Top-Down Approach", desc: "We start at the ceiling and work down — so any dislodged dust gets cleaned up as we go." },
    { step: "3", title: "Room by Room", desc: "Each room gets completed in full before moving to the next, using our deep-clean checklist." },
    { step: "4", title: "Final Walkthrough", desc: "We go room by room with you to confirm everything meets your expectations before we leave." },
  ],
  faqs: [
    { q: "How long does a deep clean take?", a: "Depending on home size and condition, deep cleans typically take 4–8 hours. We'll provide a more specific estimate when you book." },
    { q: "How often should I get a deep clean?", a: "Most clients do a deep clean once or twice a year, often in spring and fall. If you're new to professional cleaning, we recommend starting with a deep clean before switching to regular maintenance visits." },
    { q: "Is deep cleaning more expensive than standard cleaning?", a: "Yes, because it's significantly more thorough and time-intensive. However, many clients find it worth every penny — especially for the first clean. Ask us about bundling a deep clean with a recurring plan for savings." },
    { q: "Do I need to do anything to prepare?", a: "Ideally, clear countertops and pick up larger items off the floor so we can clean those surfaces fully. We'll handle the rest." },
    { q: "Is your deep cleaning safe for kids and pets?", a: "Yes. We use eco-friendly, non-toxic products for all of our services, including deep cleaning. Your family is safe." },
  ],
  metaTitle: "Deep Cleaning Atlanta | Novaryn Cleaning",
  metaDesc: "Professional deep cleaning service in Atlanta, GA. We clean every corner, crevice, and hidden surface. Book your free quote today.",
};

export default function DeepCleaning() {
  return <ServicePage data={data} />;
}
