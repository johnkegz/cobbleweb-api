"use client";

import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginUser } from "@/api/login";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  photos: string;
  password: string;
};

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await dispatch(loginUser(data));
    if (response?.payload?.access_token) {
      router.push("/profile");
    }
    if (response.payload.statusCode === 401) {
      setError("email", {
        type: "manual",
        message: "Email or password incorrect",
      });
      setError("password", {
        type: "manual",
        message: "Email or password incorrect",
      });
    }
  };
  return (
<div className="container">
      <div className="form-container">
        <div className="logo-position">
          <Link href="/">
            <Image
              src="/cobbleweb-logo.svg"
              alt="cobbleweb-logo"
              width={150}
              height={80}
            />
          </Link>
        </div>
        <div className="page-text">Login</div>
        <div className="form-section">
          <form onSubmit={handleSubmit(onSubmit)} method="POST" noValidate>
            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                className="input-field"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._-]+@[A-Z0-9._-]+\.[A-Z]+$/i,
                    message: "Invalid email format.",
                  },
                })}
              />

              <div className="error-message">{errors.email?.message}</div>
            </div>
            <div className="form-field">
              <label>Password</label>
              <div className="passwordVisibility">
              <input
                type={showPassword ? "text" : "password"}
                className="input-field"
                placeholder="Enter password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
              <div
                    className="passwordVisibilityText"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </div>
              <div className="error-message">{errors.password?.message}</div>
            </div>
            </div>
            <div className="form-field">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <div className="linkContainer">
          <Link href="/register" className="link">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
