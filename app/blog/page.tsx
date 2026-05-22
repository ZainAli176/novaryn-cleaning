// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "./[slug]/page"; // Importing directly from your data source
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Expert Cleaning Tips & Guides | Novaryn Cleaning Atlanta",
  description:
    "Discover professional house cleaning tips, local pricing guides, moving checklists, and home maintenance advice from the team at Novaryn Cleaning.",
  openGraph: {
    title: "Expert Cleaning Tips & Guides | Novaryn Cleaning Atlanta",
    description:
      "Discover professional house cleaning tips, local pricing guides, and home maintenance advice.",
    url: "https://novaryncleaning.online/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const postsArray = Object.values(blogPosts);

  // Generate a dynamic CollectionPage schema loop for Google crawl indexing
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Novaryn Cleaning Professional Insights Blog",
    description:
      "Professional house cleaning tips, local pricing guides, moving checklists, and home maintenance advice for Atlanta GA.",
    url: "https://novaryncleaning.online/blog",
    hasPart: postsArray.map((post) => ({
      "@type": "Article",
      headline: post.title,
      description: post.description,
      url: `https://novaryncleaning.online/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };

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
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className={styles.cardDesc}>{post.description}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.readMoreLink}
                  >
                    Read Article <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Structured Indexing Data Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Footer />
    </>
  );
}
