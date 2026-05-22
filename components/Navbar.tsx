"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
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

const areaLinks = [
  { href: "/cleaning-service-midtown-atlanta", label: "Midtown Atlanta" },
  { href: "/cleaning-service-buckhead", label: "Buckhead" },
  { href: "/cleaning-service-decatur-ga", label: "Decatur, GA" },
  { href: "/cleaning-service-sandy-springs", label: "Sandy Springs" },
];

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const areasRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      )
        setServicesOpen(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node))
        setAreasOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const closeAll = () => {
    setServicesOpen(false);
    setAreasOpen(false);
    setMenuOpen(false);
  };

  const handleViewAllServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeAll();
    if (pathname === "/") {
      // Already on homepage — just scroll
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage then scroll
      router.push("/#services");
    }
  };

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
        <li className={styles.dropdownParent} ref={servicesRef}>
          <button
            className={`${styles.navLink} ${styles.dropdownTrigger}`}
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setAreasOpen(false);
            }}
            aria-expanded={servicesOpen}
          >
            Services
            <span
              className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ""}`}
            >
              ▾
            </span>
          </button>
          {servicesOpen && (
            <div className={styles.dropdown}>
              <a
                href="/services"
                className={styles.dropdownAll}
                onClick={handleViewAllServices}
              >
                View All Services →
              </a>
              {serviceLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={styles.dropdownLink}
                  onClick={closeAll}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </li>

        {/* Areas dropdown */}
        <li className={styles.dropdownParent} ref={areasRef}>
          <button
            className={`${styles.navLink} ${styles.dropdownTrigger}`}
            onClick={() => {
              setAreasOpen(!areasOpen);
              setServicesOpen(false);
            }}
            aria-expanded={areasOpen}
          >
            Areas
            <span
              className={`${styles.chevron} ${areasOpen ? styles.chevronOpen : ""}`}
            >
              ▾
            </span>
          </button>
          {areasOpen && (
            <div className={styles.dropdown}>
              {areaLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={styles.dropdownLink}
                  onClick={closeAll}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </li>

        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.navLink} onClick={closeAll}>
              {link.label}
            </a>
          </li>
        ))}

        <li className={styles.mobileCta}>
          <a href="/#contact" className={styles.cta} onClick={closeAll}>
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
