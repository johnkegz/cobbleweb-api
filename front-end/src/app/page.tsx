import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/NavBar";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.homeBody}>
        <div className={styles.bodyText}>Custom Online Marketplace Solutions</div>
      </div>
    </div>
  );
}
