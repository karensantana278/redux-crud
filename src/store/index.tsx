import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/UserReducer.tsx';

const store = configureStore({
    reducer: {
        user: UserReducer 
    }
});

export default store;