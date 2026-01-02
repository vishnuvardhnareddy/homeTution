import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducers';
import utilReducer from './reducers/UtilReducers'; // This looks for the default export

export const store = configureStore({
    reducer: {
        auth: userReducer,
        util: utilReducer,
    },
});