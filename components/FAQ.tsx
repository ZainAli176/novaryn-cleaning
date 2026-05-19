"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "Nope! Many of our clients provide a key or entry code. As long as we can get in, we'll take care of everything and leave your home spotless.",
  },
  {
    q: "What's the difference between standard and deep cleaning?",
    a: "Standard cleaning covers regular maintenance — surfaces, floors, bathrooms, kitchens. Deep cleaning goes further: inside appliances, baseboards, tile grout, behind furniture, and all the hard-to-reach spots.",
  },
  {
    q: "Are your cleaning products safe for kids and pets?",
    a: "Yes! We use eco-friendly, non-toxic products that are safe for children, pets, and the environment. If you have specific preferences or allergies, just let us know when booking.",
  },
  {
    q: "How do I book a recurring cleaning plan?",
    a: "Simply fill out the contact form below or give us a call, select your preferred frequency (weekly, bi-weekly, or monthly), and we'll set up a schedule that works for you — often at a discounted rate.",
  },
  {
    q: "Do you service commercial spaces?",
    a: "Absolutely. We offer office and commercial cleaning for businesses of all sizes in the Atlanta metro area, with flexible after-hours and weekend availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={`${styles.header} ${styles.centered}`}>
        <p className={styles.label}>Questions?</p>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.sub}>
          Everything you need to know before your first booking.
        </p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
          >
            <button
              className={styles.question}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{faq.q}</span>
              <span className={styles.toggle} aria-hidden>
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            <div
              className={styles.answer}
              aria-hidden={openIndex !== i}
            >
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
