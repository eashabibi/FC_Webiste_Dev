import React from "react";
import styles from "./aboutus.module.css";
import { FaPuzzlePiece, FaGraduationCap, FaWrench, FaGem, FaBullseye } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Us</h2>
      <p className={styles.subheading}>
        Fest Connect is a student-first, tech-powered ecosystem built to simplify the chaos
        and amplify the joy of college festivals — for organizers and students alike.
      </p>

      <div className={styles.topRow}>
        <div className={styles.card}>
          <div className={styles.icon}><FaPuzzlePiece /></div>
          <h3 className={styles.title}>Who are we</h3>
          <p className={styles.text}>
            Fest Connect is a tech-driven platform reimagining the college fest experience —
            for both organizers and students.
            <br /><br />
            We’re here to make festivals smarter, more engaging, and effortlessly organized.
            Built by fest lovers, for fest lovers.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}><FaBullseye /></div>
          <h3 className={styles.title}>Our Mission</h3>
          <p className={styles.text}>
            College life is a journey — of learning, friendships, challenges, and celebrations.
            Our mission is to walk with you through it all — from your first fest to your last farewell.
            <br /><br />
            We started with one goal: make college fests better for everyone.
          </p>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.card}>
          <div className={styles.icon}><FaGraduationCap /></div>
          <h3 className={styles.title}>A Student-First Platform</h3>
          <p className={styles.text}>
            We’re building tools beyond just fests. From finding PGs to managing college payments,
            sharing thoughts, and discovering your vibe — everything you need, in one app,
            made just for students.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}><FaWrench /></div>
          <h3 className={styles.title}>Why We Built This</h3>
          <p className={styles.text}>
            We’ve lived the mess — scattered sheets, silent inboxes, nonstop pings. Fests were fun,
            organizing them wasn’t. We built Fest Connect to bring ease, flow, and joy to both sides.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}><FaGem /></div>
          <h3 className={styles.title}>One App. A Thousand Moments.</h3>
          <p className={styles.text}>
            We’re not just your fest buddy. We’re your campus companion — for everything between
            orientation and graduation. No spam. No noise. Just what you need, when you need it.
          </p>
        </div>
      </div>
    </section>
  );
}
