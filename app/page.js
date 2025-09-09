import styles from "./page.module.css";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <Footer />
      
    </div>
  );
}
