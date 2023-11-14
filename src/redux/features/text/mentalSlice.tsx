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
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.mental = '';
        }
    }
});

export const { setMental, clearAll } = mentalSlice.actions;
export default mentalSlice.reducer;
