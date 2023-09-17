import { useRouter } from "next/navigation";
import styles from "./success.module.css";
import Image from "next/image";
import Link from "next/link";

const SuccessPage = () => {
  const router = useRouter();
  return (
    <div className={styles.successContainer}>
      <div className={styles.logoPosition}>
        <Link href="/">
          <Image
            src="/cobbleweb-logo.svg"
            alt="cobbleweb-logo"
            width={150}
            height={80}
          />
        </Link>
      </div>
      <div className={styles.successText}>Success</div>
      <div className={styles.successTextInstractions}>
        Click on the button below to go to login page
      </div>
      <button className={styles.button} onClick={() => router.push("/login")}>
        Go to login
      </button>
    </div>
  );
};

export default SuccessPage;
