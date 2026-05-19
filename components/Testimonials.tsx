import styles from "./Testimonials.module.css";

const testimonials = [
  {
    stars: 5,
    text: "Novaryn transformed my apartment before my move-out inspection. I got my full deposit back — worth every penny. Will absolutely book again!",
    initials: "JM",
    name: "Jessica M.",
    location: "Midtown, Atlanta",
  },
  {
    stars: 5,
    text: "We set up a bi-weekly plan and the team is always on time, thorough, and professional. Our house has never felt this consistently clean.",
    initials: "DL",
    name: "David & Lisa T.",
    location: "Buckhead, Atlanta",
  },
  {
    stars: 5,
    text: "Post-construction cleanup is no joke, but Novaryn handled it like pros. The dust and debris were completely gone. Highly recommend for renovations.",
    initials: "RK",
    name: "Rashida K.",
    location: "East Atlanta",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={`${styles.header} ${styles.centered}`}>
        <p className={styles.label}>Happy Clients</p>
        <h2 className={styles.title}>What Atlanta Is Saying</h2>
        <p className={styles.sub}>
          Don&apos;t just take our word for it — hear from the neighbors who
          trust us with their homes.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.card}>
            <div className={styles.stars}>{"★".repeat(t.stars)}</div>
            <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.location}>{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
