import React from "react";
import styles from "./partners.module.css";
import Image from "next/image";

export default function Partners() {
  const logos = [
    "/airbnb.png",
    "/airbnb.png",
    "/airbnb.png",
    "/airbnb.png",
    "/airbnb.png",
  ];

  return (
    <div className={styles.partnersWrapper}>
      {/* ✅ Heading OUTSIDE the box */}
      <h2 className={styles.title}>Our Partner Fests</h2>

      <section className={styles.partnersSection}>
        {/* Glow background */}
        <div className={styles.glow}></div>

        {/* Scrolling logos */}
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {logos.map((logo, i) => (
              <div className={styles.slide} key={i}>
                <Image
                  src={logo}
                  alt={`Partner logo ${i + 1}`}
                  width={125}
                  height={65}
                  className={styles.logo}
                />
              </div>
            ))}
            {logos.map((logo, i) => (
              <div className={styles.slide} key={`repeat-${i}`}>
                <Image
                  src={logo}
                  alt={`Partner logo repeat ${i + 1}`}
                  width={125}
                  height={65}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
