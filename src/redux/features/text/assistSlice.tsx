import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    concern: "",
    assist: "",
};

const assistSlice = createSlice({
    name: 'assist',
    initialState,
    reducers: {
        setConcern: (state, action) => {
            console.log('setConcern action called with payload:', action.payload);
            state.concern = action.payload;
        },
        setAssist: (state, action) => {
            console.log('setAssist action called with payload:', action.payload);
            state.assist = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.concern = '';
            state.assist = '';
        }
    }
});

export const { setConcern, setAssist, clearAll } = assistSlice.actions;
export default assistSlice.reducer;