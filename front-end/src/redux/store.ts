 import { configureStore } from '@reduxjs/toolkit';
 import authReducer from './features/authSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import signReducer from './features/loginSlice';

 export const store = configureStore({
    reducer: {
        authReducer,
        signReducer
    }
 });

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
 export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
