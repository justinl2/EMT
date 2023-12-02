import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    feel: "",
    describe: "",
};

const painFeelSlice = createSlice({
    name: 'painfeel',
    initialState,
    reducers: {
        setFeel: (state, action) => {
            console.log('setFeel action called with payload:', action.payload);
            state.feel = action.payload;
        },
        setDescribe: (state, action) => {
            console.log('setDescribe action called with payload:', action.payload);
            state.describe = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.feel = '';
            state.describe = '';
        },
    }
});

export const { setFeel, setDescribe, clearAll } = painFeelSlice.actions;
export default painFeelSlice.reducer;
