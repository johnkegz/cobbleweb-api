"use client"

import { testRedux } from '@/redux/features/authSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from "react-hook-form"
import { DevTool } from '@hookform/devtools'
import { registerUser } from '@/api/auth';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  photos: string;
  password: string;
}

const SignUp = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData(); 
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('role', data.role);
    if (data.photos) {
      for (let i = 0; i < data.photos.length; i++) {
        formData.append('photos', data.photos[i]); 
      }
    }
    formData.append('password', data.password);
    dispatch(registerUser(formData));
  }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input 
                placeholder='Enter first name' 
                {...register("firstName", { 
                    required: {
                        value:true, message: 'First name is required'
                    },
                    minLength: { value: 2, message: "First name must have a minimum of 2 characters." },
                    maxLength: { value: 25, message: "First name must have a maximum of 25 characters." },
                })
            }
            />
            <p>{errors.firstName?.message}</p>
            <input 
                placeholder='Enter last name'
                {...register("lastName", { 
                    required: {
                        value:true, message: 'Last name is required.'
                    },
                    minLength: { value: 2, message: "Last name must have a minimum of 2 characters." },
                    maxLength: { value: 25, message: "Last name must have a maximum of 25 characters." },
                })
            }
            />
            <p>{errors.lastName?.message}</p>
            <input 
                type="email" 
                placeholder='Enter email' 
                {...register("email", {
                    required: "Email is required.",
                    pattern: {
                    value: /^[A-Z0-9._-]+@[A-Z0-9._-]+\.[A-Z]+$/i,
                    message: "Invalid email format.",
                    }
                })
                }
            />
            <p>{errors.email?.message}</p>
            <select {...register("role", { required: "Role is required." })}>
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            <p>{errors.role?.message}</p>
            <input 
                type="file" 
                multiple
                accept="image/*"
                placeholder="Choose at least 4 photos"
                {...register("photos", { 
                    validate: (fieldValue) => fieldValue.length  >= 4 || "At least 4 photos should be selected."
                })}
            />
            <p>{errors.photos?.message}</p>
            <input 
                placeholder='Enter password' 
                {...register("password", 
                { required: {
                        value:true, message: 'Password is required'
                    },
                    minLength: { value: 6, message: "Password should have a minimum of 6 characters." },
                    maxLength: { value: 50, message: "Password should have a maximum of 50 characters." },
                    pattern: {
                        value: /\d/,
                        message: "Password must contain at least 1 number.",
                    },
                    })
                }
            />
            <p>{errors.password?.message}</p>
            <input type="submit" />
            </form>
            <DevTool control={control} />
        </div>
    );
}

export default SignUp;