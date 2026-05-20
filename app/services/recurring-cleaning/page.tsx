import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Recurring Cleaning Service Atlanta | Novaryn Cleaning",
  description:
    "Weekly, bi-weekly & monthly recurring cleaning in Atlanta, GA. Set it and forget it — consistent professional cleaning on your schedule. Save up to 20%.",
};

const data: ServiceData = {
  slug: "recurring-cleaning",
  icon: "🔄",
  title: "Recurring Cleaning",
  tagline: "Set it up once. Enjoy a clean home, always.",
  heroDesc:
    "Never think about cleaning again. Our recurring cleaning plans give you consistent, professional results on a schedule that fits your life — weekly, bi-weekly, or monthly. The more you book, the more you save.",
  color: "#10B36A",
  badge: "Save Up to 20%",
  whatIs:
    "Recurring cleaning is a scheduled, ongoing cleaning service where our team visits your home on a regular basis — weekly, every two weeks, or monthly. Each visit covers the standard cleaning checklist, keeping your home in consistently excellent condition without you having to think about it. Because we're familiar with your home after the first visit, recurring cleans are faster, more efficient, and often more thorough than one-off bookings.",
  whyChoose:
    "Recurring clients get the best of everything: priority scheduling, a dedicated team who knows your home, consistent results, and significant discounts compared to one-time bookings. You'll have the same cleaners every visit — so they know your preferences, your pet's name, and exactly how you like things done. No re-explaining. No surprises.",
  includes: [
    { icon: "🧹", title: "Full Standard Clean", desc: "Every recurring visit covers our complete standard cleaning checklist — all rooms, bathrooms, kitchen, and floors." },
    { icon: "📅", title: "Your Chosen Schedule", desc: "Weekly, bi-weekly, or monthly — you choose the frequency that works for your lifestyle and budget." },
    { icon: "👥", title: "Consistent Team", desc: "The same trusted cleaners visit every time, so they know your home and preferences without you having to repeat yourself." },
    { icon: "💰", title: "Recurring Discounts", desc: "Save up to 20% compared to one-time booking rates. The more frequent your plan, the more you save." },
    { icon: "📲", title: "Easy Rescheduling", desc: "Life happens. We make it easy to reschedule, skip, or adjust your visits with advance notice — no penalties." },
    { icon: "⭐", title: "Priority Booking", desc: "Recurring clients get priority on our schedule, including preferred time slots and holiday availability." },
    { icon: "✅", title: "Quality Guarantee", desc: "Every visit is backed by our 100% satisfaction guarantee. If something isn't right, we'll come back to fix it." },
    { icon: "🏠", title: "Customizable Scope", desc: "Focus on certain rooms or add extras like inside-fridge cleaning or laundry. We tailor every plan to you." },
    { icon: "🔒", title: "Trusted & Insured", desc: "All recurring team members are background-checked, bonded, and insured. Your home and possessions are protected." },
  ],
  process: [
    { step: "1", title: "Pick Your Plan", desc: "Choose weekly, bi-weekly, or monthly — and tell us your preferred day and time." },
    { step: "2", title: "First Clean", desc: "Your first visit may be a deep clean to establish a baseline. Then we maintain it from there." },
    { step: "3", title: "Regular Visits", desc: "Your dedicated team shows up as scheduled — no reminders, no hassle on your end." },
    { step: "4", title: "Easy Management", desc: "Adjust, skip, or update your plan anytime. We're flexible so you don't have to be." },
  ],
  faqs: [
    { q: "How much do I save with a recurring plan?", a: "Recurring clients save 10–20% compared to one-time rates, depending on frequency. Weekly plans offer the highest discount. We'll give you exact pricing when you book." },
    { q: "Can I pause or cancel my recurring plan?", a: "Yes. We don't lock you into contracts. You can pause, adjust, or cancel your plan with reasonable notice. We just ask for at least 48 hours notice to reschedule a visit." },
    { q: "Will I have the same cleaners every visit?", a: "We aim to send the same team every time. In rare cases of illness or scheduling conflicts, a different qualified team member may fill in — but we always brief them on your preferences." },
    { q: "What if I'm not satisfied with a visit?", a: "Just let us know within 24 hours and we'll come back to address any issues at no additional charge. Your satisfaction is guaranteed on every visit." },
    { q: "Can I add extras to my recurring plan?", a: "Yes! You can add services like inside-oven cleaning, fridge cleaning, laundry, or window washing to any visit. Just let us know in advance and we'll adjust the time and pricing accordingly." },
    { q: "Do I need to be home for recurring visits?", a: "No. Most of our recurring clients provide a key or entry code. We complete the clean and leave — you just come home to a spotless space." },
  ],
  metaTitle: "Recurring Cleaning Plans Atlanta | Novaryn Cleaning",
  metaDesc: "Weekly, bi-weekly & monthly recurring cleaning in Atlanta. Save up to 20%, consistent team, no contracts. Book your free quote.",
};

export default function RecurringCleaning() {
  return <ServicePage data={data} />;
}
