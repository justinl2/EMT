import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inhaler: "",
    thinner: "",
    sexual: "",
    narcotics: ""
};

const drugSlice = createSlice({
    name: 'drug',
    initialState,
    reducers: {
        setInhaler: (state, action) => {
            console.log('setInhaler action called with payload:', action.payload);
            state.inhaler = action.payload;
        },
        setThinner: (state, action) => {
            console.log('setThinner action called with payload:', action.payload);
            state.thinner = action.payload;
        },
        setSexual: (state, action) => {
            console.log('setSexual action called with payload:', action.payload);
            state.sexual = action.payload;
        },
        setNarcotics: (state, action) => {
            console.log('setNarcotics action called with payload:', action.payload);
            state.narcotics = action.payload;
        }
    }
});

export const { setInhaler, setThinner, setSexual, setNarcotics } = drugSlice.actions;
export default drugSlice.reducer;
