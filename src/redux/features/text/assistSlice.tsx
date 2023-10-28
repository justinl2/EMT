import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    concern: "",
};

const assistSlice = createSlice({
    name: 'assist',
    initialState,
    reducers: {
        setConcern: (state, action) => {
            console.log('setConcern action called with payload:', action.payload);
            state.concern = action.payload;
        }
    }
});

export const { setConcern } = assistSlice.actions;
export default assistSlice.reducer;