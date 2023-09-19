"use client";

import { useEffect } from "react";
import Navbar from "../Components/NavBar";
import Profile from "../Components/Profile";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const route = useRouter();
  useEffect(() => {
    if (
      typeof localStorage !== "undefined" &&
      (localStorage.getItem("access_token") === 'undefined' || !localStorage.getItem("access_token"))
    ) {
      route.push("/login");
    }
  }, []);
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
};

export default ProfilePage;
