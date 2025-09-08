import React from "react";
import EKDLogo from "@/public/ekd_logo.png";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>Who We Are</li>
        <li>Features</li>
      </ul>
      <div>
        <img src={EKDLogo.src} alt="EKD Logo" width={100} height={50} />
      </div>
      <ul>
        <li>Testimonials</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}
