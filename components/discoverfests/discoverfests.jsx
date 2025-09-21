"use client";

import { useState, useEffect } from "react";
import styles from "./discoverfests.module.css";

export default function DiscoverFests() {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("students");
  const [transitioning, setTransitioning] = useState(false);

  // Auto-play every 4s with transition
  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % 4); // switch screen
        setTransitioning(false); // fade in
      }, 600); // match animation duration
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const screens = [
    {
      heading: "Discover Fests Across India",
      logo: "/ekd_logo.png",
      text: "Explore the most exciting college festivals happening near you or across the country — all in one place.",
      phone: "/mobile_mockup.png",
      emojis: [
        { src: "/faceemoji.png", className: "screen1Face" },
        { src: "/mirror ball.png", className: "screen1Mirror" },
        { src: "/fire.png", className: "screen1Fire" },
      ],
    },
    {
      heading: "One App, Everything Fest",
      logo: "/ekd_logo.png",
      text: "From event lineups to campus maps, schedules to merch — get it all in one sleek, scrollable feed.",
      phone: "/mob2.png",
      emojis: [
        { src: "/collision.png", className: "screen2Collision" },
        { src: "/v.png", className: "screen2V" },
      ],
    },
    {
      heading: "One QR. All Access.",
      logo: "/ekd_logo.png",
      text: "Your universal fest pass. No wristbands, no paper — just one QR to rule them all.",
      phone: "/mob3.png",
      emojis: [
        { src: "/links.png", className: "screen3Links" },
        { src: "/unlocked.png", className: "screen3Unlocked" },
        { src: "/mobilephonewitharrow.png", className: "screen3Phone" },
      ],
    },
    {
      heading: "No Internet? Still Pay",
      logo: "/ekd_logo.png",
      text: "Top-up once and go cashless at food stalls, merch booths, and more — even without internet.",
      phone: "/mob4.png",
      emojis: [
        { src: "/credit card.png", className: "screen4Card" },
        { src: "/shopping cart.png", className: "screen4Cart" },
      ],
    },
  ];

  const screen = screens[index];

  return (
    <section className={styles.discover}>
      {/* LEFT CONTENT */}
      <div className={`${styles.content} ${styles.fadeIn}`}>
        <h2 className={styles.heading}>{screen.heading}</h2>
        {screen.logo && (
          <img src={screen.logo} alt="EKD Logo" className={styles.logo} />
        )}
        <p className={styles.subheading}>{screen.text}</p>
      </div>

      {/* PHONE + EMOJIS */}
      <div className={`${styles.phoneWrapper} ${styles.slideIn}`}>
        <img src={screen.phone} alt="Phone" className={styles.phone} />
        {screen.emojis.map((emoji, i) => (
          <img
            key={i}
            src={emoji.src}
            alt={`emoji-${i}`}
            className={`${styles.emoji} ${styles[emoji.className]} ${
              transitioning ? styles.fadeOutEmoji : styles.fadeInEmoji
            }`}
          />
        ))}
      </div>

      {/* ✅ TOGGLE BUTTONS */}
      <div className={styles.toggleGroup}>
        <button
          className={`${styles.toggleBtn} ${
            activeTab === "students" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("students")}
        >
          For Students
        </button>
        <button
          className={`${styles.toggleBtn} ${
            activeTab === "colleges" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("colleges")}
        >
          For Colleges
        </button>
      </div>
    </section>
  );
}
