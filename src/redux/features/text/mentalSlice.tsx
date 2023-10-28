import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mental: "",
};

const mentalSlice = createSlice({
    name: 'mental',
    initialState,
    reducers: {
        setMental: (state, action) => {
            console.log('setMental action called with payload:', action.payload);
            state.mental = action.payload;
        }
    }
});

export const { setMental } = mentalSlice.actions;
export default mentalSlice.reducer;
