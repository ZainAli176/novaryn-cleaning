import type { Metadata } from "next";
import ServicePage, { ServiceData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Post-Construction Cleaning Atlanta | Novaryn Cleaning",
  description:
    "Professional post-construction cleaning in Atlanta, GA. We remove dust, debris, and residue after renovations or new builds. Book your free quote today.",
};

const data: ServiceData = {
  slug: "post-construction-cleaning",
  icon: "🏗️",
  title: "Post-Construction Cleaning",
  tagline: "From construction site to move-in ready — in one clean.",
  heroDesc:
    "Renovation dust, drywall residue, paint splatters, and debris don't belong in your beautiful new space. Our post-construction cleaning team specializes in making newly built or renovated properties spotless and ready for occupancy.",
  color: "#D4881A",
  badge: undefined,
  whatIs:
    "Post-construction cleaning (also called construction cleanup or builder's clean) is a specialized service designed to remove the mess left behind after new construction, remodeling, or renovation work. Construction sites leave behind fine dust that settles on every surface, paint and adhesive residue, packaging materials, sticker residue on windows and fixtures, and debris throughout the space. This type of cleaning requires specialized techniques and products to properly remove construction byproducts without damaging new finishes, fixtures, or flooring.",
  whyChoose:
    "Our post-construction cleaning team is trained to handle the unique challenges of construction cleanup — from removing fine drywall dust that standard vacuums spread around, to safely removing stickers from new windows and fixtures without scratching. We know which products are safe on which surfaces, and we work methodically to ensure the space is truly clean, not just surface-wiped.",
  includes: [
    { icon: "🌫️", title: "Construction Dust Removal", desc: "Thorough removal of fine drywall, plaster, and sanding dust from all surfaces, using HEPA-filtered vacuums and microfiber tools." },
    { icon: "🎨", title: "Paint & Adhesive Cleanup", desc: "Removing paint splatters, overspray, caulk residue, and adhesive from floors, fixtures, and surfaces." },
    { icon: "🪟", title: "Window & Glass Cleaning", desc: "Removing protective film, stickers, and construction residue from all windows, glass doors, and mirrors." },
    { icon: "🚿", title: "Fixture Cleaning", desc: "Cleaning new bathroom and kitchen fixtures, faucets, and hardware — removing protective coatings and residue." },
    { icon: "🧱", title: "Hard Floor Care", desc: "Deep cleaning of hardwood, tile, vinyl, or concrete floors — removing grout haze, adhesive, and debris." },
    { icon: "🗑️", title: "Debris & Trash Removal", desc: "Clearing construction packaging, leftover materials, and trash from all areas of the property." },
    { icon: "🪜", title: "Walls & Baseboards", desc: "Wiping down walls, baseboards, and trim to remove dust, smudges, and residue from construction work." },
    { icon: "💡", title: "Fixtures & Vents", desc: "Cleaning light fixtures, outlets, switch plates, and HVAC vents that collect heavy construction dust." },
    { icon: "🏠", title: "Final Presentation Clean", desc: "A final pass to ensure the space is not just clean but showcase-ready for photography, occupancy, or client walkthrough." },
  ],
  process: [
    { step: "1", title: "Site Evaluation", desc: "We assess the scope of the construction project and identify surfaces, materials, and areas requiring special attention." },
    { step: "2", title: "Rough Clean", desc: "Removing bulk debris, packaging, and large residue — getting the space ready for detailed cleaning." },
    { step: "3", title: "Detailed Clean", desc: "Surface-by-surface cleaning, from ceilings down to floors, removing dust, residue, and stickers." },
    { step: "4", title: "Final Polish", desc: "A final walkthrough and touch-up to ensure every room is move-in or showcase ready." },
  ],
  faqs: [
    { q: "When should I schedule the post-construction clean?", a: "Schedule your clean after all construction work is 100% complete and contractors have cleared their tools and materials. Cleaning during active construction is ineffective — dust and debris will just return." },
    { q: "How long does post-construction cleaning take?", a: "It varies significantly based on the size of the project and amount of residue. A single-room renovation might take 3–4 hours; a full new-build home could take a full day or more. We'll give you an estimate upfront." },
    { q: "Can you clean after a partial renovation (e.g., just a kitchen remodel)?", a: "Absolutely. We can scope a post-construction clean to cover just the renovated area plus any affected adjacent spaces where dust and debris have spread." },
    { q: "Do you clean new construction homes before first occupancy?", a: "Yes — this is one of our most common requests. New construction builder's cleans are our specialty. We prepare the home for a perfect first-move-in experience." },
    { q: "Will your cleaning damage new flooring or fixtures?", a: "No. Our team is trained to use appropriate products and techniques for each surface type. We always test products in an inconspicuous area first when working with new, sensitive finishes." },
  ],
  metaTitle: "Post-Construction Cleaning Atlanta | Novaryn Cleaning",
  metaDesc: "Specialist post-construction and renovation cleanup in Atlanta, GA. Remove dust, debris & residue. Book a free quote today.",
};

export default function PostConstructionCleaning() {
  return <ServicePage data={data} />;
}
