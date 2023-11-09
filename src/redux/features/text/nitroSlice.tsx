import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    thinner: "",
    sexual: "",
};

const nitroSlice = createSlice({
    name: 'nitro',
    initialState,
    reducers: {
        setThinner: (state, action) => {
            console.log('setThinner action called with payload:', action.payload);
            state.thinner = action.payload;
        },
        setSexual: (state, action) => {
            console.log('setSexual action called with payload:', action.payload);
            state.sexual = action.payload;
        },
    }
});

export const { setThinner, setSexual } = nitroSlice.actions;
export default nitroSlice.reducer;
