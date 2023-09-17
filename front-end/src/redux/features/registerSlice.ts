import { registerUser } from '@/api/register';
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
   value: AuthState
   error: string
}

type AuthState = {
        isAUth: boolean;
        userName: string;
        loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    }

const initialState = {
    value: {
        isAUth: false,
        userName: '',
        loading: 'idle',
    } as AuthState,
    error: ''
} as InitialState;

export const register = createSlice({
    name: 'register',
    initialState,
    reducers: {
        testRedux: (state, action: PayloadAction<string>) => {
            state.value.isAUth = true;
            state.value.userName = action.payload;
        }
    },
    extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
      state.value.loading = 'pending';
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.value.loading = 'succeeded';
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.value.loading = 'failed';
    });
  },
}) 

 export const { testRedux } = register.actions;
 export default register.reducer;