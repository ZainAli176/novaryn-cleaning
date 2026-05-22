"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.css";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const areaLinks = [
  { href: "/cleaning-service-midtown-atlanta", label: "Midtown Atlanta" },
  { href: "/cleaning-service-buckhead", label: "Buckhead" },
  { href: "/cleaning-service-decatur-ga", label: "Decatur, GA" },
  { href: "/cleaning-service-sandy-springs", label: "Sandy Springs" },
];

const legalLinks = [{ href: "/privacy-policy", label: "Privacy Policy" }];

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Col 1 — Brand + Contact */}
        <div className={styles.col}>
          <Link href="/" className={styles.logoName}>
            Novaryn Cleaning
          </Link>
          <p className={styles.tagline}>
            Professional home & office cleaning in Atlanta, GA. Bonded, insured
            & eco-friendly.
          </p>
          <div className={styles.contactList}>
            <p>
              📍 227 Mitchell St SW #3b
              <br />
              Atlanta, GA 30303
            </p>

            <a href="mailto:Novaryncleaning@gmail.com">
              ✉️ Novaryncleaning@gmail.com
            </a>
            <p>
              🕐 Mon–Sat: 7am – 7pm
              <br />
              Sun: By appointment
            </p>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.colNav}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={styles.colNavLink}
                onClick={(e) => handleAnchorClick(e, l.href)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 — Service Areas */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Service Areas</h4>
          <nav className={styles.colNav}>
            {areaLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.colNavLink}>
                📍 {l.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://share.google/DF8uACkvjGKewaJJ2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gmb}
          >
            <span>⭐</span>
            <div>
              <strong>Find us on Google</strong>
              <p>Leave us a review!</p>
            </div>
          </a>
        </div>

        {/* Col 4 — Map */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Find Us</h4>
          <div className={styles.mapWrap}>
            <iframe
              title="Novaryn Cleaning Location"
              src="https://maps.google.com/maps?q=227+Mitchell+St+SW+%233b,Atlanta,GA+30303&output=embed"
              width="100%"
              height="180"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottom}>
        <nav className={styles.legalLinks}>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.legalLink}>
              {l.label}
            </Link>
          ))}
        </nav>
        <p className={styles.copy}>
          © {year} Novaryn Cleaning. All rights reserved. Proudly serving
          Atlanta, GA.
        </p>
      </div>
    </footer>
  );
}
