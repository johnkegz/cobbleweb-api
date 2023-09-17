"use client";

import Link from "next/link";
import styles from "./nav.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { getProfile } from "@/api/profile";

const Navbar = () => {
    const [tokenAvailable, setIsTokenAvailable] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const handleGetProfile = () => {
        return dispatch(getProfile());
    }
    useEffect(() => {
        let tokenAvailableStatus = false;
        if(typeof localStorage !== 'undefined' && localStorage?.getItem("access_token")) {
            tokenAvailableStatus = true;
            setIsTokenAvailable(true);
        } else{
            setIsTokenAvailable(false);
        }
        if (tokenAvailableStatus) handleGetProfile();
    }, []);

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">CobbleWeb</Link>
        </div>
        <div className={styles.menu}>
          {tokenAvailable ? (
            <>
              <Link href="/profile">Profile</Link>
              <Link href="/login">Logout</Link>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
