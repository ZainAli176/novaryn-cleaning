// app/blog/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "./[slug]/page"; // Importing directly from your data source
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Expert Cleaning Tips & Guides | Novaryn Cleaning Atlanta",
  description:
    "Discover professional house cleaning tips, local pricing guides, moving checklists, and home maintenance advice from the team at Novaryn Cleaning.",
};

export default function BlogIndexPage() {
  const postsArray = Object.values(blogPosts);

  return (
    <>
      <Navbar />
      <main className={styles.indexContainer}>
        {/* Header Header Banner */}
        <section className={styles.indexHeader}>
          <span className={styles.indexLabel}>Our Blog</span>
          <h1 className={styles.indexTitle}>
            Latest Cleaning Insights & Guides
          </h1>
          <p className={styles.indexSubtitle}>
            Professional tips, local pricing breakdowns, and strategies to keep
            your Atlanta home pristine without the stress.
          </p>
        </section>

        {/* Main Grid Feed */}
        <section className={styles.gridContainer}>
          <div className={styles.blogGrid}>
            {postsArray.map((post) => (
              <article key={post.slug} className={styles.indexCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span>{post.date}</span>
                    <span className={styles.metaDot}>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className={styles.cardTitle}>
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>

                  <p className={styles.cardDesc}>{post.description}</p>

                  <a
                    href={`/blog/${post.slug}`}
                    className={styles.readMoreLink}
                  >
                    Read Article <span className={styles.arrow}>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
