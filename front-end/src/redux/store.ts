 import { configureStore } from '@reduxjs/toolkit';
 import registerReducer from './features/registerSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import signReducer from './features/loginSlice';

 export const store = configureStore({
    reducer: {
        registerReducer,
        signReducer
    }
 });

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
 export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
