import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    feel: "",
    feelBtn: "",
};

const painFeelSlice = createSlice({
    name: 'painfeel',
    initialState,
    reducers: {
        setFeel: (state, action) => {
            console.log('setFeel action called with payload:', action.payload);
            state.feel = action.payload;
        },
        setFeelBtn: (state, action) => {
            console.log('setFeelBtn action called with payload:', action.payload);
            state.feelBtn = action.payload;
        }
    }
});

export const { setFeel, setFeelBtn } = painFeelSlice.actions;
export default painFeelSlice.reducer;
