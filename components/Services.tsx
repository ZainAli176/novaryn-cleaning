//Services.tsx
import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    icon: "🧹",
    title: "Standard Home Cleaning",
    desc: "Regular upkeep of your living spaces — dusting, vacuuming, mopping, and sanitizing every room from top to bottom.",
    tag: "Most Popular",
    href: "/services/standard-home-cleaning",
  },
  {
    icon: "🧼",
    title: "Deep Cleaning",
    desc: "A thorough, detail-oriented clean that reaches every corner — baseboards, behind appliances, tile grout, and more.",
    tag: null,
    href: "/services/deep-cleaning",
  },
  {
    icon: "📦",
    title: "Move In / Move Out",
    desc: "Leave the old place spotless or arrive to a fresh start. Perfect for renters, landlords, and real estate transactions.",
    tag: null,
    href: "/services/move-in-move-out-cleaning",
  },
  {
    icon: "🏢",
    title: "Office & Commercial",
    desc: "Keep your workspace clean, professional, and welcoming for staff and clients with flexible scheduling options.",
    tag: null,
    href: "/services/office-commercial-cleaning",
  },
  {
    icon: "🏗️",
    title: "Post-Construction",
    desc: "Dust, debris, and residue from renovations or new builds — we handle the heavy-duty cleanup so you can enjoy your space.",
    tag: null,
    href: "/services/post-construction-cleaning",
  },
  {
    icon: "🔄",
    title: "Recurring Cleaning",
    desc: "Set up weekly, bi-weekly, or monthly visits and never stress about scheduling. Consistent quality every single time.",
    tag: "Save Up to 20%",
    href: "/services/recurring-cleaning",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={`${styles.header} ${styles.centered}`}>
        <p className={styles.label}>What We Offer</p>
        <h2 className={styles.title}>Cleaning Services Built for Atlanta</h2>
        <p className={styles.sub}>
          From routine tidying to full-scale deep cleans, we have a service for
          every need.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <Link key={s.href} href={s.href} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            {s.tag && <span className={styles.tag}>{s.tag}</span>}
            <span className={styles.cardCta}>Learn More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
