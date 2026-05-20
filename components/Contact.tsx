"use client";

import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: "📍",
    title: "Address",
    lines: ["227 Mitchell St SW #3b", "Atlanta, GA 30303"],
  },
  { icon: "📞", title: "Phone", lines: ["(404) 555-0192"] },
  { icon: "✉️", title: "Email", lines: ["Novaryncleaning@gmail.com"] },
  {
    icon: "🕐",
    title: "Hours",
    lines: ["Mon–Sat: 7am – 7pm", "Sunday: By appointment"],
  },
];

const services = [
  "Standard Home Cleaning",
  "Deep Cleaning",
  "Move In / Move Out Cleaning",
  "Office & Commercial Cleaning",
  "Post-Construction Cleaning",
  "Recurring Cleaning",
];

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  zip: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
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
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.info}>
          <p className={styles.label}>Get In Touch</p>
          <h2 className={styles.title}>Book Your Cleaning Today</h2>
          <p className={styles.sub}>
            Ready for a cleaner home? Fill out the form and we&apos;ll get back
            to you within 2 hours.
          </p>
          <div className={styles.infoItems}>
            {contactInfo.map((item) => (
              <div key={item.title} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <h4 className={styles.infoTitle}>{item.title}</h4>
                  {item.lines.map((line) => (
                    <p key={line} className={styles.infoLine}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formWrap}>
          <h3 className={styles.formTitle}>Request a Quote</h3>

          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✅</div>
              <h4>Request Sent!</h4>
              <p>
                We&apos;ve received your booking request and will get back to
                you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row}>
                <div className={styles.group}>
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
                <div className={styles.group}>
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
              <div className={styles.row}>
                <div className={styles.group}>
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
                <div className={styles.group}>
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
              <div className={styles.group}>
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
              <div className={styles.group}>
                <label htmlFor="service">Service Type</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.group}>
                <label htmlFor="message">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your space, preferred dates, or any special requests..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              {error && <p className={styles.error}>{error}</p>}
              <button
                type="submit"
                className={styles.submit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Request My Free Quote →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
