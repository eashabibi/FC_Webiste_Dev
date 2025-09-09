import styles from "./page.module.css";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/herosection/herosection";
import HowWeHelp from "@/components/howhelp/howhelp";

export default function Home() {
  function generateScatteredPositions(count, minGap = 8) {
    const positions = [];
    while (positions.length < count) {
      const candidate = Math.random() * 100;
      if (positions.every((p) => Math.abs(p - candidate) >= minGap)) {
        positions.push(candidate);
      }
    }
    return positions;
  }

  const count = 7;
  const scatteredLefts = generateScatteredPositions(count, 7); // min 7% gap

  const drops = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: scatteredLefts[i],
    duration: 3 + Math.random() * 3, // fall speed
    delay: Math.random() * 0.5, // stagger start
  }));

  return (
    <div className={styles.page}>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className={styles.drop}
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className={`${styles.square} ${styles[`square${i + 1}`]}`}
            ></div>
          ))}
        </div>
      ))}

      <NavBar />
      <div className={styles.glow}></div>
      <HeroSection />
      <HowWeHelp />
      <Footer />
    </div>
  );
}
