import React, { useState } from "react";
import styles from "./Certifications.module.css";

function Certifications() {
  const [activePdf, setActivePdf] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Enterprise & Systems", "AI & Data", "Cybersecurity & Cloud"];

  // Uniform schema across all certificate entries
  const certs = [
    {
      id: 1,
      title: "AI Fundamentals: Language and Vision in AI",
      issuer: "Cisco Networking Academy | IBM SkillsBuild / DICT-ITU DTC",
      year: "2026",
      category: "AI & Data",
      file: "/AIFundamentalsIBM_DICT.pdf",
      verifyUrl: "https://www.credly.com/badges/b90e7ba7-23cb-41b8-b08e-65d4a6dc35c1/public_url"
    },
    {
      id: 2,
      title: "Certificate of Completion SAP ABAP Internship",
      issuer: "Accenture",
      year: "2026",
      category: "Enterprise & Systems",
      file: "/SAPcert.pdf",
      verifyUrl: null
    },
    {
      id: 3,
      title: "Learning Basic ABAP Programming",
      issuer: "SAP",
      year: "2026",
      category: "Enterprise & Systems",
      file: null,
      verifyUrl: "https://badger.learning.sap.com/verify/xesec-cusid-pahen-fosec-momuk"
    },
    {
      id: 4,
      title: "Managing Clean Core for SAP Cloud ERP",
      issuer: "SAP",
      year: "2026",
      category: "Enterprise & Systems",
      file: null,
      verifyUrl: "https://badger.learning.sap.com/verify/xamuk-hytab-tyned-bokal-renes"
    },
    {
      id: 5,
      title: "Data Science Essentials With Python",
      issuer: "Cisco Networking Academy | IBM SkillsBuild / DICT-ITU DTC",
      year: "2026 (In Progress)",
      category: "AI & Data",
      file: null,
      verifyUrl: null
    },
    {
      id: 6,
      title: "Google Cybersecurity Specialization (6 Core Modules Completed)",
      issuer: "Coursera / Google",
      year: "2025",
      category: "Cybersecurity & Cloud",
      file: "/google-cybersec.pdf", // Optional local PDF if you merged them or downloaded one
      verifyUrl: "https://coursera.org/verify/YOUR_PRIMARY_COURSERA_VERIFY_LINK"
    },
    {
      id: 7,
      title: "Junior Pentesting Learning Path",
      issuer: "TryHackMe",
      year: "2025",
      category: "Cybersecurity & Cloud",
      file: "/thmpentest.pdf",
      verifyUrl: null
    },
    {
      id: 8,
      title: "Salesforce: Virtual Internship Program",
      issuer: "Salesforce",
      year: "2025",
      category: "Enterprise & Systems",
      file: "/salesforce.pdf",
      verifyUrl: null
    }
  ];

  // Logic to handle filtering when tabs are clicked
  const filteredCerts = selectedCategory === "All"
    ? certs
    : certs.filter((cert) => cert.category === selectedCategory);

  return (
    <section id="certifications" className={styles.certsSection}>
      <h2 className={styles.sectionTitle}>Certifications & Credentials</h2>

      {/* Category Filter Bar */}
      <div className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${selectedCategory === cat ? styles.activeFilter : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            [ {cat} ]
          </button>
        ))}
      </div>

      <ul className={styles.certList}>
        {filteredCerts.map((cert) => (
          <li key={cert.id} className={styles.certItem}>
            <span className={styles.bullet}>⚡</span>
            <div className={styles.certInfo}>
              <strong>{cert.title}</strong> — {cert.issuer} ({cert.year})
              
              <div className={styles.btnGroup}>
                {/* PDF Viewer Button */}
                {cert.file && (
                  <button
                    className={styles.viewBtn}
                    onClick={() => setActivePdf(cert.file)}
                  >
                    [ View PDF ]
                  </button>
                )}

                {/* External Verification Link */}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.verifyLink}
                  >
                    [ Verify Link ]
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pop-up PDF Viewer Modal */}
      {activePdf && (
        <div className={styles.modalOverlay} onClick={() => setActivePdf(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setActivePdf(null)}
            >
              ✕ Close
            </button>
            <iframe
              src={activePdf}
              title="Certificate Viewer"
              className={styles.pdfViewer}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;