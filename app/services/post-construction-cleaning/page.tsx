import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Post-Construction Cleaning Atlanta GA | Novaryn Cleaning",
  description:
    "Professional post-construction and renovation cleanup in Atlanta. We remove construction dust, debris, paint residue & more. New build & remodel cleaning experts. Free quote today!",
  keywords: [
    "post construction cleaning atlanta",
    "post construction cleaning atlanta ga",
    "construction cleanup service atlanta",
    "renovation cleaning atlanta",
    "new construction cleaning atlanta",
    "builder clean atlanta",
    "after renovation cleaning atlanta",
  ],
  openGraph: {
    title: "Post-Construction Cleaning Atlanta GA | Novaryn Cleaning",
    description:
      "Expert post-construction and renovation cleaning in Atlanta. Dust, debris, and residue removal for new builds and remodels.",
    url: "https://novaryncleaning.online/services/post-construction-cleaning",
    images: [{ url: "/og/post-construction-cleaning.jpg" }],
    siteName: "Novaryn Cleaning",
    locale: "en_US",
    type: "website",
  },
};

const data: ServiceData = {
  slug: "post-construction-cleaning",
  icon: "🏗️",
  title: "Post-Construction Cleaning",
  tagline: "From construction site to move-in ready — in one clean.",
  metaTitle: "Post-Construction Cleaning Atlanta | Novaryn Cleaning",
  metaDesc:
    "Professional post-construction and renovation cleanup in Atlanta. We remove construction dust, debris, paint residue & more.",
  heroDesc:
    "Renovation dust, drywall residue, paint splatters, and debris don't belong in your beautiful new space. Our post-construction cleaning team specializes in making newly built or renovated properties spotless and ready for occupancy.",
  color: "#D4881A",
  badge: undefined,
  whatIs:
    "Post-construction cleaning (also called construction cleanup or builder's clean) is a specialized service designed to remove the mess left behind after new construction, remodeling, or renovation work.",
  whyChoose:
    "Our post-construction cleaning team is trained to handle the unique challenges of construction cleanup — from removing fine drywall dust that standard vacuums spread around, to safely removing stickers from new windows and fixtures without scratching.",
  includes: [
    {
      icon: "🌫️",
      title: "Construction Dust Removal",
      desc: "Thorough removal of fine drywall, plaster, and sanding dust from all surfaces, using HEPA-filtered vacuums and microfiber tools.",
    },
    {
      icon: "🎨",
      title: "Paint & Adhesive Cleanup",
      desc: "Removing paint splatters, overspray, caulk residue, and adhesive from floors, fixtures, and surfaces.",
    },
    {
      icon: "🪟",
      title: "Window & Glass Cleaning",
      desc: "Removing protective film, stickers, and construction residue from all windows, glass doors, and mirrors.",
    },
    {
      icon: "🚿",
      title: "Fixture Cleaning",
      desc: "Cleaning new bathroom and kitchen fixtures, faucets, and hardware — removing protective coatings and residue.",
    },
    {
      icon: "🧱",
      title: "Hard Floor Care",
      desc: "Deep cleaning of hardwood, tile, vinyl, or concrete floors — removing grout haze, adhesive, and debris.",
    },
    {
      icon: "🗑️",
      title: "Debris & Trash Removal",
      desc: "Clearing construction packaging, leftover materials, and trash from all areas of the property.",
    },
    {
      icon: "🪜",
      title: "Walls & Baseboards",
      desc: "Wiping down walls, baseboards, and trim to remove dust, smudges, and residue from construction work.",
    },
    {
      icon: "💡",
      title: "Fixtures & Vents",
      desc: "Cleaning light fixtures, outlets, switch plates, and HVAC vents that collect heavy construction dust.",
    },
    {
      icon: "🏠",
      title: "Final Presentation Clean",
      desc: "A final pass to ensure the space is not just clean but showcase-ready for photography, occupancy, or client walkthrough.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Site Evaluation",
      desc: "We assess the scope of the construction project and identify surfaces requiring special attention.",
    },
    {
      step: "2",
      title: "Rough Clean",
      desc: "Removing bulk debris, packaging, and large residue.",
    },
    {
      step: "3",
      title: "Detailed Clean",
      desc: "Surface-by-surface cleaning, from ceilings down to floors.",
    },
    {
      step: "4",
      title: "Final Polish",
      desc: "A final walkthrough and touch-up to ensure the space is move-in ready.",
    },
  ],
  faqs: [
    {
      q: "When should I schedule the post-construction clean?",
      a: "Schedule your clean after all construction work is 100% complete and contractors have cleared their tools and materials.",
    },
    {
      q: "How long does post-construction cleaning take?",
      a: "It varies based on the size of the project. A single-room renovation might take 3–4 hours; a full new-build home could take a full day or more.",
    },
    {
      q: "Can you clean after a partial renovation (e.g., just a kitchen remodel)?",
      a: "Absolutely. We can scope a post-construction clean to cover just the renovated area plus any affected adjacent spaces.",
    },
    {
      q: "Do you clean new construction homes before first occupancy?",
      a: "Yes — this is one of our most common requests. New construction builder's cleans are our specialty.",
    },
  ],
};

export default function PostConstructionCleaning() {
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
            name: "Post-Construction Cleaning Atlanta",
            description:
              "Professional post-construction, renovation, and new build cleaning services in Atlanta, GA.",
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
            serviceType: "Post Construction Cleaning",
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
