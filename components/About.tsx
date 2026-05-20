import styles from "./About.module.css";

const pillars = [
  { num: "5+", label: "Years Experience" },
  { num: "500+", label: "Clients Served" },
  { num: "100%", label: "Bonded & Insured" },
  { num: "4.9★", label: "Avg. Rating" },
];

const features = [
  "Background-checked & trained professionals",
  "Eco-friendly, pet-safe cleaning products",
  "Fully bonded and insured",
  "100% satisfaction guarantee",
  "Flexible scheduling — evenings & weekends",
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.visualSide}>
          <div className={styles.imgBlock}>
            <span className={styles.imgEmoji}>🫧</span>
            <img src="van.png" alt="Novaryn Cleaning Van" />
          </div>
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.label} className={styles.pillar}>
                <div className={styles.pillarNum}>{p.num}</div>
                <div className={styles.pillarLabel}>{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textSide}>
          <p className={styles.label}>About Us</p>
          <h2 className={styles.title}>
            Atlanta&apos;s Trusted
            <br />
            Cleaning Crew
          </h2>
          <p className={styles.body}>
            Novaryn Cleaning was founded on one simple belief: every home
            deserves to feel fresh, safe, and welcoming. Based in Atlanta at 227
            Mitchell St SW, we bring professional-grade cleaning to
            neighborhoods across the city.
          </p>
          <p className={styles.body}>
            Our team is background-checked, trained, and passionate about
            delivering consistently outstanding results — because your home is
            more than just a space, it&apos;s where life happens.
          </p>
          <ul className={styles.features}>
            {features.map((f) => (
              <li key={f} className={styles.featRow}>
                <span className={styles.featCheck}>✔</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
