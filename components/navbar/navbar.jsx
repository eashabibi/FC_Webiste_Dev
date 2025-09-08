import React from "react";
import EKDLogo from "@/public/ekd_logo.png";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <div className={styles.navItem}>Who We Are</div>
          <div className={styles.hoverContent}>
            <div className={styles.hoverIndicator}></div>
            <div className={styles.navItem}>Who We Are</div>
          </div>
        </li>
        <li>
          <div className={styles.navItem}>Features</div>
          <div className={styles.hoverContent}>
            <div className={styles.hoverIndicator}></div>
            <div className={styles.navItem}>Features</div>
          </div>
        </li>
      </ul>
      <div className={styles.logo}>
        <img src={EKDLogo.src} alt="EKD Logo" width={100} height={50} />
      </div>
      <ul>
        <li>
          <div className={styles.navItem}>Testimonials</div>
          <div className={styles.hoverContent}>
            <div className={styles.hoverIndicator}></div>
            <div className={styles.navItem}>Testimonials</div>
          </div>
        </li>
        <li>
          <div className={styles.navItem}>Blog</div>
          <div className={styles.hoverContent}>
            <div className={styles.hoverIndicator}></div>
            <div className={styles.navItem}>Blog</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
