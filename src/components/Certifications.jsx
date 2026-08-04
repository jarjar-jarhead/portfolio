import React, { useState } from "react";
import styles from "./Certifications.module.css";

function Certifications() {
  const [activePdf, setActivePdf] = useState(null);

  // Uniform schema across all certificate entries
  const certs = [
    {
      id: 1,
      title: "AI Fundamentals: Language and Vision in AI",
      issuer: "Cisco Networking Academy | IBM SkillsBuild / DICT-ITU DTC",
      year: "2026",
      file: "/AIFundamentalsIBM_DICT.pdf",
      badgeUrl: "https://www.credly.com/badges/b90e7ba7-23cb-41b8-b08e-65d4a6dc35c1/public_url"
    },
    {
      id: 2,
      title: "Certificate of Completion SAP ABAP Internship",
      issuer: "Accenture",
      year: "2026",
      file: "/SAPcert.pdf",
      badgeUrl: null
    },
    {
      id: 3,
      title: "Junior Pentesting Learning Path",
      issuer: "TryHackMe",
      year: "2025",
      file: "/thmpentest.pdf",
      badgeUrl: null
    },
    {
      id: 4,
      title: "Salesforce: Virtual Internship Program",
      issuer: "Salesforce",
      year: "2025",
      file: "/salesforce.pdf",
      badgeUrl: null
    },
    {
      id: 5,
      title: "Learning Basic ABAP Programming",
      issuer: "SAP",
      year: "2026",
      file: null,
      badgeUrl: "https://badger.learning.sap.com/verify/xesec-cusid-pahen-fosec-momuk"
    },
    {
      id: 6,
      title: "Managing Clean Core for SAP Cloud ERP",
      issuer: "SAP",
      year: "2026",
      file: null,
      badgeUrl: "https://badger.learning.sap.com/verify/xamuk-hytab-tyned-bokal-renes"
    },
    {
      id: 7,
      title: "Data Science Essentials With Python",
      issuer: "Cisco Networking Academy | IBM SkillsBuild / DICT-ITU DTC",
      year: "2026 (in progress)",
      file: null,
      badgeUrl: null
    }
  ];

  return (
    <section id="certifications" className={styles.certsSection}>
      <h2 className={styles.sectionTitle}>Certifications</h2>

      <ul className={styles.certList}>
        {certs.map((cert) => (
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

                {/* External Badge Verification Link */}
                {cert.badgeUrl && (
                  <a
                    href={cert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.verifyLink}
                  >
                    [ Verify Badge ]
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