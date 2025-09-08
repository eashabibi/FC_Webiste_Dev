import React from "react";
import styles from "./herosection.module.css";
import GlobalStyles from "@/app/page.module.css";

export default function HeroSection() {
  function generateScatteredPositions(count, minGap = 8) {
    const positions = [];
    while (positions.length < count) {
      const candidate = Math.random() * 100;
      if (positions.every((p) => Math.abs(p - candidate) >= minGap)) {
        positions.push(candidate);
      }
    }
    return positions;
  }

  const count = 7;
  const scatteredLefts = generateScatteredPositions(count, 7); // min 7% gap

  const drops = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: scatteredLefts[i],
    duration: 3 + Math.random() * 3, // fall speed
    delay: Math.random() * 0.5, // stagger start
  }));

  return (
    <section className={styles.hero}>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className={styles.drop}
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className={`${styles.square} ${styles[`square${i + 1}`]}`}
            ></div>
          ))}
        </div>
      ))}

      <div className={styles.content}>
        <h1 className={styles.title}>Fest Connect</h1>
        <h2 className={styles.subtitle}>Connect. Celebrate. Create</h2>
        <p className={styles.description}>
          Experience college festivals like never before. One app for every
          festival
        </p>
        <div className={styles.buttons}>
          <button className={GlobalStyles.outlineBtn}>Download the App</button>
          <button className={GlobalStyles.outlineBtn}>Partner with Us</button>
        </div>
      </div>
    </section>
  );
}
