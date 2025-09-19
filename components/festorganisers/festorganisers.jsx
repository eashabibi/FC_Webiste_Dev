import React from "react";
import styles from "./festorganisers.module.css";

const organisers = [
  {
    name: "THOMSO’25",
    college: "IIT Roorkee",
    feedback:
      "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    image: "/emoji.png",
  },
  {
    name: "THOMSO’25",
    college: "IIT Roorkee",
    feedback:
      "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    image: "/emoji.png",
  },
  {
    name: "THOMSO’25",
    college: "IIT Roorkee",
    feedback:
      "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    image: "/emoji.png",
  },
  {
    name: "THOMSO’25",
    college: "IIT Roorkee",
    feedback:
      "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    image: "/emoji.png",
  },
  {
    name: "THOMSO’25",
    college: "IIT Roorkee",
    feedback:
      "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    image: "/emoji.png",
  },
  {
    name: "THOMSO’25",
    college: "IIT Roorkee",
    feedback:
      "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    image: "/emoji.png",
  },
  {
    name: "THOMSO’25",
    college: "IIT Roorkee",
    feedback:
      "It is a great application. It is better and more profitable to do two-way trading and it would be better if we can withdraw money to the bank account in TL.",
    image: "/emoji.png",
  },
];

export default function FestOrganisers() {
  return (
    <section className={styles.organiserSection}>
      <h2 className={styles.heading}>
        What College Fest Organizers are saying about Us
      </h2>
      <div className={styles.grid}>
        {organisers.map((org, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.avatarWrapper}>
              <img src={org.image} alt={org.name} className={styles.avatar} />
            </div>
            <h3 className={styles.name}>{org.name}</h3>
            <p className={styles.college}>{org.college}</p>
            <p className={styles.feedback}>{org.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
