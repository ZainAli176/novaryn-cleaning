import styles from "./Hero.module.css";

const stats = [
  { num: "500+", label: "Happy Clients" },
  { num: "4.9★", label: "Google Rating" },
  { num: "100%", label: "Satisfaction" },
];

const checklistItems = [
  { icon: "✅", text: "Kitchen deep clean", status: "done" },
  { icon: "✅", text: "Bathrooms sanitized", status: "done" },
  { icon: "✅", text: "Floors mopped & vacuumed", status: "done" },
  { icon: "🔵", text: "Windows & surfaces", status: "progress" },
  { icon: "⚪", text: "Final walkthrough", status: "upcoming" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Serving Atlanta, GA
        </div>

        <h1 className={styles.heading}>
          A Cleaner Home,{" "}
          <span className={styles.headingAccent}>Every Time.</span>
        </h1>

        <p className={styles.sub}>
          Professional, reliable, and eco-friendly cleaning services tailored
          to your home and schedule. Trusted by Atlanta families since day one.
        </p>

        <div className={styles.btns}>
          <a href="#contact" className={styles.btnPrimary}>
            Book a Cleaning
          </a>
          <a href="#services" className={styles.btnSecondary}>
            Our Services
          </a>
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLbl}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.floatCard}>
          <div className={styles.floatRating}>4.9</div>
          <div className={styles.floatStars}>★★★★★</div>
          <div className={styles.floatSub}>Based on 200+ reviews</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardAvatar}>🏠</div>
            <div>
              <p className={styles.cardTitle}>Today&apos;s Schedule</p>
              <p className={styles.cardSub}>3 cleanings completed</p>
            </div>
          </div>
          <div className={styles.checklist}>
            {checklistItems.map((item) => (
              <div key={item.text} className={styles.checkItem}>
                <span className={styles.checkIcon}>{item.icon}</span>
                <span className={styles.checkText}>
                  {item.text}{" "}
                  <span className={styles.checkStatus}>
                    — {item.status === "done" ? "done" : item.status === "progress" ? "in progress" : "upcoming"}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
