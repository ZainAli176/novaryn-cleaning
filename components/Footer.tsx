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

        {/* Dynamic Inline SVGs for High Performance Social Icons */}
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/profile.php?id=61589728667357"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/novaryncleaning/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://x.com/NovarynClean"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/novaryn-cleaning-651b8140b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://pin.it/20Zrn2HtO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C10.024 23.869 10.992 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <p className={styles.copy}>
          © {year} Novaryn Cleaning. All rights reserved. Proudly serving
          Atlanta, GA.
        </p>
      </div>
    </footer>
  );
}
