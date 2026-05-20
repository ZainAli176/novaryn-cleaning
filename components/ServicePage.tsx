import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Services.module.css";

export type ServiceListItem = {
  icon: string;
  title: string;
  desc: string;
};

export type ServiceStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

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
  includes: ServiceListItem[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDesc: string;
};

export default function ServicePage({ data }: { data: ServiceData }) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.label} style={{ color: data.color }}>
            {data.badge ? data.badge : data.slug.replace(/-/g, " ")}
          </p>

          <h1 className={styles.heroTitle}>
            {data.title}
            <br />
            <span className={styles.heroAccent} style={{ color: data.color }}>
              {data.tagline}
            </span>
          </h1>

          <p className={styles.heroSub}>{data.heroDesc}</p>
        </section>

        {/* Content */}
        <section className={styles.gridSection}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 22,
            }}
          >
            <div className={styles.card} style={{ padding: 30 }}>
              <h2 className={styles.cardTitle} style={{ marginBottom: 12 }}>
                What It Is
              </h2>
              <p className={styles.cardDesc} style={{ marginBottom: 0 }}>
                {data.whatIs}
              </p>
            </div>

            <div className={styles.card} style={{ padding: 30 }}>
              <h2 className={styles.cardTitle} style={{ marginBottom: 12 }}>
                Why Choose Us
              </h2>
              <p className={styles.cardDesc} style={{ marginBottom: 0 }}>
                {data.whyChoose}
              </p>
            </div>

            <div className={styles.card} style={{ padding: 30 }}>
              <h2 className={styles.cardTitle} style={{ marginBottom: 16 }}>
                What&apos;s Included
              </h2>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}
              >
                {data.includes.map((it) => (
                  <div
                    key={it.title}
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      padding: 14,
                      background: "white",
                    }}
                  >
                    <div style={{ fontSize: 28, marginBottom: 6 }}>
                      {it.icon}
                    </div>
                    <div style={{ fontWeight: 800, marginBottom: 6 }}>
                      {it.title}
                    </div>
                    <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                      {it.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card} style={{ padding: 30 }}>
              <h2 className={styles.cardTitle} style={{ marginBottom: 16 }}>
                Our Process
              </h2>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}
              >
                {data.process.map((p) => (
                  <div
                    key={p.step}
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      padding: 14,
                      background: "white",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        fontWeight: 900,
                        color: "var(--text)",
                        border: `1px solid var(--border)`,
                        borderRadius: 999,
                        padding: "4px 10px",
                      }}
                    >
                      {p.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: 900, marginBottom: 6 }}>
                        {p.title}
                      </div>
                      <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                        {p.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card} style={{ padding: 30 }}>
              <h2 className={styles.cardTitle} style={{ marginBottom: 16 }}>
                Frequently Asked Questions
              </h2>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}
              >
                {data.faqs.map((f) => (
                  <details
                    key={f.q}
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      padding: 14,
                      background: "white",
                    }}
                  >
                    <summary style={{ fontWeight: 900, cursor: "pointer" }}>
                      {f.q}
                    </summary>
                    <div
                      style={{
                        color: "var(--muted)",
                        lineHeight: 1.7,
                        marginTop: 10,
                      }}
                    >
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
