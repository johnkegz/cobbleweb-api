"use client";

import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginUser } from "@/api/login";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  photos: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
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
        <div className="logo-position">CobbleWeb</div>
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

              <p>{errors.email?.message}</p>
            </div>
            <div className="form-field">
              <label>Password</label>
              <input
                type="password"
                className="input-field"
                placeholder="Enter password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
              <p>{errors.password?.message}</p>
            </div>
            <div className="form-field">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
