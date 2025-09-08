import React from "react";
import styles from "./howhelp.module.css";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLock, CiGlobe, CiLaptop } from "react-icons/ci";
import { PiHandshakeLight, PiQrCode } from "react-icons/pi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { VscGraph } from "react-icons/vsc";

const features = [
  {
    icon: <MdOutlineDashboard />,
    title: "Fest Management Dashboard",
    desc: "One platform to create events, manage entries, and monitor your fest in real time.",
  },
  {
    icon: <PiQrCode />,
    title: "Smart Ticketing & QR Access",
    desc: "Generate digital tickets, assign events, track attendance, and allow seamless entry with just one QR code.",
  },
  {
    icon: <CiLaptop />,
    title: "No Website? No Problem.",
    desc: "Get a beautiful, ready-to-use public profile for your fest with all event listings, schedules, registration, and payment links, no developer needed.",
  },
  {
    icon: <VscGraph />,
    title: "Live Data, Not Excel Sheets",
    desc: "From participant tracking to event-wise attendance and team performances – access visual reports and dashboards in real-time.",
  },
  {
    icon: <AiOutlineClockCircle />,
    title: "Instant Onboarding",
    desc: "Start using our platform in under 10 minutes. No tech support needed.",
  },
  {
    icon: <CiLock />,
    title: "Integrated Security Gate Pass System",
    desc: "Issue secure QR passes and monitor crowd flow, ensuring safety and compliance.",
  },
  {
    icon: <LiaRupeeSignSolid />,
    title: "Zero Platform Commission",
    desc: "We don’t take a cut from your sales. Your revenue is your own.",
  },
  {
    icon: <PiHandshakeLight />,
    title: "Logistics Help",
    desc: "We help with accommodation bookings, meal plans, volunteer scheduling, and more – so you focus on creativity, not chaos.",
  },
  {
    icon: <CiGlobe />,
    title: "Website Integration",
    desc: "Have your own website? Seamlessly integrate Fest Connect and start managing or selling tickets from your existing platform.",
  },
];

export default function HowWeHelp() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>How We Help College Festivals</h2>
      <p className={styles.subheading}>
        At Fest Connect, we empower college fest organizing teams with tools
        that eliminate chaos and bring unmatched clarity, control, and
        convenience.
      </p>

      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{f.icon}</div>
            <h3 className={styles.title}>{f.title}</h3>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
