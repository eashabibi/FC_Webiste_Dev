"use client"; // ✅ needed in Next.js app directory

import { useState } from "react";
import styles from "./discoverfests.module.css";

export default function DiscoverFests() {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <section className={styles.discover}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Discover Fests Across India</h2>

        {/* ✅ EKD Logo */}
        <img src="/ekd_logo.png" alt="EKD Logo" className={styles.logo} />

        <p className={styles.subheading}>
          Explore the most exciting college festivals happening near you or
          across the country — all in one place.
        </p>

        {/* ✅ Toggle Group with sliding background */}
        <div
          className={`${styles.toggleGroup} ${
            activeTab === "students" ? styles.students : styles.colleges
          }`}
        >
          <button
            className={`${styles.toggleBtn} ${
              activeTab === "students" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("students")}
          >
            For Students
          </button>
          <button
            className={`${styles.toggleBtn} ${
              activeTab === "colleges" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("colleges")}
          >
            For Colleges
          </button>
        </div>
      </div>

      {/* Right Side: Phone + Emojis */}
      <div className={styles.phoneWrapper}>
        <img
          src="/mobile_mockup.png"
          alt="Mobile Mockup"
          className={styles.phone}
        />
        <img src="/emoji.png" alt="emoji" className={styles.emoji} />
        <img src="/mirror ball.png" alt="mirror ball" className={styles.mirror} />
        <img src="/fire.png" alt="fire" className={styles.fire} />
      </div>
    </section>
  );
}
