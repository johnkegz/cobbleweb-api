import { createAsyncThunk } from "@reduxjs/toolkit";

// Asynchronous thunk action creator
export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  try {
    const token = localStorage.getItem("access_token");
    const response = await fetch("http://localhost:3001/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    if (data?.statusCode === 401) {
      localStorage.removeItem("access_token");
    }
    return data;
  } catch (e) {
    return e;
  }
});
