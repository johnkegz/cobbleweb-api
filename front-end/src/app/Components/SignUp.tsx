"use client"

import { testRedux } from '@/redux/features/authSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const [userName, setUsername] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const onClickLogin = () => {
        dispatch(testRedux(userName))
    }

    const store = useAppSelector(state => state);

    console.log('store ++++>', store.authReducer.value)

    return (
        <div>
            Register page
            <input type='text' onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={onClickLogin}>click</button>
        </div>
    );
}

export default SignUp;