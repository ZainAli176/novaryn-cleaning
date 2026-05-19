"use client";

import styles from "./Footer.module.css";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [{ href: "/privacy-policy", label: "Privacy Policy" }];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span className={styles.logoName}>Novaryn Cleaning</span>
        <p className={styles.address}>
          227 Mitchell St SW #3b, Atlanta, GA 30303, United States
        </p>
      </div>

      {/* Google Map - Working Version */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps?q=227+Mitchell+St+SW+%233b%2C+Atlanta%2C+GA+30303&output=embed"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Novaryn Cleaning Location in Atlanta"
        ></iframe>
      </div>

      {/* GMB Link */}
      <div className={styles.gmbLink}>
        <a
          href="https://share.google/7CLmqcGpXxqsc9pNX"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.gmbButton}
        >
          ⭐ View Our Google Business Profile & Reviews
        </a>
      </div>

      <nav className={styles.links} aria-label="Footer navigation">
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.link}>
            {l.label}
          </a>
        ))}
      </nav>

      <hr className={styles.divider} />

      <nav className={styles.legalLinks} aria-label="Legal navigation">
        {legalLinks.map((l) => (
          <a key={l.href} href={l.href} className={styles.legalLink}>
            {l.label}
          </a>
        ))}
      </nav>

      <p className={styles.copy}>
        © {year} Novaryn Cleaning. All rights reserved. <br />
        Proudly serving Atlanta, GA and surrounding areas.
      </p>
    </footer>
  );
}
