import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Our Cleaning Services | Novaryn Cleaning Atlanta",
  description:
    "Explore all of Novaryn Cleaning's professional services in Atlanta, GA — standard, deep, move-in/out, commercial, post-construction & recurring cleaning.",
};

const services = [
  {
    icon: "🧹",
    title: "Standard Home Cleaning",
    desc: "Regular maintenance cleaning covering all the essentials — dusting, vacuuming, mopping, bathrooms, and kitchens.",
    href: "/services/standard-home-cleaning",
    badge: "Most Popular",
    badgeColor: "#1A6FD4",
  },
  {
    icon: "🧼",
    title: "Deep Cleaning",
    desc: "A thorough top-to-bottom clean tackling every corner, grout line, appliance interior, and hidden surface.",
    href: "/services/deep-cleaning",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "📦",
    title: "Move In / Move Out Cleaning",
    desc: "Inspection-ready cleaning for renters, landlords, and homeowners. Get your deposit back — or arrive to perfection.",
    href: "/services/move-in-move-out-cleaning",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "🏢",
    title: "Office & Commercial Cleaning",
    desc: "Professional cleaning for offices, retail spaces, and commercial properties — on your schedule, without disruption.",
    href: "/services/office-commercial-cleaning",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "🏗️",
    title: "Post-Construction Cleaning",
    desc: "Specialist cleanup after renovation or new construction — removing dust, debris, residue, and making it move-in ready.",
    href: "/services/post-construction-cleaning",
    badge: null,
    badgeColor: null,
  },
  {
    icon: "🔄",
    title: "Recurring Cleaning",
    desc: "Weekly, bi-weekly, or monthly plans. Same trusted team, consistent results, and up to 20% off one-time rates.",
    href: "/services/recurring-cleaning",
    badge: "Save Up to 20%",
    badgeColor: "#10B36A",
  },
];

export default function ServicesIndex() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.label}>What We Offer</p>
          <h1 className={styles.heroTitle}>
            Professional Cleaning Services
            <br />
            <span className={styles.heroAccent}>Built for Atlanta</span>
          </h1>
          <p className={styles.heroSub}>
            From routine home maintenance to post-renovation deep cleans,
            Novaryn Cleaning has a service for every need. All backed by our
            100% satisfaction guarantee.
          </p>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>✔ Bonded & Insured</span>
            <span className={styles.heroBadge}>✔ Eco-Friendly Products</span>
            <span className={styles.heroBadge}>✔ Background-Checked Staff</span>
            <span className={styles.heroBadge}>✔ Free Quotes</span>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.gridSection}>
          <div className={styles.grid}>
            {services.map((s) => (
              <a key={s.href} href={s.href} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>{s.icon}</div>
                  {s.badge && (
                    <span
                      className={styles.cardBadge}
                      style={{ background: s.badgeColor ?? "#1A6FD4" }}
                    >
                      {s.badge}
                    </span>
                  )}
                </div>
                <h2 className={styles.cardTitle}>{s.title}</h2>
                <p className={styles.cardDesc}>{s.desc}</p>
                <span className={styles.cardLink}>Learn More →</span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Not Sure Which Service You Need?</h2>
            <p className={styles.ctaSub}>
              Tell us about your space and we&apos;ll recommend the right service
              and give you a free quote — no obligation.
            </p>
            <a href="/#contact" className={styles.ctaBtn}>
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
