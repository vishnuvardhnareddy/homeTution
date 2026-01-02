import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: null,
};

const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setLoading, setError } = utilSlice.actions;

// THIS IS THE MISSING PART:
export default utilSlice.reducer;