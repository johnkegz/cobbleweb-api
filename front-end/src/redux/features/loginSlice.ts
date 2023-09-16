import { loginUser } from '@/api/login';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    loading: 'idle' | 'pending' | 'fulfilled' | 'failed'
}

const initialState = {
    loading: 'idle'
} as InitialState;

export const login = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.loading = 'pending';
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = 'fulfilled';
      localStorage.setItem("token", action.payload.access_token);
    })
    .addCase(loginUser.rejected, (state) => {
      state.loading = 'failed';
    });
  },
}) 

 export const { } = login.actions;
 export default login.reducer;
