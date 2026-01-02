import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem('token', 'dummy-jwt-token'); // Simulated JWT
            localStorage.setItem('user', JSON.stringify(action.payload.user));
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.clear();
        },
        // Add logic for "joining" or "leaving" a tutor here
        updateMyTutors: (state, action) => {
            state.user.enrolledTutors = action.payload;
        }
    },
});

export const { loginSuccess, logout, updateMyTutors } = userSlice.actions;
export default userSlice.reducer;