import React from "react";
import styles from "./footer.module.css";
import GlobalStyles from "@/app/page.module.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Left Section */}
        <div className={styles.left}>
          <h2 className={styles.logo}>FestConnect</h2>
          <div className={styles.buttons}>
            <button className={GlobalStyles.outlineBtn}>
              Download the App
            </button>
            <button className={GlobalStyles.outlineBtn}>Partner with Us</button>
          </div>
          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">For Colleges</a>
              </li>
              <li>
                <a href="#">For Students</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <p>© 2025 FestConnect. All rights reserved.</p>
        <div className={styles.legal}>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
