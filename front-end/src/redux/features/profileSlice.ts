import { getProfile } from '@/api/profile';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    loading: 'idle' | 'pending' | 'fulfilled' | 'failed',
    profile: ProfileState
}

type ProfileState = {
    email: string;
}

const initialState = {
    loading: 'idle',
    profile: {
        email: ''
    }
} as InitialState;

export const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    builder
    .addCase(getProfile.pending, (state) => {
      state.loading = 'pending';
    })
    .addCase(getProfile.fulfilled, (state, action) => {
      state.loading = 'fulfilled';
      state.profile.email = action.payload.email
    })
    .addCase(getProfile.rejected, (state) => {
      state.loading = 'failed';
    });
  },
}) 

 export const { } = profile.actions;
 export default profile.reducer;
