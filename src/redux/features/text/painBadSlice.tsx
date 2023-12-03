import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    how: "",
    describe: "",
};

const painBadSlice = createSlice({
    name: 'painbad',
    initialState,
    reducers: {
        setHow: (state, action) => {
            console.log('setHow action called with payload:', action.payload);
            state.how = action.payload;
        },
        setDescribe: (state, action) => {
            console.log('setDescribe action called with payload:', action.payload);
            state.describe = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.how = '';
            state.describe = '';
        },
    }
});

export const { setHow, setDescribe, clearAll } = painBadSlice.actions;
export default painBadSlice.reducer;
