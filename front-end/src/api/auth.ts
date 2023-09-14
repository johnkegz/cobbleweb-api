import { createAsyncThunk } from '@reduxjs/toolkit';

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  photos: string;
  password: string;
}

// Define an asynchronous thunk action creator
export const registerUser = createAsyncThunk('auth/registerUser', async (userData: UserData) => {
    try{
  const response = await fetch("/api/register",{
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }});
  const data = await response.json();
  return data;
}catch(e){
    console.log("e +++>", e);
    return e
}
});
