import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lighthead: "",
    other: "",
};

const signsSlice = createSlice({
    name: 'signs',
    initialState,
    reducers: {
        setLighthead: (state, action) => {
            console.log('setLighthead action called with payload:', action.payload);
            state.lighthead = action.payload;
        },
        setOther: (state, action) => {
            console.log('setOther action called with payload:', action.payload);
            state.other = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.lighthead = '';
            state.other = '';
        }
    }
});

export const { setLighthead, setOther, clearAll } = signsSlice.actions;
export default signsSlice.reducer;