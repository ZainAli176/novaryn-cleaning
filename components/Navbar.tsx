"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const serviceLinks = [
  { href: "/services/standard-home-cleaning", label: "Standard Home Cleaning" },
  { href: "/services/deep-cleaning", label: "Deep Cleaning" },
  { href: "/services/move-in-move-out-cleaning", label: "Move In / Move Out" },
  {
    href: "/services/office-commercial-cleaning",
    label: "Office & Commercial",
  },
  { href: "/services/post-construction-cleaning", label: "Post-Construction" },
  { href: "/services/recurring-cleaning", label: "Recurring Cleaning" },
];

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a className={styles.logo} href="/">
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
          </svg>
        </div>
        <span className={styles.logoName}>Novaryn Cleaning</span>
      </a>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {/* Services dropdown */}
        <li className={styles.dropdownParent} ref={dropdownRef}>
          <button
            className={`${styles.navLink} ${styles.dropdownTrigger}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            Services
            <span
              className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}
            >
              ▾
            </span>
          </button>
          {dropdownOpen && (
            <div className={styles.dropdown}>
              <a
                href="/services"
                className={styles.dropdownAll}
                onClick={() => {
                  setDropdownOpen(false);
                  setMenuOpen(false);
                }}
              >
                View All Services →
              </a>
              {serviceLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={styles.dropdownLink}
                  onClick={() => {
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </li>

        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}

        <li className={styles.mobileCta}>
          <a
            href="/#contact"
            className={styles.cta}
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </li>
      </ul>

      <a href="/#contact" className={`${styles.cta} ${styles.desktopCta}`}>
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
