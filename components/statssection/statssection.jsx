import React from "react";
import styles from "./statssection.module.css";

export default function StatsSection() {
  const stats = [
    { value: "100+", label: "Total Fests Hosted" },
    { value: "1500+", label: "App Downloads" },
    { value: "200+", label: "Partner Colleges" },
  ];

  return (
    <section className={styles.statsWrapper}>
      <div className={styles.statsBox}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <h3 className={styles.value}>{stat.value}</h3>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
