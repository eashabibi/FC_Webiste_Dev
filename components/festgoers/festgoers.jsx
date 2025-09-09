import React from "react";
import styles from "./festgoers.module.css";

export default function FestGoers() {
  const testimonials = [
    {
      name: "Raghav Pawar",
      role: "IIT Roorkee",
      tag: "Fest Connect User",
      feedback:
        "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    },
    {
      name: "Raghav Pawar",
      role: "IIT Roorkee",
      tag: "Fest Connect User",
      feedback:
        "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    },
    {
      name: "Raghav Pawar",
      role: "IIT Roorkee",
      tag: "Fest Connect User",
      feedback:
        "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    },
  ];

  // Duplicate list for infinite scroll effect
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={styles.festgoersWrapper}>
      <h2 className={styles.title}>Loved by Fest-Goers</h2>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {loopedTestimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}></div>
                <div className={styles.userInfo}>
                  <h3 className={styles.name}>{t.name}</h3>
                  <p className={styles.role}>{t.role}</p>
                </div>
                <span className={styles.tag}>{t.tag}</span>
              </div>
              <p className={styles.feedback}>{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
