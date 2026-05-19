"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a
        href="#home"
        className={styles.logo}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className={styles.logoIcon}>
          <div className={styles.logoIcon}>
            <img
              src="favicon.ico" // Better to use .png instead of favicon.ico
              alt="Novaryn Cleaning"
              width={48}
              height={48}
            />
          </div>
        </div>
        <span className={styles.logoName}>Novaryn Cleaning</span>
      </a>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className={styles.mobileCta}>
          <a
            href="#contact"
            className={styles.cta}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            Book Now
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        className={`${styles.cta} ${styles.desktopCta}`}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#contact");
        }}
      >
        Book Now
      </a>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.bar1open : ""}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.bar2open : ""}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.bar3open : ""}`} />
      </button>
    </nav>
  );
}
