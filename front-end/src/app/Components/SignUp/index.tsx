"use client";

import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerUser } from "@/api/register";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SuccessPage from "../SuccessPage";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  photos: string;
  password: string;
};

const SignUp = () => {
    const [successMessage, setSuccessMessage] = useState({
        type: '',
        message: ''
    });
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("role", data.role);
    if (data.photos) {
      for (let i = 0; i < data.photos.length; i++) {
        formData.append("photos", data.photos[i]);
      }
    }
    formData.append("password", data.password);
    const response = await dispatch(registerUser(formData));
    if (response?.payload?.id) {
       setSuccessMessage({
        type: 'success',
        message: 'Registration success'
    })
    // const timeout = setTimeout(() => {
    //    router.push("/login");
    //   }, 3000);
      
    }
    if (response?.payload?.statusCode === 409) {
        setError("email", {
        type: "manual",
        message: "User with this email exists",
      });
         setSuccessMessage({
        type: 'error',
        message: 'User with this email exists'
    })
    }
  };

  return (
    <div className='container'>
        {successMessage.type === "success" ? (
        <SuccessPage />
      ) : (
      <div className='form-container'>
        <div className='logo-position'>CobbleWeb</div>
        <div className='page-text'>Register</div>
        <div className='form-section'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='form-field'>
                <label>
                First name
            </label>
              <input className='input-field'
                placeholder="Enter first name"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                  minLength: {
                    value: 2,
                    message: "First name must have a minimum of 2 characters.",
                  },
                  maxLength: {
                    value: 25,
                    message: "First name must have a maximum of 25 characters.",
                  },
                })}
              />
              <p>{errors.firstName?.message}</p>
            </div>
            <div className='form-field'>
                <label>
                Last name
            </label>
              <input className='input-field'
                placeholder="Enter last name"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name is required.",
                  },
                  minLength: {
                    value: 2,
                    message: "Last name must have a minimum of 2 characters.",
                  },
                  maxLength: {
                    value: 25,
                    message: "Last name must have a maximum of 25 characters.",
                  },
                })}
              />
              <p>{errors.lastName?.message}</p>
            </div>
            <div className='form-field'>
                <label>
                Email
            </label>
              <input className='input-field'
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
              </div>
              <div className='form-field'>
                <label>
                Role
            </label>
              <select className='input-field input-field-select-text' {...register("role", { required: "Role is required." })}>
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <p>{errors.role?.message}</p>
            </div>
            <div className='form-field'>
                <label>
                Photos
            </label>
              <input className='input-field'
                type="file"
                multiple
                accept="image/*"
                placeholder="Choose at least 4 photos"
                {...register("photos", {
                  validate: (fieldValue) =>
                    fieldValue.length >= 4 ||
                    "At least 4 photos should be selected.",
                })}
              />
              <p>{errors.photos?.message}</p>
            </div>
            <div className='form-field'>
                <label>
                Password
            </label>
              <input 
                className='input-field'
                type="password"
                placeholder="Enter password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password should have a minimum of 6 characters.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Password should have a maximum of 50 characters.",
                  },
                  pattern: {
                    value: /\d/,
                    message: "Password must contain at least 1 number.",
                  },
                })}
              />
              <p>{errors.password?.message}</p>
            </div>
            <div className='form-field'>
              <button type="submit">Register</button>
            </div>
        </form>
        </div>
      </div>)}
    </div>
  );
};

export default SignUp;
