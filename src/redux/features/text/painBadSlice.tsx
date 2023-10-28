import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    how: "",
};

const painBadSlice = createSlice({
    name: 'painbad',
    initialState,
    reducers: {
        setHow: (state, action) => {
            console.log('setHow action called with payload:', action.payload);
            state.how = action.payload;
        }
    }
});

export const { setHow } = painBadSlice.actions;
export default painBadSlice.reducer;
