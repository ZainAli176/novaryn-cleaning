"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.css";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const legalLinks = [{ href: "/privacy-policy", label: "Privacy Policy" }];

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // If we're already on the homepage, smooth scroll instead of navigating
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    // Otherwise let Next.js navigate to /#section normally
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Link href="/" className={styles.logoName}>
          Novaryn Cleaning
        </Link>
        <p className={styles.address}>
          227 Mitchell St SW #3b, Atlanta, GA 30303
        </p>
      </div>

      <nav className={styles.links} aria-label="Footer navigation">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.link}
            onClick={(e) => handleAnchorClick(e, l.href)}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <hr className={styles.divider} />

      <nav className={styles.legalLinks} aria-label="Legal navigation">
        {legalLinks.map((l) => (
          <Link key={l.href} href={l.href} className={styles.legalLink}>
            {l.label}
          </Link>
        ))}
      </nav>

      <p className={styles.copy}>
        © {year} Novaryn Cleaning. All rights reserved. Proudly serving Atlanta,
        GA.
      </p>
    </footer>
  );
}
