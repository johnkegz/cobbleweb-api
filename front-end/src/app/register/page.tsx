"use client";

import { useEffect } from "react";
import SignUp from "../Components/SignUp";
import { useRouter } from "next/navigation";

const Register = () => {
  const route = useRouter();
  useEffect(() => {
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("access_token")
    ) {
      route.push("/profile");
    }
  }, []);
  return <SignUp />;
};

export default Register;
