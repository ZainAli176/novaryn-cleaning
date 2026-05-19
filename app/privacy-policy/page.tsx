import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Novaryn Cleaning",
  description:
    "Learn how Novaryn Cleaning collects, uses, and protects your personal information. Your privacy matters to us.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information You Provide Directly",
        body: "When you request a quote, book a cleaning, or contact us through our website or Google Business Profile, we collect the following information: your first and last name, phone number, email address, ZIP code or service address, the type of cleaning service requested, and any additional details you share in your message.",
      },
      {
        subtitle: "Information Collected Automatically",
        body: "When you visit our website, we may automatically collect certain technical information, including your IP address, browser type and version, device type, pages visited, time and date of your visit, and referring website. This data is collected via cookies and similar technologies to help us understand how visitors use our site.",
      },
      {
        subtitle: "Information from Third-Party Platforms",
        body: "If you contact us through Google Business Profile, Google Maps, or other third-party platforms, we may receive information you submit through those platforms, subject to their respective privacy policies.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: null,
        body: "We use the information we collect for the following purposes:",
      },
      {
        subtitle: "Service Delivery",
        body: "To respond to your quote requests, schedule cleaning appointments, send booking confirmations and reminders, and communicate with you about your service.",
      },
      {
        subtitle: "Business Operations",
        body: "To process and manage your bookings, maintain our customer records, improve the quality of our services, and train our cleaning staff.",
      },
      {
        subtitle: "Marketing & Communications",
        body: "To send you promotional offers, service updates, or newsletters — but only if you have opted in to receive such communications. You may unsubscribe at any time.",
      },
      {
        subtitle: "Lead Management",
        body: "We use lead management tools and CRM software to organize and follow up on quote requests. Your submitted information may be stored in these systems to ensure timely responses.",
      },
      {
        subtitle: "Legal Compliance",
        body: "To comply with applicable laws, respond to legal requests, and protect our rights and the rights of others.",
      },
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing Your Information",
    content: [
      {
        subtitle: null,
        body: "Novaryn Cleaning does not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information only in the following limited circumstances:",
      },
      {
        subtitle: "Service Providers",
        body: "We may share your information with trusted third-party vendors who assist us in operating our website, managing leads, sending emails, or processing bookings. These providers are contractually obligated to keep your information confidential and may only use it to perform services on our behalf.",
      },
      {
        subtitle: "Legal Requirements",
        body: "We may disclose your information if required to do so by law or in response to valid requests from public authorities (e.g., a court or government agency).",
      },
      {
        subtitle: "Business Transfers",
        body: "In the event of a merger, acquisition, or sale of all or part of our business assets, your information may be transferred as part of that transaction. We will notify you via email or a prominent notice on our website of any such change.",
      },
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    content: [
      {
        subtitle: null,
        body: "Our website uses cookies and similar tracking technologies to enhance your browsing experience and gather analytics. Cookies are small data files stored on your device.",
      },
      {
        subtitle: "Essential Cookies",
        body: "Required for the website to function properly. These cannot be disabled.",
      },
      {
        subtitle: "Analytics Cookies",
        body: "We use tools such as Google Analytics to understand how visitors interact with our site. This data is aggregated and anonymized. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.",
      },
      {
        subtitle: "Managing Cookies",
        body: "You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.",
      },
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: [
      {
        subtitle: null,
        body: "We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. These measures include secure data transmission (SSL/HTTPS), restricted access to personal data, and regular security reviews.",
      },
      {
        subtitle: null,
        body: "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: [
      {
        subtitle: null,
        body: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, provide ongoing services, comply with legal obligations, resolve disputes, and enforce our agreements.",
      },
      {
        subtitle: null,
        body: "If you would like us to delete your information, please contact us at the details below and we will honor your request unless we are required to retain it for legal reasons.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: [
      {
        subtitle: null,
        body: "Depending on your location, you may have the following rights regarding your personal information:",
      },
      {
        subtitle: "Access & Portability",
        body: "You have the right to request a copy of the personal information we hold about you.",
      },
      {
        subtitle: "Correction",
        body: "You have the right to request that we correct any inaccurate or incomplete information.",
      },
      {
        subtitle: "Deletion",
        body: 'You have the right to request that we delete your personal information, subject to certain legal exceptions (sometimes called the "right to be forgotten").',
      },
      {
        subtitle: "Opt-Out of Marketing",
        body: "You may opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in any email or by contacting us directly.",
      },
      {
        subtitle: "California Residents (CCPA)",
        body: "If you are a California resident, you have additional rights under the California Consumer Privacy Act, including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "8. Third-Party Links",
    content: [
      {
        subtitle: null,
        body: "Our website may contain links to third-party websites, including our Google Business Profile and social media pages. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      },
    ],
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: [
      {
        subtitle: null,
        body: "Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete it.",
      },
    ],
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: [
      {
        subtitle: null,
        body: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after any changes constitutes your acceptance of the updated policy.',
      },
    ],
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: [
      {
        subtitle: null,
        body: "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.label}>Legal</p>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroSub}>
              Your privacy matters to us. This policy explains how Novaryn
              Cleaning collects, uses, and protects your personal information.
            </p>
            <p className={styles.lastUpdated}>Last Updated: June 1, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className={styles.contentWrap}>
          <div className={styles.layout}>
            {/* Table of Contents */}
            <aside className={styles.toc}>
              <div className={styles.tocCard}>
                <p className={styles.tocTitle}>Contents</p>
                <nav>
                  <ol className={styles.tocList}>
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className={styles.tocLink}>
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <article className={styles.article}>
              <div className={styles.intro}>
                <p>
                  Novaryn Cleaning (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) is committed to protecting your privacy. This
                  Privacy Policy describes how we collect, use, disclose, and
                  safeguard your information when you visit our website or use
                  our cleaning services, including when you interact with us
                  through Google Business Profile or other platforms in
                  connection with our lead generation and customer management
                  activities.
                </p>
                <p>
                  Please read this policy carefully. By using our website or
                  services, you agree to the practices described in this policy.
                </p>
              </div>

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={styles.section}
                >
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  {section.content.map((block, i) => (
                    <div key={i} className={styles.block}>
                      {block.subtitle && (
                        <h3 className={styles.subtitle}>{block.subtitle}</h3>
                      )}
                      <p className={styles.body}>{block.body}</p>
                    </div>
                  ))}

                  {/* Contact details for last section */}
                  {section.id === "contact" && (
                    <div className={styles.contactCard}>
                      <div className={styles.contactRow}>
                        <span className={styles.contactIcon}>🏢</span>
                        <div>
                          <strong>Novaryn Cleaning</strong>
                          <p>227 Mitchell St SW #3b, Atlanta, GA 30303</p>
                        </div>
                      </div>
                      <div className={styles.contactRow}>
                        <span className={styles.contactIcon}>✉️</span>
                        <div>
                          <strong>Email</strong>
                          <p>Novaryncleaning@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
