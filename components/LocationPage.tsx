"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./LocationPage.module.css";

export type LocationData = {
  neighborhood: string;
  slug: string;
  primaryKeyword: string;
  h1: string;
  titleTag: string;
  metaDesc: string;
  zipCodes: string[];
  county: string;
  landmarks: string[];
  intro: string;
  whyUs: string;
  faqs: { q: string; a: string }[];
  schema: object;
};

const services = [
  {
    icon: "🧹",
    title: "Standard Home Cleaning",
    href: "/services/standard-home-cleaning",
    desc: "Regular maintenance of all rooms — dusting, vacuuming, mopping, and sanitizing.",
  },
  {
    icon: "🧼",
    title: "Deep Cleaning",
    href: "/services/deep-cleaning",
    desc: "Top-to-bottom intensive clean covering every corner, grout line, and hidden surface.",
  },
  {
    icon: "📦",
    title: "Move In / Move Out",
    href: "/services/move-in-move-out-cleaning",
    desc: "Inspection-ready cleaning to get your deposit back or start fresh.",
  },
  {
    icon: "🏢",
    title: "Office & Commercial",
    href: "/services/office-commercial-cleaning",
    desc: "Professional commercial cleaning on your schedule, without disruption.",
  },
  {
    icon: "🏗️",
    title: "Post-Construction",
    href: "/services/post-construction-cleaning",
    desc: "Specialist cleanup after renovation — dust, debris, and residue removed.",
  },
  {
    icon: "🔄",
    title: "Recurring Cleaning",
    href: "/services/recurring-cleaning",
    desc: "Weekly, bi-weekly, or monthly plans. Same team, consistent results, save up to 20%.",
  },
];

const formServices = [
  "Standard Home Cleaning",
  "Deep Cleaning",
  "Move In / Move Out Cleaning",
  "Office & Commercial Cleaning",
  "Post-Construction Cleaning",
  "Recurring Cleaning",
];

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  zip: string;
  email: string;
  service: string;
  message: string;
}

function BookingForm({ neighborhood }: { neighborhood: string }) {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    zip: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: `[${neighborhood}] ${form.message}`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✅</div>
        <h4>Request Sent!</h4>
        <p>
          We&apos;ll get back to you within 2 hours to confirm your{" "}
          {neighborhood} cleaning.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Jane"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Smith"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(404) 555-0000"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="zip">ZIP Code</label>
          <input
            id="zip"
            name="zip"
            type="text"
            placeholder={`e.g. ${""}`}
            value={form.zip}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jane@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="service">Service Type</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service...</option>
          {formServices.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your space, preferred dates, or special requests..."
          value={form.message}
          onChange={handleChange}
          rows={3}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.formSubmit} disabled={loading}>
        {loading ? "Sending..." : `Book My ${neighborhood} Cleaning →`}
      </button>
    </form>
  );
}

