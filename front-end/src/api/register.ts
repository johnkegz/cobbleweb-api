import { createAsyncThunk } from "@reduxjs/toolkit";

// Asynchronous thunk action creator
export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData: FormData) => {
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        body: userData,
      });
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  }
);
