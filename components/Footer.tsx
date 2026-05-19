"use client";

import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [{ href: "/privacy-policy", label: "Privacy Policy" }];

const socialLinks = [
  {
    href: "https://x.com/NovarynClean",
    icon: <FaXTwitter size={20} />,
    label: "X (Twitter)",
  },
  {
    href: "https://www.instagram.com/novaryncleaning",
    icon: <FaInstagram size={20} />,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/share/1BByfVd2HH/",
    icon: <FaFacebookF size={20} />,
    label: "Facebook",
  },
  {
    href: "https://www.pinterest.com/novarync/",
    icon: <FaPinterestP size={20} />,
    label: "Pinterest",
  },
];

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

      {/* Google Map */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps?q=227+Mitchell+St+SW+%233b%2C+Atlanta%2C+GA+30303&output=embed"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Novaryn Cleaning Location"
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
          ⭐ View on Google • Reviews
        </a>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialContainer}>
        <p className={styles.socialTitle}>Follow Us</p>
        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
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
