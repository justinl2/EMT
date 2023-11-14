import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    feel: "",
};

const painFeelSlice = createSlice({
    name: 'painfeel',
    initialState,
    reducers: {
        setFeel: (state, action) => {
            console.log('setFeel action called with payload:', action.payload);
            state.feel = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.feel = '';
        },
    }
});

export const { setFeel, clearAll } = painFeelSlice.actions;
export default painFeelSlice.reducer;
