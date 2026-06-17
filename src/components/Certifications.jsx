import React, { useState } from "react";
import styles from "./Certifications.module.css";

function Certifications() {
  const [activePdf, setActivePdf] = useState(null);

  // 1. Put your real data in this array
  const certs = [
    {
      id: 1,
      title: "Certificate of Completion SAP ABAP Internship",
      issuer: "Accenture",
      year: "2026",
      file: "/SAPcert.pdf", // Save this file inside your public folder
    },
    {
      id: 2,
      title: "Junior Pentesting Learning Path",
      issuer: "TryHackMe",
      year: "2025",
      file: "/thmpentest.pdf",
    },
    {
      id: 3,
      title: "Salesforce: Virtual Internship Program",
      issuer: "Salesforce",
      year: "2025",
      file: "/salesforce.pdf",
    },
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
              <button
                className={styles.viewBtn}
                onClick={() => setActivePdf(cert.file)}
              >
                [ View PDF ]
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* 2. The Pop-up Modal */}
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
