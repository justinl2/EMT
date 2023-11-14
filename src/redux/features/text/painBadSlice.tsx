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
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.how = '';
        },
    }
});

export const { setHow, clearAll } = painBadSlice.actions;
export default painBadSlice.reducer;
