import styles from "./page.module.css";
import NavBar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
    </div>
  );
}
