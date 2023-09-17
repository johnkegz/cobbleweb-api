import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/NavBar";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className="nav">
        <div className="nav-sections">Cobbleweb</div>
        <div className="nav-sections">Login</div>
      </div>
    </div>
  );
}
