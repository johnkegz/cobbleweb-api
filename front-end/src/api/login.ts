import { createAsyncThunk } from '@reduxjs/toolkit';

type LoginData = {
    email: string;
    password: string;
}

// Define an asynchronous thunk action creator
export const loginUser = createAsyncThunk('login/loginUser', async (loginData: LoginData) => {
    try{
  const response = await fetch("http://localhost:3001/api/login",{
    method: "POST",
    body: JSON.stringify(loginData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
  }
    );
  const data = await response.json();
  return data;
}catch(e){
    return e
}
});
