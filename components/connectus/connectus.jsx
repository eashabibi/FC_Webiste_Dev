import React from "react";
import styles from "./connectus.module.css";

export default function ConnectUs() {
  return (
    <section className={styles.connectWrapper}>
      <div className={styles.connectContent}>
        {/* Left side: text */}
        <div className={styles.left}>
          <h2 className={styles.title}>Connect With Us</h2>
          <p className={styles.subtitle}>
            Organizing a college fest? Let’s make it easier. <br />
            Fill out the form and let’s explore how we can support your goals.
          </p>

          <div className={styles.talkList}>
            <h4>LET’S TALK ABOUT:</h4>
            <ul>
              <li>Custom Solutions for Your College</li>
              <li>Scheduling a Demo or Consultation</li>
              <li>Partnership or Collaboration Opportunities</li>
              <li>General Questions or Support</li>
            </ul>
          </div>
        </div>

        {/* Right side: form */}
        <div className={styles.formBox}>
          <form>
            <div className={styles.row}>
              <input type="text" placeholder="Name*" />
              <input type="text" placeholder="College Name*" />
            </div>
            <input type="email" placeholder="Email*" />
            <div className={styles.row}>
              <input type="tel" placeholder="Phone Number*" />
              <select>
                <option>Select</option>
                <option>Custom Solutions</option>
                <option>Demo</option>
                <option>Partnership</option>
                <option>General Support</option>
              </select>
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Book A Call</button>
          </form>
        </div>
      </div>
    </section>
  );
}
