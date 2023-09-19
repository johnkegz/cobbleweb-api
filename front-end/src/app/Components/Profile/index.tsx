import Image from "next/image";
import styles from "./profile.module.css";
import { useAppSelector } from "@/redux/store";
import Carousel from "../Carousel";

const Profile = () => {
  const store = useAppSelector((state) => state);
  return (
    <div className={styles.container}>
      <div className={styles.avatarSection}>
        <div className={styles.AvatarContainer}>
          <Image
            src={store.profileReducer.profile.avatar}
            alt="cobbleweb-logo"
            width={200}
            height={200}
            className={styles.avatar}
          />
        </div>
        <div className={styles.fullnameContainer}>
          <div className={styles.fullname}>
            {store.profileReducer.profile.fullName}
          </div>
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainerDiv}>
          {store.profileReducer.profile.photos && store.profileReducer.profile.photos.length !== 0 && <Carousel images={store.profileReducer.profile.photos} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
