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
            <h4>LET’S TALK ABOUT :</h4>
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
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name*</label>
                <input id="name" type="text" placeholder="Name" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="college">College Name*</label>
                <input id="college" type="text" placeholder="College Name" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" placeholder="Email" />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number*</label>
                <input id="phone" type="tel" placeholder="Phone Number" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="query">Query Regarding</label>
                <select id="query">
                  <option value="">Select</option>
                  <option>Custom Solutions</option>
                  <option>Demo</option>
                  <option>Partnership</option>
                  <option>General Support</option>
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Message"></textarea>
            </div>

            <button type="submit">Book A Call</button>
          </form>
        </div>
      </div>
    </section>
  );
}
