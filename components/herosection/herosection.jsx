import React from "react";
import styles from "./herosection.module.css";
import GlobalStyles from "@/app/page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
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
