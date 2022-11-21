import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../Actions/userSlice';

 const store = configureStore({
    reducer:{
        counter:counterSlice,
    }
})

export default store