"use client";

import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { loginUser } from "@/api/login";
import { useRouter } from "next/navigation";

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
    control,
  } = useForm<Inputs>();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await dispatch(loginUser(data));
    if (response?.payload?.access_token) {
      alert("Success");
      router.push("/profile");
    }
    if (response.payload.statusCode === 401) {
      alert("error");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="POST" noValidate>
        <input
          type="email"
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
        <input
          placeholder="Enter password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
        />
        <p>{errors.password?.message}</p>
        <button type="submit">submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SignIn;
