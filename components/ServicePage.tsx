"use client";

import { useState, FormEvent } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./ServicePage.module.css";

export type ServiceData = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  heroDesc: string;
  color: string;
  badge?: string;
  whatIs: string;
  whyChoose: string;
  includes: { icon: string; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDesc: string;
};

const serviceOptions = [
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

function BookingForm({ defaultService }: { defaultService: string }) {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    zip: "",
    email: "",
    service: defaultService,
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
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
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
          We&apos;ll get back to you within 2 hours to confirm your booking.
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
            placeholder="30303"
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
          {serviceOptions.map((s) => (
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
      {error && (
        <p
          style={{
            fontSize: "13px",
            color: "#e53e3e",
            background: "#fff5f5",
            border: "1px solid #fed7d7",
            borderRadius: "8px",
            padding: "10px 14px",
          }}
        >
          {error}
        </p>
      )}
      <button type="submit" className={styles.formSubmit} disabled={loading}>
        {loading ? "Sending..." : "Request My Free Quote →"}
      </button>
    </form>
  );
}

export default function ServicePage({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <a href="/services" className={styles.breadcrumb}>
              ← All Services
            </a>
            {data.badge && <span className={styles.badge}>{data.badge}</span>}
            <div className={styles.heroIcon}>{data.icon}</div>
            <h1 className={styles.heroTitle}>{data.title}</h1>
            <p className={styles.heroTagline}>{data.tagline}</p>
            <p className={styles.heroDesc}>{data.heroDesc}</p>
            <div className={styles.heroBtns}>
              <a href="#book" className={styles.btnPrimary}>
                Book This Service
              </a>
              <a href="#includes" className={styles.btnSecondary}>
                What&apos;s Included
              </a>
            </div>
          </div>
          <div className={styles.heroForm} id="book">
            <div className={styles.formCard}>
              <h3 className={styles.formCardTitle}>Get a Free Quote</h3>
              <p className={styles.formCardSub}>
                We&apos;ll respond within 2 hours.
              </p>
              <BookingForm defaultService={data.title} />
            </div>
          </div>
        </section>

        {/* ── What Is It ── */}
        <section className={styles.whatIs}>
          <div className={styles.whatIsInner}>
            <div className={styles.whatIsText}>
              <p className={styles.label}>Overview</p>
              <h2 className={styles.sectionTitle}>What is {data.title}?</h2>
              <p className={styles.bodyText}>{data.whatIs}</p>
            </div>
            <div className={styles.whyChooseCard}>
              <h3 className={styles.whyTitle}>Why Choose Novaryn?</h3>
              <p className={styles.bodyText}>{data.whyChoose}</p>
              <div className={styles.trustRow}>
                <span className={styles.trustBadge}>✔ Bonded & Insured</span>
                <span className={styles.trustBadge}>✔ Background Checked</span>
                <span className={styles.trustBadge}>✔ Eco-Friendly</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className={styles.includes} id="includes">
          <div className={styles.sectionHeader}>
            <p className={styles.label}>The Details</p>
            <h2 className={styles.sectionTitle}>What&apos;s Included</h2>
          </div>
          <div className={styles.includesGrid}>
            {data.includes.map((item) => (
              <div key={item.title} className={styles.includeCard}>
                <div className={styles.includeIcon}>{item.icon}</div>
                <h3 className={styles.includeTitle}>{item.title}</h3>
                <p className={styles.includeDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section className={styles.process}>
          <div className={styles.sectionHeader}>
            <p className={styles.label}>How It Works</p>
            <h2 className={styles.sectionTitle}>Our Simple Process</h2>
          </div>
          <div className={styles.processSteps}>
            {data.process.map((step, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNum}>{step.step}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
                {i < data.process.length - 1 && (
                  <div className={styles.stepArrow}>→</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.faq}>
          <div className={styles.sectionHeader}>
            <p className={styles.label}>Questions?</p>
            <h2 className={styles.sectionTitle}>FAQs about {data.title}</h2>
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

        {/* ── CTA ── */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Ready for a Spotless Space?</h2>
            <p className={styles.ctaSub}>
              Book your {data.title.toLowerCase()} today and experience the
              Novaryn difference.
            </p>
            <a href="#book" className={styles.ctaBtn}>
              Book Now — It&apos;s Free to Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
