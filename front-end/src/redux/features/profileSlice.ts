import { getProfile } from '@/api/profile';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    loading: 'idle' | 'pending' | 'fulfilled' | 'failed',
    profile: ProfileState
}

type ProfileState = {
    fullName: string;
    photos: string[];
    avatar: string;
}

const initialState = {
    loading: 'idle',
    profile: {
        fullName: '',
        photos: [],
        avatar: ''
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
      state.profile.fullName = action.payload.FullName
      state.profile.photos = action.payload.photos
      state.profile.avatar = action.payload.avatar
    })
    .addCase(getProfile.rejected, (state) => {
      state.loading = 'failed';
    });
  },
}) 

 export const { } = profile.actions;
 export default profile.reducer;
