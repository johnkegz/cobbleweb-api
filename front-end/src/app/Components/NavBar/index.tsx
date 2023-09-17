"use client";

import Link from "next/link";
import styles from "./nav.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { getProfile } from "@/api/profile";
import Image from "next/image";

const Navbar = () => {
  const [tokenAvailable, setIsTokenAvailable] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const store = useAppSelector((state) => state);
  const handleGetProfile = () => {
    return dispatch(getProfile());
  };
  useEffect(() => {
    let tokenAvailableStatus = false;
    if (
      typeof localStorage !== "undefined" &&
      localStorage?.getItem("access_token")
    ) {
      tokenAvailableStatus = true;
      setIsTokenAvailable(true);
    } else {
      setIsTokenAvailable(false);
    }
    if (tokenAvailableStatus) handleGetProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/cobbleweb-logo.svg"
              alt="cobbleweb-logo"
              width={150}
              height={80}
            />
          </Link>
        </div>
        <div className={styles.menu}>
          {tokenAvailable ? (
            <>
              {window.location.pathname === "" ||
                (window.location.pathname === "/" && (
                  <Link href="/profile" className={styles.link}>
                    <div>{store.profileReducer.profile.fullName}</div>
                  </Link>
                ))}
              {window.location.pathname === "/profile" && (
                <Link
                  href="login"
                  className={styles.link}
                  onClick={() => handleLogout()}
                >
                  Logout
                </Link>
              )}
            </>
          ) : (
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
