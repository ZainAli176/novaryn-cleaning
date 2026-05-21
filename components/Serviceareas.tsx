import Link from "next/link";
import styles from "./Serviceareas.module.css";

const areas = [
  {
    name: "Midtown Atlanta",
    href: "/cleaning-service-midtown-atlanta",
    zips: ["30308", "30309"],
    desc: "Serving condos, apartments, and homes throughout Midtown Atlanta — from Piedmont Park to Ponce City Market.",
    icon: "🏙️",
  },
  {
    name: "Buckhead",
    href: "/cleaning-service-buckhead",
    zips: ["30305", "30306"],
    desc: "Premium home and maid service for Buckhead residents — luxury condos, single-family homes, and everything in between.",
    icon: "🏡",
  },
  {
    name: "Decatur, GA",
    href: "/cleaning-service-decatur-ga",
    zips: ["30030", "30033"],
    desc: "Reliable, eco-friendly house cleaning for Decatur families in DeKalb County — near Decatur Square and beyond.",
    icon: "🌿",
  },
  {
    name: "Sandy Springs",
    href: "/cleaning-service-sandy-springs",
    zips: ["30328", "30350"],
    desc: "Professional cleaning service for Sandy Springs homes and families — flexible scheduling, consistent results.",
    icon: "🏘️",
  },
];

export default function ServiceAreas() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Serving All Atlanta Neighborhoods</p>
        <h2 className={styles.title}>
          Atlanta&apos;s Trusted Cleaning Service —{" "}
          <span className={styles.accent}>Near You</span>
        </h2>
        <p className={styles.sub}>
          Novaryn Cleaning proudly serves Atlanta and surrounding neighborhoods.
          Professional, bonded, and insured house cleaning wherever you call
          home in the Atlanta metro area.
        </p>
      </div>

      <div className={styles.grid}>
        {areas.map((area) => (
          <Link key={area.href} href={area.href} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.icon}>{area.icon}</span>
              <div className={styles.zips}>
                {area.zips.map((z) => (
                  <span key={z} className={styles.zip}>
                    {z}
                  </span>
                ))}
              </div>
            </div>
            <h3 className={styles.areaName}>{area.name}</h3>
            <p className={styles.areaDesc}>{area.desc}</p>
            <span className={styles.cta}>View Service Area →</span>
          </Link>
        ))}
      </div>

      <div className={styles.bottom}>
        <p className={styles.bottomText}>
          Based in Downtown Atlanta (30303) — also serving{" "}
          <strong>Midtown, Buckhead, Decatur & Sandy Springs</strong>. Not sure
          if we cover your area?{" "}
          <a href="/#contact" className={styles.bottomLink}>
            Contact us — we&apos;ll let you know.
          </a>
        </p>
      </div>
    </section>
  );
}
