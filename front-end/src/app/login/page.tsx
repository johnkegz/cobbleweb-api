"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SignIn from "../Components/SignIn";

const SignInPage = () => {
  const route = useRouter();
  useEffect(() => {
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("access_token")
    ) {
      route.push("/profile");
    }
  }, []);
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
