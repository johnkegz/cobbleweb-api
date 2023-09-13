import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { type } from 'os';

type InitialState = {
   value: AuthState
}

type AuthState = {
        isAUth: boolean,
        userName: string ,
        uid: string
    }

const initialState = {
    value: {
        isAUth: false,
        userName: ''
    } as AuthState
} as InitialState;

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        testRedux: (state, action: PayloadAction<string>) => {
            state.value.isAUth = true;
            state.value.userName = action.payload;
        }
    }
}) 

 export const { testRedux } = auth.actions;
 export default auth.reducer;