export default function LocationPage({ data }: { data: LocationData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
      />

      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span>{data.neighborhood}</span>
            </div>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Serving {data.neighborhood}, Atlanta GA
            </div>
            <h1 className={styles.heroTitle}>{data.h1}</h1>
            <p className={styles.heroDesc}>{data.intro}</p>
            <div className={styles.zipBadges}>
              {data.zipCodes.map((zip) => (
                <span key={zip} className={styles.zipBadge}>
                  📍 {zip}
                </span>
              ))}
            </div>
            <div className={styles.heroBtns}>
              <a href="#book" className={styles.btnPrimary}>
                Get a Free Quote
              </a>
              <a href="#services" className={styles.btnSecondary}>
                Our Services
              </a>
            </div>
            <div className={styles.trustRow}>
              <span>✔ Bonded & Insured</span>
              <span>✔ Background-Checked</span>
              <span>✔ Eco-Friendly</span>
              <span>✔ Free Quote</span>
            </div>
          </div>
          <div className={styles.heroForm} id="book">
            <div className={styles.formCard}>
              <h3 className={styles.formCardTitle}>
                Book Your {data.neighborhood} Cleaning
              </h3>
              <p className={styles.formCardSub}>
                We respond within 2 hours. Satisfaction guaranteed.
              </p>
              <BookingForm neighborhood={data.neighborhood} />
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className={styles.servicesSection} id="services">
          <div className={styles.sectionHeader}>
            <p className={styles.label}>What We Offer</p>
            <h2 className={styles.sectionTitle}>
              Cleaning Services Available in {data.neighborhood}
            </h2>
            <p className={styles.sectionSub}>
              Every service is available to {data.neighborhood} residents.
              Bonded, insured, and backed by our 100% satisfaction guarantee.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <span className={styles.serviceLink}>Learn More →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Why Us ── */}
        <section className={styles.whyUs}>
          <div className={styles.whyUsInner}>
            <div className={styles.whyUsText}>
              <p className={styles.label}>Why Choose Us</p>
              <h2 className={styles.sectionTitle}>
                Why {data.neighborhood} Residents Choose Novaryn Cleaning
              </h2>
              <p className={styles.bodyText}>{data.whyUs}</p>
              <div className={styles.whyFeatures}>
                <div className={styles.whyFeature}>
                  <span className={styles.whyIcon}>🛡️</span>
                  <div>
                    <strong>Bonded & Insured</strong>
                    <p>
                      Fully covered so your home and belongings are protected
                      every visit.
                    </p>
                  </div>
                </div>
                <div className={styles.whyFeature}>
                  <span className={styles.whyIcon}>✅</span>
                  <div>
                    <strong>Background-Checked Cleaners</strong>
                    <p>
                      Every team member is thoroughly vetted before entering
                      your home.
                    </p>
                  </div>
                </div>
                <div className={styles.whyFeature}>
                  <span className={styles.whyIcon}>🌿</span>
                  <div>
                    <strong>Eco-Friendly, Pet-Safe Products</strong>
                    <p>
                      Non-toxic cleaners safe for your family, children, and
                      pets.
                    </p>
                  </div>
                </div>
                <div className={styles.whyFeature}>
                  <span className={styles.whyIcon}>⭐</span>
                  <div>
                    <strong>100% Satisfaction Guarantee</strong>
                    <p>
                      Not happy? We come back and fix it — no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whyUsCard}>
              <div className={styles.statGrid}>
                <div className={styles.stat}>
                  <div className={styles.statNum}>500+</div>
                  <div className={styles.statLabel}>Happy Clients</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>4.9★</div>
                  <div className={styles.statLabel}>Google Rating</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>100%</div>
                  <div className={styles.statLabel}>Satisfaction</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>5+</div>
                  <div className={styles.statLabel}>Years in Atlanta</div>
                </div>
              </div>
              <div className={styles.areaInfo}>
                <h4>Serving {data.neighborhood}</h4>
                <p>{data.county} County, Atlanta GA</p>
                <div className={styles.zipList}>
                  {data.zipCodes.map((zip) => (
                    <span key={zip} className={styles.zipTag}>
                      {zip}
                    </span>
                  ))}
                </div>
                <p className={styles.landmarks}>
                  Near {data.landmarks.join(" & ")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.faq}>
          <div className={styles.sectionHeader}>
            <p className={styles.label}>Questions?</p>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions — {data.neighborhood} Cleaning
            </h2>
          </div>
          <div className={styles.faqList}>
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
              >
                <button
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqToggle}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                <div className={styles.faqA}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Book Your {data.neighborhood} Home Cleaning Today
            </h2>
            <p className={styles.ctaSub}>
              Get a free quote in minutes. Professional, eco-friendly cleaning
              service in {data.neighborhood}, Atlanta GA. Satisfaction
              guaranteed.
            </p>
            <a href="#book" className={styles.ctaBtn}>
              Get a Free Quote — No Obligation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
